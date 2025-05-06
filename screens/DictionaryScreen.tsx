"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  Animated,
  type TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../context/ThemeContext";
import {
  searchDictionary,
  getAllDictionaryEntries,
  type DictionaryEntry,
} from "../utils/dictionary";
import { useFavorites } from "../context/FavoritesContext";
import { addToHistory } from "../utils/historyUtils";

// Components
import DictionaryHeader from "../components/dictionary/DictionaryHeader";
import BottomNavigation from "../components/dictionary/BottomNavigation";
import SearchTab from "../components/dictionary/SearchTab";
import FavoritesTab from "../components/dictionary/FavoritesTab";
import AddWordTab from "../components/dictionary/AddWordTab";
import AudioTab from "../components/dictionary/AudioTab";
import MoreOptionsTab from "../components/dictionary/MoreOptionsTab";
import VoiceSearchModal from "../components/dictionary/VoiceSearchModal";
import AddWordModal from "../components/dictionary/AddWordModal";
import MoreOptionsModal from "../components/dictionary/MoreOptionsModal";
import LoadingOverlay from "../components/common/LoadingOverlay";

// Constants
const RECENT_SEARCHES_KEY = "recent_dictionary_searches";
const MAX_RECENT_SEARCHES = 15;
const MAX_SUGGESTIONS = 8;

