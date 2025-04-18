import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// Mock phrases data
const mockPhrases = [
  {
    id: "1",
    moussey: "Moussey phrase 1",
    french: "Comment allez-vous ?",
    translation: "How are you?",
  },
  {
    id: "2",
    moussey: "Moussey phrase 2",
    french: "Je m'appelle Jean.",
    translation: "My name is Jean.",
  },
  {
    id: "3",
    moussey: "Moussey phrase 3",
    french: "Où est la gare ?",
    translation: "Where is the train station?",
  },
  {
    id: "4",
    moussey: "Moussey phrase 4",
    french: "Je ne comprends pas.",
    translation: "I don't understand.",
  },
  {
    id: "5",
    moussey: "Moussey phrase 5",
    french: "Pouvez-vous répéter, s'il vous plaît ?",
    translation: "Can you repeat, please?",
  },
];

// Categories for phrases
const categories = [
  { id: "1", name: "Greetings" },
  { id: "2", name: "Travel" },
  { id: "3", name: "Food" },
  { id: "4", name: "Shopping" },
  { id: "5", name: "Emergency" },
];

export default function PhrasesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <FlatList
        data={mockPhrases}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.phraseItem}>
            <View style={styles.phraseContent}>
              <Text style={styles.moussey}>{item.moussey}</Text>
              <Text style={styles.french}>{item.french}</Text>
              <Text style={styles.translation}>{item.translation}</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons
                  name="volume-high-outline"
                  size={20}
                  color="#008080"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="star-outline" size={20} color="#008080" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  categoriesContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  categoriesList: {
    paddingHorizontal: 10,
  },
  categoryButton: {
    backgroundColor: "#008080",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  categoryText: {
    color: "white",
    fontWeight: "500",
  },
  phraseItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  phraseContent: {
    flex: 1,
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
  translation: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
    fontStyle: "italic",
  },
  actionButtons: {
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  actionButton: {
    padding: 5,
  },
});