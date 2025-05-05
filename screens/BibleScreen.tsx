"use client";

import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "expo-blur";
import * as Clipboard from "expo-clipboard";
import { useFonts } from "expo-font";
import * as Haptics from "expo-haptics";
import CustomSkeleton from "../components/bible/CustomSkeleton";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Easing,
  FlatList,
  Modal,
  Platform,
  type ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { bible } from "../data/bible/bible";
import { bibleBooks } from "../data/bibleBooks";

// Import modular components
import { BibleHeader } from "../components/bible/BibleHeader";
import { BookItem } from "../components/bible/BookItem";
import { BookmarkModal } from "../components/bible/BookmarkModal";
import { ChapterGrid } from "../components/bible/ChapterGrid";
import { NavigationControls } from "../components/bible/NavigationControls";
import { TabsNavigation } from "../components/bible/TabsNavigation";
import { TestamentSelector } from "../components/bible/TestamentSelector";
import { TranslationToggle } from "../components/bible/TranslationToggle";
import { VerseItem } from "../components/bible/VerseItem";
import { VerseSearchBar } from "../components/bible/VerseSearchBar";
import React from "react";

// Function to flatten the structure
function flattenBibleData(bible: {
  old: Record<string, any>;
  new: Record<string, any>;
}) {
  const result: Record<
    string,
    Array<{
      id: string;
      verse: number;
      text: string;
      french: string;
    }>
  > = {};

  // Process Old Testament
  for (const [ , chapters] of Object.entries(bible.old)) {
    for (const [chapterId, chapterData] of Object.entries(chapters)) {
      // The chapter data is an object with a single key matching the chapterId
      if (typeof chapterData === "object" && chapterData !== null) {
        result[chapterId] = (chapterData as Record<string, any>)[chapterId];
      }
    }
  }

  // Process New Testament
  for (const [, chapters] of Object.entries(bible.new)) {
    for (const [chapterId, chapterData] of Object.entries(chapters)) {
      if (typeof chapterData === "object" && chapterData !== null)
        result[chapterId] = (chapterData as Record<string, any>)[chapterId];
    }
  }

  return result;
}

// Type definition for TypeScript
type Verse = {
  id: string;
  verse: number;
  text: string;
  french: string;
};

type FlattenedBible = Record<string, Verse[]>;

// With proper typing
const data: FlattenedBible = flattenBibleData({
  ...bible
});

// Create a comprehensive collection of all verses for search functionality
const allMockVerses = Object.entries(data).flatMap(([key, verses]) => {
  const [bookId, chapterId] = key.split("-").map(Number);
  const book = bibleBooks.find((b) => Number(b.id) === bookId)?.name || "";

  return verses.map((verse) => ({
    ...verse,
    book,
    chapter: chapterId,
  }));
});

// Replace the static recent readings and bookmarks with empty arrays
const initialRecentReadings: {
  id: string;
  book: string;
  chapter: number;
  verse: number;
}[] = [];
const initialBookmarks: {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  note?: string;
}[] = [];

// Translation options
type TranslationOption = "moussey" | "french" | "both";

