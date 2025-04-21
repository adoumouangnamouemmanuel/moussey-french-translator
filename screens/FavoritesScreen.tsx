"use client";

import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext";
import { useAppContext } from "../context/AppContext";
import { getFavoriteEntries, type DictionaryEntry } from "../utils/dictionary";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function FavoritesScreen() {
  const { colors } = useTheme();
  const { favorites, toggleFavorite } = useAppContext();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [activeTab, setActiveTab] = useState("words"); // 'words' or 'phrases'
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [favoriteWords, setFavoriteWords] = useState<DictionaryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favoritePhrases, setFavoritePhrases] = useState<any[]>([]); // Added declaration for favoritePhrases

  useEffect(() => {
    loadFavorites();
  }, [favorites]);

  const loadFavorites = async () => {
    setIsLoading(true);
    try {
      const entries = await getFavoriteEntries();
      setFavoriteWords(entries);
    } catch (error) {
      console.error("Failed to load favorites", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSelection = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    setSelectedItems([]);
  };

  const selectAll = () => {
    setSelectedItems(favoriteWords.map((item) => item.id));
  };

  const deleteSelected = () => {
    selectedItems.forEach((id) => {
      toggleFavorite(id);
    });
    setIsSelectionMode(false);
    setSelectedItems([]);
  };

  // Update the renderWordItem function to handle both French and Moussey words
  const renderWordItem = ({ item }: { item: DictionaryEntry }) => {
    const isFrenchPrimary = item.id.startsWith("f2m_");

    return (
      <TouchableOpacity
        style={[
          styles.wordItem,
          { backgroundColor: colors.card },
          isSelectionMode &&
            selectedItems.includes(item.id) && {
              backgroundColor: `${colors.primary}20`,
            },
        ]}
        onPress={() => {
          if (isSelectionMode) {
            toggleSelection(item.id);
          } else {
            navigation.navigate("WordDetail", { word: item });
          }
        }}
        onLongPress={() => {
          if (!isSelectionMode) {
            setIsSelectionMode(true);
            toggleSelection(item.id);
          }
        }}
      >
        {isSelectionMode && (
          <View
            style={[
              styles.selectionIndicator,
              {
                borderColor: colors.primary,
                backgroundColor: selectedItems.includes(item.id)
                  ? colors.primary
                  : "transparent",
              },
            ]}
          >
            {selectedItems.includes(item.id) && (
              <Ionicons name="checkmark" size={16} color="white" />
            )}
          </View>
        )}
        <View style={styles.wordItemContent}>
          <View style={styles.wordItemHeader}>
            <Text style={[styles.wordItemTitle, { color: colors.text }]}>
              {isFrenchPrimary ? item.french : item.moussey}
            </Text>
            {!isFrenchPrimary && item.pronunciation && (
              <Text
                style={[styles.wordItemPhonetic, { color: colors.inactive }]}
              >
                {item.pronunciation}
              </Text>
            )}
          </View>
          <Text
            style={[styles.wordItemTranslation, { color: colors.inactive }]}
          >
            {isFrenchPrimary ? item.moussey : item.french}
          </Text>
          <View style={styles.wordItemFooter}>
            {item.partsOfSpeech && item.partsOfSpeech.length > 0 && (
              <View
                style={[
                  styles.wordItemBadge,
                  { backgroundColor: `${colors.primary}20` },
                ]}
              >
                <Text
                  style={[styles.wordItemBadgeText, { color: colors.primary }]}
                >
                  {item.partsOfSpeech[0].charAt(0).toUpperCase() +
                    item.partsOfSpeech[0].slice(1)}
                </Text>
              </View>
            )}
          </View>
        </View>
        {!isSelectionMode && (
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => toggleFavorite(item.id)}
          >
            <Ionicons name="heart" size={24} color="#FF6B6B" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const renderPhraseItem = ({ item }: { item: (typeof favoritePhrases)[0] }) =>
    null;

  // Update the UI text to French
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Favoris</Text>
          {isSelectionMode ? (
            <View style={styles.selectionActions}>
              <TouchableOpacity
                style={styles.selectionAction}
                onPress={selectAll}
              >
                <Ionicons name="checkmark-done" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.selectionAction}
                onPress={deleteSelected}
              >
                <Ionicons name="trash" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.selectionAction}
                onPress={toggleSelectionMode}
              >
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={toggleSelectionMode}>
              <Ionicons name="ellipsis-vertical" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>

      {/* Tabs */}
      <View style={[styles.tabsContainer, { backgroundColor: colors.card }]}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "words" && styles.activeTab,
            activeTab === "words" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("words")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === "words" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Mots
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "phrases" && styles.activeTab,
            activeTab === "phrases" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setActiveTab("phrases")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  activeTab === "phrases" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Phrases
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={[styles.loadingText, { color: colors.text }]}>
            Chargement des favoris...
          </Text>
        </View>
      ) : (
        <FlatList
          data={activeTab === "words" ? favoriteWords : favoritePhrases}
          keyExtractor={(item) => item.id}
          renderItem={activeTab === "words" ? renderWordItem : renderPhraseItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="heart" size={50} color={colors.inactive} />
              <Text style={[styles.emptyText, { color: colors.inactive }]}>
                {activeTab === "words"
                  ? "Aucun mot favori"
                  : "Aucune phrase favorite"}
              </Text>
              <Text style={[styles.emptySubtext, { color: colors.inactive }]}>
                {activeTab === "words"
                  ? "Ajoutez des mots à vos favoris en appuyant sur l'icône en forme de cœur"
                  : "Ajoutez des phrases à vos favoris en appuyant sur l'icône en forme de cœur"}
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: StatusBar.currentHeight || 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  selectionActions: {
    flexDirection: "row",
  },
  selectionAction: {
    marginLeft: 15,
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  listContent: {
    padding: 15,
    flexGrow: 1,
  },
  wordItem: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  selectionIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  wordItemContent: {
    flex: 1,
  },
  wordItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  wordItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  wordItemPhonetic: {
    fontSize: 12,
  },
  wordItemTranslation: {
    fontSize: 14,
    marginBottom: 10,
  },
  wordItemFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wordItemBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  wordItemBadgeText: {
    fontSize: 12,
    fontWeight: "500",
  },
  wordItemDate: {
    fontSize: 12,
  },
  favoriteButton: {
    padding: 5,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "500",
  },
  emptySubtext: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
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