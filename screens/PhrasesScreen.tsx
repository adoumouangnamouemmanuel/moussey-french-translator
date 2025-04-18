"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Mock phrases data by category
const mockPhrasesByCategory = {
  all: [
    {
      id: "1",
      french: "A bientôt",
      moussey: "See you soon",
      category: "general",
    },
    {
      id: "2",
      french: "A plus tard",
      moussey: "See you later",
      category: "general",
    },
    {
      id: "3",
      french: "A quelle heure arriverons-nous ?",
      moussey: "What time will we arrive?",
      category: "travel",
    },
    {
      id: "4",
      french: "A quelle heure commence-t-il ?",
      moussey: "What time does it start?",
      category: "meeting",
    },
    {
      id: "5",
      french: "A quelle heure embarquons-nous ?",
      moussey: "What time do we board?",
      category: "travel",
    },
    {
      id: "6",
      french: "A quelle heure est ton bus ?",
      moussey: "What time is your bus?",
      category: "travel",
    },
  ],
  general: [
    {
      id: "1",
      french: "A bientôt",
      moussey: "See you soon",
      category: "general",
    },
    {
      id: "2",
      french: "A plus tard",
      moussey: "See you later",
      category: "general",
    },
  ],
  shopping: [
    {
      id: "7",
      french: "Combien ça coûte ?",
      moussey: "How much does it cost?",
      category: "shopping",
    },
    {
      id: "8",
      french: "Je voudrais acheter ceci",
      moussey: "I would like to buy this",
      category: "shopping",
    },
  ],
  travel: [
    {
      id: "3",
      french: "A quelle heure arriverons-nous ?",
      moussey: "What time will we arrive?",
      category: "travel",
    },
    {
      id: "5",
      french: "A quelle heure embarquons-nous ?",
      moussey: "What time do we board?",
      category: "travel",
    },
    {
      id: "6",
      french: "A quelle heure est ton bus ?",
      moussey: "What time is your bus?",
      category: "travel",
    },
  ],
  meeting: [
    {
      id: "4",
      french: "A quelle heure commence-t-il ?",
      moussey: "What time does it start?",
      category: "meeting",
    },
  ],
  sport: [
    {
      id: "9",
      french: "Qui a gagné le match ?",
      moussey: "Who won the match?",
      category: "sport",
    },
  ],
  health: [
    {
      id: "10",
      french: "J'ai besoin d'un médecin",
      moussey: "I need a doctor",
      category: "health",
    },
  ],
};

type Category =
  | "all"
  | "general"
  | "shopping"
  | "travel"
  | "meeting"
  | "sport"
  | "health";

export default function PhrasesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [expandedPhraseId, setExpandedPhraseId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPhraseId(expandedPhraseId === id ? null : id);
  };

  const selectCategory = (category: Category) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  const displayedPhrases = mockPhrasesByCategory[selectedCategory] || [];

  const categoryNames: Record<Category, string> = {
    all: "All",
    general: "General",
    shopping: "Shopping",
    travel: "Travel",
    meeting: "Meeting",
    sport: "Sport",
    health: "Health",
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.heartContainer}>
          <Ionicons name="heart-outline" size={24} color="white" />
          <Text style={styles.favoriteText}>Favorites</Text>
        </View>
      </View>

      {/* Category dropdown */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categorySelector}
          onPress={() => setShowCategoryDropdown(!showCategoryDropdown)}
        >
          <Text style={styles.categoryText}>
            {categoryNames[selectedCategory]}
          </Text>
          <Ionicons
            name={showCategoryDropdown ? "chevron-up" : "chevron-down"}
            size={20}
            color="black"
          />
        </TouchableOpacity>

        {showCategoryDropdown && (
          <View style={styles.dropdown}>
            {Object.keys(mockPhrasesByCategory).map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.dropdownItem}
                onPress={() => selectCategory(category as Category)}
              >
                <Text style={styles.dropdownText}>
                  {categoryNames[category as Category]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <FlatList
        data={displayedPhrases}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.phraseItem}
            onPress={() => toggleExpand(item.id)}
            activeOpacity={0.7}
          >
            <View>
              <Text style={styles.french}>{item.french}</Text>
              <Text style={styles.moussey}>{item.moussey}</Text>
            </View>
            <TouchableOpacity style={styles.expandButton}>
              <Ionicons
                name={
                  expandedPhraseId === item.id ? "chevron-up" : "chevron-down"
                }
                size={20}
                color="#008080"
              />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No phrases found in this category
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#008080",
    padding: 15,
    paddingTop: StatusBar.currentHeight || 15,
  },
  heartContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  favoriteText: {
    color: "white",
    marginLeft: 5,
    fontSize: 16,
  },
  categoryContainer: {
    position: "relative",
    zIndex: 1000,
  },
  categorySelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "500",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  dropdownText: {
    fontSize: 16,
  },
  phraseItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  french: {
    fontSize: 16,
    fontWeight: "bold",
  },
  moussey: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  expandButton: {
    padding: 5,
  },
  emptyContainer: {
    padding: 20,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});