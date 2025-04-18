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
  Platform,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

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
};

const WordItem = ({
  item,
  onPress,
  onPronounce,
  highlightText,
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
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.wordContent}>
          <Text style={styles.moussey}>
            {highlightText
              ? highlightMatch(item.moussey, highlightText)
              : item.moussey}
          </Text>
          <Text style={styles.french}>
            {highlightText
              ? highlightMatch(item.french, highlightText)
              : item.french}
          </Text>
          <Text style={styles.pronunciation}>{item.pronunciation}</Text>
        </View>
        <View style={styles.wordActions}>
          <TouchableOpacity
            style={styles.pronounceButton}
            onPress={onPronounce}
          >
            <LinearGradient
              colors={["#00a0a0", "#008080"]}
              style={styles.pronounceGradient}
            >
              <Ionicons name="volume-medium-outline" size={18} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.chevronContainer}>
            <Ionicons name="chevron-forward" size={20} color="#008080" />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default function DictionaryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("search");
  const searchInputRef = useRef<TextInput>(null);

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#008080" barStyle="light-content" />

        {/* Search header */}
        <LinearGradient colors={["#00a0a0", "#008080"]} style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput
              ref={searchInputRef}
              style={styles.searchInput}
              placeholder="search..."
              placeholderTextColor="rgba(0,0,0,0.5)"
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
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
                <Ionicons name="close-circle" size={18} color="#999" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.rightMargin} />
        </LinearGradient>

        {/* Content area */}
        <View style={styles.content}>
          {showSuggestions && searchQuery.trim() === "" ? (
            // Show recent searches and suggestions when search is empty
            <View style={styles.suggestionsContainer}>
              {recentSearches.length > 0 && (
                <View>
                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Recent Searches</Text>
                    <TouchableOpacity onPress={clearRecentSearches}>
                      <Text style={styles.clearText}>Clear</Text>
                    </TouchableOpacity>
                  </View>
                  <FlatList
                    data={recentSearches}
                    keyExtractor={(item, index) => `recent-${index}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={styles.suggestionItem}
                        onPress={() => handleSelectRecentSearch(item)}
                      >
                        <Ionicons
                          name="time-outline"
                          size={18}
                          color="#666"
                          style={styles.suggestionIcon}
                        />
                        <Text style={styles.suggestionText}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    scrollEnabled={false}
                  />
                </View>
              )}

              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Suggestions</Text>
              </View>
              <FlatList
                data={filteredSuggestions}
                keyExtractor={(item) => `suggestion-${item}`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.suggestionItem}
                    onPress={() => handleSelectSuggestion(item)}
                  >
                    <Ionicons
                      name="search-outline"
                      size={18}
                      color="#666"
                      style={styles.suggestionIcon}
                    />
                    <Text style={styles.suggestionText}>{item}</Text>
                  </TouchableOpacity>
                )}
                scrollEnabled={false}
              />
            </View>
          ) : showSuggestions &&
            filteredSuggestions.length > 0 &&
            searchQuery.trim() !== "" ? (
            // Show filtered suggestions when typing
            <View style={styles.suggestionsContainer}>
              <FlatList
                data={filteredSuggestions}
                keyExtractor={(item) => `suggestion-${item}`}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.suggestionItem}
                    onPress={() => handleSelectSuggestion(item)}
                  >
                    <Ionicons
                      name="search-outline"
                      size={18}
                      color="#666"
                      style={styles.suggestionIcon}
                    />
                    <Text style={styles.suggestionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          ) : (
            // Show search results
            <>
              {searchQuery.trim() !== "" && (
                <View style={styles.resultsHeader}>
                  <Text style={styles.resultsCount}>
                    {filteredWords.length}{" "}
                    {filteredWords.length === 1 ? "result" : "results"}
                  </Text>
                  <TouchableOpacity onPress={handleClearSearch}>
                    <Text style={styles.clearSearchText}>Clear search</Text>
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
                  />
                )}
                ListEmptyComponent={
                  searchQuery.trim() !== "" ? (
                    <View style={styles.emptyContainer}>
                      <Ionicons name="search-outline" size={50} color="#ccc" />
                      <Text style={styles.emptyText}>No words found</Text>
                      <Text style={styles.emptySubtext}>
                        Try a different search term or browse suggestions
                      </Text>
                      <TouchableOpacity
                        style={styles.browseButton}
                        onPress={handleClearSearch}
                      >
                        <LinearGradient
                          colors={["#00a0a0", "#008080"]}
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
                      <Ionicons name="book-outline" size={50} color="#ccc" />
                      <Text style={styles.emptyText}>Dictionary</Text>
                      <Text style={styles.emptySubtext}>
                        Search for words in Moussey or French
                      </Text>
                    </View>
                  )
                }
              />
            </>
          )}
        </View>

        {/* Bottom navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("favorites")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "favorites" ? "star" : "star-outline"}
                size={24}
                color={activeTab === "favorites" ? "#008080" : "#777"}
              />
              {activeTab === "favorites" && (
                <View style={styles.activeIndicator} />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("add")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name="add-circle"
                size={24}
                color={activeTab === "add" ? "#008080" : "#777"}
              />
              {activeTab === "add" && <View style={styles.activeIndicator} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("mic")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "mic" ? "mic" : "mic-outline"}
                size={24}
                color={activeTab === "mic" ? "#008080" : "#777"}
              />
              {activeTab === "mic" && <View style={styles.activeIndicator} />}
            </View>
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
                color={activeTab === "audio" ? "#008080" : "#777"}
              />
              {activeTab === "audio" && <View style={styles.activeIndicator} />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("search")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name={activeTab === "search" ? "search" : "search-outline"}
                size={24}
                color={activeTab === "search" ? "#008080" : "#777"}
              />
              {activeTab === "search" && (
                <View style={styles.activeIndicator} />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => setActiveTab("more")}
          >
            <View style={styles.navIconContainer}>
              <Ionicons
                name="ellipsis-horizontal"
                size={24}
                color={activeTab === "more" ? "#008080" : "#777"}
              />
              {activeTab === "more" && <View style={styles.activeIndicator} />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Loading indicator */}
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#008080" />
              <Text style={styles.loadingText}>Playing pronunciation...</Text>
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
});
