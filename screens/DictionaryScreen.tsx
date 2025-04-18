"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Mock data - replace with your actual Moussey-French dictionary data
const mockDictionary = [
  { id: "1", moussey: "hello", french: "bonjour", pronunciation: "/bɔ̃.ʒuʁ/" },
  {
    id: "2",
    moussey: "goodbye",
    french: "au revoir",
    pronunciation: "/o.ʁə.vwaʁ/",
  },
  { id: "3", moussey: "thank you", french: "merci", pronunciation: "/mɛʁ.si/" },
  { id: "4", moussey: "yes", french: "oui", pronunciation: "/wi/" },
  { id: "5", moussey: "no", french: "non", pronunciation: "/nɔ̃/" },
  // Add more words here
];

type WordItemProps = {
  item: {
    id: string;
    moussey: string;
    french: string;
    pronunciation: string;
  };
  onPress: () => void;
};

const WordItem = ({ item, onPress }: WordItemProps) => (
  <TouchableOpacity style={styles.wordItem} onPress={onPress}>
    <View>
      <Text style={styles.moussey}>{item.moussey}</Text>
      <Text style={styles.french}>{item.french}</Text>
      <Text style={styles.pronunciation}>{item.pronunciation}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#008080" />
  </TouchableOpacity>
);

export default function DictionaryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWords = mockDictionary.filter(
    (word) =>
      word.moussey.toLowerCase().includes(searchQuery.toLowerCase()) ||
      word.french.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a word..."
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
        data={filteredWords}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WordItem
            item={item}
            onPress={() => navigation.navigate("WordDetail", { word: item })}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No words found</Text>
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
  wordItem: {
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
  moussey: {
    fontSize: 16,
    fontWeight: "bold",
  },
  french: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
  pronunciation: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
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