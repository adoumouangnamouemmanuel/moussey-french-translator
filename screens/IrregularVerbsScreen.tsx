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

// Mock irregular verbs data
const irregularVerbs = [
  {
    id: "1",
    infinitive: "être",
    translation: "to be",
    present: ["suis", "es", "est", "sommes", "êtes", "sont"],
    past: ["étais", "étais", "était", "étions", "étiez", "étaient"],
    future: ["serai", "seras", "sera", "serons", "serez", "seront"],
  },
  {
    id: "2",
    infinitive: "avoir",
    translation: "to have",
    present: ["ai", "as", "a", "avons", "avez", "ont"],
    past: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
    future: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
  },
  {
    id: "3",
    infinitive: "aller",
    translation: "to go",
    present: ["vais", "vas", "va", "allons", "allez", "vont"],
    past: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
    future: ["irai", "iras", "ira", "irons", "irez", "iront"],
  },
  {
    id: "4",
    infinitive: "faire",
    translation: "to do/make",
    present: ["fais", "fais", "fait", "faisons", "faites", "font"],
    past: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
    future: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
  },
  {
    id: "5",
    infinitive: "dire",
    translation: "to say",
    present: ["dis", "dis", "dit", "disons", "dites", "disent"],
    past: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
    future: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
  },
];

export default function IrregularVerbsScreen() {
  const { colors } = useTheme(); // Use theme colors
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVerb, setSelectedVerb] = useState<string | null>(null);

  // Filter verbs based on search query
  const filteredVerbs =
    searchQuery.trim() === ""
      ? irregularVerbs
      : irregularVerbs.filter(
          (verb) =>
            verb.infinitive.toLowerCase().includes(searchQuery.toLowerCase()) ||
            verb.translation.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const renderVerbDetails = () => {
    const verb = irregularVerbs.find((v) => v.id === selectedVerb);
    if (!verb) return null;

    const pronouns = ["je/j'", "tu", "il/elle", "nous", "vous", "ils/elles"];

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
              {verb.infinitive}
            </Text>
            <Text style={[styles.verbTranslation, { color: colors.inactive }]}>
              {verb.translation}
            </Text>
          </View>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="star-outline" size={24} color={colors.inactive} />
          </TouchableOpacity>
        </View>

        <View style={styles.conjugationContainer}>
          <View
            style={[
              styles.conjugationHeader,
              { backgroundColor: colors.border },
            ]}
          >
            <Text
              style={[styles.conjugationHeaderCell, { color: colors.text }]}
            >
              Pronoun
            </Text>
            <Text
              style={[styles.conjugationHeaderCell, { color: colors.text }]}
            >
              Present
            </Text>
            <Text
              style={[styles.conjugationHeaderCell, { color: colors.text }]}
            >
              Past
            </Text>
            <Text
              style={[styles.conjugationHeaderCell, { color: colors.text }]}
            >
              Future
            </Text>
          </View>

          {pronouns.map((pronoun, index) => (
            <View
              key={index}
              style={[
                styles.conjugationRow,
                { borderBottomColor: colors.border },
              ]}
            >
              <Text
                style={[
                  styles.conjugationCell,
                  styles.pronounCell,
                  { color: colors.primary },
                ]}
              >
                {pronoun}
              </Text>
              <Text style={[styles.conjugationCell, { color: colors.text }]}>
                {verb.present[index]}
              </Text>
              <Text style={[styles.conjugationCell, { color: colors.text }]}>
                {verb.past[index]}
              </Text>
              <Text style={[styles.conjugationCell, { color: colors.text }]}>
                {verb.future[index]}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.examplesContainer}>
          <Text style={[styles.examplesTitle, { color: colors.text }]}>
            Examples
          </Text>
          <View
            style={[styles.exampleItem, { backgroundColor: colors.background }]}
          >
            <Text style={[styles.exampleText, { color: colors.text }]}>
              Je {verb.present[0]} content.
            </Text>
            <Text
              style={[styles.exampleTranslation, { color: colors.inactive }]}
            >
              I am happy.
            </Text>
          </View>
          <View
            style={[styles.exampleItem, { backgroundColor: colors.background }]}
          >
            <Text style={[styles.exampleText, { color: colors.text }]}>
              Tu {verb.past[1]} là hier.
            </Text>
            <Text
              style={[styles.exampleTranslation, { color: colors.inactive }]}
            >
              You were there yesterday.
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
          <Text style={styles.headerTitle}>Verbes Irréguliers</Text>
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
            placeholder="Rechercher un verbe..."
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
                  {item.infinitive}
                </Text>
                <Text
                  style={[
                    styles.verbItemTranslation,
                    { color: colors.inactive },
                  ]}
                >
                  {item.translation}
                </Text>
                <View style={styles.verbItemSamples}>
                  <Text
                    style={[styles.verbItemSample, { color: colors.primary }]}
                  >
                    je {item.present[0]}, tu {item.present[1]}, il{" "}
                    {item.present[2]}...
                  </Text>
                </View>
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
                Aucun verbe trouvé
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  verbItemTranslation: {
    fontSize: 14,
    marginBottom: 5,
  },
  verbItemSamples: {
    marginTop: 5,
  },
  verbItemSample: {
    fontSize: 12,
    fontStyle: "italic",
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
    fontSize: 24,
    fontWeight: "bold",
  },
  verbTranslation: {
    fontSize: 16,
  },
  favoriteButton: {
    padding: 5,
  },
  conjugationContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  conjugationHeader: {
    flexDirection: "row",
    padding: 10,
  },
  conjugationHeaderCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  conjugationRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  conjugationCell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
  pronounCell: {
    fontWeight: "500",
  },
  examplesContainer: {
    marginTop: 10,
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
});