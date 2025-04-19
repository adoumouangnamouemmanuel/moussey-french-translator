"use client";

import { useState, useRef, useEffect } from "react";
import { Animated, ScrollView } from "react-native";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  StatusBar,
  Share,
  Platform,
  Alert,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Clipboard from "expo-clipboard";
import { ToastAndroid } from "react-native";
import { useTheme } from "../context/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Bible books in French
const bibleBooks = [
  // Ancien Testament
  { id: "1", name: "Genèse", chapters: 50, testament: "ancien" },
  { id: "2", name: "Exode", chapters: 40, testament: "ancien" },
  { id: "3", name: "Lévitique", chapters: 27, testament: "ancien" },
  { id: "4", name: "Nombres", chapters: 36, testament: "ancien" },
  { id: "5", name: "Deutéronome", chapters: 34, testament: "ancien" },
  { id: "6", name: "Josué", chapters: 24, testament: "ancien" },
  { id: "7", name: "Juges", chapters: 21, testament: "ancien" },
  { id: "8", name: "Ruth", chapters: 4, testament: "ancien" },
  { id: "9", name: "1 Samuel", chapters: 31, testament: "ancien" },
  { id: "10", name: "2 Samuel", chapters: 24, testament: "ancien" },
  { id: "11", name: "1 Rois", chapters: 22, testament: "ancien" },
  { id: "12", name: "2 Rois", chapters: 25, testament: "ancien" },
  { id: "13", name: "1 Chroniques", chapters: 29, testament: "ancien" },
  { id: "14", name: "2 Chroniques", chapters: 36, testament: "ancien" },
  { id: "15", name: "Esdras", chapters: 10, testament: "ancien" },
  { id: "16", name: "Néhémie", chapters: 13, testament: "ancien" },
  { id: "17", name: "Esther", chapters: 10, testament: "ancien" },
  { id: "18", name: "Job", chapters: 42, testament: "ancien" },
  { id: "19", name: "Psaumes", chapters: 150, testament: "ancien" },
  { id: "20", name: "Proverbes", chapters: 31, testament: "ancien" },
  // Nouveau Testament
  { id: "40", name: "Matthieu", chapters: 28, testament: "nouveau" },
  { id: "41", name: "Marc", chapters: 16, testament: "nouveau" },
  { id: "42", name: "Luc", chapters: 24, testament: "nouveau" },
  { id: "43", name: "Jean", chapters: 21, testament: "nouveau" },
  { id: "44", name: "Actes", chapters: 28, testament: "nouveau" },
  { id: "45", name: "Romains", chapters: 16, testament: "nouveau" },
  { id: "46", name: "1 Corinthiens", chapters: 16, testament: "nouveau" },
  { id: "47", name: "2 Corinthiens", chapters: 13, testament: "nouveau" },
  { id: "48", name: "Galates", chapters: 6, testament: "nouveau" },
  { id: "49", name: "Éphésiens", chapters: 6, testament: "nouveau" },
  { id: "50", name: "Philippiens", chapters: 4, testament: "nouveau" },
  { id: "51", name: "Colossiens", chapters: 4, testament: "nouveau" },
  { id: "52", name: "1 Thessaloniciens", chapters: 5, testament: "nouveau" },
  { id: "53", name: "2 Thessaloniciens", chapters: 3, testament: "nouveau" },
];

