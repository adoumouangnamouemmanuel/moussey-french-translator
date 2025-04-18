import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppContext } from "../context/AppContext";

// Learning levels data
const learningLevels = Array.from({ length: 15 }, (_, i) => ({
  id: (i + 1).toString(),
  level: i + 1,
  points: 1000,
  completed: false,
}));

export default function LearningScreen() {
  const { points } = useAppContext();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.pointsContainer}>
          <Ionicons name="cart-outline" size={24} color="white" />
          <View style={styles.starContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.pointsText}>{points}</Text>
          </View>
        </View>
        <Text style={styles.headerTitle}>Learning</Text>
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>

      <FlatList
        data={learningLevels}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.levelCard}>
            <View style={styles.levelCircle}>
              <Text style={styles.levelNumber}>{item.level}</Text>
            </View>
            <View style={styles.levelPoints}>
              <Text style={styles.pointsValue}>{item.points}</Text>
              <Ionicons name="star" size={16} color="#666" />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.levelsGrid}
      />
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
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#008080",
    padding: 15,
    paddingTop: StatusBar.currentHeight || 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  pointsText: {
    color: "#FFD700",
    marginLeft: 2,
    fontWeight: "bold",
  },
  levelsGrid: {
    padding: 10,
  },
  levelCard: {
    flex: 1,
    alignItems: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  levelCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  levelNumber: {
    fontSize: 24,
    color: "#008080",
    fontWeight: "500",
  },
  levelPoints: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsValue: {
    marginRight: 5,
    color: "#666",
  },
});