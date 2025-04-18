"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Mock irregular verbs data
const mockIrregularVerbs = [
  {
    id: "1",
    infinitive: "être",
    present: "suis, es, est, sommes, êtes, sont",
    past: "étais, étais, était, étions, étiez, étaient",
    future: "serai, seras, sera, serons, serez, seront",
    moussey: "Moussey equivalent",
  },
  {
    id: "2",
    infinitive: "avoir",
    present: "ai, as, a, avons, avez, ont",
    past: "avais, avais, avait, avions, aviez, avaient",
    future: "aurai, auras, aura, aurons, aurez, auront",
    moussey: "Moussey equivalent",
  },
  {
    id: "3",
    infinitive: "aller",
    present: "vais, vas, va, allons, allez, vont",
    past: "allais, allais, allait, allions, alliez, allaient",
    future: "irai, iras, ira, irons, irez, iront",
    moussey: "Moussey equivalent",
  },
  {
    id: "4",
    infinitive: "faire",
    present: "fais, fais, fait, faisons, faites, font",
    past: "faisais, faisais, faisait, faisions, faisiez, faisaient",
    future: "ferai, feras, fera, ferons, ferez, feront",
    moussey: "Moussey equivalent",
  },
  {
    id: "5",
    infinitive: "dire",
    present: "dis, dis, dit, disons, dites, disent",
    past: "disais, disais, disait, disions, disiez, disaient",
    future: "dirai, diras, dira, dirons, direz, diront",
    moussey: "Moussey equivalent",
  },
];

export default function IrregularVerbsScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredVerbs = mockIrregularVerbs.filter((verb) =>
    verb.infinitive.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a verb..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery("")}>
            <Ionicons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

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
              <Text style={styles.infinitive}>{item.infinitive}</Text>
              <Text style={styles.moussey}>{item.moussey}</Text>
              <Ionicons
                name={expandedId === item.id ? "chevron-up" : "chevron-down"}
                size={20}
                color="#008080"
              />
            </View>

            {expandedId === item.id && (
              <View style={styles.verbDetails}>
                <View style={styles.tenseRow}>
                  <Text style={styles.tenseLabel}>Present:</Text>
                  <Text style={styles.tenseValue}>{item.present}</Text>
                </View>
                <View style={styles.tenseRow}>
                  <Text style={styles.tenseLabel}>Past:</Text>
                  <Text style={styles.tenseValue}>{item.past}</Text>
                </View>
                <View style={styles.tenseRow}>
                  <Text style={styles.tenseLabel}>Future:</Text>
                  <Text style={styles.tenseValue}>{item.future}</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No verbs found</Text>
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
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
  infinitive: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
  },
  moussey: {
    fontSize: 14,
    color: "#666",
    flex: 1,
    marginLeft: 10,
  },
  verbDetails: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  tenseRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  tenseLabel: {
    width: 70,
    fontWeight: "bold",
    color: "#333",
  },
  tenseValue: {
    flex: 1,
    color: "#666",
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