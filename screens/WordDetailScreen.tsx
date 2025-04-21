"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
  Share,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  useRoute,
  useNavigation,
  type RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../context/AppContext";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext";
import {
  type DictionaryEntry,
  searchDictionary,
  getRelatedWordsByTranslation,
  getSimilarWords,
  getExamplesForWord,
} from "../utils/dictionary";

type WordDetailParams = {
  word: DictionaryEntry;
};

// Type for grouped dictionary entries
type GroupedEntry = {
  partOfSpeech: string;
  translations: string[];
  examples?: { example: string; translation: string }[];
};

export default function WordDetailScreen() {
  const route = useRoute<RouteProp<Record<string, WordDetailParams>, string>>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { word } = route.params;
  const { toggleFavorite, isFavorite } = useAppContext();
  const { colors } = useTheme();
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState("examples");
  const [isPlaying, setIsPlaying] = useState(false);
  const [relatedWords, setRelatedWords] = useState<DictionaryEntry[]>([]);
  const [similarWords, setSimilarWords] = useState<DictionaryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [examples, setExamples] = useState<
    { example: string; translation: string }[]
  >([]);
  const [groupedEntries, setGroupedEntries] = useState<GroupedEntry[]>([]);
  const [ungroupedTranslations, setUngroupedTranslations] = useState<string[]>(
    []
  );

  // Animation values
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerHeight = 200;
  const headerScale = scrollY.interpolate({
    inputRange: [-100, 0],
    outputRange: [1.2, 1],
    extrapolate: "clamp",
  });
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 2, headerHeight],
    outputRange: [1, 0.8, 0],
    extrapolate: "clamp",
  });
  const contentTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });

  // Determine if the word is from French to Moussey or Moussey to French
  const isFrenchToMoussey = word.id.startsWith("f2m_");

  // Group translations by part of speech
  const groupTranslationsByPartOfSpeech = () => {
    // For French to Moussey entries
    if (isFrenchToMoussey && word.definitions) {
      // Don't group by part of speech, just collect all translations
      const translations = word.definitions
        .map((def) => def.definition)
        .filter(Boolean);
      setUngroupedTranslations(translations);
      setGroupedEntries([]);
    }
    // For Moussey to French entries
    else if (!isFrenchToMoussey) {
      const frenchTranslations = word.french.split(/[,;]/).map((t) => t.trim());
      setUngroupedTranslations(frenchTranslations);
      setGroupedEntries([]);
    }
  };

  // Check if word is favorited and load related words
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setIsFavorited(isFavorite(word.id));

      // Find related words with the same translation
      const related = getRelatedWordsByTranslation(word);
      setRelatedWords(related);

      // Find words with similar meanings
      const similar = getSimilarWords(word);
      setSimilarWords(similar);

      // Get examples
      const wordExamples = getExamplesForWord(word);
      setExamples(wordExamples);

      setIsLoading(false);
    };

    loadData();
  }, [word, isFavorite, isFrenchToMoussey]);

  // Group translations after examples are loaded
  useEffect(() => {
    if (!isLoading) {
      groupTranslationsByPartOfSpeech();
    }
  }, [isLoading, examples]);

  const handleToggleFavorite = () => {
    toggleFavorite(word.id);
    setIsFavorited(!isFavorited);
  };

  const handlePlayPronunciation = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 1500);
  };

  const handleShare = async () => {
    try {
      const shareText = isFrenchToMoussey
        ? `${word.french} - ${word.moussey}`
        : `${word.moussey} - ${word.french} ${
            word.pronunciation ? `(${word.pronunciation})` : ""
          }`;

      await Share.share({
        message: shareText,
        title: "Share this word",
      });
    } catch (error) {
      console.error("Error sharing word:", error);
    }
  };

  // Format part of speech for display
  const formatPartOfSpeech = (pos: string): string => {
    return pos.charAt(0).toUpperCase() + pos.slice(1);
  };

  // Use theme colors or fallback to original colors
  const headerColors: [string, string, ...string[]] =
    Array.isArray(colors?.headerBackground) &&
    colors.headerBackground.length >= 2
      ? (colors.headerBackground as [string, string, ...string[]])
      : ["#00a0a0", "#008080"];
  const primaryColor = colors?.primary || "#008080";
  const backgroundColor = colors?.background || "#f5f5f5";
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#666";
  const borderColor = colors?.border || "#e0e0e0";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
      edges={["bottom"]}
    >
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />

      {/* Animated Header */}
      <Animated.View
        style={[
          styles.headerContainer,
          {
            opacity: headerOpacity,
            transform: [{ scale: headerScale }],
          },
        ]}
      >
        <LinearGradient colors={headerColors} style={styles.headerGradient}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.wordHeader}>
            {/* Always show the searched word at the top */}
            <Text style={styles.wordTitle}>
              {isFrenchToMoussey ? word.french : word.moussey}
            </Text>
            {!isFrenchToMoussey && word.pronunciation && (
              <Text style={styles.pronunciation}>{word.pronunciation}</Text>
            )}
          </View>

          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.headerActionButton}
              onPress={handlePlayPronunciation}
              disabled={isPlaying}
            >
              {isPlaying ? (
                <MaterialIcons name="volume-up" size={28} color="white" />
              ) : (
                <Ionicons name="volume-high-outline" size={28} color="white" />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.headerActionButton}
              onPress={handleToggleFavorite}
            >
              <Ionicons
                name={isFavorited ? "star" : "star-outline"}
                size={28}
                color={isFavorited ? "#FFD700" : "white"}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.headerActionButton}
              onPress={handleShare}
            >
              <Ionicons name="share-outline" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Animated.View>

      {/* Content */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={primaryColor} />
          <Text style={[styles.loadingText, { color: textColor }]}>
            Chargement...
          </Text>
        </View>
      ) : (
        <Animated.ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          {/* Spacer for header */}
          <View style={{ height: headerHeight }} />

          <Animated.View
            style={[
              styles.contentContainer,
              {
                backgroundColor: backgroundColor,
                transform: [{ translateY: contentTranslateY }],
              },
            ]}
          >
            {/* Dictionary Entry Section - Unified translations */}
            <View style={[styles.section, { backgroundColor: cardColor }]}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: primaryColor }]}>
                  {isFrenchToMoussey
                    ? "Traduction Moussey"
                    : "Traduction Française"}
                </Text>
              </View>

              {/* Ungrouped translations (no part of speech) */}
              {ungroupedTranslations.length > 0 && (
                <View
                  style={[
                    styles.dictionaryEntryGroup,
                    { backgroundColor: colors?.border || "#f9f9f9" },
                  ]}
                >
                  {ungroupedTranslations.map((translation, index) => (
                    <View
                      key={`ungrouped-${index}`}
                      style={styles.translationItem}
                    >
                      {ungroupedTranslations.length > 1 && (
                        <Text
                          style={[
                            styles.translationNumber,
                            { color: primaryColor },
                          ]}
                        >
                          {index + 1}.
                        </Text>
                      )}
                      <Text style={[styles.translation, { color: textColor }]}>
                        {translation}
                      </Text>
                    </View>
                  ))}
                </View>
              )}

              {/* If no translations are found */}
              {ungroupedTranslations.length === 0 && (
                <View
                  style={[
                    styles.emptyTranslation,
                    { backgroundColor: colors?.border || "#f9f9f9" },
                  ]}
                >
                  <Text
                    style={[styles.emptyStateText, { color: inactiveColor }]}
                  >
                    Aucune traduction disponible
                  </Text>
                </View>
              )}
            </View>

            {/* Tabs */}
            <View
              style={[styles.tabsContainer, { backgroundColor: cardColor }]}
            >
              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === "examples" && [
                    styles.activeTab,
                    { backgroundColor: `${primaryColor}10` },
                  ],
                ]}
                onPress={() => setActiveTab("examples")}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: inactiveColor },
                    activeTab === "examples" && [
                      styles.activeTabText,
                      { color: primaryColor },
                    ],
                  ]}
                >
                  Exemples
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === "related" && [
                    styles.activeTab,
                    { backgroundColor: `${primaryColor}10` },
                  ],
                ]}
                onPress={() => setActiveTab("related")}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: inactiveColor },
                    activeTab === "related" && [
                      styles.activeTabText,
                      { color: primaryColor },
                    ],
                  ]}
                >
                  Mots Liés
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tab,
                  activeTab === "similar" && [
                    styles.activeTab,
                    { backgroundColor: `${primaryColor}10` },
                  ],
                ]}
                onPress={() => setActiveTab("similar")}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: inactiveColor },
                    activeTab === "similar" && [
                      styles.activeTabText,
                      { color: primaryColor },
                    ],
                  ]}
                >
                  Similaires
                </Text>
              </TouchableOpacity>
            </View>

            {/* Tab Content */}
            {activeTab === "examples" ? (
              <View style={[styles.section, { backgroundColor: cardColor }]}>
                {examples.length > 0 ? (
                  examples.map((example, index) => (
                    <View
                      key={index}
                      style={[
                        styles.example,
                        { backgroundColor: colors?.border || "#f9f9f9" },
                        index > 0 && { marginTop: 8 },
                      ]}
                    >
                      <Text style={[styles.exampleText, { color: textColor }]}>
                        <Text
                          style={[
                            styles.exampleLanguage,
                            { color: primaryColor },
                          ]}
                        >
                          {isFrenchToMoussey ? "Français: " : "Moussey: "}
                        </Text>
                        {example.example}
                      </Text>
                      <Text style={[styles.exampleText, { color: textColor }]}>
                        <Text
                          style={[
                            styles.exampleLanguage,
                            { color: primaryColor },
                          ]}
                        >
                          {isFrenchToMoussey ? "Moussey: " : "Français: "}
                        </Text>
                        {example.translation}
                      </Text>
                    </View>
                  ))
                ) : (
                  <View style={styles.emptyState}>
                    <Ionicons
                      name="document-text-outline"
                      size={40}
                      color={inactiveColor}
                    />
                    <Text
                      style={[styles.emptyStateText, { color: inactiveColor }]}
                    >
                      Aucun exemple disponible
                    </Text>
                  </View>
                )}
              </View>
            ) : activeTab === "related" ? (
              <View style={[styles.section, { backgroundColor: cardColor }]}>
                {relatedWords.length > 0 ? (
                  relatedWords.map((relatedWord, index) => (
                    <TouchableOpacity
                      key={relatedWord.id}
                      style={[
                        styles.relatedWord,
                        { backgroundColor: colors?.border || "#f9f9f9" },
                        index > 0 && { marginTop: 8 },
                      ]}
                      onPress={() =>
                        navigation.navigate("WordDetail", { word: relatedWord })
                      }
                    >
                      <View>
                        <Text
                          style={[styles.relatedWordText, { color: textColor }]}
                        >
                          {isFrenchToMoussey
                            ? relatedWord.french
                            : relatedWord.moussey}
                        </Text>
                        <Text
                          style={[
                            styles.relatedWordTranslation,
                            { color: inactiveColor },
                          ]}
                        >
                          {isFrenchToMoussey
                            ? relatedWord.moussey
                            : relatedWord.french}
                        </Text>
                      </View>
                      <Ionicons
                        name="chevron-forward"
                        size={20}
                        color={primaryColor}
                      />
                    </TouchableOpacity>
                  ))
                ) : (
                  <View style={styles.emptyState}>
                    <Ionicons
                      name="link-outline"
                      size={40}
                      color={inactiveColor}
                    />
                    <Text
                      style={[styles.emptyStateText, { color: inactiveColor }]}
                    >
                      Aucun mot lié disponible
                    </Text>
                  </View>
                )}
              </View>
            ) : (
              <View style={[styles.section, { backgroundColor: cardColor }]}>
                {similarWords.length > 0 ? (
                  similarWords.map((similarWord, index) => (
                    <TouchableOpacity
                      key={similarWord.id}
                      style={[
                        styles.relatedWord,
                        { backgroundColor: colors?.border || "#f9f9f9" },
                        index > 0 && { marginTop: 8 },
                      ]}
                      onPress={() =>
                        navigation.navigate("WordDetail", { word: similarWord })
                      }
                    >
                      <View>
                        <Text
                          style={[styles.relatedWordText, { color: textColor }]}
                        >
                          {isFrenchToMoussey
                            ? similarWord.french
                            : similarWord.moussey}
                        </Text>
                        <Text
                          style={[
                            styles.relatedWordTranslation,
                            { color: inactiveColor },
                          ]}
                        >
                          {isFrenchToMoussey
                            ? similarWord.moussey
                            : similarWord.french}
                        </Text>
                      </View>
                      <Ionicons
                        name="chevron-forward"
                        size={20}
                        color={primaryColor}
                      />
                    </TouchableOpacity>
                  ))
                ) : (
                  <View style={styles.emptyState}>
                    <Ionicons
                      name="swap-horizontal"
                      size={40}
                      color={inactiveColor}
                    />
                    <Text
                      style={[styles.emptyStateText, { color: inactiveColor }]}
                    >
                      Aucun mot similaire trouvé
                    </Text>
                  </View>
                )}
              </View>
            )}

            {/* Additional Information */}
            <View style={[styles.section, { backgroundColor: cardColor }]}>
              <View style={styles.sectionHeader}>
                <Text style={[styles.sectionTitle, { color: primaryColor }]}>
                  Informations Supplémentaires
                </Text>
              </View>
              {word.partsOfSpeech && word.partsOfSpeech.length > 0 && (
                <View style={styles.infoItem}>
                  <Text style={[styles.infoLabel, { color: inactiveColor }]}>
                    Catégorie grammaticale:
                  </Text>
                  <View style={styles.partsOfSpeechContainer}>
                    {word.partsOfSpeech.map((part, index) => (
                      <View
                        key={index}
                        style={[
                          styles.partOfSpeechBadge,
                          { backgroundColor: `${primaryColor}20` },
                        ]}
                      >
                        <Text
                          style={[
                            styles.partOfSpeechText,
                            { color: primaryColor },
                          ]}
                        >
                          {formatPartOfSpeech(part)}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
              <View style={styles.infoItem}>
                <Text style={[styles.infoLabel, { color: inactiveColor }]}>
                  Type:
                </Text>
                <Text style={[styles.infoValue, { color: textColor }]}>
                  {isFrenchToMoussey
                    ? "Français vers Moussey"
                    : "Moussey vers Français"}
                </Text>
              </View>
              {word.relatedWords && word.relatedWords.length > 0 && (
                <View style={styles.infoItem}>
                  <Text style={[styles.infoLabel, { color: inactiveColor }]}>
                    Termes liés:
                  </Text>
                  <View style={styles.relatedTermsContainer}>
                    {word.relatedWords.map((term, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.relatedTermBadge,
                          { backgroundColor: `${primaryColor}10` },
                        ]}
                        onPress={() => {
                          const results = searchDictionary(term, "both");
                          if (results.length > 0) {
                            navigation.navigate("WordDetail", {
                              word: results[0],
                            });
                          }
                        }}
                      >
                        <Text
                          style={[
                            styles.relatedTermText,
                            { color: primaryColor },
                          ]}
                        >
                          {term}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </View>
          </Animated.View>
        </Animated.ScrollView>
      )}

      {/* Bottom Action Bar */}
      <View
        style={[
          styles.actionBar,
          { backgroundColor: cardColor, borderTopColor: borderColor },
        ]}
      >
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleToggleFavorite}
        >
          <Ionicons
            name={isFavorited ? "star" : "star-outline"}
            size={24}
            color={isFavorited ? "#FFD700" : primaryColor}
          />
          <Text style={[styles.actionText, { color: primaryColor }]}>
            Favoris
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handlePlayPronunciation}
        >
          <Ionicons name="volume-high-outline" size={24} color={primaryColor} />
          <Text style={[styles.actionText, { color: primaryColor }]}>
            Écouter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color={primaryColor} />
          <Text style={[styles.actionText, { color: primaryColor }]}>
            Partager
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: 10,
    overflow: "hidden",
  },
  headerGradient: {
    flex: 1,
    padding: 20,
    paddingTop: StatusBar.currentHeight || 20,
  },
  backButton: {
    position: "absolute",
    top: StatusBar.currentHeight || 20,
    left: 15,
    zIndex: 10,
  },
  wordHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wordTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  pronunciation: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
    fontStyle: "italic",
    marginTop: 5,
  },
  headerActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  headerActionButton: {
    marginHorizontal: 15,
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  contentContainer: {
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingBottom: 20,
  },
  section: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionHeader: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
  },
  dictionaryEntryGroup: {
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  partOfSpeechLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008080",
    marginBottom: 8,
    fontStyle: "italic",
  },
  translationItem: {
    flexDirection: "row",
    marginVertical: 4,
    paddingLeft: 4,
  },
  translationNumber: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
    color: "#008080",
  },
  translation: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  groupExamples: {
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.05)",
  },
  exampleSectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#008080",
    marginBottom: 4,
  },
  exampleItem: {
    paddingLeft: 4,
  },
  emptyTranslation: {
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
  tabsContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#f0f8ff",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    fontWeight: "600",
  },
  example: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
  },
  exampleText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    lineHeight: 20,
  },
  exampleLanguage: {
    fontWeight: "bold",
    color: "#008080",
  },
  relatedWord: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
  },
  relatedWordText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  relatedWordTranslation: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  emptyState: {
    alignItems: "center",
    padding: 20,
  },
  emptyStateText: {
    marginTop: 10,
    color: "#999",
    fontSize: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  infoLabel: {
    width: 100,
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  infoValue: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  partsOfSpeechContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  partOfSpeechBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  partOfSpeechText: {
    fontSize: 12,
    fontWeight: "500",
  },
  relatedTermsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  relatedTermBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  relatedTermText: {
    fontSize: 12,
    fontWeight: "500",
  },
  actionBar: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  actionText: {
    color: "#008080",
    marginTop: 5,
    fontSize: 12,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
});