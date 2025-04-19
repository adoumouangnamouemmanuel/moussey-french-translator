"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

// Mock history data
const historyItems = [
  {
    id: "1",
    word: "bonjour",
    translation: "hello",
    type: "dictionary",
    timestamp: "Aujourd'hui, 10:30",
  },
  {
    id: "2",
    phrase: "Comment allez-vous?",
    translation: "How are you?",
    type: "translator",
    timestamp: "Aujourd'hui, 09:15",
  },
  {
    id: "3",
    word: "maison",
    translation: "house",
    type: "dictionary",
    timestamp: "Hier, 18:45",
  },
  {
    id: "4",
    word: "merci",
    translation: "thank you",
    type: "dictionary",
    timestamp: "Hier, 16:20",
  },
  {
    id: "5",
    phrase: "Je voudrais un café",
    translation: "I would like a coffee",
    type: "translator",
    timestamp: "Il y a 2 jours",
  },
  {
    id: "6",
    word: "famille",
    translation: "family",
    type: "dictionary",
    timestamp: "Il y a 3 jours",
  },
];

// Filter options
const filterOptions = [
  { id: "all", name: "Tous" },
  { id: "dictionary", name: "Dictionnaire" },
  { id: "translator", name: "Traducteur" },
];

export default function HistoryScreen() {
  const { colors } = useTheme(); // Use theme colors
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredHistory =
    selectedFilter === "all"
      ? historyItems
      : historyItems.filter((item) => item.type === selectedFilter);

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
    setSelectedItems(filteredHistory.map((item) => item.id));
  };

  const deleteSelected = () => {
    // In a real app, this would delete the selected items
    // For now, we'll just exit selection mode
    setIsSelectionMode(false);
    setSelectedItems([]);
  };

  const clearHistory = () => {
    // In a real app, this would clear the history
    // For now, we'll just show a console message
    console.log("History cleared");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Historique</Text>
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
            <View style={styles.headerActions}>
              <TouchableOpacity
                style={styles.headerAction}
                onPress={clearHistory}
              >
                <Ionicons name="trash-outline" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headerAction}
                onPress={toggleSelectionMode}
              >
                <Ionicons name="ellipsis-vertical" size={24} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>

      {/* Filter tabs */}
      <View style={[styles.filterContainer, { backgroundColor: colors.card }]}>
        {filterOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.filterOption,
              selectedFilter === option.id && styles.filterOptionActive,
              selectedFilter === option.id && {
                borderBottomColor: colors.primary,
              },
            ]}
            onPress={() => setSelectedFilter(option.id)}
          >
            <Text
              style={[
                styles.filterText,
                {
                  color:
                    selectedFilter === option.id
                      ? colors.primary
                      : colors.inactive,
                },
              ]}
            >
              {option.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* History list */}
      <FlatList
        data={filteredHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.historyItem,
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
            <View style={styles.historyItemContent}>
              <View style={styles.historyItemHeader}>
                <Text style={[styles.historyItemTitle, { color: colors.text }]}>
                  {"word" in item ? item.word : item.phrase}
                </Text>
                <View
                  style={[
                    styles.historyItemTypeBadge,
                    { backgroundColor: `${colors.primary}20` },
                  ]}
                >
                  <Text
                    style={[
                      styles.historyItemTypeText,
                      { color: colors.primary },
                    ]}
                  >
                    {item.type === "dictionary" ? "Dictionnaire" : "Traducteur"}
                  </Text>
                </View>
              </View>
              <Text
                style={[
                  styles.historyItemTranslation,
                  { color: colors.inactive },
                ]}
              >
                {item.translation}
              </Text>
              <Text
                style={[
                  styles.historyItemTimestamp,
                  { color: colors.inactive },
                ]}
              >
                {item.timestamp}
              </Text>
            </View>
            {!isSelectionMode && (
              <TouchableOpacity style={styles.favoriteButton}>
                <Ionicons
                  name="heart-outline"
                  size={24}
                  color={colors.inactive}
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.historyList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="time-outline" size={50} color={colors.inactive} />
            <Text style={[styles.emptyText, { color: colors.text }]}>
              Aucun historique
            </Text>
            <Text style={[styles.emptySubtext, { color: colors.inactive }]}>
              Votre historique de recherche apparaîtra ici
            </Text>
          </View>
        }
      />
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
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    marginLeft: 15,
  },
  selectionActions: {
    flexDirection: "row",
  },
  selectionAction: {
    marginLeft: 15,
  },
  filterContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  filterOption: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  filterOptionActive: {
    borderBottomWidth: 2,
  },
  filterText: {
    fontSize: 14,
    fontWeight: "500",
  },
  historyList: {
    padding: 15,
  },
  historyItem: {
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
  historyItemContent: {
    flex: 1,
  },
  historyItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  historyItemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  historyItemTypeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  historyItemTypeText: {
    fontSize: 12,
    fontWeight: "500",
  },
  historyItemTranslation: {
    fontSize: 14,
    marginBottom: 5,
  },
  historyItemTimestamp: {
    fontSize: 12,
  },
  favoriteButton: {
    padding: 5,
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
  emptySubtext: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
});