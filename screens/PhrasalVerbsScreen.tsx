"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Mock phrasal verbs data
const mockPhrasalVerbs = [
  {
    id: "1",
    french: "mettre en place",
    meaning: "to set up, to establish",
    example: "Nous allons mettre en place un nouveau système.",
    moussey: "Moussey equivalent",
  },
  {
    id: "2",
    french: "faire face à",
    meaning: "to face, to confront",
    example: "Il doit faire face à ses problèmes.",
    moussey: "Moussey equivalent",
  },
  {
    id: "3",
    french: "prendre soin de",
    meaning: "to take care of",
    example: "Elle prend soin de ses parents âgés.",
    moussey: "Moussey equivalent",
  },
  {
    id: "4",
    french: "tenir compte de",
    meaning: "to take into account",
    example: "Nous devons tenir compte de tous les facteurs.",
    moussey: "Moussey equivalent",
  },
  {
    id: "5",
    french: "se mettre d'accord",
    meaning: "to agree, to come to an agreement",
    example: "Ils se sont mis d'accord sur le prix.",
    moussey: "Moussey equivalent",
  },
];

export default function PhrasalVerbsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isSearchMode, setIsSearchMode] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const filteredVerbs = mockPhrasalVerbs.filter(
    (verb) =>
      verb.french.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verb.meaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

      {isSearchMode ? (
        <View style={styles.searchHeader}>
          <TouchableOpacity
            onPress={() => {
              setIsSearchMode(false);
              setSearchQuery("");
            }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#ccc"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
          />
        </View>
      ) : (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Moussey → French</Text>
          <TouchableOpacity onPress={() => setIsSearchMode(true)}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={filteredVerbs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.verbItem}
            onPress={() => toggleExpand(item.id)}
            activeOpacity={0.7}
          >
            <View style={styles.verbHeader}>
              <Text style={styles.french}>{item.french}</Text>
              <Ionicons
                name={expandedId === item.id ? "chevron-up" : "chevron-down"}
                size={20}
                color="#008080"
              />
            </View>

            <Text style={styles.meaning}>{item.meaning}</Text>
            <Text style={styles.moussey}>{item.moussey}</Text>

            {expandedId === item.id && (
              <View style={styles.verbDetails}>
                <Text style={styles.exampleLabel}>Example:</Text>
                <Text style={styles.example}>{item.example}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No phrasal verbs found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#008080",
    padding: 15,
    paddingTop: StatusBar.currentHeight || 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#008080",
    padding: 15,
    paddingTop: StatusBar.currentHeight || 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#008080",
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  verbItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  verbHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  french: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
  },
  meaning: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  moussey: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
    fontStyle: "italic",
  },
  verbDetails: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  exampleLabel: {
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  example: {
    color: "#666",
    fontStyle: "italic",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});
