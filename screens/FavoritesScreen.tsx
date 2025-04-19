"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

// Mock favorite words
const favoriteWords = [
  {
    id: "1",
    word: "bonjour",
    translation: "hello",
    phonetic: "/bɔ̃.ʒuʁ/",
    partOfSpeech: "interjection",
    dateAdded: "Il y a 2 jours",
  },
  {
    id: "2",
    word: "maison",
    translation: "house",
    phonetic: "/mɛ.zɔ̃/",
    partOfSpeech: "nom",
    dateAdded: "Il y a 1 semaine",
  },
  {
    id: "3",
    word: "amour",
    translation: "love",
    phonetic: "/a.muʁ/",
    partOfSpeech: "nom",
    dateAdded: "Il y a 2 semaines",
  },
  {
    id: "4",
    word: "famille",
    translation: "family",
    phonetic: "/fa.mij/",
    partOfSpeech: "nom",
    dateAdded: "Il y a 3 semaines",
  },
];

// Mock favorite phrases
const favoritePhrases = [
  {
    id: "1",
    phrase: "Comment allez-vous?",
    translation: "How are you?",
    dateAdded: "Il y a 3 jours",
  },
  {
    id: "2",
    phrase: "Je voudrais un café, s'il vous plaît.",
    translation: "I would like a coffee, please.",
    dateAdded: "Il y a 5 jours",
  },
  {
    id: "3",
    phrase: "Où est la gare?",
    translation: "Where is the train station?",
    dateAdded: "Il y a 1 semaine",
  },
];

export default function FavoritesScreen() {
  const { colors } = useTheme(); // Use theme colors
  const [activeTab, setActiveTab] = useState("words"); // 'words' or 'phrases'
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

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
    if (activeTab === "words") {
      setSelectedItems(favoriteWords.map((item) => item.id));
    } else {
      setSelectedItems(favoritePhrases.map((item) => item.id));
    }
  };

  const deleteSelected = () => {
    // In a real app, this would delete the selected items
    // For now, we'll just exit selection mode
    setIsSelectionMode(false);
    setSelectedItems([]);
  };

  const renderWordItem = ({ item }: { item: (typeof favoriteWords)[0] }) => (
    <TouchableOpacity
      style={[
        styles.wordItem,
        { backgroundColor: colors.card },
        isSelectionMode &&
          selectedItems.includes(item.id) && {
            backgroundColor: `${colors.primary}20`,
          },
      ]}
      onPress={() => (isSelectionMode ? toggleSelection(item.id) : null)}
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
            {item.word}
          </Text>
          <Text style={[styles.wordItemPhonetic, { color: colors.inactive }]}>
            {item.phonetic}
          </Text>
        </View>
        <Text style={[styles.wordItemTranslation, { color: colors.inactive }]}>
          {item.translation}
        </Text>
        <View style={styles.wordItemFooter}>
          <View
            style={[
              styles.wordItemBadge,
              { backgroundColor: `${colors.primary}20` },
            ]}
          >
            <Text style={[styles.wordItemBadgeText, { color: colors.primary }]}>
              {item.partOfSpeech.charAt(0).toUpperCase() +
                item.partOfSpeech.slice(1)}
            </Text>
          </View>
          <Text style={[styles.wordItemDate, { color: colors.inactive }]}>
            {item.dateAdded}
          </Text>
        </View>
      </View>
      {!isSelectionMode && (
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart" size={24} color="#FF6B6B" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  const renderPhraseItem = ({
    item,
  }: {
    item: (typeof favoritePhrases)[0];
  }) => (
    <TouchableOpacity
      style={[
        styles.phraseItem,
        { backgroundColor: colors.card },
        isSelectionMode &&
          selectedItems.includes(item.id) && {
            backgroundColor: `${colors.primary}20`,
          },
      ]}
      onPress={() => (isSelectionMode ? toggleSelection(item.id) : null)}
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
      <View style={styles.phraseItemContent}>
        <Text style={[styles.phraseItemText, { color: colors.text }]}>
          {item.phrase}
        </Text>
        <Text
          style={[styles.phraseItemTranslation, { color: colors.inactive }]}
        >
          {item.translation}
        </Text>
        <View style={styles.phraseItemFooter}>
          <Text style={[styles.phraseItemDate, { color: colors.inactive }]}>
            {item.dateAdded}
          </Text>
        </View>
      </View>
      {!isSelectionMode && (
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart" size={24} color="#FF6B6B" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

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
      {activeTab === "words" ? (
        <FlatList
          data={favoriteWords}
          keyExtractor={(item) => item.id}
          renderItem={renderWordItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="heart" size={50} color={colors.inactive} />
              <Text style={[styles.emptyText, { color: colors.inactive }]}>
                Aucun mot favori
              </Text>
            </View>
          }
        />
      ) : (
        <FlatList
          data={favoritePhrases}
          keyExtractor={(item) => item.id}
          renderItem={renderPhraseItem}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="heart" size={50} color={colors.inactive} />
              <Text style={[styles.emptyText, { color: colors.inactive }]}>
                Aucune phrase favorite
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
  },
  wordItem: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
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
  phraseItem: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  phraseItemContent: {
    flex: 1,
  },
  phraseItemText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  phraseItemTranslation: {
    fontSize: 14,
    marginBottom: 10,
  },
  phraseItemFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  phraseItemDate: {
    fontSize: 12,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 10,
  },
});