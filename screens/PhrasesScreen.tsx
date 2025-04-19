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

// Mock phrases categories
const phrasesCategories = [
  {
    id: "1",
    title: "Salutations",
    icon: "hand-left",
    phrases: [
      {
        id: "1",
        phrase: "Bonjour",
        translation: "Hello",
        pronunciation: "/bɔ̃.ʒuʁ/",
      },
      {
        id: "2",
        phrase: "Au revoir",
        translation: "Goodbye",
        pronunciation: "/o.ʁə.vwaʁ/",
      },
      {
        id: "3",
        phrase: "Comment allez-vous?",
        translation: "How are you?",
        pronunciation: "/kɔ.mɑ̃.ta.le.vu/",
      },
      {
        id: "4",
        phrase: "Enchanté",
        translation: "Nice to meet you",
        pronunciation: "/ɑ̃.ʃɑ̃.te/",
      },
    ],
  },
  {
    id: "2",
    title: "Voyage",
    icon: "airplane",
    phrases: [
      {
        id: "1",
        phrase: "Où est la gare?",
        translation: "Where is the train station?",
        pronunciation: "/u.e.la.gaʁ/",
      },
      {
        id: "2",
        phrase: "Je voudrais un billet",
        translation: "I would like a ticket",
        pronunciation: "/ʒə.vu.dʁe.œ̃.bi.jɛ/",
      },
      {
        id: "3",
        phrase: "Combien ça coûte?",
        translation: "How much does it cost?",
        pronunciation: "/kɔ̃.bjɛ̃.sa.kut/",
      },
    ],
  },
  {
    id: "3",
    title: "Restaurant",
    icon: "restaurant",
    phrases: [
      {
        id: "1",
        phrase: "Je voudrais réserver une table",
        translation: "I would like to book a table",
        pronunciation: "/ʒə.vu.dʁe.ʁe.zɛʁ.ve.yn.tabl/",
      },
      {
        id: "2",
        phrase: "L'addition, s'il vous plaît",
        translation: "The bill, please",
        pronunciation: "/la.di.sjɔ̃.sil.vu.plɛ/",
      },
      {
        id: "3",
        phrase: "C'est délicieux",
        translation: "It's delicious",
        pronunciation: "/sɛ.de.li.sjø/",
      },
    ],
  },
  {
    id: "4",
    title: "Urgences",
    icon: "medkit",
    phrases: [
      {
        id: "1",
        phrase: "Au secours!",
        translation: "Help!",
        pronunciation: "/o.sə.kuʁ/",
      },
      {
        id: "2",
        phrase: "Appelez une ambulance",
        translation: "Call an ambulance",
        pronunciation: "/a.ple.yn.ɑ̃.by.lɑ̃s/",
      },
      {
        id: "3",
        phrase: "Je suis perdu",
        translation: "I am lost",
        pronunciation: "/ʒə.sɥi.pɛʁ.dy/",
      },
    ],
  },
];

export default function PhrasesScreen() {
  const { colors } = useTheme(); // Use theme colors
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderCategoryItem = ({
    item,
  }: {
    item: (typeof phrasesCategories)[0];
  }) => (
    <TouchableOpacity
      style={[styles.categoryItem, { backgroundColor: colors.card }]}
      onPress={() => setSelectedCategory(item.id)}
    >
      <View
        style={[
          styles.categoryIconContainer,
          { backgroundColor: `${colors.primary}20` },
        ]}
      >
        <Ionicons name={item.icon as any} size={30} color={colors.primary} />
      </View>
      <Text style={[styles.categoryTitle, { color: colors.text }]}>
        {item.title}
      </Text>
      <Text style={[styles.categoryCount, { color: colors.inactive }]}>
        {item.phrases.length} {item.phrases.length === 1 ? "phrase" : "phrases"}
      </Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color={colors.inactive}
        style={styles.categoryArrow}
      />
    </TouchableOpacity>
  );

  const renderPhrasesList = () => {
    const category = phrasesCategories.find((c) => c.id === selectedCategory);
    if (!category) return null;

    return (
      <View style={styles.phrasesContainer}>
        <View style={styles.phrasesHeader}>
          <TouchableOpacity
            onPress={() => setSelectedCategory(null)}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.phrasesTitle, { color: colors.text }]}>
            {category.title}
          </Text>
        </View>

        <FlatList
          data={category.phrases}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.phraseItem, { backgroundColor: colors.card }]}>
              <View style={styles.phraseContent}>
                <Text style={[styles.phraseText, { color: colors.text }]}>
                  {item.phrase}
                </Text>
                <Text
                  style={[styles.phraseTranslation, { color: colors.inactive }]}
                >
                  {item.translation}
                </Text>
                <Text
                  style={[
                    styles.phrasePronunciation,
                    { color: colors.primary },
                  ]}
                >
                  {item.pronunciation}
                </Text>
              </View>
              <View style={styles.phraseActions}>
                <TouchableOpacity
                  style={[
                    styles.phraseAction,
                    { backgroundColor: `${colors.primary}20` },
                  ]}
                >
                  <Ionicons
                    name="volume-medium"
                    size={20}
                    color={colors.primary}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.phraseAction,
                    { backgroundColor: `${colors.primary}20` },
                  ]}
                >
                  <Ionicons
                    name="star-outline"
                    size={20}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={styles.phrasesList}
        />
      </View>
    );
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
          <Text style={styles.headerTitle}>Phrases Utiles</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {selectedCategory ? (
        renderPhrasesList()
      ) : (
        <FlatList
          data={phrasesCategories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          contentContainerStyle={styles.categoriesList}
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
  categoriesList: {
    padding: 15,
  },
  categoryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  categoryCount: {
    fontSize: 12,
    marginRight: 10,
  },
  categoryArrow: {
    marginLeft: 5,
  },
  phrasesContainer: {
    flex: 1,
  },
  phrasesHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  backButton: {
    marginRight: 15,
  },
  phrasesTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  phrasesList: {
    padding: 15,
  },
  phraseItem: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  phraseContent: {
    flex: 1,
  },
  phraseText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  phraseTranslation: {
    fontSize: 14,
    marginBottom: 5,
  },
  phrasePronunciation: {
    fontSize: 12,
    fontStyle: "italic",
  },
  phraseActions: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  phraseAction: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
