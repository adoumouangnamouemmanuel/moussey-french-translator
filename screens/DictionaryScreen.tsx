"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Animated,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext";
import {
  searchDictionary,
  getAllDictionaryEntries,
  type DictionaryEntry,
} from "../utils/dictionary";
import { useFavorites } from "../context/FavoritesContext";
import { addToHistory } from "../utils/historyUtils";

type WordItemProps = {
  item: DictionaryEntry;
  onPress: () => void;
  onPronounce: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  highlightText?: string;
  themeColors?: any;
};

// Constants
const RECENT_SEARCHES_KEY = "recent_dictionary_searches";
const MAX_RECENT_SEARCHES = 15;
const MAX_SUGGESTIONS = 8;

// WordItem component with improved handling of French words
const WordItem = ({
  item,
  onPress,
  onPronounce,
  onToggleFavorite,
  isFavorite,
  highlightText,
  themeColors,
}: WordItemProps) => {
  // Animation for press feedback
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      friction: 5,
      tension: 300,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 400,
      useNativeDriver: true,
    }).start();
  };

  // Function to highlight matching text
  const highlightMatch = (text: string, highlight: string) => {
    if (!highlight || highlight.trim() === "") return <Text>{text}</Text>;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <Text key={i} style={styles.highlightedText}>
              {part}
            </Text>
          ) : (
            <Text key={i}>{part}</Text>
          )
        )}
      </>
    );
  };

  // Determine if this is a French primary match
  const isFrenchPrimary = item.id.startsWith("f2m_");

  // Use theme colors or fallback to original colors
  const cardColor = themeColors?.card || "white";
  const textColor = themeColors?.text || "#333";
  const inactiveColor = themeColors?.inactive || "#777";
  const primaryColor = themeColors?.primary || "#008080";

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          styles.wordItem,
          {
            backgroundColor: cardColor,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.wordContent}>
          {/* If it's a French primary match, show French first */}
          {isFrenchPrimary ? (
            <>
              <Text style={[styles.moussey, { color: textColor }]}>
                {highlightText
                  ? highlightMatch(item.french, highlightText)
                  : item.french}
              </Text>
              <Text style={[styles.french, { color: inactiveColor }]}>
                {item.moussey}
              </Text>
            </>
          ) : (
            <>
              <Text style={[styles.moussey, { color: textColor }]}>
                {highlightText
                  ? highlightMatch(item.moussey, highlightText)
                  : item.moussey}
              </Text>
              <Text style={[styles.french, { color: inactiveColor }]}>
                {highlightText
                  ? highlightMatch(item.french, highlightText)
                  : item.french}
              </Text>
            </>
          )}
          {item.pronunciation && !isFrenchPrimary && (
            <Text style={[styles.pronunciation, { color: inactiveColor }]}>
              {item.pronunciation}
            </Text>
          )}
        </View>
        <View style={styles.wordActions}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={onToggleFavorite}
          >
            <Ionicons
              name={isFavorite ? "star" : "star-outline"}
              size={20}
              color={isFavorite ? "#FFD700" : primaryColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pronounceButton}
            onPress={onPronounce}
          >
            <LinearGradient
              colors={themeColors?.headerBackground || ["#00a0a0", "#008080"]}
              style={styles.pronounceGradient}
            >
              <Ionicons name="volume-medium-outline" size={18} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.chevronContainer}>
            <Ionicons name="chevron-forward" size={20} color={primaryColor} />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function DictionaryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { colors } = useTheme();
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
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
  const searchInputRef = useRef<TextInput>(null);

  // Animation for mic pulse
  const micScale = useRef(new Animated.Value(1)).current;
  const micPulse = useRef<Animated.CompositeAnimation | null>(null);

  // Load recent searches on component mount
  useEffect(() => {
    const loadRecentSearches = async () => {
      try {
        const savedSearches = await AsyncStorage.getItem(RECENT_SEARCHES_KEY);
        if (savedSearches) {
          setRecentSearches(JSON.parse(savedSearches));
          // Generate dynamic suggestions based on recent searches
          generateDynamicSuggestions(JSON.parse(savedSearches));
        } else {
          // If no recent searches, use default suggestions
          generateDefaultSuggestions();
        }
      } catch (error) {
        console.error("Échec du chargement des recherches récentes", error);
        generateDefaultSuggestions();
      }
    };

    loadRecentSearches();
  }, []);

  // Generate dynamic suggestions based on recent searches and dictionary data
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

  // Generate default suggestions if no recent searches
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

  // Start mic pulse animation
  useEffect(() => {
    if (isRecording) {
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
    } else {
      if (micPulse.current) {
        micPulse.current.stop();
      }
      micScale.setValue(1);
    }

    return () => {
      if (micPulse.current) {
        micPulse.current.stop();
      }
    };
  }, [isRecording]);

  // Determine if a search term is likely French or Moussey
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

  // Save a search term to recent searches
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

  // Clear recent searches
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

  // Handle suggestion selection
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    saveToRecentSearches(suggestion);
    Keyboard.dismiss();
  };

  // Handle recent search selection
  const handleSelectRecentSearch = (term: string) => {
    setSearchQuery(term);
    setShowSuggestions(false);
    saveToRecentSearches(term);
    Keyboard.dismiss();
  };

  // Handle word selection
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

  // Handle word pronunciation
  const handlePronounceWord = () => {
    // In a real app, this would play audio
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Handle toggle favorite
  const handleToggleFavorite = async (id: string) => {
    await toggleFavorite(id);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(true);
    searchInputRef.current?.focus();
  };

  // Handle mic button press
  const handleMicPress = () => {
    setShowMicModal(true);
  };

  // Toggle recording state
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

  // Handle add word button press
  const handleAddWordPress = () => {
    setShowAddWordModal(true);
  };

  // Handle more options button press
  const handleMoreOptionsPress = () => {
    setShowMoreOptions(true);
  };

  // Handle add new word
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

  // Use theme colors or fallback to original colors
  const headerColors: [string, string, ...string[]] = (
    colors?.headerBackground?.length >= 2
      ? colors.headerBackground
      : ["#00a0a0", "#008080"]
  ) as [string, string, ...string[]];
  const primaryColor = colors?.primary || "#008080";
  const backgroundColor = colors?.background || "#f5f5f5";
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const borderColor = colors?.border || "#e0e0e0";

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "search":
        return (
          <>
            {showSuggestions && searchQuery.trim() === "" ? (
              // Show recent searches and suggestions when search is empty
              <View
                style={[
                  styles.suggestionsContainer,
                  { backgroundColor: cardColor },
                ]}
              >
                {recentSearches.length > 0 && (
                  <View>
                    <View
                      style={[
                        styles.sectionHeader,
                        { backgroundColor: colors?.border || "#f9f9f9" },
                      ]}
                    >
                      <Text style={[styles.sectionTitle, { color: textColor }]}>
                        Recherches Récentes
                      </Text>
                      <TouchableOpacity onPress={clearRecentSearches}>
                        <Text
                          style={[styles.clearText, { color: primaryColor }]}
                        >
                          Effacer
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      data={recentSearches}
                      keyExtractor={(item, index) => `recent-${index}`}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={[
                            styles.suggestionItem,
                            { borderTopColor: borderColor },
                          ]}
                          onPress={() => handleSelectRecentSearch(item.term)}
                        >
                          <Ionicons
                            name="time-outline"
                            size={18}
                            color={inactiveColor}
                            style={styles.suggestionIcon}
                          />
                          <View style={styles.suggestionContent}>
                            <Text
                              style={[
                                styles.suggestionText,
                                { color: textColor },
                              ]}
                            >
                              {item.term}
                            </Text>
                            <Text
                              style={[
                                styles.suggestionLanguage,
                                { color: inactiveColor },
                              ]}
                            >
                              {item.language === "french"
                                ? "Français"
                                : "Moussey"}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      )}
                      scrollEnabled={false}
                    />
                  </View>
                )}

                <View
                  style={[
                    styles.sectionHeader,
                    { backgroundColor: colors?.border || "#f9f9f9" },
                  ]}
                >
                  <Text style={[styles.sectionTitle, { color: textColor }]}>
                    Suggestions
                  </Text>
                </View>
                <FlatList
                  data={filteredSuggestions}
                  keyExtractor={(item) => `suggestion-${item}`}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.suggestionItem,
                        { borderTopColor: borderColor },
                      ]}
                      onPress={() => handleSelectSuggestion(item)}
                    >
                      <Ionicons
                        name="search-outline"
                        size={18}
                        color={inactiveColor}
                        style={styles.suggestionIcon}
                      />
                      <Text
                        style={[styles.suggestionText, { color: textColor }]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  scrollEnabled={false}
                />
              </View>
            ) : showSuggestions &&
              filteredSuggestions.length > 0 &&
              searchQuery.trim() !== "" ? (
              // Show filtered suggestions when typing
              <View
                style={[
                  styles.suggestionsContainer,
                  { backgroundColor: cardColor },
                ]}
              >
                <FlatList
                  data={filteredSuggestions}
                  keyExtractor={(item) => `suggestion-${item}`}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.suggestionItem,
                        { borderTopColor: borderColor },
                      ]}
                      onPress={() => handleSelectSuggestion(item)}
                    >
                      <Ionicons
                        name="search-outline"
                        size={18}
                        color={inactiveColor}
                        style={styles.suggestionIcon}
                      />
                      <Text
                        style={[styles.suggestionText, { color: textColor }]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            ) : (
              // Show search results
              <>
                {searchQuery.trim() !== "" && (
                  <View
                    style={[
                      styles.resultsHeader,
                      {
                        backgroundColor: colors?.border || "#f9f9f9",
                        borderBottomColor: borderColor,
                      },
                    ]}
                  >
                    <Text
                      style={[styles.resultsCount, { color: inactiveColor }]}
                    >
                      {filteredWords.length}{" "}
                      {filteredWords.length === 1 ? "résultat" : "résultats"}
                    </Text>
                    <TouchableOpacity onPress={handleClearSearch}>
                      <Text
                        style={[
                          styles.clearSearchText,
                          { color: primaryColor },
                        ]}
                      >
                        Effacer la recherche
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                <FlatList
                  data={filteredWords}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <WordItem
                      item={item}
                      onPress={() => handleSelectWord(item)}
                      onPronounce={handlePronounceWord}
                      onToggleFavorite={() => handleToggleFavorite(item.id)}
                      isFavorite={isFavorite(item.id)}
                      highlightText={searchQuery}
                      themeColors={colors}
                    />
                  )}
                  ListEmptyComponent={
                    searchQuery.trim() !== "" ? (
                      <View style={styles.emptyContainer}>
                        <Ionicons
                          name="search-outline"
                          size={50}
                          color={inactiveColor}
                        />
                        <Text
                          style={[styles.emptyText, { color: inactiveColor }]}
                        >
                          Aucun mot trouvé
                        </Text>
                        <Text
                          style={[
                            styles.emptySubtext,
                            { color: inactiveColor },
                          ]}
                        >
                          Essayez un terme de recherche différent ou parcourez
                          les suggestions
                        </Text>
                        <TouchableOpacity
                          style={styles.browseButton}
                          onPress={handleClearSearch}
                        >
                          <LinearGradient
                            colors={headerColors}
                            style={styles.browseButtonGradient}
                          >
                            <Text style={styles.browseButtonText}>
                              Parcourir les suggestions
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={styles.emptyContainer}>
                        <Ionicons
                          name="book-outline"
                          size={50}
                          color={inactiveColor}
                        />
                        <Text style={[styles.emptyText, { color: textColor }]}>
                          Dictionnaire
                        </Text>
                        <Text
                          style={[
                            styles.emptySubtext,
                            { color: inactiveColor },
                          ]}
                        >
                          Recherchez des mots en Moussey ou en Français
                        </Text>
                      </View>
                    )
                  }
                />
              </>
            )}
          </>
        );
      case "favorites":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Favoris
              </Text>
            </View>
            <View style={styles.emptyContainer}>
              <Ionicons name="star" size={50} color={inactiveColor} />
              <Text style={[styles.emptyText, { color: textColor }]}>
                Pas encore de favoris
              </Text>
              <Text style={[styles.emptySubtext, { color: inactiveColor }]}>
                Appuyez sur l'icône en forme d'étoile sur n'importe quel mot
                pour l'ajouter à vos favoris
              </Text>
            </View>
          </View>
        );
      case "add":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Ajouter un nouveau mot
              </Text>
            </View>
            <View style={[styles.addWordForm, { backgroundColor: cardColor }]}>
              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Mot Moussey
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Entrez le mot en Moussey"
                  placeholderTextColor={inactiveColor}
                  value={newWord.moussey}
                  onChangeText={(text) =>
                    setNewWord({ ...newWord, moussey: text })
                  }
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Traduction Française
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Entrez la traduction française"
                  placeholderTextColor={inactiveColor}
                  value={newWord.french}
                  onChangeText={(text) =>
                    setNewWord({ ...newWord, french: text })
                  }
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Prononciation
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Entrez la prononciation"
                  placeholderTextColor={inactiveColor}
                  value={newWord.pronunciation}
                  onChangeText={(text) =>
                    setNewWord({ ...newWord, pronunciation: text })
                  }
                />
              </View>
              <TouchableOpacity
                style={[styles.submitButton, { backgroundColor: primaryColor }]}
                onPress={handleAddNewWord}
              >
                <Text style={styles.submitButtonText}>Ajouter le mot</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case "mic":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Recherche vocale
              </Text>
            </View>
            <View style={styles.micContainer}>
              <Text style={[styles.micInstructions, { color: textColor }]}>
                Appuyez sur le microphone et prononcez un mot à rechercher
              </Text>
              <TouchableOpacity
                style={[styles.micButton, { backgroundColor: primaryColor }]}
                onPress={toggleRecording}
              >
                <Ionicons name="mic" size={40} color="white" />
              </TouchableOpacity>
              <Text style={[styles.micStatus, { color: inactiveColor }]}>
                {isRecording ? "Écoute en cours..." : "Appuyez pour commencer"}
              </Text>
            </View>
          </View>
        );
      case "audio":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Dictionnaire Audio
              </Text>
            </View>
            <View style={styles.audioListContainer}>
              <Text style={[styles.audioSectionTitle, { color: textColor }]}>
                Récemment écoutés
              </Text>
              <FlatList
                data={getAllDictionaryEntries().slice(0, 5)}
                keyExtractor={(item) => `audio-${item.id}`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.audioItem, { backgroundColor: cardColor }]}
                  >
                    <View style={styles.audioItemContent}>
                      <Text
                        style={[styles.audioItemTitle, { color: textColor }]}
                      >
                        {item.id.startsWith("f2m_")
                          ? item.french
                          : item.moussey}
                      </Text>
                      <Text
                        style={[
                          styles.audioItemSubtitle,
                          { color: inactiveColor },
                        ]}
                      >
                        {item.id.startsWith("f2m_")
                          ? item.moussey
                          : item.french}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={[
                        styles.audioPlayButton,
                        { backgroundColor: primaryColor },
                      ]}
                    >
                      <Ionicons name="play" size={16} color="white" />
                    </TouchableOpacity>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        );
      case "more":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Plus d'options
              </Text>
            </View>
            <View style={styles.moreOptionsContainer}>
              <TouchableOpacity
                style={[styles.moreOption, { backgroundColor: cardColor }]}
              >
                <Ionicons
                  name="download-outline"
                  size={24}
                  color={primaryColor}
                  style={styles.moreOptionIcon}
                />
                <View style={styles.moreOptionContent}>
                  <Text style={[styles.moreOptionTitle, { color: textColor }]}>
                    Télécharger le dictionnaire
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    Utiliser le dictionnaire hors ligne
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={inactiveColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.moreOption, { backgroundColor: cardColor }]}
              >
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={primaryColor}
                  style={styles.moreOptionIcon}
                />
                <View style={styles.moreOptionContent}>
                  <Text style={[styles.moreOptionTitle, { color: textColor }]}>
                    Paramètres
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    Personnaliser votre dictionnaire
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={inactiveColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.moreOption, { backgroundColor: cardColor }]}
              >
                <Ionicons
                  name="help-circle-outline"
                  size={24}
                  color={primaryColor}
                  style={styles.moreOptionIcon}
                />
                <View style={styles.moreOptionContent}>
                  <Text style={[styles.moreOptionTitle, { color: textColor }]}>
                    Aide & Commentaires
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    Obtenir de l'aide ou envoyer des commentaires
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={inactiveColor}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.moreOption, { backgroundColor: cardColor }]}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={24}
                  color={primaryColor}
                  style={styles.moreOptionIcon}
                />
                <View style={styles.moreOptionContent}>
                  <Text style={[styles.moreOptionTitle, { color: textColor }]}>
                    À propos
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    Version et informations sur l'application
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={inactiveColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <StatusBar backgroundColor={primaryColor} barStyle="light-content" />

        {/* Search header */}
        <LinearGradient colors={headerColors} style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View
            style={[styles.searchContainer, { backgroundColor: cardColor }]}
          >
            <TextInput
              ref={searchInputRef}
              style={[styles.searchInput, { color: textColor }]}
              placeholder="rechercher..."
              placeholderTextColor={inactiveColor}
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                setShowSuggestions(true);
              }}
              onFocus={() => {
                setShowSuggestions(true);
                setActiveTab("search");
              }}
              returnKeyType="search"
              onSubmitEditing={() => {
                if (searchQuery.trim()) {
                  saveToRecentSearches(searchQuery);
                  setShowSuggestions(false);
                }
              }}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={() => setSearchQuery("")}
              >
                <Ionicons name="close-circle" size={18} color={inactiveColor} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={handleMicPress}
            style={styles.micSearchButton}
          >
            <Ionicons name="mic-outline" size={24} color="white" />
          </TouchableOpacity>
        </LinearGradient>

        {/* Content area */}
        <View style={[styles.content, { backgroundColor: backgroundColor }]}>
          {renderContent()}
        </View>

        {/* Bottom navigation */}
        <View
          style={[
            styles.bottomNav,
            { backgroundColor: cardColor, borderTopColor: borderColor },
          ]}
        >
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("favorites")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "favorites" ? "star" : "star-outline"}
                size={24}
                color={activeTab === "favorites" ? primaryColor : inactiveColor}
              />
              {activeTab === "favorites" && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: primaryColor },
                  ]}
                />
              )}
            </View>
            <Text
              style={[
                styles.navLabel,
                {
                  color:
                    activeTab === "favorites" ? primaryColor : inactiveColor,
                },
              ]}
            >
              Favoris
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("add")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "add" ? "add-circle" : "add-circle-outline"}
                size={24}
                color={activeTab === "add" ? primaryColor : inactiveColor}
              />
              {activeTab === "add" && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: primaryColor },
                  ]}
                />
              )}
            </View>
            <Text
              style={[
                styles.navLabel,
                { color: activeTab === "add" ? primaryColor : inactiveColor },
              ]}
            >
              Ajouter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("mic")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "mic" ? "mic" : "mic-outline"}
                size={24}
                color={activeTab === "mic" ? primaryColor : inactiveColor}
              />
              {activeTab === "mic" && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: primaryColor },
                  ]}
                />
              )}
            </View>
            <Text
              style={[
                styles.navLabel,
                { color: activeTab === "mic" ? primaryColor : inactiveColor },
              ]}
            >
              Vocal
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("audio")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={
                  activeTab === "audio"
                    ? "volume-high"
                    : "volume-medium-outline"
                }
                size={24}
                color={activeTab === "audio" ? primaryColor : inactiveColor}
              />
              {activeTab === "audio" && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: primaryColor },
                  ]}
                />
              )}
            </View>
            <Text
              style={[
                styles.navLabel,
                { color: activeTab === "audio" ? primaryColor : inactiveColor },
              ]}
            >
              Audio
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("search")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "search" ? "search" : "search-outline"}
                size={24}
                color={activeTab === "search" ? primaryColor : inactiveColor}
              />
              {activeTab === "search" && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: primaryColor },
                  ]}
                />
              )}
            </View>
            <Text
              style={[
                styles.navLabel,
                {
                  color: activeTab === "search" ? primaryColor : inactiveColor,
                },
              ]}
            >
              Recherche
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("more")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "more" ? "menu" : "menu-outline"}
                size={24}
                color={activeTab === "more" ? primaryColor : inactiveColor}
              />
              {activeTab === "more" && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: primaryColor },
                  ]}
                />
              )}
            </View>
            <Text
              style={[
                styles.navLabel,
                { color: activeTab === "more" ? primaryColor : inactiveColor },
              ]}
            >
              Plus
            </Text>
          </TouchableOpacity>
        </View>

        {/* Voice search modal */}
        <Modal visible={showMicModal} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { backgroundColor: cardColor }]}>
              <Text style={[styles.modalTitle, { color: textColor }]}>
                Recherche Vocale
              </Text>
              <Text style={[styles.modalSubtitle, { color: inactiveColor }]}>
                Parlez clairement pour rechercher un mot
              </Text>

              <Animated.View
                style={[
                  styles.micButtonLarge,
                  {
                    backgroundColor: primaryColor,
                    transform: [{ scale: micScale }],
                  },
                ]}
              >
                <TouchableOpacity
                  style={styles.micButtonInner}
                  onPress={toggleRecording}
                >
                  <Ionicons
                    name={isRecording ? "stop" : "mic"}
                    size={40}
                    color="white"
                  />
                </TouchableOpacity>
              </Animated.View>

              <Text
                style={[
                  styles.recordingStatus,
                  { color: isRecording ? primaryColor : inactiveColor },
                ]}
              >
                {isRecording
                  ? "Écoute en cours..."
                  : "Appuyez sur le microphone pour commencer"}
              </Text>

              <TouchableOpacity
                style={[styles.modalCloseButton, { borderColor: borderColor }]}
                onPress={() => setShowMicModal(false)}
              >
                <Text style={[styles.modalCloseText, { color: primaryColor }]}>
                  Annuler
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Add word modal */}
        <Modal visible={showAddWordModal} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { backgroundColor: cardColor }]}>
              <Text style={[styles.modalTitle, { color: textColor }]}>
                Ajouter un nouveau mot
              </Text>

              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Mot Moussey
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Entrez le mot en Moussey"
                  placeholderTextColor={inactiveColor}
                  value={newWord.moussey}
                  onChangeText={(text) =>
                    setNewWord({ ...newWord, moussey: text })
                  }
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Traduction Française
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Entrez la traduction française"
                  placeholderTextColor={inactiveColor}
                  value={newWord.french}
                  onChangeText={(text) =>
                    setNewWord({ ...newWord, french: text })
                  }
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Prononciation
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Entrez la prononciation"
                  placeholderTextColor={inactiveColor}
                  value={newWord.pronunciation}
                  onChangeText={(text) =>
                    setNewWord({ ...newWord, pronunciation: text })
                  }
                />
              </View>

              <View style={styles.modalActions}>
                <TouchableOpacity
                  style={[styles.modalButton, { borderColor: borderColor }]}
                  onPress={() => setShowAddWordModal(false)}
                >
                  <Text
                    style={[styles.modalButtonText, { color: inactiveColor }]}
                  >
                    Annuler
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { backgroundColor: primaryColor },
                  ]}
                  onPress={handleAddNewWord}
                >
                  <Text style={styles.modalButtonTextPrimary}>Enregistrer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* More options modal */}
        <Modal visible={showMoreOptions} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={() => setShowMoreOptions(false)}>
            <View style={styles.modalOverlay}>
              <View
                style={[styles.optionsMenu, { backgroundColor: cardColor }]}
              >
                <TouchableOpacity style={styles.optionItem}>
                  <Ionicons
                    name="settings-outline"
                    size={24}
                    color={primaryColor}
                    style={styles.optionIcon}
                  />
                  <Text style={[styles.optionText, { color: textColor }]}>
                    Paramètres
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                  <Ionicons
                    name="download-outline"
                    size={24}
                    color={primaryColor}
                    style={styles.optionIcon}
                  />
                  <Text style={[styles.optionText, { color: textColor }]}>
                    Télécharger le dictionnaire
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                  <Ionicons
                    name="help-circle-outline"
                    size={24}
                    color={primaryColor}
                    style={styles.optionIcon}
                  />
                  <Text style={[styles.optionText, { color: textColor }]}>
                    Aide
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionItem}>
                  <Ionicons
                    name="information-circle-outline"
                    size={24}
                    color={primaryColor}
                    style={styles.optionIcon}
                  />
                  <Text style={[styles.optionText, { color: textColor }]}>
                    À propos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Loading indicator */}
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <View
              style={[styles.loadingContainer, { backgroundColor: cardColor }]}
            >
              <ActivityIndicator size="large" color={primaryColor} />
              <Text style={[styles.loadingText, { color: textColor }]}>
                Lecture de la prononciation...
              </Text>
            </View>
          </View>
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
  content: {
    flex: 1,
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
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
    fontWeight: "500",
  },
  emptySubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 5,
  },
  browseButton: {
    marginTop: 15,
    overflow: "hidden",
    borderRadius: 20,
  },
  browseButtonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  browseButtonText: {
    color: "white",
    fontWeight: "500",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  navIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  activeIndicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#008080",
    marginTop: 4,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingText: {
    marginTop: 10,
    color: "#333",
    fontSize: 16,
  },
  tabContentContainer: {
    flex: 1,
  },
  tabHeader: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addWordForm: {
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  formGroup: {
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  micContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  micInstructions: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  micStatus: {
    fontSize: 14,
    marginTop: 10,
  },
  audioListContainer: {
    padding: 15,
  },
  audioSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  audioItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  audioItemContent: {
    flex: 1,
  },
  audioItemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  audioItemSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  audioPlayButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  moreOptionsContainer: {
    padding: 15,
  },
  moreOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  moreOptionIcon: {
    marginRight: 15,
  },
  moreOptionContent: {
    flex: 1,
  },
  moreOptionTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  moreOptionDescription: {
    fontSize: 12,
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  micButtonLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  micButtonInner: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  recordingStatus: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 20,
  },
  modalCloseButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  modalCloseText: {
    fontSize: 16,
    fontWeight: "500",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
  },
  modalButtonText: {
    fontSize: 16,
  },
  modalButtonTextPrimary: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  optionsMenu: {
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
  },
  favoriteButton: {
    marginRight: 10,
  },
});