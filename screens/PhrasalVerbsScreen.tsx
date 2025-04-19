"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

// Mock phrasal verbs data
const phrasalVerbs = [
  {
    id: "1",
    verb: "mettre en place",
    translation: "to set up",
    examples: [
      {
        french: "Nous avons mis en place un nouveau système.",
        english: "We set up a new system.",
      },
      {
        french: "Il faut mettre en place des règles.",
        english: "We need to set up rules.",
      },
    ],
  },
  {
    id: "2",
    verb: "faire face à",
    translation: "to face, to deal with",
    examples: [
      {
        french: "Elle fait face à de nombreux défis.",
        english: "She is facing many challenges.",
      },
      {
        french: "Nous devons faire face à la situation.",
        english: "We must deal with the situation.",
      },
    ],
  },
  {
    id: "3",
    verb: "tenir compte de",
    translation: "to take into account",
    examples: [
      {
        french: "Il faut tenir compte de tous les facteurs.",
        english: "We must take all factors into account.",
      },
      {
        french: "Elle ne tient pas compte de mon avis.",
        english: "She doesn't take my opinion into account.",
      },
    ],
  },
  {
    id: "4",
    verb: "se mettre à",
    translation: "to start, to begin to",
    examples: [
      { french: "Il s'est mis à pleuvoir.", english: "It started to rain." },
      { french: "Elle s'est mise à chanter.", english: "She began to sing." },
    ],
  },
  {
    id: "5",
    verb: "avoir besoin de",
    translation: "to need",
    examples: [
      { french: "J'ai besoin de dormir.", english: "I need to sleep." },
      { french: "Ils ont besoin d'aide.", english: "They need help." },
    ],
  },
];

export default function PhrasalVerbsScreen() {
  const { colors } = useTheme(); // Use theme colors
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);

  // Filter verbs based on search query
  const filteredVerbs =
    searchQuery.trim() === ""
      ? phrasalVerbs
      : phrasalVerbs.filter(
          (verb) =>
            verb.verb.toLowerCase().includes(searchQuery.toLowerCase()) ||
            verb.translation.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const renderVerbDetails = () => {
    const verb = phrasalVerbs.find((v) => v.id === selectedVerb);
    if (!verb) return null;

    return (
      <View
        style={[styles.verbDetailsContainer, { backgroundColor: colors.card }]}
      >
        <View style={styles.verbDetailsHeader}>
          <TouchableOpacity
            onPress={() => setSelectedVerb(null)}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <View style={styles.verbTitleContainer}>
            <Text style={[styles.verbTitle, { color: colors.text }]}>
              {verb.verb}
            </Text>
            <Text style={[styles.verbTranslation, { color: colors.inactive }]}>
              {verb.translation}
            </Text>
          </View>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="star-outline" size={24} color={colors.inactive} />
          </TouchableOpacity>
        </View>

        <View style={styles.examplesContainer}>
          <Text style={[styles.examplesTitle, { color: colors.text }]}>
            Examples
          </Text>
          {verb.examples.map((example, index) => (
            <View
              key={index}
              style={[
                styles.exampleItem,
                { backgroundColor: colors.background },
              ]}
            >
              <Text style={[styles.exampleText, { color: colors.text }]}>
                {example.french}
              </Text>
              <Text
                style={[styles.exampleTranslation, { color: colors.inactive }]}
              >
                {example.english}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.notesContainer}>
          <Text style={[styles.notesTitle, { color: colors.text }]}>Notes</Text>
          <View
            style={[styles.noteItem, { backgroundColor: colors.background }]}
          >
            <Text style={[styles.noteText, { color: colors.text }]}>
              This phrasal verb is commonly used in formal contexts. Pay
              attention to the preposition that follows it.
            </Text>
          </View>
        </View>
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
          <Text style={styles.headerTitle}>Verbes Phrasaux</Text>
          <TouchableOpacity>
            <Ionicons name="options" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View
          style={[
            styles.searchContainer,
            { backgroundColor: "rgba(255,255,255,0.2)" },
          ]}
        >
          <Ionicons
            name="search"
            size={20}
            color="white"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un verbe phrasal..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>

      {selectedVerb ? (
        renderVerbDetails()
      ) : (
        <FlatList
          data={filteredVerbs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.verbItem, { backgroundColor: colors.card }]}
              onPress={() => setSelectedVerb(item.id)}
            >
              <View style={styles.verbItemContent}>
                <Text style={[styles.verbItemTitle, { color: colors.text }]}>
                  {item.verb}
                </Text>
                <Text
                  style={[
                    styles.verbItemTranslation,
                    { color: colors.inactive },
                  ]}
                >
                  {item.translation}
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.inactive}
              />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.verbsList}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="search" size={50} color={colors.inactive} />
              <Text style={[styles.emptyText, { color: colors.inactive }]}>
                Aucun verbe phrasal trouvé
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
    marginBottom: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "white",
  },
  verbsList: {
    padding: 15,
  },
  verbItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  verbItemContent: {
    flex: 1,
  },
  verbItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  verbItemTranslation: {
    fontSize: 14,
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
  verbDetailsContainer: {
    flex: 1,
    padding: 15,
  },
  verbDetailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  verbTitleContainer: {
    flex: 1,
  },
  verbTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  verbTranslation: {
    fontSize: 16,
  },
  favoriteButton: {
    padding: 5,
  },
  examplesContainer: {
    marginBottom: 20,
  },
  examplesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  exampleItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  exampleText: {
    fontSize: 16,
    marginBottom: 5,
  },
  exampleTranslation: {
    fontSize: 14,
    fontStyle: "italic",
  },
  notesContainer: {
    marginBottom: 20,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  noteItem: {
    padding: 15,
    borderRadius: 10,
  },
  noteText: {
    fontSize: 14,
    lineHeight: 20,
  },
});