export default function BibleScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [activeTab, setActiveTab] = useState("books"); // 'books', 'recent', 'bookmarks'
  const [translationOption, setTranslationOption] =
    useState<TranslationOption>("both");
  const [showVerseOptions, setShowVerseOptions] = useState<string | null>(null);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [bookmarkNote, setBookmarkNote] = useState("");
  const [selectedVerse, setSelectedVerse] = useState<any>(null);
  const [showJumpToModal, setShowJumpToModal] = useState(false);
  const [jumpToChapter, setJumpToChapter] = useState("");
  const [jumpToVerse, setJumpToVerse] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState("medium"); // small, medium, large
  const [nightMode, setNightMode] = useState(false);
  const [testament, setTestament] = useState<"all" | "ancien" | "nouveau">(
    "all"
  );
  const [isLoading, setIsLoading] = useState(true);

  // Add state for recent readings and bookmarks
  const [recentReadings, setRecentReadings] = useState(initialRecentReadings);
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  // Add state for verse search
  const [showVerseSearch, setShowVerseSearch] = useState(false);
  const [verseSearchQuery, setVerseSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Animation values
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const verseScaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const verseSearchAnim = useRef(new Animated.Value(0)).current;
  const tabIndicatorPosition = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  // Replace with: to fix moti error
  const [textOpacity] = useState(new Animated.Value(0));
  const [textScale] = useState(new Animated.Value(0.9));
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(20));

  // Refs
  const scrollViewRef = useRef<ScrollView>(null);
  const flatListRef = useRef<FlatList>(null);

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Playfair: require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairBold: require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
    PlayfairItalic: require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
  });

  // Screen dimensions
  const { width: screenWidth } = Dimensions.get("window");

  // fix moti error
  useEffect(() => {
    Animated.spring(textOpacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    Animated.spring(textScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const recentData = await AsyncStorage.getItem("recentReadings");
        if (recentData) {
          setRecentReadings(JSON.parse(recentData));
        }

        const bookmarksData = await AsyncStorage.getItem("bookmarks");
        if (bookmarksData) {
          setBookmarks(JSON.parse(bookmarksData));
        }

        // Simulate loading time for smoother transitions
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Toggle search bar with animation
  const toggleSearch = () => {
    if (showSearch) {
      Animated.timing(searchBarAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.cubic),
      }).start(() => setShowSearch(false));
    } else {
      setShowSearch(true);
      Animated.timing(searchBarAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.cubic),
      }).start();
    }
  };

  // Toggle verse search with animation
  const toggleVerseSearch = () => {
    if (showVerseSearch) {
      Animated.timing(verseSearchAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.out(Easing.cubic),
      }).start(() => {
        setShowVerseSearch(false);
        setVerseSearchQuery("");
        setSearchResults([]);
      });
    } else {
      setShowVerseSearch(true);
      Animated.timing(verseSearchAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.in(Easing.cubic),
      }).start();
    }
  };

  // Search verses by keyword
  const searchVerses = (query: string) => {
    setVerseSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const normalizedQuery = query.toLowerCase().trim();

    // Search in all mock verses
    const results = allMockVerses.filter(
      (verse) =>
        verse.text.toLowerCase().includes(normalizedQuery) ||
        verse.french.toLowerCase().includes(normalizedQuery)
    );

    setSearchResults(results);
  };

  // Filter books based on search query and testament
  const filteredBooks = bibleBooks.filter(
    (book) =>
      (testament === "all" || book.testament === testament) &&
      (searchQuery === "" ||
        book.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Save recent reading
  const saveRecentReading = async (
    book: string,
    chapter: number,
    verse: number
  ) => {
    try {
      // Create new recent reading
      const newReading = {
        id: Date.now().toString(),
        book,
        chapter,
        verse,
      };

      // Add to beginning of array and limit to 10 items
      const updatedReadings = [
        newReading,
        ...recentReadings.filter(
          (r) =>
            !(r.book === book && r.chapter === chapter && r.verse === verse)
        ),
      ].slice(0, 10);

      // Update state
      setRecentReadings(updatedReadings);

      // Save to AsyncStorage
      await AsyncStorage.setItem(
        "recentReadings",
        JSON.stringify(updatedReadings)
      );
    } catch (error) {
      console.error("Error saving recent reading:", error);
      if (Platform.OS === "android") {
        ToastAndroid.show("Error saving recent reading", ToastAndroid.SHORT);
      } else {
        Alert.alert("Error", "Could not save recent reading");
      }
    }
  };

  // Remove recent reading
  const removeRecentReading = async (id: string) => {
    try {
      const updatedReadings = recentReadings.filter(
        (reading) => reading.id !== id
      );
      setRecentReadings(updatedReadings);
      await AsyncStorage.setItem(
        "recentReadings",
        JSON.stringify(updatedReadings)
      );

      // Provide haptic feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      if (Platform.OS === "android") {
        ToastAndroid.show("Lecture récente supprimée", ToastAndroid.SHORT);
      } else {
        Alert.alert("Succès", "Lecture récente supprimée");
      }
    } catch (error) {
      console.error("Error removing recent reading:", error);
      if (Platform.OS === "android") {
        ToastAndroid.show("Erreur lors de la suppression", ToastAndroid.SHORT);
      } else {
        Alert.alert("Erreur", "Impossible de supprimer la lecture récente");
      }
    }
  };

  // Handle verse press with animation and haptic feedback
  const handleVersePress = (verse: any) => {
    setSelectedVerse(verse);
    setShowVerseOptions(verse.id);

    // Provide haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Save as recent reading if we have a book and chapter
    if (selectedBook && selectedChapter) {
      const book = bibleBooks.find((b) => b.id === selectedBook);
      if (book) {
        saveRecentReading(book.name, selectedChapter, verse.verse);
      }
    }

    // Animate the verse
    Animated.sequence([
      Animated.timing(verseScaleAnim, {
        toValue: 0.97,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(verseScaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.elastic(1.2),
      }),
    ]).start();
  };

  // Copy verse to clipboard
  const copyVerse = (verse: any) => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const verseText =
      translationOption === "french"
        ? verse.french
        : translationOption === "moussey"
        ? verse.text
        : `${verse.text}\n${verse.french}`;

    const reference = `${book.name} ${selectedChapter}:${verse.verse}`;
    const fullText = `${reference}\n${verseText}`;

    Clipboard.setString(fullText);

    // Provide haptic feedback
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    // Show toast or alert
    if (Platform.OS === "android") {
      ToastAndroid.show("Verset copié", ToastAndroid.SHORT);
    } else {
      Alert.alert("Copié", "Verset copié dans le presse-papier");
    }

    setShowVerseOptions(null);
  };

  // Share verse
  const shareVerse = (verse: any) => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const verseText =
      translationOption === "french"
        ? verse.french
        : translationOption === "moussey"
        ? verse.text
        : `${verse.text}\n${verse.french}`;

    const reference = `${book.name} ${selectedChapter}:${verse.verse}`;
    const fullText = `${reference}\n${verseText}`;

    Share.share({
      message: fullText,
      title: reference,
    });

    setShowVerseOptions(null);
  };

  // Add bookmark
  const addBookmark = async () => {
    if (!selectedVerse) return;

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    try {
      // Create new bookmark
      const newBookmark = {
        id: Date.now().toString(),
        book: book.name,
        chapter: selectedChapter || 1,
        verse: selectedVerse.verse,
        note: bookmarkNote,
      };

      // Add to bookmarks
      const updatedBookmarks = [...bookmarks, newBookmark];

      // Update state
      setBookmarks(updatedBookmarks);

      // Save to AsyncStorage
      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      // Close modal and reset
      setShowBookmarkModal(false);
      setBookmarkNote("");
      setShowVerseOptions(null);

      // Provide haptic feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      // Show confirmation
      if (Platform.OS === "android") {
        ToastAndroid.show("Signet ajouté", ToastAndroid.SHORT);
      } else {
        Alert.alert("Succès", "Signet ajouté");
      }
    } catch (error) {
      console.error("Error saving bookmark:", error);
      if (Platform.OS === "android") {
        ToastAndroid.show(
          "Erreur lors de l'ajout du signet",
          ToastAndroid.SHORT
        );
      } else {
        Alert.alert("Erreur", "Impossible d'ajouter le signet");
      }
    }
  };

  // Remove bookmark
  const removeBookmark = async (id: string) => {
    try {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      // Provide haptic feedback
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      if (Platform.OS === "android") {
        ToastAndroid.show("Signet supprimé", ToastAndroid.SHORT);
      } else {
        Alert.alert("Succès", "Signet supprimé");
      }
    } catch (error) {
      console.error("Error removing bookmark:", error);
    }
  };

  // Jump to specific verse
  const handleJumpTo = () => {
    const chapter = Number.parseInt(jumpToChapter);
    const verse = Number.parseInt(jumpToVerse);

    if (isNaN(chapter) || chapter < 1) {
      Alert.alert(
        "Chapitre invalide",
        "Veuillez entrer un numéro de chapitre valide"
      );
      return;
    }

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    if (chapter > book.chapters) {
      Alert.alert(
        "Chapitre invalide",
        `${book.name} n'a que ${book.chapters} chapitres`
      );
      return;
    }

    setSelectedChapter(chapter);
    setShowJumpToModal(false);

    // Provide haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // In a real app, we would scroll to the specific verse
    // For now, just simulate with a timeout
    setTimeout(() => {
      if (verse && !isNaN(verse)) {
        // Scroll to verse logic would go here
        if (Platform.OS === "android") {
          ToastAndroid.show(
            `Défilement vers le verset ${verse}`,
            ToastAndroid.SHORT
          );
        }
      }
    }, 500);
  };

  // Navigate to search result
  const navigateToSearchResult = (result: any) => {
    // Find the book
    const book = bibleBooks.find((b) => b.name === result.book);
    if (!book) return;

    // Set the book and chapter
    setSelectedBook(book.id);
    setSelectedChapter(result.chapter);

    // Close search
    setShowVerseSearch(false);
    setVerseSearchQuery("");

    // Reset animation
    verseSearchAnim.setValue(0);

    // Provide haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // In a real app, we would scroll to the specific verse
    // For now, just simulate with a timeout
    setTimeout(() => {
      // Highlight the verse
      setSelectedVerse(result);
      setShowVerseOptions(result.id);
    }, 500);
  };

  // Apply font size
  const getFontSize = () => {
    switch (fontSize) {
      case "small":
        return { verse: 14, text: 16 };
      case "large":
        return { verse: 18, text: 22 };
      default:
        return { verse: 16, text: 18 };
    }
  };

  // Render verses
  const renderVerses = () => {
    if (!selectedBook || !selectedChapter) return;

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const fontSizes = getFontSize();

    // Get the correct verses for the selected book and chapter
    const verseKey = `${selectedBook}-${selectedChapter}`;
    const verses = data[verseKey as keyof typeof data] || [];

    // If no verses are available for this book/chapter, show a placeholder
    const noVersesAvailable = verses.length === 0;

    // Header opacity based on scroll position
    const headerOpacity = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.9],
      extrapolate: "clamp",
    });

    // Header elevation based on scroll position
    const headerElevation = scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 5],
      extrapolate: "clamp",
    });

    return (
      <Animated.View
        style={[styles.versesContainer, { backgroundColor: colors.card }]}
      >
        <Animated.View
          style={[
            styles.versesHeader,
            {
              backgroundColor: colors.card,
              opacity: headerOpacity,
              elevation: headerElevation,
              shadowOpacity: headerElevation.interpolate({
                inputRange: [0, 5],
                outputRange: [0, 0.3],
              }),
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.out(Easing.cubic),
              }).start(() => {
                setSelectedChapter(null);
                fadeAnim.setValue(1);
              });

              // Provide haptic feedback
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>

          <Animated.Text
            style={[
              styles.versesTitle,
              { color: colors.text, fontFamily: "PlayfairBold" },
            ]}
          >
            {book.name} {selectedChapter}
          </Animated.Text>

          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.headerAction}
              onPress={toggleVerseSearch}
            >
              <Ionicons
                name={showVerseSearch ? "close" : "search"}
                size={24}
                color={colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerAction}
              onPress={() => {
                setShowSettings(true);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            >
              <Ionicons name="text" size={24} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerAction}
              onPress={() => {
                setActiveTab("bookmarks");
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            >
              <Ionicons name="bookmark-outline" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Verse Search Bar */}
        <VerseSearchBar
          colors={colors}
          verseSearchAnim={verseSearchAnim}
          verseSearchQuery={verseSearchQuery}
          searchVerses={searchVerses}
          showVerseSearch={showVerseSearch}
        />

        {/* Search Results */}
        {showVerseSearch && verseSearchQuery.length > 0 && (
          <Animated.View
            style={[
              styles.searchResultsContainer,
              { backgroundColor: colors.background },
            ]}
          >
            {searchResults.length > 0 ? (
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <Animated.View
                    style={{
                      opacity: textOpacity,
                      transform: [
                        {
                          translateY: textOpacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0],
                          }),
                        },
                      ],
                    }
                  }
                  >
                    <TouchableOpacity
                      style={[
                        styles.searchResultItem,
                        { borderBottomColor: colors.border },
                      ]}
                      onPress={() => navigateToSearchResult(item)}
                    >
                      <Text
                        style={[
                          styles.searchResultReference,
                          {
                            color: colors.primary,
                            fontFamily: "PlayfairBold",
                          },
                        ]}
                      >
                        {item.book} {item.chapter}:{item.verse}
                      </Text>
                      <Text
                        style={[
                          styles.searchResultText,
                          {
                            color: colors.text,
                            fontFamily: "Montserrat",
                          },
                        ]}
                        numberOfLines={2}
                      >
                        {item.text}
                      </Text>
                    </TouchableOpacity>
                  </Animated.View>
                )}
              />
            ) : (
              <View style={styles.emptySearchResults}>
                <Text
                  style={[
                    styles.emptySearchResultsText,
                    {
                      color: colors.inactive,
                      fontFamily: "Montserrat",
                    },
                  ]}
                >
                  Aucun résultat trouvé
                </Text>
              </View>
            )}
          </Animated.View>
        )}

        {!showVerseSearch && (
          <>
            <TranslationToggle
              colors={colors}
              translationOption={translationOption}
              setTranslationOption={setTranslationOption}
            />

            <Animated.ScrollView
              style={styles.versesList}
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                {
                  useNativeDriver: false,
                }
              )}
              scrollEventThrottle={16}
            >
              {noVersesAvailable ? (
                <View style={styles.emptyVersesContainer}>
                  <Text
                    style={[
                      styles.emptyVersesText,
                      {
                        color: colors.inactive,
                        fontFamily: "Montserrat",
                      },
                    ]}
                  >
                    Aucun verset disponible pour {book.name} {selectedChapter}
                  </Text>
                </View>
              ) : (
                verses.map((verse, index) => (
                  <VerseItem
                    key={verse.id}
                    verse={verse}
                    index={index}
                    colors={colors}
                    translationOption={translationOption}
                    showVerseOptions={showVerseOptions}
                    handleVersePress={handleVersePress}
                    copyVerse={copyVerse}
                    shareVerse={shareVerse}
                    setSelectedVerse={setSelectedVerse}
                    setShowBookmarkModal={setShowBookmarkModal}
                    setShowVerseOptions={setShowVerseOptions}
                    fontSizes={fontSizes}
                  />
                ))
              )}
              <View style={{ height: 80 }} />
            </Animated.ScrollView>

            <NavigationControls
              colors={colors}
              nightMode={nightMode}
              selectedChapter={selectedChapter}
              setSelectedChapter={setSelectedChapter}
              fadeAnim={fadeAnim}
              setShowJumpToModal={setShowJumpToModal}
              bookChapters={book.chapters}
            />
          </>
        )}
      </Animated.View>
    );
  };

  // Render recent readings
  const renderRecentReadings = () => {
    return (
      <Animated.View
        style={[
          styles.recentContainer,
          {
            backgroundColor: colors.card,
            borderRadius: 16,
            margin: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
          },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontFamily: "PlayfairBold",
            },
          ]}
        >
          Lectures Récentes
        </Text>

        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CustomSkeleton
              key={index}
              width="100%"
              height={60}
              colorMode={nightMode ? "dark" : "light"}
              radius={8}
              show={true}
            />
          ))
        ) : recentReadings.length === 0 ? (
          <Animated.View
            style={styles.emptyContainer}
          >
            <Ionicons name="book-outline" size={48} color={colors.inactive} />
            <Text
              style={[
                styles.emptyText,
                {
                  color: colors.inactive,
                  fontFamily: "Montserrat",
                  marginTop: 12,
                },
              ]}
            >
              Aucune lecture récente
            </Text>
          </Animated.View>
        ) : (
          recentReadings.map((item, index) => (
            <Animated.View
              key={item.id}
              style={[
                styles.recentItem,
                {
                  borderBottomColor: colors.border,
                  backgroundColor:
                    index % 2 === 0 ? `${colors.primary}05` : "transparent",
                  borderRadius: 8,
                },
              ]}
            >
              <TouchableOpacity
                style={styles.recentItemContent}
                onPress={() => {
                  const book = bibleBooks.find((b) => b.name === item.book);
                  if (book) {
                    setSelectedBook(book.id);
                    setSelectedChapter(item.chapter);
                    setActiveTab("books");

                    // Provide haptic feedback
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

                    // Set a timeout to allow the verses to render before scrolling
                    setTimeout(() => {
                      // Find the verse element and scroll to it
                      if (scrollViewRef.current) {
                        // We'll use a ref to track the verse we want to scroll to
                        const verseToScrollTo = item.verse;

                        // Get the verses for this book and chapter
                        const verseKey = `${book.id}-${item.chapter}`;
                        const verses = data[verseKey] || [];

                        // Set the selected verse to highlight it
                        const verseObj = verses.find(
                          (v) => v.verse === verseToScrollTo
                        );
                        if (verseObj) {
                          setSelectedVerse(verseObj);
                          setShowVerseOptions(verseObj.id);
                        }

                        // Calculate approximate position (this would be more precise with actual measurements)
                        const approximateVerseHeight = 150; // average height of a verse container
                        const scrollPosition =
                          (verseToScrollTo - 1) * approximateVerseHeight;

                        scrollViewRef.current.scrollTo({
                          y: scrollPosition,
                          animated: true,
                        });
                      }
                    }, 500); // Give time for rendering
                  }
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={[
                      styles.recentItemIcon,
                      { backgroundColor: colors.primary },
                    ]}
                  >
                    <Ionicons name="book" size={16} color="white" />
                  </View>
                  <Text
                    style={[
                      styles.recentItemTitle,
                      {
                        color: colors.text,
                        fontFamily: "MontserratBold",
                      },
                    ]}
                  >
                    {item.book} {item.chapter}:{item.verse}
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.inactive}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteRecentButton}
                onPress={() => removeRecentReading(item.id)}
              >
                <Ionicons
                  name="trash-outline"
                  size={20}
                  color={colors.inactive}
                />
              </TouchableOpacity>
            </Animated.View>
          ))
        )}
      </Animated.View>
    );
  };

  // Render bookmarks
  const renderBookmarks = () => {
    return (
      <Animated.View
        style={[
          styles.bookmarksContainer,
          {
            backgroundColor: colors.card,
            borderRadius: 16,
            margin: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
          },
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            {
              color: colors.text,
              fontFamily: "PlayfairBold",
            },
          ]}
        >
          Signets
        </Text>

        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <CustomSkeleton
              key={index}
              width="100%"
              height={80}
              colorMode={nightMode ? "dark" : "light"}
              radius={8}
              show={true}
            />
          ))
        ) : bookmarks.length === 0 ? (
          <Animated.View
            style={styles.emptyContainer}
          >
            <Ionicons
              name="bookmark-outline"
              size={48}
              color={colors.inactive}
            />
            <Text
              style={[
                styles.emptyText,
                {
                  color: colors.inactive,
                  fontFamily: "Montserrat",
                  marginTop: 12,
                },
              ]}
            >
              Aucun signet
            </Text>
          </Animated.View>
        ) : (
              bookmarks.map((item, index) => (
            <Animated.View
              key={item.id || index}
              style={[
                styles.bookmarkItem,
                {
                  borderBottomColor: colors.border,
                  backgroundColor:
                    index % 2 === 0 ? `${colors.primary}05` : "transparent",
                  borderRadius: 8,
                },
              ]}
            >
              <TouchableOpacity
                style={styles.bookmarkItemContent}
                onPress={() => {
                  const book = bibleBooks.find((b) => b.name === item.book);
                  if (book) {
                    setSelectedBook(book.id);
                    setSelectedChapter(item.chapter);
                    setActiveTab("books");

                    // Provide haptic feedback
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  }
                }}
              >
                <View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={[
                        styles.bookmarkItemIcon,
                        { backgroundColor: colors.primary },
                      ]}
                    >
                      <Ionicons name="bookmark" size={16} color="white" />
                    </View>
                    <Text
                      style={[
                        styles.bookmarkItemTitle,
                        {
                          color: colors.text,
                          fontFamily: "MontserratBold",
                        },
                      ]}
                    >
                      {item.book} {item.chapter}:{item.verse}
                    </Text>
                  </View>
                  {item.note && (
                    <Text
                      style={[
                        styles.bookmarkItemNote,
                        {
                          color: colors.inactive,
                          fontFamily: "MontserratLight",
                          marginLeft: 36,
                        },
                      ]}
                    >
                      {item.note}
                    </Text>
                  )}
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => removeBookmark(item.id)}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={20}
                      color={colors.inactive}
                    />
                  </TouchableOpacity>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.inactive}
                  />
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))
        )}
      </Animated.View>
    );
  };

  // Render books content
  const renderBooksContent = () => {
    if (selectedChapter) {
      return renderVerses();
    } else if (selectedBook) {
      const book = bibleBooks.find((b) => b.id === selectedBook);
      if (!book) return null;

      return (
        <ChapterGrid
          book={book}
          colors={colors}
          selectedChapter={selectedChapter}
          setSelectedBook={setSelectedBook}
          setSelectedChapter={setSelectedChapter}
          fadeAnim={fadeAnim}
          setShowJumpToModal={setShowJumpToModal}
        />
      );
    } else {
      return (
        <>
          {/* Testament selector */}
          <TestamentSelector
            colors={colors}
            testament={testament}
            setTestament={setTestament}
          />

          {isLoading ? (
            <View style={{ padding: 12 }}>
              {Array.from({ length: 10 }).map((_, index) => (
                <CustomSkeleton
                  key={index}
                  width="100%"
                  height={70}
                  colorMode={nightMode ? "dark" : "light"}
                  radius={8}
                  show={true}
                />
              ))}
            </View>
          ) : (
            <FlatList
              data={filteredBooks}
              keyExtractor={(item) => item.id}
              ref={flatListRef}
              contentContainerStyle={{ padding: 12 }}
              renderItem={({ item, index }) => (
                <BookItem
                  item={item}
                  index={index}
                  colors={colors}
                  onPress={(bookId) => setSelectedBook(bookId)}
                  fadeAnim={fadeAnim}
                />
              )}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text
                    style={[
                      styles.emptyText,
                      {
                        color: colors.inactive,
                        fontFamily: "Montserrat",
                      },
                    ]}
                  >
                    Aucun livre trouvé
                  </Text>
                </View>
              }
            />
          )}
        </>
      );
    }
  };

  // Render Jump To Modal
  const renderJumpToModal = () => {
    return (
      <Modal
        visible={showJumpToModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowJumpToModal(false)}
      >
        <BlurView
          intensity={80}
          tint={nightMode ? "dark" : "light"}
          style={styles.modalOverlay}
        >
          <Animated.View
            style={[
              styles.modalContainer,
              {
                backgroundColor: colors.card,
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 8,
              },
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                {
                  color: colors.text,
                  fontFamily: "PlayfairBold",
                },
              ]}
            >
              Aller à
            </Text>

            {selectedBook && (
              <Text
                style={[
                  styles.modalSubtitle,
                  {
                    color: colors.inactive,
                    fontFamily: "Montserrat",
                  },
                ]}
              >
                {bibleBooks.find((b) => b.id === selectedBook)?.name}
              </Text>
            )}

            <View style={styles.jumpInputRow}>
              <View style={styles.jumpInputContainer}>
                <Text
                  style={[
                    styles.jumpInputLabel,
                    {
                      color: colors.text,
                      fontFamily: "MontserratBold",
                    },
                  ]}
                >
                  Chapitre
                </Text>
                <TextInput
                  style={[
                    styles.jumpInput,
                    {
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.border,
                      fontFamily: "Montserrat",
                    },
                  ]}
                  placeholder="1"
                  placeholderTextColor={colors.inactive}
                  value={jumpToChapter}
                  onChangeText={setJumpToChapter}
                  keyboardType="number-pad"
                />
              </View>

              <View style={styles.jumpInputContainer}>
                <Text
                  style={[
                    styles.jumpInputLabel,
                    {
                      color: colors.text,
                      fontFamily: "MontserratBold",
                    },
                  ]}
                >
                  Verset (optionnel)
                </Text>
                <TextInput
                  style={[
                    styles.jumpInput,
                    {
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.border,
                      fontFamily: "Montserrat",
                    },
                  ]}
                  placeholder="1"
                  placeholderTextColor={colors.inactive}
                  value={jumpToVerse}
                  onChangeText={setJumpToVerse}
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[
                  styles.modalButton,
                  {
                    borderColor: colors.border,
                    backgroundColor: `${colors.inactive}20`,
                  },
                ]}
                onPress={() => setShowJumpToModal(false)}
              >
                <Text
                  style={[
                    styles.modalButtonText,
                    {
                      color: colors.inactive,
                      fontFamily: "MontserratBold",
                    },
                  ]}
                >
                  Annuler
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  {
                    backgroundColor: colors.primary,
                    shadowColor: colors.primary,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 4,
                  },
                ]}
                onPress={handleJumpTo}
              >
                <Text
                  style={[
                    styles.modalButtonTextPrimary,
                    { fontFamily: "MontserratBold" },
                  ]}
                >
                  Aller
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </BlurView>
      </Modal>
    );
  };

  // Render Settings Modal
  const renderSettingsModal = () => {
    return (
      <Modal
        visible={showSettings}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSettings(false)}
      >
        <BlurView
          intensity={80}
          tint={nightMode ? "dark" : "light"}
          style={styles.modalOverlay}
        >
          <Animated.View
            style={[
              styles.modalContainer,
              {
                backgroundColor: colors.card,
                borderRadius: 16,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 8,
                elevation: 8,
              },
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                {
                  color: colors.text,
                  fontFamily: "PlayfairBold",
                },
              ]}
            >
              Paramètres d'affichage
            </Text>

            <View style={styles.settingsSection}>
              <Text
                style={[
                  styles.settingsSectionTitle,
                  {
                    color: colors.text,
                    fontFamily: "MontserratBold",
                  },
                ]}
              >
                Taille de police
              </Text>
              <View style={styles.fontSizeOptions}>
                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "small" && {
                      backgroundColor: colors.primary,
                      shadowColor: colors.primary,
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 3,
                    },
                  ]}
                  onPress={() => {
                    setFontSize("small");
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      {
                        color: fontSize === "small" ? "white" : colors.text,
                        fontFamily: "MontserratBold",
                        fontSize: 12,
                      },
                    ]}
                  >
                    Petit
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "medium" && {
                      backgroundColor: colors.primary,
                      shadowColor: colors.primary,
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 3,
                    },
                  ]}
                  onPress={() => {
                    setFontSize("medium");
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      {
                        color: fontSize === "medium" ? "white" : colors.text,
                        fontFamily: "MontserratBold",
                        fontSize: 14,
                      },
                    ]}
                  >
                    Moyen
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "large" && {
                      backgroundColor: colors.primary,
                      shadowColor: colors.primary,
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 3,
                    },
                  ]}
                  onPress={() => {
                    setFontSize("large");
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      {
                        color: fontSize === "large" ? "white" : colors.text,
                        fontFamily: "MontserratBold",
                        fontSize: 16,
                      },
                    ]}
                  >
                    Grand
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.settingsSection}>
              <Text
                style={[
                  styles.settingsSectionTitle,
                  {
                    color: colors.text,
                    fontFamily: "MontserratBold",
                  },
                ]}
              >
                Mode d'affichage
              </Text>
              <View style={styles.fontSizeOptions}>
                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    !nightMode && {
                      backgroundColor: colors.primary,
                      shadowColor: colors.primary,
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 3,
                    },
                  ]}
                  onPress={() => {
                    setNightMode(false);
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}
                >
                  <Ionicons
                    name="sunny"
                    size={18}
                    color={!nightMode ? "white" : colors.text}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      {
                        color: !nightMode ? "white" : colors.text,
                        fontFamily: "MontserratBold",
                      },
                    ]}
                  >
                    Jour
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    nightMode && {
                      backgroundColor: colors.primary,
                      shadowColor: colors.primary,
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4,
                      elevation: 3,
                    },
                  ]}
                  onPress={() => {
                    setNightMode(true);
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  }}
                >
                  <Ionicons
                    name="moon"
                    size={18}
                    color={nightMode ? "white" : colors.text}
                    style={{ marginRight: 5 }}
                  />
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      {
                        color: nightMode ? "white" : colors.text,
                        fontFamily: "MontserratBold",
                      },
                    ]}
                  >
                    Nuit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.settingsButton,
                {
                  backgroundColor: colors.primary,
                  shadowColor: colors.primary,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 4,
                },
              ]}
              onPress={() => {
                setShowSettings(false);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }}
            >
              <Text
                style={[
                  styles.settingsButtonText,
                  { fontFamily: "MontserratBold" },
                ]}
              >
                Terminé
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </BlurView>
      </Modal>
    );
  };

  // Main render
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <BibleHeader
        colors={colors}
        showSearch={showSearch}
        toggleSearch={toggleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchBarAnim={searchBarAnim}
      />

      {/* Tabs */}
      <TabsNavigation
        colors={colors}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabIndicatorPosition={tabIndicatorPosition}
      />

      {/* Content based on selected tab */}
      {activeTab === "books" && renderBooksContent()}
      {activeTab === "recent" && renderRecentReadings()}
      {activeTab === "bookmarks" && renderBookmarks()}

      {/* Bookmark Modal */}
      <BookmarkModal
        colors={colors}
        nightMode={nightMode}
        showBookmarkModal={showBookmarkModal}
        setShowBookmarkModal={setShowBookmarkModal}
        selectedVerse={selectedVerse}
        selectedBook={selectedBook}
        selectedChapter={selectedChapter}
        bookmarkNote={bookmarkNote}
        setBookmarkNote={setBookmarkNote}
        addBookmark={addBookmark}
        bibleBooks={bibleBooks}
      />

      {/* Jump To Modal */}
      {renderJumpToModal()}

      {/* Settings Modal */}
      {renderSettingsModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  versesContainer: {
    flex: 1,
  },
  versesHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    zIndex: 10,
  },
  versesTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    marginLeft: 15,
  },
  versesList: {
    flex: 1,
    padding: 15,
  },
  backButton: {
    padding: 5,
  },
  recentContainer: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  recentItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  recentItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentItemIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  recentItemTitle: {
    fontSize: 16,
  },
  deleteRecentButton: {
    padding: 10,
    position: "absolute",
    right: 30,
    top: 10,
  },
  bookmarksContainer: {
    flex: 1,
    padding: 15,
  },
  bookmarkItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  bookmarkItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookmarkItemIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  bookmarkItemTitle: {
    fontSize: 16,
  },
  bookmarkItemNote: {
    fontSize: 14,
    marginTop: 4,
  },
  emptyContainer: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
  },
  searchResultsContainer: {
    flex: 1,
    padding: 10,
  },
  searchResultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  searchResultReference: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  searchResultText: {
    fontSize: 14,
  },
  emptySearchResults: {
    padding: 20,
    alignItems: "center",
  },
  emptySearchResultsText: {
    fontSize: 16,
  },
  emptyVersesContainer: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyVersesText: {
    fontSize: 16,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 14,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 1,
  },
  modalButtonText: {
    fontWeight: "500",
  },
  modalButtonTextPrimary: {
    color: "white",
    fontWeight: "500",
  },
  jumpInputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jumpInputContainer: {
    width: "48%",
  },
  jumpInputLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  jumpInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  settingsSection: {
    marginBottom: 20,
  },
  settingsSectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  fontSizeOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontSizeOption: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  fontSizeOptionText: {
    fontWeight: "500",
  },
  settingsButton: {
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  settingsButtonText: {
    color: "white",
    fontWeight: "500",
  },
});
