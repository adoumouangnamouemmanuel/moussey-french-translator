"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, type RouteProp } from "@react-navigation/native";
import { useAppContext } from "../context/AppContext";

type WordDetailParams = {
  word: {
    id: string;
    moussey: string;
    french: string;
    pronunciation: string;
  };
};

export default function WordDetailScreen() {
  const route = useRoute<RouteProp<Record<string, WordDetailParams>, string>>();
  const { word } = route.params;
  const { toggleFavorite, isFavorite } = useAppContext();
  const [isFavorited, setIsFavorited] = useState(isFavorite(word.id));

  const handleToggleFavorite = () => {
    toggleFavorite(word.id);
    setIsFavorited(!isFavorited);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wordHeader}>
          <Text style={styles.wordTitle}>{word.moussey}</Text>
          <Text style={styles.pronunciation}>{word.pronunciation}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Translation</Text>
          <Text style={styles.translation}>{word.french}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Examples</Text>
          <View style={styles.example}>
            <Text style={styles.exampleText}>
              <Text style={styles.exampleLanguage}>Moussey: </Text>
              Example sentence in Moussey would go here.
            </Text>
            <Text style={styles.exampleText}>
              <Text style={styles.exampleLanguage}>French: </Text>
              La phrase d'exemple en français irait ici.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Related Words</Text>
          <TouchableOpacity style={styles.relatedWord}>
            <Text style={styles.relatedWordText}>Related word 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.relatedWord}>
            <Text style={styles.relatedWordText}>Related word 2</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.actionBar}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleToggleFavorite}
        >
          <Ionicons
            name={isFavorited ? "star" : "star-outline"}
            size={24}
            color={isFavorited ? "#FFD700" : "#008080"}
          />
          <Text style={styles.actionText}>Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="volume-high-outline" size={24} color="#008080" />
          <Text style={styles.actionText}>Listen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={24} color="#008080" />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  wordHeader: {
    backgroundColor: "#008080",
    padding: 20,
    alignItems: "center",
  },
  wordTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  pronunciation: {
    fontSize: 18,
    color: "white",
    fontStyle: "italic",
  },
  section: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
    marginBottom: 10,
  },
  translation: {
    fontSize: 16,
    color: "#333",
  },
  example: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  exampleText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  exampleLanguage: {
    fontWeight: "bold",
  },
  relatedWord: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  relatedWordText: {
    fontSize: 14,
    color: "#008080",
  },
  actionBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    padding: 10,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  actionText: {
    color: "#008080",
    marginTop: 5,
    fontSize: 12,
  },
});