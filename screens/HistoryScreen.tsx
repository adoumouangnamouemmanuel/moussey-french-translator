import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../context/AppContext";

// Mock history data - in a real app, you would get this from your database
const mockHistoryItems = [
  { id: "1", french: "chaste", moussey: "chaste", timestamp: new Date() },
  { id: "2", french: "cafard", moussey: "cockroach", timestamp: new Date() },
  {
    id: "3",
    french: "invocation",
    moussey: "invocation",
    timestamp: new Date(),
  },
  { id: "4", french: "caméléon", moussey: "chameleon", timestamp: new Date() },
  { id: "5", french: "péter", moussey: "fart", timestamp: new Date() },
  { id: "6", french: "peter", moussey: "peter", timestamp: new Date() },
  { id: "7", french: "olive", moussey: "olive", timestamp: new Date() },
  { id: "8", french: "sketch", moussey: "sketch", timestamp: new Date() },
  { id: "9", french: "bourgeois", moussey: "bourgeois", timestamp: new Date() },
  { id: "10", french: "rôti", moussey: "roast", timestamp: new Date() },
  { id: "11", french: "brochette", moussey: "skewer", timestamp: new Date() },
  { id: "12", french: "cuit", moussey: "cooked", timestamp: new Date() },
  {
    id: "13",
    french: "chenille",
    moussey: "caterpillar",
    timestamp: new Date(),
  },
  { id: "14", french: "clignoter", moussey: "flash", timestamp: new Date() },
  { id: "15", french: "goudron", moussey: "tar", timestamp: new Date() },
];

export default function HistoryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { clearHistory } = useAppContext();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>French → Moussey</Text>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockHistoryItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <View style={styles.wordPair}>
              <Text style={styles.french}>{item.french}</Text>
              <Text style={styles.moussey}>{item.moussey}</Text>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
              <Ionicons name="close" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="time-outline" size={60} color="#cccccc" />
            <Text style={styles.emptyText}>No history yet</Text>
            <Text style={styles.emptySubtext}>
              Words you view will appear here
            </Text>
          </View>
        }
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="swap-horizontal" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="search" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
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
  wordPair: {
    flex: 1,
  },
  french: {
    fontSize: 16,
    fontWeight: "bold",
  },
  moussey: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
  deleteButton: {
    padding: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
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
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    padding: 10,
  },
  bottomButton: {
    padding: 10,
  },
});