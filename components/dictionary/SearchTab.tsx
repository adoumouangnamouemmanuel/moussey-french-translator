"use client";

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import WordItem from "./WordItem";
import EmptyState from "./EmptyState";
import type { DictionaryEntry } from "../../utils/dictionary";

type SearchTabProps = {
  searchQuery: string;
  showSuggestions: boolean;
  recentSearches: { term: string; timestamp: number; language: string }[];
  filteredSuggestions: string[];
  filteredWords: DictionaryEntry[];
  colors: any;
  onClearRecentSearches: () => void;
  onSelectRecentSearch: (term: string) => void;
  onSelectSuggestion: (suggestion: string) => void;
  onClearSearch: () => void;
  onSelectWord: (word: DictionaryEntry) => void;
  onPronounceWord: () => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const SearchTab = ({
  searchQuery,
  showSuggestions,
  recentSearches,
  filteredSuggestions,
  filteredWords,
  colors,
  onClearRecentSearches,
  onSelectRecentSearch,
  onSelectSuggestion,
  onClearSearch,
  onSelectWord,
  onPronounceWord,
  onToggleFavorite,
  isFavorite,
}: SearchTabProps) => {
  // Animation for list items
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const suggestionItemAnims = React.useRef(new Map()).current;
  const recentSearchItemAnims = React.useRef(new Map()).current;
  const wordItemAnims = React.useRef(new Map()).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [searchQuery, showSuggestions]);

  // Theme colors
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";
  const headerColors = colors?.headerBackground || ["#00a0a0", "#008080"];

  // Render suggestion item
  const renderSuggestionItem = ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    if (!suggestionItemAnims.has(item)) {
      suggestionItemAnims.set(item, new Animated.Value(0));
    }
    const itemAnim = suggestionItemAnims.get(item);

    React.useEffect(() => {
      Animated.timing(itemAnim, {
        toValue: 1,
        duration: 300,
        delay: index * 50,
        useNativeDriver: true,
      }).start();
    }, [item, index, itemAnim]);

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
          ],
        }}
      >
        <TouchableOpacity
          style={[styles.suggestionItem, { borderTopColor: borderColor }]}
          onPress={() => onSelectSuggestion(item)}
        >
          <Ionicons
            name="search-outline"
            size={18}
            color={inactiveColor}
            style={styles.suggestionIcon}
          />
          <Text style={[styles.suggestionText, { color: textColor }]}>
            {item}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  // Render recent search item
  const renderRecentSearchItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    const key = `${item.term}-${item.timestamp}`;
    if (!recentSearchItemAnims.has(key)) {
      recentSearchItemAnims.set(key, new Animated.Value(0));
    }
    const itemAnim = recentSearchItemAnims.get(key);

    React.useEffect(() => {
      Animated.timing(itemAnim, {
        toValue: 1,
        duration: 300,
        delay: index * 50,
        useNativeDriver: true,
      }).start();
    }, [item, index, itemAnim]);

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
          ],
        }}
      >
        <TouchableOpacity
          style={[styles.suggestionItem, { borderTopColor: borderColor }]}
          onPress={() => onSelectRecentSearch(item.term)}
        >
          <Ionicons
            name="time-outline"
            size={18}
            color={inactiveColor}
            style={styles.suggestionIcon}
          />
          <View style={styles.suggestionContent}>
            <Text style={[styles.suggestionText, { color: textColor }]}>
              {item.term}
            </Text>
            <Text style={[styles.suggestionLanguage, { color: inactiveColor }]}>
              {item.language === "french" ? "Français" : "Moussey"}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  if (showSuggestions && searchQuery.trim() === "") {
    // Show recent searches and suggestions when search is empty
    return (
      <Animated.View
        style={[
          styles.suggestionsContainer,
          { backgroundColor: cardColor, opacity: fadeAnim },
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
              <TouchableOpacity onPress={onClearRecentSearches}>
                <Text style={[styles.clearText, { color: primaryColor }]}>
                  Effacer
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={recentSearches}
              keyExtractor={(item, index) => `recent-${index}`}
              renderItem={renderRecentSearchItem}
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
          renderItem={renderSuggestionItem}
          scrollEnabled={false}
        />
      </Animated.View>
    );
  } else if (
    showSuggestions &&
    filteredSuggestions.length > 0 &&
    searchQuery.trim() !== ""
  ) {
    // Show filtered suggestions when typing
    return (
      <Animated.View
        style={[
          styles.suggestionsContainer,
          { backgroundColor: cardColor, opacity: fadeAnim },
        ]}
      >
        <FlatList
          data={filteredSuggestions}
          keyExtractor={(item) => `suggestion-${item}`}
          renderItem={renderSuggestionItem}
        />
      </Animated.View>
    );
  } else {
    // Show search results
    return (
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
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
            <Text style={[styles.resultsCount, { color: inactiveColor }]}>
              {filteredWords.length}{" "}
              {filteredWords.length === 1 ? "résultat" : "résultats"}
            </Text>
            <TouchableOpacity onPress={onClearSearch}>
              <Text style={[styles.clearSearchText, { color: primaryColor }]}>
                Effacer la recherche
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <FlatList
          data={filteredWords}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            if (!wordItemAnims.has(item.id)) {
              wordItemAnims.set(item.id, new Animated.Value(0));
            }
            const itemAnim = wordItemAnims.get(item.id);

            React.useEffect(() => {
              Animated.timing(itemAnim, {
                toValue: 1,
                duration: 300,
                delay: index * 50,
                useNativeDriver: true,
              }).start();
            }, [item, index, itemAnim]);

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
                  ],
                }}
              >
                <WordItem
                  item={item}
                  onPress={() => onSelectWord(item)}
                  onPronounce={onPronounceWord}
                  onToggleFavorite={() => onToggleFavorite(item.id)}
                  isFavorite={isFavorite(item.id)}
                  highlightText={searchQuery}
                  themeColors={colors}
                />
              </Animated.View>
            );
          }}
          ListEmptyComponent={
            searchQuery.trim() !== "" ? (
              <EmptyState
                icon="search-outline"
                title="Aucun mot trouvé"
                subtitle="Essayez un terme de recherche différent ou parcourez les suggestions"
                buttonText="Parcourir les suggestions"
                onButtonPress={onClearSearch}
                colors={colors}
              />
            ) : (
              <EmptyState
                icon="book-outline"
                title="Dictionnaire"
                subtitle="Recherchez des mots en Moussey ou en Français"
                colors={colors}
              />
            )
          }
        />
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
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
});

export default SearchTab;