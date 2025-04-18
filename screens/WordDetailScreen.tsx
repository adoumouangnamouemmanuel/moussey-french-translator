"use client";

import { useState, useRef } from "react";
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

type WordDetailParams = {
  word: {
    id: string;
    moussey: string;
    french: string;
    pronunciation: string;
  };
};

// Mock examples and related words
const mockExamples = {
  "1": [
    {
      moussey: "Hello, how are you?",
      french: "Bonjour, comment allez-vous?",
    },
    {
      moussey: "Hello everyone!",
      french: "Bonjour tout le monde!",
    },
  ],
  "2": [
    {
      moussey: "Goodbye, see you tomorrow!",
      french: "Au revoir, à demain!",
    },
  ],
  "3": [
    {
      moussey: "Thank you very much.",
      french: "Merci beaucoup.",
    },
    {
      moussey: "Thank you for your help.",
      french: "Merci pour votre aide.",
    },
  ],
};

const mockRelatedWords = {
  "1": [
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
  ],
  "2": [
    {
      id: "16",
      moussey: "farewell",
      french: "adieu",
      pronunciation: "/a.djø/",
    },
    {
      id: "17",
      moussey: "see you soon",
      french: "à bientôt",
      pronunciation: "/a bjɛ̃.to/",
    },
  ],
  "3": [
    {
      id: "18",
      moussey: "please",
      french: "s'il vous plaît",
      pronunciation: "/sil vu plɛ/",
    },
    {
      id: "19",
      moussey: "you're welcome",
      french: "de rien",
      pronunciation: "/də ʁjɛ̃/",
    },
  ],
};

export default function WordDetailScreen() {
  const route = useRoute<RouteProp<Record<string, WordDetailParams>, string>>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { word } = route.params;
  const { toggleFavorite, isFavorite } = useAppContext();
  const [isFavorited, setIsFavorited] = useState(isFavorite(word.id));
  const [activeTab, setActiveTab] = useState("examples");
  const [isPlaying, setIsPlaying] = useState(false);

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
        message: `${word.moussey} - ${word.french} (${word.pronunciation})`,
        title: "Share this word",
      });
    } catch (error) {
      console.error("Error sharing word:", error);
    }
  };

  const examples = mockExamples[word.id as keyof typeof mockExamples] || [];
  const relatedWords =
    mockRelatedWords[word.id as keyof typeof mockRelatedWords] || [];

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

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
        <LinearGradient
          colors={["#00a0a0", "#008080"]}
          style={styles.headerGradient}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <View style={styles.wordHeader}>
            <Text style={styles.wordTitle}>{word.moussey}</Text>
            <Text style={styles.pronunciation}>{word.pronunciation}</Text>
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
              transform: [{ translateY: contentTranslateY }],
            },
          ]}
        >
          {/* Translation Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Translation</Text>
            </View>
            <View style={styles.translationContainer}>
              <Text style={styles.translation}>{word.french}</Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === "examples" && styles.activeTab]}
              onPress={() => setActiveTab("examples")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "examples" && styles.activeTabText,
                ]}
              >
                Examples
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab, activeTab === "related" && styles.activeTab]}
              onPress={() => setActiveTab("related")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "related" && styles.activeTabText,
                ]}
              >
                Related Words
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tab Content */}
          {activeTab === "examples" ? (
            <View style={styles.section}>
              {examples.length > 0 ? (
                examples.map((example, index) => (
                  <View key={index} style={styles.example}>
                    <Text style={styles.exampleText}>
                      <Text style={styles.exampleLanguage}>Moussey: </Text>
                      {example.moussey}
                    </Text>
                    <Text style={styles.exampleText}>
                      <Text style={styles.exampleLanguage}>French: </Text>
                      {example.french}
                    </Text>
                  </View>
                ))
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons
                    name="document-text-outline"
                    size={40}
                    color="#ccc"
                  />
                  <Text style={styles.emptyStateText}>
                    No examples available
                  </Text>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.section}>
              {relatedWords.length > 0 ? (
                relatedWords.map((relatedWord) => (
                  <TouchableOpacity
                    key={relatedWord.id}
                    style={styles.relatedWord}
                    onPress={() =>
                      navigation.navigate("WordDetail", { word: relatedWord })
                    }
                  >
                    <View>
                      <Text style={styles.relatedWordText}>
                        {relatedWord.moussey}
                      </Text>
                      <Text style={styles.relatedWordTranslation}>
                        {relatedWord.french}
                      </Text>
                    </View>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#008080"
                    />
                  </TouchableOpacity>
                ))
              ) : (
                <View style={styles.emptyState}>
                  <Ionicons name="link-outline" size={40} color="#ccc" />
                  <Text style={styles.emptyStateText}>
                    No related words available
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Additional Information */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Additional Information</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Part of Speech:</Text>
              <Text style={styles.infoValue}>Noun, Verb</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Category:</Text>
              <Text style={styles.infoValue}>Common Phrases</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Difficulty:</Text>
              <View style={styles.difficultyContainer}>
                <View style={styles.difficultyBar}>
                  <View style={[styles.difficultyFill, { width: "40%" }]} />
                </View>
                <Text style={styles.difficultyText}>Beginner</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </Animated.ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.actionBar}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleToggleFavorite}
        >
          <Ionicons
            name={isFavorited ? "star" : "star-outline"}
            size={24}
            color={isFavorited ? "#FFD700" : "#008080"}
          />
          <Text style={styles.actionText}>Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handlePlayPronunciation}
        >
          <Ionicons name="volume-high-outline" size={24} color="#008080" />
          <Text style={styles.actionText}>Listen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={24} color="#008080" />
          <Text style={styles.actionText}>Share</Text>
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
    color: "#008080",
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