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

// Mock word lists data
const mockWordLists = [
  {
    id: "1",
    title: "Beginner Words",
    count: 50,
    progress: 15,
  },
  {
    id: "2",
    title: "Travel Vocabulary",
    count: 75,
    progress: 30,
  },
  {
    id: "3",
    title: "Food and Dining",
    count: 60,
    progress: 45,
  },
  {
    id: "4",
    title: "Business Terms",
    count: 100,
    progress: 10,
  },
  {
    id: "5",
    title: "Medical Vocabulary",
    count: 80,
    progress: 5,
  },
];

export default function ListsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Word Lists</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#008080" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockWordLists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate("Dictionary")}
          >
            <View style={styles.listInfo}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listCount}>{item.count} words</Text>

              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progress,
                      { width: `${(item.progress / item.count) * 100}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>
                  {item.progress}/{item.count}
                </Text>
              </View>
            </View>

            <Ionicons name="chevron-forward" size={20} color="#008080" />
          </TouchableOpacity>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addButton: {
    padding: 5,
  },
  listItem: {
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
  listInfo: {
    flex: 1,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  listCount: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    marginRight: 10,
  },
  progress: {
    height: "100%",
    backgroundColor: "#008080",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
    width: 45,
    textAlign: "right",
  },
});