"use client";

import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../context/AppContext";
import {
  getHistoryItems,
  deleteHistoryItems,
  clearHistory,
  type HistoryItem,
} from "../utils/historyUtils";

// Filter options
const filterOptions = [
  { id: "all", name: "Tous" },
  { id: "dictionary", name: "Dictionnaire" },
  { id: "translator", name: "Traducteur" },
];

export default function HistoryScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { isFavorite, toggleFavorite } = useAppContext();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load history from storage on component mount and focus
  useEffect(() => {
    loadHistory();

    // Refresh history when screen is focused
    const unsubscribe = navigation.addListener("focus", () => {
      loadHistory();
    });

    return unsubscribe;
  }, [navigation]);

  // Load history from AsyncStorage
  const loadHistory = async () => {
    setIsLoading(true);
    try {
      const items = await getHistoryItems();
      setHistoryItems(items);
    } catch (error) {
      console.error("Error loading history:", error);
    } finally {
      setIsLoading(false);
    }
  };

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

  const deleteSelected = async () => {
    try {
      await deleteHistoryItems(selectedItems);
      setHistoryItems(
        historyItems.filter((item) => !selectedItems.includes(item.id))
      );
      setIsSelectionMode(false);
      setSelectedItems([]);
    } catch (error) {
      console.error("Error deleting history items:", error);
      Alert.alert(
        "Erreur",
        "Impossible de supprimer les éléments sélectionnés"
      );
    }
  };

  const handleClearHistory = async () => {
    try {
      Alert.alert(
        "Effacer l'historique",
        "Êtes-vous sûr de vouloir effacer tout l'historique ?",
        [
          {
            text: "Annuler",
            style: "cancel",
          },
          {
            text: "Effacer",
            style: "destructive",
            onPress: async () => {
              await clearHistory();
              setHistoryItems([]);
            },
          },
        ]
      );
    } catch (error) {
      console.error("Error clearing history:", error);
      Alert.alert("Erreur", "Impossible d'effacer l'historique");
    }
  };

  // Navigate to appropriate screen based on history item type
  const navigateToItem = (item: HistoryItem) => {
    if (item.type === "dictionary") {
      // Navigate to dictionary detail with the word
      if (item.word) {
        navigation.navigate("DictionaryScreen", { searchQuery: item.word });
      }
    } else if (item.type === "translator") {
      // Navigate to translator with the phrase
      if (item.phrase) {
        navigation.navigate("TranslatorScreen", { text: item.phrase });
      }
    }
  };

  // Toggle favorite status for a history item
  const handleToggleFavorite = (item: HistoryItem) => {
    if (item.word) {
      toggleFavorite(item.word);
    }
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
                onPress={handleClearHistory}
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
            onPress={() =>
              isSelectionMode ? toggleSelection(item.id) : navigateToItem(item)
            }
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
                  {item.word || item.phrase || ""}
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
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={() => handleToggleFavorite(item)}
              >
                <Ionicons
                  name={isFavorite(item.word || "") ? "heart" : "heart-outline"}
                  size={24}
                  color={
                    isFavorite(item.word || "") ? colors.primary : colors.inactive
                  }
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
    flexGrow: 1,
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
    flex: 1,
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