export default function DictionaryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { colors } = useTheme();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<
    { term: string; timestamp: number; language: string }[]
  >([]);
  const [activeTab, setActiveTab] = useState("search");
  const [showMicModal, setShowMicModal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showAddWordModal, setShowAddWordModal] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [newWord, setNewWord] = useState({
    moussey: "",
    french: "",
    pronunciation: "",
  });
  const [dynamicSuggestions, setDynamicSuggestions] = useState<string[]>([]);

  // Refs
  const searchInputRef = useRef<TextInput>(null);
  const micScale = useRef(new Animated.Value(1)).current;
  const micPulse = useRef<Animated.CompositeAnimation | null>(null);

  // Load recent searches on component mount
  useEffect(() => {
    loadRecentSearches();
  }, []);

  // Start mic pulse animation
  useEffect(() => {
    if (isRecording) {
      startMicAnimation();
    } else {
      stopMicAnimation();
    }

    return () => {
      if (micPulse.current) {
        micPulse.current.stop();
      }
    };
  }, [isRecording]);

  const loadRecentSearches = async () => {
    try {
      const savedSearches = await AsyncStorage.getItem(RECENT_SEARCHES_KEY);
      if (savedSearches) {
        setRecentSearches(JSON.parse(savedSearches));
        generateDynamicSuggestions(JSON.parse(savedSearches));
      } else {
        generateDefaultSuggestions();
      }
    } catch (error) {
      console.error("Échec du chargement des recherches récentes", error);
      generateDefaultSuggestions();
    }
  };

  const startMicAnimation = () => {
    micPulse.current = Animated.loop(
      Animated.sequence([
        Animated.timing(micScale, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(micScale, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    micPulse.current.start();
  };

  const stopMicAnimation = () => {
    if (micPulse.current) {
      micPulse.current.stop();
    }
    micScale.setValue(1);
  };

  const generateDynamicSuggestions = (
    searches: { term: string; timestamp: number; language: string }[]
  ) => {
    // Get the most recent searches
    const recentTerms = searches.slice(0, 5).map((s) => s.term);

    // Get some common words from the dictionary
    const allEntries = getAllDictionaryEntries();

    // Prioritize French words for better visibility
    const frenchEntries = allEntries
      .filter((entry) => entry.id.startsWith("f2m_"))
      .slice(0, 10);
    const mousseyEntries = allEntries
      .filter((entry) => !entry.id.startsWith("f2m_"))
      .slice(0, 10);

    // Mix French and Moussey words
    const commonWords = [
      ...frenchEntries.map((entry) => entry.french),
      ...mousseyEntries.map((entry) => entry.moussey),
    ];

    // Combine recent searches with common words, remove duplicates
    const suggestions = Array.from(
      new Set([...recentTerms, ...commonWords])
    ).slice(0, MAX_SUGGESTIONS);

    setDynamicSuggestions(suggestions);
  };

  const generateDefaultSuggestions = () => {
    const allEntries = getAllDictionaryEntries();

    // Get a mix of French and Moussey words
    const frenchWords = allEntries
      .filter((entry) => entry.id.startsWith("f2m_"))
      .slice(0, MAX_SUGGESTIONS / 2)
      .map((entry) => entry.french);

    const mousseyWords = allEntries
      .filter((entry) => !entry.id.startsWith("f2m_"))
      .slice(0, MAX_SUGGESTIONS / 2)
      .map((entry) => entry.moussey);

    // Combine and shuffle
    const combined = [...frenchWords, ...mousseyWords];
    const shuffled = combined.sort(() => 0.5 - Math.random());

    setDynamicSuggestions(shuffled.slice(0, MAX_SUGGESTIONS));
  };

  const detectLanguage = (term: string): string => {
    // Simple heuristic: check if the term appears in French dictionary entries
    const allEntries = getAllDictionaryEntries();
    const frenchMatches = allEntries.filter(
      (entry) =>
        entry.id.startsWith("f2m_") &&
        entry.french.toLowerCase().includes(term.toLowerCase())
    );

    return frenchMatches.length > 0 ? "french" : "moussey";
  };

  const saveToRecentSearches = async (term: string) => {
    if (!term.trim()) return;

    try {
      // Detect language
      const language = detectLanguage(term);

      // Create new search entry
      const newSearch = {
        term,
        timestamp: Date.now(),
        language,
      };

      // Add to front of array, remove duplicates, and limit size
      const updatedSearches = [
        newSearch,
        ...recentSearches.filter(
          (s) => s.term.toLowerCase() !== term.toLowerCase()
        ),
      ].slice(0, MAX_RECENT_SEARCHES);

      setRecentSearches(updatedSearches);
      await AsyncStorage.setItem(
        RECENT_SEARCHES_KEY,
        JSON.stringify(updatedSearches)
      );

      // Update dynamic suggestions
      generateDynamicSuggestions(updatedSearches);
    } catch (error) {
      console.error("Échec de l'enregistrement de la recherche récente", error);
    }
  };

  const clearRecentSearches = async () => {
    try {
      setRecentSearches([]);
      await AsyncStorage.removeItem(RECENT_SEARCHES_KEY);
      generateDefaultSuggestions();
    } catch (error) {
      console.error("Échec de l'effacement des recherches récentes", error);
    }
  };

  // Filter words based on search query
  const filteredWords =
    searchQuery.trim() === "" ? [] : searchDictionary(searchQuery, "both");

  // Filter suggestions based on search query
  const filteredSuggestions =
    searchQuery.trim() === ""
      ? dynamicSuggestions
      : dynamicSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // Handlers
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    saveToRecentSearches(suggestion);
    Keyboard.dismiss();
  };

  const handleSelectRecentSearch = (term: string) => {
    setSearchQuery(term);
    setShowSuggestions(false);
    saveToRecentSearches(term);
    Keyboard.dismiss();
  };

  const handleSelectWord = (word: DictionaryEntry) => {
    // Save the appropriate term based on word type
    const searchTerm = word.id.startsWith("f2m_") ? word.french : word.moussey;
    saveToRecentSearches(searchTerm);

    // Add to history
    const translation = word.id.startsWith("f2m_") ? word.moussey : word.french;
    addToHistory({
      word: searchTerm,
      translation: translation,
      type: "dictionary",
    });

    navigation.navigate("WordDetail", { word });
  };

  const handlePronounceWord = () => {
    // In a real app, this would play audio
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleToggleFavorite = async (id: string) => {
    await toggleFavorite(id);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleMicPress = () => {
    setShowMicModal(true);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      // Simulate speech recognition result
      setTimeout(() => {
        setSearchQuery("bonjour");
        setShowMicModal(false);
        setIsRecording(false);
      }, 1500);
    }
  };

  const handleAddNewWord = async () => {
    if (!newWord.moussey.trim() || !newWord.french.trim()) {
      // Show error
      return;
    }

    // In a real app, this would add the word to the database
    // For now, we'll just close the modal
    setShowAddWordModal(false);
    setNewWord({ moussey: "", french: "", pronunciation: "" });
  };

  // Theme colors
  const backgroundColor = colors?.background || "#f5f5f5";

  // Render active tab content
  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return (
          <SearchTab
            searchQuery={searchQuery}
            showSuggestions={showSuggestions}
            recentSearches={recentSearches}
            filteredSuggestions={filteredSuggestions}
            filteredWords={filteredWords}
            colors={colors}
            onClearRecentSearches={clearRecentSearches}
            onSelectRecentSearch={handleSelectRecentSearch}
            onSelectSuggestion={handleSelectSuggestion}
            onClearSearch={handleClearSearch}
            onSelectWord={handleSelectWord}
            onPronounceWord={handlePronounceWord}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        );
      case "favorites":
        return <FavoritesTab colors={colors} />;
      case "add":
        return (
          <AddWordTab
            colors={colors}
            newWord={newWord}
            setNewWord={setNewWord}
            onAddWord={handleAddNewWord}
          />
        );
      case "audio":
        return (
          <AudioTab
            colors={colors}
            entries={getAllDictionaryEntries().slice(0, 5)}
          />
        );
      case "more":
        return <MoreOptionsTab colors={colors} />;
      default:
        return null;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { backgroundColor }]}>
        <StatusBar
          backgroundColor={colors?.primary || "#008080"}
          barStyle="light-content"
        />

        {/* Header with search */}
        <DictionaryHeader
          colors={colors}
          searchQuery={searchQuery}
          searchInputRef={searchInputRef}
          onSearchChange={(text) => {
            setSearchQuery(text);
            setShowSuggestions(true);
          }}
          onSearchFocus={() => {
            setShowSuggestions(true);
            setActiveTab("search");
          }}
          onSearchSubmit={() => {
            if (searchQuery.trim()) {
              saveToRecentSearches(searchQuery);
              setShowSuggestions(false);
            }
          }}
          onClearSearch={() => setSearchQuery("")}
          onMicPress={handleMicPress}
          onBackPress={() => navigation.goBack()}
        />

        {/* Content area */}
        <View style={[styles.content, { backgroundColor }]}>
          {renderContent()}
        </View>

        {/* Bottom navigation */}
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          colors={colors}
        />

        {/* Modals */}
        <VoiceSearchModal
          visible={showMicModal}
          colors={colors}
          isRecording={isRecording}
          micScale={micScale}
          onToggleRecording={toggleRecording}
          onClose={() => setShowMicModal(false)}
        />

        <AddWordModal
          visible={showAddWordModal}
          colors={colors}
          newWord={newWord}
          onChangeWord={setNewWord}
          onAddWord={handleAddNewWord}
          onClose={() => setShowAddWordModal(false)}
        />

        <MoreOptionsModal
          visible={showMoreOptions}
          colors={colors}
          onClose={() => setShowMoreOptions(false)}
        />

        {/* Loading indicator */}
        {isLoading && (
          <LoadingOverlay
            colors={colors}
            message="Lecture de la prononciation..."
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: StatusBar.currentHeight || 10,
  },
  backButton: {
    padding: 5,
    marginRight: 5,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  clearButton: {
    padding: 8,
  },
  micSearchButton: {
    padding: 10,
    marginLeft: 5,
  },
  suggestionsContainer: {
    backgroundColor: "white",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#f9f9f9",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  clearText: {
    color: "#008080",
    fontSize: 14,
    fontWeight: "500",
  },
  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  suggestionIcon: {
    marginRight: 10,
  },
  suggestionContent: {
    flex: 1,
  },
  suggestionText: {
    fontSize: 16,
    color: "#333",
  },
  suggestionLanguage: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },
  resultsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  resultsCount: {
    fontSize: 14,
    color: "#666",
  },
  clearSearchText: {
    color: "#008080",
    fontSize: 14,
    fontWeight: "500",
  },
  wordItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  wordContent: {
    flex: 1,
  },
  wordActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  pronounceButton: {
    marginRight: 10,
  },
  pronounceGradient: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  chevronContainer: {
    width: 20,
    alignItems: "center",
  },
  moussey: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  french: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  pronunciation: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
    fontStyle: "italic",
  },
  highlightedText: {
    backgroundColor: "rgba(255, 235, 59, 0.3)",
    fontWeight: "bold",
  },
});