// Mock verses for Genesis 1
const mockVerses = [
  {
    id: "1",
    verse: 1,
    text: "Au commencement, Dieu créa les cieux et la terre.",
    english: "In the beginning God created the heavens and the earth.",
  },
  {
    id: "2",
    verse: 2,
    text: "La terre était informe et vide; il y avait des ténèbres à la surface de l'abîme, et l'Esprit de Dieu se mouvait au-dessus des eaux.",
    english:
      "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
  },
  {
    id: "3",
    verse: 3,
    text: "Dieu dit: Que la lumière soit! Et la lumière fut.",
    english: 'And God said, "Let there be light," and there was light.',
  },
  {
    id: "4",
    verse: 4,
    text: "Dieu vit que la lumière était bonne; et Dieu sépara la lumière d'avec les ténèbres.",
    english:
      "God saw that the light was good, and he separated the light from the darkness.",
  },
  {
    id: "5",
    verse: 5,
    text: "Dieu appela la lumière jour, et il appela les ténèbres nuit. Ainsi, il y eut un soir, et il y eut un matin: ce fut le premier jour.",
    english:
      'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.',
  },
  {
    id: "6",
    verse: 6,
    text: "Dieu dit: Qu'il y ait une étendue entre les eaux, et qu'elle sépare les eaux d'avec les eaux.",
    english:
      'And God said, "Let there be a vault between the waters to separate water from water."',
  },
  {
    id: "7",
    verse: 7,
    text: "Et Dieu fit l'étendue, et il sépara les eaux qui sont au-dessous de l'étendue d'avec les eaux qui sont au-dessus de l'étendue. Et cela fut ainsi.",
    english:
      "So God made the vault and separated the water under the vault from the water above it. And it was so.",
  },
  {
    id: "8",
    verse: 8,
    text: "Dieu appela l'étendue ciel. Ainsi, il y eut un soir, et il y eut un matin: ce fut le second jour.",
    english:
      'God called the vault "sky." And there was evening, and there was morning—the second day.',
  },
  {
    id: "9",
    verse: 9,
    text: "Dieu dit: Que les eaux qui sont au-dessous du ciel se rassemblent en un seul lieu, et que le sec paraisse. Et cela fut ainsi.",
    english:
      'And God said, "Let the water under the sky be gathered to one place, and let dry ground appear." And it was so.',
  },
  {
    id: "10",
    verse: 10,
    text: "Dieu appela le sec terre, et il appela l'amas des eaux mers. Dieu vit que cela était bon.",
    english:
      'God called the dry ground "land," and the gathered waters he called "seas." And God saw that it was good.',
  },
];

// More mock verses for search functionality
const allMockVerses = [
  ...mockVerses,
  {
    id: "11",
    book: "Genèse",
    chapter: 1,
    verse: 11,
    text: "Puis Dieu dit: Que la terre produise de la verdure, de l'herbe portant de la semence, des arbres fruitiers donnant du fruit selon leur espèce et ayant en eux leur semence sur la terre. Et cela fut ainsi.",
    english:
      'Then God said, "Let the land produce vegetation: seed-bearing plants and trees on the land that bear fruit with seed in it, according to their various kinds." And it was so.',
  },
  {
    id: "12",
    book: "Jean",
    chapter: 3,
    verse: 16,
    text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
    english:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  },
  {
    id: "13",
    book: "Psaumes",
    chapter: 23,
    verse: 1,
    text: "L'Éternel est mon berger: je ne manquerai de rien.",
    english: "The LORD is my shepherd, I lack nothing.",
  },
  {
    id: "14",
    book: "Matthieu",
    chapter: 5,
    verse: 3,
    text: "Heureux les pauvres en esprit, car le royaume des cieux est à eux!",
    english:
      "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
  },
  {
    id: "15",
    book: "Romains",
    chapter: 8,
    verse: 28,
    text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein.",
    english:
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  },
];

// Replace the static recent readings and bookmarks with empty arrays
// Define the type for recent readings
type RecentReading = {
  id: string;
  book: string;
  chapter: number;
  verse: number;
};

// Initialize recent readings with the correct type
const initialRecentReadings: RecentReading[] = [];
// Define the type for bookmarks
type Bookmark = {
  id: string;
  book: string;
  chapter: number;
  verse: number;
  note?: string;
};

const initialBookmarks: Bookmark[] = [];

