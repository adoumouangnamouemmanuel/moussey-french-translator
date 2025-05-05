"use client";

import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SearchResult {
  id: string;
  storyId: string;
  storyTitle: string;
  paragraphIndex: number;
  text: string;
  isEnglish: boolean;
}

interface SearchResultsProps {
  colors: any;
  searchResults: SearchResult[];
  navigateToSearchResult: (result: SearchResult) => void;
  advancedSearchQuery: string;
}

export const SearchResults = ({
  colors,
  searchResults,
  navigateToSearchResult,
  advancedSearchQuery,
}: SearchResultsProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [itemAnims] = useState(() =>
    new Array(20).fill(0).map(() => new Animated.Value(0))
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate each item with staggered delay
    itemAnims.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        delay: 100 + index * 50,
        useNativeDriver: true,
      }).start();
    });
  }, [searchResults]);

  if (searchResults.length === 0 && advancedSearchQuery.length === 0) {
    return (
      <Animated.View
        style={[
          styles.emptySearchContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <Ionicons name="search" size={50} color={colors.inactive} />
        <Text
          style={[
            styles.emptyText,
            { color: colors.inactive, fontFamily: "Montserrat" },
          ]}
        >
          Recherchez dans le contenu des histoires
        </Text>
      </Animated.View>
    );
  }

  if (searchResults.length === 0 && advancedSearchQuery.length > 0) {
    return (
      <Animated.View
        style={[
          styles.emptySearchContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <Ionicons name="close-circle-outline" size={50} color={colors.inactive} />
        <Text
          style={[
            styles.emptyText,
            { color: colors.inactive, fontFamily: "Montserrat" },
          ]}
        >
          Aucun résultat trouvé pour "{advancedSearchQuery}"
        </Text>
      </Animated.View>
    );
  }

  const renderItem = ({ item, index }: { item: SearchResult; index: number }) => {
    const itemAnim = itemAnims[index % itemAnims.length];

    return (
      <Animated.View
        style={{
          opacity: itemAnim,
          transform: [
            {
              translateY: itemAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
            {
              scale: itemAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.95, 1],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity
          style={[
            styles.searchResultItem,
            {
              backgroundColor: colors.card,
              borderLeftWidth: 3,
              borderLeftColor: colors.primary,
            },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            navigateToSearchResult(item);
          }}
        >
          <Text
            style={[
              styles.searchResultStory,
              { color: colors.primary, fontFamily: "PlayfairBold" },
            ]}
          >
            {item.storyTitle}
          </Text>
          <Text
            style={[
              styles.searchResultText,
              {
                color: colors.text,
                fontStyle: item.isEnglish ? "italic" : "normal",
                fontFamily: item.isEnglish ? "PlayfairItalic" : "Montserrat",
              },
            ]}
            numberOfLines={2}
          >
            {item.text}
          </Text>
          <View style={styles.resultFooter}>
            <View
              style={[
                styles.resultBadge,
                { backgroundColor: `${colors.primary}20` },
              ]}
            >
              <Text
                style={[
                  styles.resultBadgeText,
                  { color: colors.primary, fontFamily: "MontserratBold" },
                ]}
              >
                {item.isEnglish ? "Anglais" : "Français"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={16}
              color={colors.inactive}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <Animated.View
      style={[
        styles.searchResultsContainer,
        {
          backgroundColor: colors.background,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <Text
        style={[
          styles.searchResultsTitle,
          { color: colors.text, fontFamily: "PlayfairBold" },
        ]}
      >
        {searchResults.length} résultat{searchResults.length > 1 ? "s" : ""}
      </Text>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.searchResultsList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  searchResultsContainer: {
    flex: 1,
    padding: 15,
  },
  searchResultsTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  searchResultsList: {
    paddingBottom: 15,
  },
  searchResultItem: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchResultStory: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  searchResultText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },
  resultFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resultBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  resultBadgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  emptySearchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
    maxWidth: "80%",
    lineHeight: 22,
  },
});

export default SearchResults;
