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
import { type DictionaryEntry, searchDictionary } from "../utils/dictionary";

type WordDetailParams = {
  word: DictionaryEntry;
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

  // Check if word is favorited
  useEffect(() => {
    setIsFavorited(isFavorite(word.id));

    // Find related words
    if (word.relatedWords && word.relatedWords.length > 0) {
      const related = word.relatedWords
        .map((relatedWord) => {
          const results = searchDictionary(relatedWord, "both");
          return results.length > 0 ? results[0] : null;
        })
        .filter(Boolean) as DictionaryEntry[];

      setRelatedWords(related);
    } else {
      // If no related words specified, find words with similar meaning
      const results = searchDictionary(word.moussey.split(",")[0], "moussey")
        .filter((entry) => entry.id !== word.id)
        .slice(0, 5);

      setRelatedWords(results);
    }
  }, [word, isFavorite]);

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
      await Share.share({
        message: `${word.moussey} - ${word.french} ${
          word.pronunciation ? `(${word.pronunciation})` : ""
        }`,
        title: "Share this word",
      });
    } catch (error) {
      console.error("Error sharing word:", error);
    }
  };

  // Get examples from definitions
  const examples = word.definitions?.filter((def) => def.example) || [];

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
            <Text style={styles.wordTitle}>{word.moussey}</Text>
            {word.pronunciation && (
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
          {/* Translation Section */}
          <View style={[styles.section, { backgroundColor: cardColor }]}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: primaryColor }]}>
                Translation
              </Text>
            </View>
            <View
              style={[
                styles.translationContainer,
                { backgroundColor: colors?.border || "#f9f9f9" },
              ]}
            >
              <Text style={[styles.translation, { color: textColor }]}>
                {word.french}
              </Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={[styles.tabsContainer, { backgroundColor: cardColor }]}>
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
                Examples
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
                Related Words
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
                    ]}
                  >
                    <Text style={[styles.exampleText, { color: textColor }]}>
                      <Text
                        style={[
                          styles.exampleLanguage,
                          { color: primaryColor },
                        ]}
                      >
                        Moussey:{" "}
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
                        French:{" "}
                      </Text>
                      {example.exampleTranslation}
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
                    No examples available
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <View style={[styles.section, { backgroundColor: cardColor }]}>
              {relatedWords.length > 0 ? (
                relatedWords.map((relatedWord) => (
                  <TouchableOpacity
                    key={relatedWord.id}
                    style={[
                      styles.relatedWord,
                      { backgroundColor: colors?.border || "#f9f9f9" },
                    ]}
                    onPress={() =>
                      navigation.navigate("WordDetail", { word: relatedWord })
                    }
                  >
                    <View>
                      <Text
                        style={[styles.relatedWordText, { color: textColor }]}
                      >
                        {relatedWord.moussey}
                      </Text>
                      <Text
                        style={[
                          styles.relatedWordTranslation,
                          { color: inactiveColor },
                        ]}
                      >
                        {relatedWord.french}
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
                    No related words available
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Additional Information */}
          <View style={[styles.section, { backgroundColor: cardColor }]}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: primaryColor }]}>
                Additional Information
              </Text>
            </View>
            {word.partsOfSpeech && word.partsOfSpeech.length > 0 && (
              <View style={styles.infoItem}>
                <Text style={[styles.infoLabel, { color: inactiveColor }]}>
                  Part of Speech:
                </Text>
                <Text style={[styles.infoValue, { color: textColor }]}>
                  {word.partsOfSpeech.join(", ")}
                </Text>
              </View>
            )}
            <View style={styles.infoItem}>
              <Text style={[styles.infoLabel, { color: inactiveColor }]}>
                Category:
              </Text>
              <Text style={[styles.infoValue, { color: textColor }]}>
                {word.id.startsWith("m2f")
                  ? "Moussey to French"
                  : "French to Moussey"}
              </Text>
            </View>
          </View>
        </Animated.View>
      </Animated.ScrollView>

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
            Favorite
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handlePlayPronunciation}
        >
          <Ionicons name="volume-high-outline" size={24} color={primaryColor} />
          <Text style={[styles.actionText, { color: primaryColor }]}>
            Listen
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color={primaryColor} />
          <Text style={[styles.actionText, { color: primaryColor }]}>
            Share
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
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
  },
  translationContainer: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  translation: {
    fontSize: 20,
    color: "#333",
    fontWeight: "500",
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
    marginBottom: 10,
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
    marginBottom: 8,
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
    alignItems: "center",
    marginBottom: 10,
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
  difficultyContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  difficultyBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    marginRight: 10,
  },
  difficultyFill: {
    height: "100%",
    backgroundColor: "#008080",
    borderRadius: 3,
  },
  difficultyText: {
    fontSize: 14,
    color: "#008080",
    width: 70,
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
});