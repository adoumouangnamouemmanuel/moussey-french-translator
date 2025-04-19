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
import { useTheme } from "../context/ThemeContext"; // Import useTheme

// Mock data - replace with your actual Moussey-French dictionary data
const mockDictionary = [
  { id: "1", moussey: "hello", french: "bonjour", pronunciation: "/bɔ̃.ʒuʁ/" },
  {
    id: "2",
    moussey: "goodbye",
    french: "au revoir",
    pronunciation: "/o.ʁə.vwaʁ/",
  },
  { id: "3", moussey: "thank you", french: "merci", pronunciation: "/mɛʁ.si/" },
  { id: "4", moussey: "yes", french: "oui", pronunciation: "/wi/" },
  { id: "5", moussey: "no", french: "non", pronunciation: "/nɔ̃/" },
  {
    id: "6",
    moussey: "please",
    french: "s'il vous plaît",
    pronunciation: "/sil vu plɛ/",
  },
  { id: "7", moussey: "sorry", french: "désolé", pronunciation: "/de.zɔ.le/" },
  { id: "8", moussey: "water", french: "eau", pronunciation: "/o/" },
  {
    id: "9",
    moussey: "food",
    french: "nourriture",
    pronunciation: "/nu.ʁi.tyʁ/",
  },
  { id: "10", moussey: "help", french: "aide", pronunciation: "/ɛd/" },
  {
    id: "11",
    moussey: "good morning",
    french: "bonjour",
    pronunciation: "/bɔ̃.ʒuʁ/",
  },
  {
    id: "12",
    moussey: "good evening",
    french: "bonsoir",
    pronunciation: "/bɔ̃.swaʁ/",
  },
  {
    id: "13",
    moussey: "good night",
    french: "bonne nuit",
    pronunciation: "/bɔn nɥi/",
  },
  {
    id: "14",
    moussey: "how are you",
    french: "comment allez-vous",
    pronunciation: "/kɔ.mɑ̃ ta.le vu/",
  },
  {
    id: "15",
    moussey: "I'm fine",
    french: "je vais bien",
    pronunciation: "/ʒə vɛ bjɛ̃/",
  },
];

// Word suggestions based on common searches
const wordSuggestions = [
  "hello",
  "thank you",
  "goodbye",
  "please",
  "sorry",
  "help",
  "food",
  "water",
];

type WordItemProps = {
  item: {
    id: string;
    moussey: string;
    french: string;
    pronunciation: string;
  };
  onPress: () => void;
  onPronounce: () => void;
  highlightText?: string;
  themeColors?: any; // Add theme colors prop
};