// Translation options
type TranslationOption = "french" | "english" | "both";

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

  // Refs
  const scrollViewRef = useRef<ScrollView>(null);
  const flatListRef = useRef<FlatList>(null);

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const recentData = await AsyncStorage.getItem("recentReadings");
        if (recentData) {
          setRecentReadings(JSON.parse(recentData));
        }

        const bookmarksData = await AsyncStorage.getItem("bookmarks");
        if (bookmarksData) {
          setBookmarks(JSON.parse(bookmarksData));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []);

  // Toggle search bar
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    Animated.timing(searchBarAnim, {
      toValue: showSearch ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  // Toggle verse search
  const toggleVerseSearch = () => {
    setShowVerseSearch(!showVerseSearch);
    Animated.timing(verseSearchAnim, {
      toValue: showVerseSearch ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    if (showVerseSearch) {
      setVerseSearchQuery("");
      setSearchResults([]);
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
        verse.english.toLowerCase().includes(normalizedQuery)
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

  // Handle verse press
  const handleVersePress = (verse: any) => {
    setSelectedVerse(verse);
    setShowVerseOptions(verse.id);

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
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(verseScaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Copy verse to clipboard
  const copyVerse = (verse: any) => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const verseText =
      translationOption === "english"
        ? verse.english
        : translationOption === "french"
        ? verse.text
        : `${verse.text}\n${verse.english}`;

    const reference = `${book.name} ${selectedChapter}:${verse.verse}`;
    const fullText = `${reference}\n${verseText}`;

    Clipboard.setString(fullText);

    // Show toast or alert
    if (Platform.OS === "android") {
      ToastAndroid.show("Verse copied to clipboard", ToastAndroid.SHORT);
    } else {
      Alert.alert("Copied", "Verse copied to clipboard");
    }

    setShowVerseOptions(null);
  };

  // Fix the shareVerse function
  const shareVerse = (verse: any) => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    const verseText =
      translationOption === "english"
        ? verse.english
        : translationOption === "french"
        ? verse.text
        : `${verse.text}\n${verse.english}`;

    const reference = `${book.name} ${selectedChapter}:${verse.verse}`;
    const fullText = `${reference}\n${verseText}`;

    Share.share({
      message: fullText,
      title: reference,
    });

    setShowVerseOptions(null);
  };

  // Update the addBookmark function
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

      // Show confirmation
      if (Platform.OS === "android") {
        ToastAndroid.show("Bookmark added", ToastAndroid.SHORT);
      } else {
        Alert.alert("Success", "Bookmark added");
      }
    } catch (error) {
      console.error("Error saving bookmark:", error);
      if (Platform.OS === "android") {
        ToastAndroid.show("Error saving bookmark", ToastAndroid.SHORT);
      } else {
        Alert.alert("Error", "Could not save bookmark");
      }
    }
  };

  // Add function to remove bookmark
  const removeBookmark = async (id: string) => {
    try {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      if (Platform.OS === "android") {
        ToastAndroid.show("Bookmark removed", ToastAndroid.SHORT);
      } else {
        Alert.alert("Success", "Bookmark removed");
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
      Alert.alert("Invalid Chapter", "Please enter a valid chapter number");
      return;
    }

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return;

    if (chapter > book.chapters) {
      Alert.alert(
        "Invalid Chapter",
        `${book.name} only has ${book.chapters} chapters`
      );
      return;
    }

    setSelectedChapter(chapter);
    setShowJumpToModal(false);

    // In a real app, we would scroll to the specific verse
    // For now, just simulate with a timeout
    setTimeout(() => {
      if (verse && !isNaN(verse)) {
        // Scroll to verse logic would go here
        if (Platform.OS === "android") {
          ToastAndroid.show(`Scrolled to verse ${verse}`, ToastAndroid.SHORT);
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
        return { verse: 18, text: 20 };
      default:
        return { verse: 16, text: 18 };
    }
  };

  // Render chapter grid
  const renderChapterGrid = () => {
    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return null;

    return (
      <Animated.View
        style={[
          styles.chapterContainer,
          { backgroundColor: colors.card },
          { opacity: fadeAnim },
        ]}
      >
        <View style={styles.chapterHeader}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                setSelectedBook(null);
                fadeAnim.setValue(1);
              });
            }}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.chapterTitle, { color: colors.text }]}>
            {book.name}
          </Text>
          <TouchableOpacity onPress={() => setShowJumpToModal(true)}>
            <Ionicons name="search" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.chaptersGrid}>
          {Array.from({ length: book.chapters }, (_, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.chapterItem,
                {
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                },
                selectedChapter === i + 1 && {
                  backgroundColor: colors.primary,
                },
              ]}
              onPress={() => {
                Animated.timing(fadeAnim, {
                  toValue: 0,
                  duration: 200,
                  useNativeDriver: true,
                }).start(() => {
                  setSelectedChapter(i + 1);
                  fadeAnim.setValue(1);
                });
              }}
            >
              <Text
                style={[
                  styles.chapterNumber,
                  { color: selectedChapter === i + 1 ? "white" : colors.text },
                ]}
              >
                {i + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    );
  };

  // Render verses
  const renderVerses = () => {
    if (!selectedBook || !selectedChapter) return null;

    const book = bibleBooks.find((b) => b.id === selectedBook);
    if (!book) return null;

    const fontSizes = getFontSize();

    return (
      <Animated.View
        style={[
          styles.versesContainer,
          { backgroundColor: colors.card },
          { opacity: fadeAnim },
        ]}
      >
        <View style={styles.versesHeader}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                setSelectedChapter(null);
                fadeAnim.setValue(1);
              });
            }}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.versesTitle, { color: colors.text }]}>
            {book.name} {selectedChapter}
          </Text>
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
              onPress={() => setShowSettings(true)}
            >
              <Ionicons name="text" size={24} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerAction}>
              <Ionicons name="bookmark-outline" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Verse Search Bar */}
        <Animated.View
          style={[
            styles.verseSearchContainer,
            {
              height: verseSearchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
              }),
              opacity: verseSearchAnim,
              marginTop: verseSearchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 10],
              }),
            },
          ]}
        >
          <View
            style={[
              styles.verseSearchInputContainer,
              {
                backgroundColor: colors.background,
                borderColor: colors.border,
              },
            ]}
          >
            <Ionicons
              name="search"
              size={20}
              color={colors.text}
              style={styles.searchIcon}
            />
            <TextInput
              style={[styles.verseSearchInput, { color: colors.text }]}
              placeholder="Rechercher dans les versets..."
              placeholderTextColor={colors.inactive}
              value={verseSearchQuery}
              onChangeText={searchVerses}
              autoFocus={showVerseSearch}
            />
            {verseSearchQuery.length > 0 && (
              <TouchableOpacity onPress={() => searchVerses("")}>
                <Ionicons
                  name="close-circle"
                  size={20}
                  color={colors.inactive}
                />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>

        {/* Search Results */}
        {showVerseSearch && verseSearchQuery.length > 0 && (
          <View
            style={[
              styles.searchResultsContainer,
              { backgroundColor: colors.background },
            ]}
          >
            {searchResults.length > 0 ? (
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
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
                        { color: colors.primary },
                      ]}
                    >
                      {item.book} {item.chapter}:{item.verse}
                    </Text>
                    <Text
                      style={[styles.searchResultText, { color: colors.text }]}
                      numberOfLines={2}
                    >
                      {item.text}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <View style={styles.emptySearchResults}>
                <Text
                  style={[
                    styles.emptySearchResultsText,
                    { color: colors.inactive },
                  ]}
                >
                  Aucun résultat trouvé
                </Text>
              </View>
            )}
          </View>
        )}

        {!showVerseSearch && (
          <>
            <View style={styles.translationToggle}>
              <TouchableOpacity
                style={[
                  styles.translationOption,
                  translationOption === "french" && {
                    backgroundColor: colors.primary,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  },
                ]}
                onPress={() => setTranslationOption("french")}
              >
                <Text
                  style={[
                    styles.translationOptionText,
                    {
                      color:
                        translationOption === "french" ? "white" : colors.text,
                    },
                  ]}
                >
                  Français
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.translationOption,
                  translationOption === "both" && {
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => setTranslationOption("both")}
              >
                <Text
                  style={[
                    styles.translationOptionText,
                    {
                      color:
                        translationOption === "both" ? "white" : colors.text,
                    },
                  ]}
                >
                  Les deux
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.translationOption,
                  translationOption === "english" && {
                    backgroundColor: colors.primary,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                  },
                ]}
                onPress={() => setTranslationOption("english")}
              >
                <Text
                  style={[
                    styles.translationOptionText,
                    {
                      color:
                        translationOption === "english" ? "white" : colors.text,
                    },
                  ]}
                >
                  English
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.versesList}
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
            >
              {mockVerses.map((verse) => (
                <TouchableOpacity
                  key={verse.id}
                  style={[
                    styles.verseItem,
                    showVerseOptions === verse.id && {
                      backgroundColor: `${colors.primary}10`,
                    },
                  ]}
                  onPress={() => handleVersePress(verse)}
                  onLongPress={() => handleVersePress(verse)}
                >
                  <View style={styles.verseHeader}>
                    <Text
                      style={[
                        styles.verseNumber,
                        { color: colors.primary, fontSize: fontSizes.verse },
                      ]}
                    >
                      {verse.verse}
                    </Text>
                    {showVerseOptions === verse.id && (
                      <View style={styles.verseActions}>
                        <TouchableOpacity
                          style={[
                            styles.verseAction,
                            { backgroundColor: colors.primary },
                          ]}
                          onPress={() => copyVerse(verse)}
                        >
                          <Ionicons
                            name="copy-outline"
                            size={16}
                            color="white"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles.verseAction,
                            { backgroundColor: colors.primary },
                          ]}
                          onPress={() => shareVerse(verse)}
                        >
                          <Ionicons
                            name="share-social-outline"
                            size={16}
                            color="white"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles.verseAction,
                            { backgroundColor: colors.primary },
                          ]}
                          onPress={() => {
                            setSelectedVerse(verse);
                            setShowBookmarkModal(true);
                          }}
                        >
                          <Ionicons
                            name="bookmark-outline"
                            size={16}
                            color="white"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles.verseAction,
                            { backgroundColor: colors.primary },
                          ]}
                          onPress={() => setShowVerseOptions(null)}
                        >
                          <Ionicons name="close" size={16} color="white" />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>

                  {(translationOption === "french" ||
                    translationOption === "both") && (
                    <Text
                      style={[
                        styles.verseText,
                        { color: colors.text, fontSize: fontSizes.text },
                      ]}
                    >
                      {verse.text}
                    </Text>
                  )}

                  {translationOption === "both" && (
                    <View
                      style={[
                        styles.divider,
                        { backgroundColor: colors.border },
                      ]}
                    />
                  )}

                  {(translationOption === "english" ||
                    translationOption === "both") && (
                    <Text
                      style={[
                        styles.verseTranslation,
                        {
                          color:
                            translationOption === "both"
                              ? colors.inactive
                              : colors.text,
                          fontSize:
                            fontSizes.text -
                            (translationOption === "both" ? 2 : 0),
                        },
                      ]}
                    >
                      {verse.english}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
              <View style={{ height: 20 }} />
            </ScrollView>

            <View
              style={[
                styles.navigationControls,
                { backgroundColor: colors.card },
              ]}
            >
              <TouchableOpacity
                style={[styles.navButton, { backgroundColor: colors.primary }]}
                onPress={() => {
                  if (selectedChapter && selectedChapter > 1) {
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 200,
                      useNativeDriver: true,
                    }).start(() => {
                      setSelectedChapter(selectedChapter - 1);
                      fadeAnim.setValue(1);
                    });
                  }
                }}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
                <Text style={styles.navButtonText}>Previous</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.jumpButton, { borderColor: colors.border }]}
                onPress={() => setShowJumpToModal(true)}
              >
                <Ionicons name="search" size={20} color={colors.primary} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.navButton, { backgroundColor: colors.primary }]}
                onPress={() => {
                  const book = bibleBooks.find((b) => b.id === selectedBook);
                  if (
                    book &&
                    selectedChapter &&
                    selectedChapter < book.chapters
                  ) {
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 200,
                      useNativeDriver: true,
                    }).start(() => {
                      setSelectedChapter(selectedChapter + 1);
                      fadeAnim.setValue(1);
                    });
                  }
                }}
              >
                <Text style={styles.navButtonText}>Next</Text>
                <Ionicons name="chevron-forward" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </Animated.View>
    );
  };

  // Render recent readings
  const renderRecentReadings = () => {
    return (
      <View style={[styles.recentContainer, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Lectures Récentes
        </Text>
        {recentReadings.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.inactive }]}>
              Aucune lecture récente
            </Text>
          </View>
        ) : (
          recentReadings.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.recentItem, { borderBottomColor: colors.border }]}
              onPress={() => {
                const book = bibleBooks.find((b) => b.name === item.book);
                if (book) {
                  setSelectedBook(book.id);
                  setSelectedChapter(item.chapter);
                  setActiveTab("books");
                }
              }}
            >
              <View style={styles.recentItemContent}>
                <Text style={[styles.recentItemTitle, { color: colors.text }]}>
                  {item.book} {item.chapter}:{item.verse}
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.inactive}
                />
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    );
  };

  // Update the bookmarks rendering to include delete functionality
  const renderBookmarks = () => {
    return (
      <View
        style={[styles.bookmarksContainer, { backgroundColor: colors.card }]}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Signets
        </Text>
        {bookmarks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: colors.inactive }]}>
              Aucun signet
            </Text>
          </View>
        ) : (
          bookmarks.map((item) => (
            <View
              key={item.id}
              style={[
                styles.bookmarkItem,
                { borderBottomColor: colors.border },
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
                  }
                }}
              >
                <View>
                  <Text
                    style={[styles.bookmarkItemTitle, { color: colors.text }]}
                  >
                    {item.book} {item.chapter}:{item.verse}
                  </Text>
                  {item.note && (
                    <Text
                      style={[
                        styles.bookmarkItemNote,
                        { color: colors.inactive },
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
            </View>
          ))
        )}
      </View>
    );
  };

  // Replace the FlatList in the books tab with this updated version that includes testament sections
  const renderBooksContent = () => {
    if (selectedChapter) {
      return renderVerses();
    } else if (selectedBook) {
      return renderChapterGrid();
    } else {
      return (
        <>
          {/* Testament selector */}
          <View style={styles.testamentSelector}>
            <TouchableOpacity
              style={[
                styles.testamentOption,
                testament === "all" && { backgroundColor: colors.primary },
              ]}
              onPress={() => setTestament("all")}
            >
              <Text
                style={{ color: testament === "all" ? "white" : colors.text }}
              >
                Tous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.testamentOption,
                testament === "ancien" && { backgroundColor: colors.primary },
              ]}
              onPress={() => setTestament("ancien")}
            >
              <Text
                style={{
                  color: testament === "ancien" ? "white" : colors.text,
                }}
              >
                Ancien Testament
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.testamentOption,
                testament === "nouveau" && { backgroundColor: colors.primary },
              ]}
              onPress={() => setTestament("nouveau")}
            >
              <Text
                style={{
                  color: testament === "nouveau" ? "white" : colors.text,
                }}
              >
                Nouveau Testament
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredBooks}
            keyExtractor={(item) => item.id}
            ref={flatListRef}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.bookItem,
                  {
                    borderBottomColor: colors.border,
                    backgroundColor: colors.card,
                  },
                ]}
                onPress={() => {
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                  }).start(() => {
                    setSelectedBook(item.id);
                    fadeAnim.setValue(1);
                  });
                }}
              >
                <Text style={[styles.bookName, { color: colors.text }]}>
                  {item.name}
                </Text>
                <Text style={[styles.chapterCount, { color: colors.inactive }]}>
                  {item.chapters} chapitres
                </Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: colors.inactive }]}>
                  Aucun livre trouvé
                </Text>
              </View>
            }
            stickyHeaderIndices={[]}
          />
        </>
      );
    }
  };

  // Update the activeTab === "books" section in the return statement
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Bible</Text>
          <TouchableOpacity onPress={toggleSearch}>
            <Ionicons
              name={showSearch ? "close" : "search"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <Animated.View
          style={[
            styles.searchContainer,
            {
              height: searchBarAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 50],
              }),
              opacity: searchBarAnim,
              marginTop: searchBarAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 10],
              }),
            },
          ]}
        >
          <View
            style={[
              styles.searchInputContainer,
              { backgroundColor: "rgba(255,255,255,0.2)" },
            ]}
          >
            <Ionicons
              name="search"
              size={20}
              color="white"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Rechercher un livre..."
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons name="close-circle" size={20} color="white" />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      </LinearGradient>

      {/* Tabs */}
      <View style={[styles.tabsContainer, { backgroundColor: colors.card }]}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "books" && styles.activeTab,
            activeTab === "books" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("books")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === "books" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Livres
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "recent" && styles.activeTab,
            activeTab === "recent" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("recent")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "recent" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Récents
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "bookmarks" && styles.activeTab,
            activeTab === "bookmarks" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("bookmarks")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "bookmarks" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Signets
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content based on selected tab */}
      {activeTab === "books" && renderBooksContent()}
      {activeTab === "recent" && renderRecentReadings()}
      {activeTab === "bookmarks" && renderBookmarks()}

      {/* Bookmark Modal */}
      <Modal
        visible={showBookmarkModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowBookmarkModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowBookmarkModal(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.modalContainer, { backgroundColor: colors.card }]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Add Bookmark
            </Text>

            {selectedVerse && selectedBook && (
              <Text style={[styles.modalSubtitle, { color: colors.inactive }]}>
                {bibleBooks.find((b) => b.id === selectedBook)?.name}{" "}
                {selectedChapter}:{selectedVerse.verse}
              </Text>
            )}

            <TextInput
              style={[
                styles.noteInput,
                {
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.border,
                },
              ]}
              placeholder="Add a note (optional)"
              placeholderTextColor={colors.inactive}
              value={bookmarkNote}
              onChangeText={setBookmarkNote}
              multiline
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { borderColor: colors.border }]}
                onPress={() => setShowBookmarkModal(false)}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.inactive }]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={addBookmark}
              >
                <Text style={styles.modalButtonTextPrimary}>Save</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Jump To Modal */}
      <Modal
        visible={showJumpToModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowJumpToModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowJumpToModal(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.modalContainer, { backgroundColor: colors.card }]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Jump To
            </Text>

            {selectedBook && (
              <Text style={[styles.modalSubtitle, { color: colors.inactive }]}>
                {bibleBooks.find((b) => b.id === selectedBook)?.name}
              </Text>
            )}

            <View style={styles.jumpInputRow}>
              <View style={styles.jumpInputContainer}>
                <Text style={[styles.jumpInputLabel, { color: colors.text }]}>
                  Chapter
                </Text>
                <TextInput
                  style={[
                    styles.jumpInput,
                    {
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.border,
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
                <Text style={[styles.jumpInputLabel, { color: colors.text }]}>
                  Verse (optional)
                </Text>
                <TextInput
                  style={[
                    styles.jumpInput,
                    {
                      backgroundColor: colors.background,
                      color: colors.text,
                      borderColor: colors.border,
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
                style={[styles.modalButton, { borderColor: colors.border }]}
                onPress={() => setShowJumpToModal(false)}
              >
                <Text
                  style={[styles.modalButtonText, { color: colors.inactive }]}
                >
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.modalButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={handleJumpTo}
              >
                <Text style={styles.modalButtonTextPrimary}>Go</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>

      {/* Settings Modal */}
      <Modal
        visible={showSettings}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSettings(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowSettings(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.modalContainer, { backgroundColor: colors.card }]}
            onPress={(e) => e.stopPropagation()}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Display Settings
            </Text>

            <View style={styles.settingsSection}>
              <Text
                style={[styles.settingsSectionTitle, { color: colors.text }]}
              >
                Font Size
              </Text>
              <View style={styles.fontSizeOptions}>
                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "small" && { backgroundColor: colors.primary },
                  ]}
                  onPress={() => setFontSize("small")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "small" ? "white" : colors.text },
                    ]}
                  >
                    Small
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "medium" && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                  onPress={() => setFontSize("medium")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "medium" ? "white" : colors.text },
                    ]}
                  >
                    Medium
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.fontSizeOption,
                    fontSize === "large" && { backgroundColor: colors.primary },
                  ]}
                  onPress={() => setFontSize("large")}
                >
                  <Text
                    style={[
                      styles.fontSizeOptionText,
                      { color: fontSize === "large" ? "white" : colors.text },
                    ]}
                  >
                    Large
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.settingsButton,
                { backgroundColor: colors.primary },
              ]}
              onPress={() => setShowSettings(false)}
            >
              <Text style={styles.settingsButtonText}>Done</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: StatusBar.currentHeight || 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    overflow: "hidden",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "white",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  bookItem: {
    padding: 15,
    borderBottomWidth: 1,
  },
  bookName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  chapterCount: {
    fontSize: 12,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
  },
  chapterContainer: {
    flex: 1,
  },
  recentContainer: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
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
  recentItemTitle: {
    fontSize: 16,
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
  bookmarkItemTitle: {
    fontSize: 16,
  },
  bookmarkItemNote: {
    fontSize: 14,
    marginTop: 4,
  },
  chapterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 5,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  chaptersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
  },
  chapterItem: {
    width: "18%",
    aspectRatio: 1,
    margin: "1%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  chapterNumber: {
    fontSize: 16,
    fontWeight: "500",
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
  },
  versesTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    marginLeft: 15,
  },
  translationToggle: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  translationOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "transparent",
  },
  translationOptionText: {
    fontSize: 14,
    fontWeight: "500",
  },
  versesList: {
    flex: 1,
    padding: 15,
  },
  verseItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  verseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  verseNumber: {
    fontWeight: "bold",
    marginRight: 8,
  },
  verseText: {
    lineHeight: 24,
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  verseTranslation: {
    lineHeight: 24,
    fontStyle: "italic",
  },
  verseActions: {
    flexDirection: "row",
  },
  verseAction: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  navigationControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  navButtonText: {
    color: "white",
    fontWeight: "500",
  },
  jumpButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 14,
    marginBottom: 15,
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: "top",
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
  testamentSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  testamentOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  verseSearchContainer: {
    overflow: "hidden",
    paddingHorizontal: 15,
  },
  verseSearchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 40,
  },
  verseSearchInput: {
    flex: 1,
    height: 40,
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
});
