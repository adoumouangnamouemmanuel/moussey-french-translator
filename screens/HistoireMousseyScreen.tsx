"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
  Share,
  Alert,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import * as Clipboard from "expo-clipboard";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import modular components
import HistoiresHeader from "../components/histoires/HistoiresHeader";
import SearchResults from "../components/histoires/SearchResults";
import TabNavigation from "../components/histoires/TabNavigation";
import CategoryFilter from "../components/histoires/CategoryFilter";
import StoryList from "../components/histoires/StoryList";
import BookmarksList from "../components/histoires/BookmarksList";
import RecentReadingsList from "../components/histoires/RecentReadingsList";
import StoryDetails from "../components/histoires/StoryDetails";
import ParagraphOptionsModal from "../components/histoires/ParagraphOptionsModal";
import HighlightOptionsModal from "../components/histoires/HighlightOptionsModal";
import BookmarkModal from "../components/histoires/BookmarkModal";
import SettingsModal from "../components/histoires/SettingsModal";

// Mock stories data
import { stories } from "../data/histoires/storiesData";

// Types
type TranslationLanguage = "french" | "english" | "both";
type Bookmark = {
  id: string;
  storyId: string;
  title: string;
  date: string;
  note?: string;
};
type RecentReading = {
  id: string;
  storyId: string;
  title: string;
  date: string;
  lastPosition?: number;
};
type HighlightedText = {
  id: string;
  storyId: string;
  paragraphIndex: number;
  text: string;
  color: string;
  date: string;
};

