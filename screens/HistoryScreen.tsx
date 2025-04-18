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

// Mock dictionary data - in a real app, you would get this from your database
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
];

export default function HistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { history, clearHistory } = useAppContext();

  // Get the full word data for each history item
  const historyWords = history
    .map((id) => mockDictionary.find((word) => word.id === id))
    .filter((word) => word !== undefined);

  return (
    <SafeAreaView style={styles.container}>
      {history.length > 0 ? (
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Recent Words</Text>
            <TouchableOpacity onPress={clearHistory} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={historyWords}
            keyExtractor={(item) => item!.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.historyItem}
                onPress={() =>
                  navigation.navigate("WordDetail", { word: item })
                }
              >
                <View>
                  <Text style={styles.moussey}>{item!.moussey}</Text>
                  <Text style={styles.french}>{item!.french}</Text>
                  <Text style={styles.pronunciation}>
                    {item!.pronunciation}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#008080" />
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="time-outline" size={60} color="#cccccc" />
          <Text style={styles.emptyText}>No history yet</Text>
          <Text style={styles.emptySubtext}>
            Words you view will appear here
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    color: "#008080",
    fontWeight: "500",
  },
  historyItem: {
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