const WordItem = ({
  item,
  onPress,
  onPronounce,
  highlightText,
  themeColors, // Receive theme colors
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
          <Text style={[styles.pronunciation, { color: inactiveColor }]}>
            {item.pronunciation}
          </Text>
        </View>
        <View style={styles.wordActions}>
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
  const { colors } = useTheme(); // Get theme colors
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("search"); // search, favorites, add, mic, audio, more
  const [showMicModal, setShowMicModal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [showAddWordModal, setShowAddWordModal] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const searchInputRef = useRef<TextInput>(null);

  // Animation for mic pulse
  const micScale = useRef(new Animated.Value(1)).current;
  const micPulse = useRef<Animated.CompositeAnimation | null>(null);

  // Load recent searches on component mount
  useEffect(() => {
    const loadRecentSearches = async () => {
      try {
        const savedSearches = await AsyncStorage.getItem("recentSearches");
        if (savedSearches) {
          setRecentSearches(JSON.parse(savedSearches));
        }
      } catch (error) {
        console.error("Failed to load recent searches", error);
      }
    };

    loadRecentSearches();
  }, []);

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

  // Save a search term to recent searches
  const saveToRecentSearches = async (term: string) => {
    if (!term.trim()) return;

    try {
      // Add to front of array and remove duplicates
      const updatedSearches = [
        term,
        ...recentSearches.filter((s) => s !== term),
      ].slice(0, 10);
      setRecentSearches(updatedSearches);
      await AsyncStorage.setItem(
        "recentSearches",
        JSON.stringify(updatedSearches)
      );
    } catch (error) {
      console.error("Failed to save recent search", error);
    }
  };

  // Clear recent searches
  const clearRecentSearches = async () => {
    try {
      setRecentSearches([]);
      await AsyncStorage.removeItem("recentSearches");
    } catch (error) {
      console.error("Failed to clear recent searches", error);
    }
  };

  // Filter words based on search query
  const filteredWords =
    searchQuery.trim() === ""
      ? []
      : mockDictionary.filter(
          (word) =>
            word.moussey.toLowerCase().includes(searchQuery.toLowerCase()) ||
            word.french.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // Filter suggestions based on search query
  const filteredSuggestions =
    searchQuery.trim() === ""
      ? wordSuggestions
      : wordSuggestions.filter((suggestion) =>
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
  const handleSelectWord = (word: any) => {
    saveToRecentSearches(word.moussey);
    navigation.navigate("WordDetail", { word });
  };

  // Simulate word pronunciation
  const handlePronounceWord = () => {
    // In a real app, this would play audio
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
        setSearchQuery("hello");
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

  // Use theme colors or fallback to original colors
  const headerColors: [string, string, ...string[]] = (colors?.headerBackground?.length >= 2 
    ? colors.headerBackground 
    : ["#00a0a0", "#008080"]) as [string, string, ...string[]];
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
                        Recent Searches
                      </Text>
                      <TouchableOpacity onPress={clearRecentSearches}>
                        <Text
                          style={[styles.clearText, { color: primaryColor }]}
                        >
                          Clear
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
                          onPress={() => handleSelectRecentSearch(item)}
                        >
                          <Ionicons
                            name="time-outline"
                            size={18}
                            color={inactiveColor}
                            style={styles.suggestionIcon}
                          />
                          <Text
                            style={[
                              styles.suggestionText,
                              { color: textColor },
                            ]}
                          >
                            {item}
                          </Text>
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
                      {filteredWords.length === 1 ? "result" : "results"}
                    </Text>
                    <TouchableOpacity onPress={handleClearSearch}>
                      <Text
                        style={[
                          styles.clearSearchText,
                          { color: primaryColor },
                        ]}
                      >
                        Clear search
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
                          No words found
                        </Text>
                        <Text
                          style={[
                            styles.emptySubtext,
                            { color: inactiveColor },
                          ]}
                        >
                          Try a different search term or browse suggestions
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
                              Browse Suggestions
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
                          Dictionary
                        </Text>
                        <Text
                          style={[
                            styles.emptySubtext,
                            { color: inactiveColor },
                          ]}
                        >
                          Search for words in Moussey or French
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
                Favorites
              </Text>
            </View>
            <View style={styles.emptyContainer}>
              <Ionicons name="star" size={50} color={inactiveColor} />
              <Text style={[styles.emptyText, { color: textColor }]}>
                No Favorites Yet
              </Text>
              <Text style={[styles.emptySubtext, { color: inactiveColor }]}>
                Tap the star icon on any word to add it to your favorites
              </Text>
            </View>
          </View>
        );
      case "add":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Add New Word
              </Text>
            </View>
            <View style={[styles.addWordForm, { backgroundColor: cardColor }]}>
              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Moussey Word
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Enter word in Moussey"
                  placeholderTextColor={inactiveColor}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  French Translation
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Enter French translation"
                  placeholderTextColor={inactiveColor}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Pronunciation
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Enter pronunciation"
                  placeholderTextColor={inactiveColor}
                />
              </View>
              <TouchableOpacity
                style={[styles.submitButton, { backgroundColor: primaryColor }]}
              >
                <Text style={styles.submitButtonText}>Add Word</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case "mic":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Voice Search
              </Text>
            </View>
            <View style={styles.micContainer}>
              <Text style={[styles.micInstructions, { color: textColor }]}>
                Tap the microphone and speak a word to search
              </Text>
              <TouchableOpacity
                style={[styles.micButton, { backgroundColor: primaryColor }]}
                onPress={toggleRecording}
              >
                <Ionicons name="mic" size={40} color="white" />
              </TouchableOpacity>
              <Text style={[styles.micStatus, { color: inactiveColor }]}>
                {isRecording ? "Listening..." : "Tap to start"}
              </Text>
            </View>
          </View>
        );
      case "audio":
        return (
          <View style={styles.tabContentContainer}>
            <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
              <Text style={[styles.tabTitle, { color: textColor }]}>
                Audio Dictionary
              </Text>
            </View>
            <View style={styles.audioListContainer}>
              <Text style={[styles.audioSectionTitle, { color: textColor }]}>
                Recently Played
              </Text>
              <FlatList
                data={mockDictionary.slice(0, 5)}
                keyExtractor={(item) => `audio-${item.id}`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[styles.audioItem, { backgroundColor: cardColor }]}
                  >
                    <View style={styles.audioItemContent}>
                      <Text
                        style={[styles.audioItemTitle, { color: textColor }]}
                      >
                        {item.moussey}
                      </Text>
                      <Text
                        style={[
                          styles.audioItemSubtitle,
                          { color: inactiveColor },
                        ]}
                      >
                        {item.french}
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
                More Options
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
                    Download Dictionary
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    Use the dictionary offline
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
                    Settings
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    Customize your dictionary
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
                    Help & Feedback
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    Get support or send feedback
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
                    About
                  </Text>
                  <Text
                    style={[
                      styles.moreOptionDescription,
                      { color: inactiveColor },
                    ]}
                  >
                    App version and information
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
              placeholder="search..."
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
          <View style={styles.rightMargin} />
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
              Favorites
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
              Add
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
              Voice
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
              Search
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
              More
            </Text>
          </TouchableOpacity>
        </View>

        {/* Voice search modal */}
        <Modal visible={showMicModal} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { backgroundColor: cardColor }]}>
              <Text style={[styles.modalTitle, { color: textColor }]}>
                Voice Search
              </Text>
              <Text style={[styles.modalSubtitle, { color: inactiveColor }]}>
                Speak clearly to search for a word
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
                {isRecording ? "Listening..." : "Tap microphone to start"}
              </Text>

              <TouchableOpacity
                style={[styles.modalCloseButton, { borderColor: borderColor }]}
                onPress={() => setShowMicModal(false)}
              >
                <Text style={[styles.modalCloseText, { color: primaryColor }]}>
                  Cancel
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
                Add New Word
              </Text>

              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Moussey Word
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Enter word in Moussey"
                  placeholderTextColor={inactiveColor}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  French Translation
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Enter French translation"
                  placeholderTextColor={inactiveColor}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={[styles.formLabel, { color: textColor }]}>
                  Pronunciation
                </Text>
                <TextInput
                  style={[
                    styles.formInput,
                    { backgroundColor: backgroundColor, color: textColor },
                  ]}
                  placeholder="Enter pronunciation"
                  placeholderTextColor={inactiveColor}
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
                    Cancel
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.modalButton,
                    { backgroundColor: primaryColor },
                  ]}
                  onPress={() => {
                    // Add word logic would go here
                    setShowAddWordModal(false);
                  }}
                >
                  <Text style={styles.modalButtonTextPrimary}>Save</Text>
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
                    Settings
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
                    Download Dictionary
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
                    Help
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
                    About
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
                Playing pronunciation...
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
  rightMargin: {
    width: 10, // Add margin to the right of search bar
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
  suggestionText: {
    fontSize: 16,
    color: "#333",
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
});
