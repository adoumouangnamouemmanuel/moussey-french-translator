import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../context/AppContext";

export default function FavoritesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { favorites, toggleFavorite } = useAppContext();

  // Mock favorite words - in a real app, you would get this from your context/database
  const favoriteWords = [
    { id: "1", moussey: "hello", french: "bonjour", pronunciation: "/bɔ̃.ʒuʁ/" },
    {
      id: "3",
      moussey: "thank you",
      french: "merci",
      pronunciation: "/mɛʁ.si/",
    },
    // Add more favorite words as needed
  ];

  const handleRemoveFavorite = (id: string) => {
    toggleFavorite(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      {favoriteWords.length > 0 ? (
        <FlatList
          data={favoriteWords}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.favoriteItem}>
              <TouchableOpacity
                style={styles.wordInfo}
                onPress={() =>
                  navigation.navigate("WordDetail", { word: item })
                }
              >
                <Text style={styles.moussey}>{item.moussey}</Text>
                <Text style={styles.french}>{item.french}</Text>
                <Text style={styles.pronunciation}>{item.pronunciation}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFavorite(item.id)}
              >
                <Ionicons name="star" size={24} color="#FFD700" />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="star-outline" size={60} color="#cccccc" />
          <Text style={styles.emptyText}>No favorites yet</Text>
          <Text style={styles.emptySubtext}>
            Add words to your favorites by tapping the star icon
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  favoriteItem: {
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
  wordInfo: {
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
  pronunciation: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
    fontStyle: "italic",
  },
  removeButton: {
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 5,
  },
});