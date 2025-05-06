"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useRoute,
  useNavigation,
  type RouteProp,
} from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Share } from "react-native";
import { useTheme } from "../context/ThemeContext";
import {
  type DictionaryEntry,
  searchDictionary,
  getRelatedWordsByTranslation,
  getSimilarWords,
  getExamplesForWord,
} from "../utils/dictionary";

// Components
import WordDetailHeader from "../components/word-detail/WordDetailHeader";
import TranslationSection from "../components/word-detail/TranslationSection";
import TabsSection from "../components/word-detail/TabsSection";
import ExamplesTab from "../components/word-detail/ExamplesTab";
import RelatedWordsTab from "../components/word-detail/RelatedWordsTab";
import AdditionalInfoSection from "../components/word-detail/AdditionalInfoSection";
import BottomActionBar from "../components/word-detail/BottomActionBar";

type WordDetailParams = {
  word: DictionaryEntry;
};

export default function WordDetailScreen() {
  const route = useRoute<RouteProp<Record<string, WordDetailParams>, string>>();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { word } = route.params;
  const { colors } = useTheme();

  // State
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState("Exemples");
  const [isPlaying, setIsPlaying] = useState(false);
  const [relatedWords, setRelatedWords] = useState<DictionaryEntry[]>([]);
  const [similarWords, setSimilarWords] = useState<DictionaryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [examples, setExamples] = useState<
    { example: string; translation: string }[]
  >([]);
  const [ungroupedTranslations, setUngroupedTranslations] = useState<string[]>(
    []
  );

  // Animation values
  const scrollY = useRef(new Animated.Value(0)).current;
  const contentTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -200],
    extrapolate: "clamp",
  });

  // Determine if the word is from French to Moussey or Moussey to French
  const isFrenchToMoussey = word.id.startsWith("f2m_");

  // Load data on mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      // Check if word is favorited (mock implementation)
      setIsFavorited(false);

      // Find related words with the same translation
      const related = getRelatedWordsByTranslation(word);
      setRelatedWords(related);

      // Find words with similar meanings
      const similar = getSimilarWords(word);
      setSimilarWords(similar);

      // Get examples
      const wordExamples = getExamplesForWord(word);
      setExamples(wordExamples);

      // Process translations
      if (isFrenchToMoussey && word.definitions) {
        const translations = word.definitions
          .map((def) => def.definition)
          .filter(Boolean);
        setUngroupedTranslations(translations);
      } else if (!isFrenchToMoussey) {
        const frenchTranslations = word.french
          .split(/[,;]/)
          .map((t) => t.trim());
        setUngroupedTranslations(frenchTranslations);
      }

      setIsLoading(false);
    };

    loadData();
  }, [word]);

  // Handlers
  const handleToggleFavorite = () => {
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

  const handleSelectRelatedTerm = (term: string) => {
    const results = searchDictionary(term, "both");
    if (results.length > 0) {
      navigation.navigate("WordDetail", {
        word: results[0],
      });
    }
  };

  // Use theme colors or fallback to original colors
  const backgroundColor = colors?.background || "#f5f5f5";
  const primaryColor = colors?.primary || "#008080";

  // Define tabs
  const tabs = ["Exemples", "Mots Liés", "Similaires"];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor }]}
      edges={["bottom"]}
    >
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />

      {/* Animated Header */}
      <WordDetailHeader
        word={word}
        scrollY={scrollY}
        isFavorited={isFavorited}
        isPlaying={isPlaying}
        onBackPress={() => navigation.goBack()}
        onToggleFavorite={handleToggleFavorite}
        onPlayPronunciation={handlePlayPronunciation}
        onShare={handleShare}
        colors={colors}
      />

      {/* Content */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={primaryColor} />
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
          <View style={{ height: 200 }} />

          <Animated.View
            style={[
              styles.contentContainer,
              {
                backgroundColor,
                transform: [{ translateY: contentTranslateY }],
              },
            ]}
          >
            {/* Translation Section */}
            <TranslationSection
              title={
                isFrenchToMoussey
                  ? "Traduction Moussey"
                  : "Traduction Française"
              }
              translations={ungroupedTranslations}
              colors={colors}
              delay={200}
            />

            {/* Tabs */}
            <TabsSection
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              colors={colors}
              delay={300}
            />

            {/* Tab Content */}
            {activeTab === "Exemples" ? (
              <ExamplesTab
                examples={examples}
                isFrenchToMoussey={isFrenchToMoussey}
                colors={colors}
              />
            ) : activeTab === "Mots Liés" ? (
              <RelatedWordsTab
                words={relatedWords}
                isFrenchToMoussey={isFrenchToMoussey}
                colors={colors}
                onSelectWord={(word) =>
                  navigation.navigate("WordDetail", { word })
                }
                emptyIcon="link-outline"
                emptyText="Aucun mot lié disponible"
              />
            ) : (
              <RelatedWordsTab
                words={similarWords}
                isFrenchToMoussey={isFrenchToMoussey}
                colors={colors}
                onSelectWord={(word) =>
                  navigation.navigate("WordDetail", { word })
                }
                emptyIcon="swap-horizontal"
                emptyText="Aucun mot similaire trouvé"
              />
            )}

            {/* Additional Information */}
            <AdditionalInfoSection
              word={word}
              isFrenchToMoussey={isFrenchToMoussey}
              colors={colors}
              onSelectRelatedTerm={handleSelectRelatedTerm}
              delay={400}
            />
          </Animated.View>
        </Animated.ScrollView>
      )}

      {/* Bottom Action Bar */}
      <BottomActionBar
        isFavorited={isFavorited}
        colors={colors}
        onToggleFavorite={handleToggleFavorite}
        onPlayPronunciation={handlePlayPronunciation}
        onShare={handleShare}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