export default function HistoiresMousseyScreen() {
  const { colors, isDark } = useTheme(); // Using isDark instead of nightMode
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [translationLanguage, setTranslationLanguage] =
    useState<TranslationLanguage>("both");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [advancedSearchQuery, setAdvancedSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [recentReadings, setRecentReadings] = useState<RecentReading[]>([]);
  const [highlights, setHighlights] = useState<HighlightedText[]>([]);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [bookmarkNote, setBookmarkNote] = useState("");
  const [selectedParagraph, setSelectedParagraph] = useState<{
    index: number;
    text: string;
  } | null>(null);
  const [showParagraphOptions, setShowParagraphOptions] = useState(false);
  const [showHighlightOptions, setShowHighlightOptions] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "stories" | "bookmarks" | "recent"
  >("stories");
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [existingHighlightId, setExistingHighlightId] = useState<string | null>(
    null
  );

  // Animation values
  const fadeAnim = useRef(new Animated.Value(1)).current; // Start with 1 instead of 0
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const paragraphOptionsAnim = useRef(new Animated.Value(0)).current;

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const bookmarksData = await AsyncStorage.getItem("moussey_bookmarks");
        if (bookmarksData) {
          setBookmarks(JSON.parse(bookmarksData));
        }

        const recentData = await AsyncStorage.getItem("moussey_recent");
        if (recentData) {
          setRecentReadings(JSON.parse(recentData));
        }

        const highlightsData = await AsyncStorage.getItem("moussey_highlights");
        if (highlightsData) {
          setHighlights(JSON.parse(highlightsData));
        }

        const fontSizeData = await AsyncStorage.getItem("moussey_fontSize");
        if (fontSizeData) {
          setFontSize(JSON.parse(fontSizeData));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    };

    loadData();
  }, []);

  // Save recent reading
  const saveRecentReading = async (storyId: string) => {
    try {
      const story = stories.find((s) => s.id === storyId);
      if (!story) return;

      const newReading: RecentReading = {
        id: Date.now().toString(),
        storyId,
        title: story.title,
        date: new Date().toISOString(),
      };

      // Add to beginning of array and limit to 10 items
      const updatedReadings = [
        newReading,
        ...recentReadings.filter((r) => r.storyId !== storyId),
      ].slice(0, 10);

      // Update state
      setRecentReadings(updatedReadings);

      // Save to AsyncStorage
      await AsyncStorage.setItem(
        "moussey_recent",
        JSON.stringify(updatedReadings)
      );
    } catch (error) {
      console.error("Error saving recent reading:", error);
      showToast("Erreur lors de l'enregistrement de la lecture récente");
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
        "moussey_recent",
        JSON.stringify(updatedReadings)
      );
      showToast("Lecture récente supprimée");
    } catch (error) {
      console.error("Error removing recent reading:", error);
      showToast("Erreur lors de la suppression");
    }
  };

  // Add bookmark
  const addBookmark = async () => {
    try {
      const story = stories.find((s) => s.id === selectedStory);
      if (!story) return;

      const newBookmark: Bookmark = {
        id: Date.now().toString(),
        storyId: selectedStory!,
        title: story.title,
        date: new Date().toISOString(),
        note: bookmarkNote,
      };

      const updatedBookmarks = [...bookmarks, newBookmark];
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem(
        "moussey_bookmarks",
        JSON.stringify(updatedBookmarks)
      );

      setShowBookmarkModal(false);
      setBookmarkNote("");
      showToast("Signet ajouté avec succès");
    } catch (error) {
      console.error("Error adding bookmark:", error);
      showToast("Erreur lors de l'ajout du signet");
    }
  };

  // Remove bookmark
  const removeBookmark = async (id: string) => {
    try {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== id
      );
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem(
        "moussey_bookmarks",
        JSON.stringify(updatedBookmarks)
      );
      showToast("Signet supprimé");
    } catch (error) {
      console.error("Error removing bookmark:", error);
      showToast("Erreur lors de la suppression du signet");
    }
  };

  // Add highlight
  const addHighlight = async (color: string) => {
    if (!selectedParagraph || !selectedStory) return;

    try {
      // If there's an existing highlight, update it instead of creating a new one
      if (existingHighlightId) {
        const updatedHighlights = highlights.map((highlight) =>
          highlight.id === existingHighlightId
            ? { ...highlight, color }
            : highlight
        );

        setHighlights(updatedHighlights);
        await AsyncStorage.setItem(
          "moussey_highlights",
          JSON.stringify(updatedHighlights)
        );
        showToast("Surlignage modifié");
      } else {
        // Create a new highlight
        const newHighlight: HighlightedText = {
          id: Date.now().toString(),
          storyId: selectedStory,
          paragraphIndex: selectedParagraph.index,
          text: selectedParagraph.text,
          color,
          date: new Date().toISOString(),
        };

        const updatedHighlights = [...highlights, newHighlight];
        setHighlights(updatedHighlights);
        await AsyncStorage.setItem(
          "moussey_highlights",
          JSON.stringify(updatedHighlights)
        );
        showToast("Texte surligné");
      }

      setShowHighlightOptions(false);
      setSelectedParagraph(null);
      setExistingHighlightId(null);
    } catch (error) {
      console.error("Error adding highlight:", error);
      showToast("Erreur lors du surlignage");
    }
  };

  // Remove highlight
  const removeHighlight = async () => {
    if (!existingHighlightId) return;

    try {
      const updatedHighlights = highlights.filter(
        (highlight) => highlight.id !== existingHighlightId
      );
      setHighlights(updatedHighlights);
      await AsyncStorage.setItem(
        "moussey_highlights",
        JSON.stringify(updatedHighlights)
      );

      setShowHighlightOptions(false);
      setSelectedParagraph(null);
      setExistingHighlightId(null);
      showToast("Surlignage supprimé");
    } catch (error) {
      console.error("Error removing highlight:", error);
      showToast("Erreur lors de la suppression du surlignage");
    }
  };

  // Save font size preference
  const saveFontSize = async (size: "small" | "medium" | "large") => {
    try {
      setFontSize(size);
      await AsyncStorage.setItem("moussey_fontSize", JSON.stringify(size));
    } catch (error) {
      console.error("Error saving font size:", error);
    }
  };

  // Show toast message
  const showToast = (message: string) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert("", message);
    }
  };

  // Toggle advanced search
  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
    Animated.timing(searchBarAnim, {
      toValue: showAdvancedSearch ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    if (showAdvancedSearch) {
      setAdvancedSearchQuery("");
      setSearchResults([]);
    }
  };

  // Search in story content
  const searchInContent = () => {
    if (!advancedSearchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const query = advancedSearchQuery.toLowerCase();
    const results: any[] = [];

    stories.forEach((story) => {
      story.content.forEach((paragraph, index) => {
        const matchesFrench = paragraph.paragraph.toLowerCase().includes(query);
        const matchesEnglish = paragraph.translation
          .toLowerCase()
          .includes(query);

        if (matchesFrench || matchesEnglish) {
          results.push({
            id: `${story.id}-${index}`,
            storyId: story.id,
            storyTitle: story.title,
            paragraphIndex: index,
            text: matchesFrench ? paragraph.paragraph : paragraph.translation,
            isEnglish: !matchesFrench && matchesEnglish,
          });
        }
      });
    });

    setSearchResults(results);
    setIsSearching(false);
  };

  // Filter stories based on search query and category
  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      story.categories.some((cat) =>
        cat.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === null || story.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  // Get all unique categories
  const categories = Array.from(
    new Set(stories.flatMap((story) => story.categories))
  );

  // Handle story selection
  const handleSelectStory = (id: string) => {
    setSelectedStory(id);
    saveRecentReading(id);
  };

  // Handle back from story details - FIXED
  const handleBackFromStory = () => {
    // Immediately set the selected story to null without animation
    fadeAnim.setValue(1); // Ensure opacity is 1
    setSelectedStory(null);
  };

  // Handle paragraph press
  const handleParagraphPress = (index: number, text: string) => {
    setSelectedParagraph({ index, text });

    // Check if this paragraph already has a highlight
    const existingHighlight = highlights.find(
      (h) => h.storyId === selectedStory && h.paragraphIndex === index
    );

    if (existingHighlight) {
      setExistingHighlightId(existingHighlight.id);
    } else {
      setExistingHighlightId(null);
    }

    setShowParagraphOptions(true);

    Animated.timing(paragraphOptionsAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Close paragraph options
  const closeParagraphOptions = () => {
    Animated.timing(paragraphOptionsAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setShowParagraphOptions(false);
      setSelectedParagraph(null);
      setExistingHighlightId(null);
    });
  };

  // Copy paragraph text
  const copyParagraphText = () => {
    if (!selectedParagraph) return;

    Clipboard.setString(selectedParagraph.text);
    closeParagraphOptions();
    showToast("Texte copié");
  };

  // Share paragraph text
  const shareParagraphText = () => {
    if (!selectedParagraph || !selectedStory) return;

    const story = stories.find((s) => s.id === selectedStory);
    if (!story) return;

    Share.share({
      message: `"${selectedParagraph.text}" - ${story.title}`,
      title: story.title,
    });

    closeParagraphOptions();
  };

  // Navigate to search result
  const navigateToSearchResult = (result: any) => {
    setSelectedStory(result.storyId);
    setShowAdvancedSearch(false);
    searchBarAnim.setValue(0);

    // Highlight the paragraph after navigation
    setTimeout(() => {
      setSelectedParagraph({
        index: result.paragraphIndex,
        text: result.text,
      });
      setShowParagraphOptions(true);
    }, 500);
  };

  // Check if story is bookmarked
  const isBookmarked = (storyId: string) => {
    return bookmarks.some((bookmark) => bookmark.storyId === storyId);
  };

  // Toggle audio playback
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    showToast(isPlaying ? "Audio en pause" : "Lecture audio démarrée");
  };

  // Share story
  const shareStory = () => {
    if (!selectedStory) return;

    const story = stories.find((s) => s.id === selectedStory);
    if (!story) return;

    Share.share({
      message: `Découvrez cette histoire Moussey: "${story.title}" - ${story.shortDescription}`,
      title: story.title,
    });
  };

  // Get font size values
  const getFontSize = () => {
    switch (fontSize) {
      case "small":
        return { paragraph: 14, title: 18, subtitle: 16 };
      case "large":
        return { paragraph: 18, title: 22, subtitle: 20 };
      default:
        return { paragraph: 16, title: 20, subtitle: 18 };
    }
  };

  // Render story icon based on category
  const renderStoryIcon = (imageUrl: string) => {
    switch (imageUrl) {
      case "origins":
        return <Ionicons name="people" size={40} color={colors.primary} />;
      case "lake":
        return <Ionicons name="water" size={40} color={colors.primary} />;
      case "king":
        return (
          <Ionicons name="trophy-outline" size={40} color={colors.primary} />
        );
      case "forest":
        return <Ionicons name="leaf" size={40} color={colors.primary} />;
      case "wedding":
        return <Ionicons name="heart" size={40} color={colors.primary} />;
      default:
        return <Ionicons name="book" size={40} color={colors.primary} />;
    }
  };

  // Handle bookmark button press
  const handleBookmarkPress = () => {
    if (isBookmarked(selectedStory!)) {
      const bookmark = bookmarks.find((b) => b.storyId === selectedStory);
      if (bookmark) removeBookmark(bookmark.id);
    } else {
      setShowBookmarkModal(true);
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: colors.background, opacity: fadeAnim },
      ]}
    >
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <HistoiresHeader
        colors={colors}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showAdvancedSearch={showAdvancedSearch}
        toggleAdvancedSearch={toggleAdvancedSearch}
        advancedSearchQuery={advancedSearchQuery}
        setAdvancedSearchQuery={setAdvancedSearchQuery}
        searchInContent={searchInContent}
        onSettingsPress={() => setShowSettings(true)}
        isDark={isDark}
        searchBarAnim={searchBarAnim}
      />

      {/* Search Results */}
      {showAdvancedSearch && (
        <SearchResults
          colors={colors}
          searchResults={searchResults}
          navigateToSearchResult={navigateToSearchResult}
          advancedSearchQuery={advancedSearchQuery}
        />
      )}

      {selectedStory ? (
        // Story Details
        <StoryDetails
          colors={colors}
          story={stories.find((s) => s.id === selectedStory)!}
          isBookmarked={isBookmarked(selectedStory)}
          onBackPress={handleBackFromStory}
          onBookmarkPress={handleBookmarkPress}
          onSharePress={shareStory}
          onAudioToggle={toggleAudio}
          isPlaying={isPlaying}
          translationLanguage={translationLanguage}
          setTranslationLanguage={setTranslationLanguage}
          highlights={highlights}
          onParagraphLongPress={handleParagraphPress}
          renderStoryIcon={renderStoryIcon}
          fontSizes={getFontSize()}
        />
      ) : !showAdvancedSearch ? (
        // Main Content
        <View style={styles.contentContainer}>
          {/* Tabs */}
          <TabNavigation
            colors={colors}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Tab Content */}
          {activeTab === "stories" && (
            <>
              {/* Categories */}
              <CategoryFilter
                colors={colors}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              {/* Stories list */}
              <StoryList
                colors={colors}
                stories={filteredStories}
                onSelectStory={handleSelectStory}
                isBookmarked={isBookmarked}
                renderStoryIcon={renderStoryIcon}
              />
            </>
          )}

          {activeTab === "bookmarks" && (
            <BookmarksList
              colors={colors}
              bookmarks={bookmarks}
              onSelectStory={handleSelectStory}
              onRemoveBookmark={removeBookmark}
            />
          )}

          {activeTab === "recent" && (
            <RecentReadingsList
              colors={colors}
              recentReadings={recentReadings}
              onSelectStory={handleSelectStory}
              onRemoveRecentReading={removeRecentReading}
            />
          )}
        </View>
      ) : null}

      {/* Paragraph Options Modal */}
      <ParagraphOptionsModal
        colors={colors}
        visible={showParagraphOptions}
        onClose={closeParagraphOptions}
        onCopy={copyParagraphText}
        onShare={shareParagraphText}
        onHighlight={() => setShowHighlightOptions(true)}
        paragraphOptionsAnim={paragraphOptionsAnim}
      />

      {/* Highlight Options Modal */}
      <HighlightOptionsModal
        colors={colors}
        visible={showHighlightOptions}
        onClose={() => setShowHighlightOptions(false)}
        onSelectColor={addHighlight}
        onRemoveHighlight={removeHighlight}
        hasExistingHighlight={!!existingHighlightId}
      />

      {/* Bookmark Modal */}
      <BookmarkModal
        colors={colors}
        visible={showBookmarkModal}
        onClose={() => setShowBookmarkModal(false)}
        onSave={addBookmark}
        storyTitle={
          selectedStory
            ? stories.find((s) => s.id === selectedStory)?.title || ""
            : ""
        }
        initialNote={bookmarkNote}
      />

      {/* Settings Modal */}
      <SettingsModal
        colors={colors}
        visible={showSettings}
        onClose={() => setShowSettings(false)}
        fontSize={fontSize}
        onFontSizeChange={saveFontSize}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
