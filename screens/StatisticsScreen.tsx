import { StyleSheet, View, Text, ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppContext } from "../context/AppContext";

export default function StatisticsScreen() {
  const { points } = useAppContext();

  // Mock statistics data
  const stats = {
    questionCount: {
      reading: 0,
      writing: 0,
      listening: 0,
      speaking: 0,
      total: 0,
    },
    correctAnswers: {
      reading: 0,
      writing: 0,
      listening: 0,
      speaking: 0,
      total: 0,
    },
    wrongAnswers: {
      reading: 0,
      writing: 0,
      listening: 0,
      speaking: 0,
      total: 0,
    },
    percentage: {
      reading: "0%",
      writing: "0%",
      listening: "0%",
      speaking: "0%",
      total: "0%",
    },
  };

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
        <Text style={styles.headerTitle}>Statistics</Text>
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>

      <ScrollView>
        {/* Paper airplane score indicator */}
        <View style={styles.scoreIndicator}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Ionicons name="paper-plane" size={40} color="white" />
              <Text style={styles.scoreText}>0</Text>
            </View>
          </View>
        </View>

        {/* Statistics table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, styles.firstColumn]}>
              Question count
            </Text>
            <Text style={styles.tableHeaderCell}>Correct answers</Text>
            <Text style={styles.tableHeaderCell}>Wrong answers</Text>
            <Text style={styles.tableHeaderCell}></Text>
          </View>

          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.firstColumn,
                styles.categoryCell,
              ]}
            >
              Reading
            </Text>
            <Text style={styles.tableCell}>{stats.questionCount.reading}</Text>
            <Text style={styles.tableCell}>{stats.correctAnswers.reading}</Text>
            <Text style={styles.tableCell}>{stats.wrongAnswers.reading}</Text>
            <Text style={styles.tableCell}>{stats.percentage.reading}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.firstColumn,
                styles.categoryCell,
              ]}
            >
              Writing
            </Text>
            <Text style={styles.tableCell}>{stats.questionCount.writing}</Text>
            <Text style={styles.tableCell}>{stats.correctAnswers.writing}</Text>
            <Text style={styles.tableCell}>{stats.wrongAnswers.writing}</Text>
            <Text style={styles.tableCell}>{stats.percentage.writing}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.firstColumn,
                styles.categoryCell,
              ]}
            >
              Listening
            </Text>
            <Text style={styles.tableCell}>
              {stats.questionCount.listening}
            </Text>
            <Text style={styles.tableCell}>
              {stats.correctAnswers.listening}
            </Text>
            <Text style={styles.tableCell}>{stats.wrongAnswers.listening}</Text>
            <Text style={styles.tableCell}>{stats.percentage.listening}</Text>
          </View>

          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCell,
                styles.firstColumn,
                styles.categoryCell,
              ]}
            >
              Speaking
            </Text>
            <Text style={styles.tableCell}>{stats.questionCount.speaking}</Text>
            <Text style={styles.tableCell}>
              {stats.correctAnswers.speaking}
            </Text>
            <Text style={styles.tableCell}>{stats.wrongAnswers.speaking}</Text>
            <Text style={styles.tableCell}>{stats.percentage.speaking}</Text>
          </View>

          <View style={[styles.tableRow, styles.totalRow]}>
            <Text
              style={[styles.tableCell, styles.firstColumn, styles.totalCell]}
            >
              Total
            </Text>
            <Text style={[styles.tableCell, styles.totalCell]}>
              {stats.questionCount.total}
            </Text>
            <Text style={[styles.tableCell, styles.totalCell]}>
              {stats.correctAnswers.total}
            </Text>
            <Text style={[styles.tableCell, styles.totalCell]}>
              {stats.wrongAnswers.total}
            </Text>
            <Text style={[styles.tableCell, styles.totalCell]}>
              {stats.percentage.total}
            </Text>
          </View>
        </View>

        {/* Action buttons */}
        <View style={styles.actionButtons}>
          <View style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="document-text" size={32} color="white" />
            </View>
            <Text style={styles.actionText}>Test Results</Text>
          </View>

          <View style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="stats-chart" size={32} color="white" />
            </View>
            <Text style={styles.actionText}>Statistics</Text>
          </View>
        </View>
      </ScrollView>
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
  scoreIndicator: {
    backgroundColor: "#008080",
    paddingBottom: 20,
    alignItems: "center",
  },
  circleContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  tableContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e0f2f1",
    padding: 10,
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#008080",
    fontSize: 12,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
    padding: 10,
    fontSize: 14,
  },
  firstColumn: {
    flex: 1.5,
    textAlign: "left",
  },
  categoryCell: {
    fontWeight: "500",
  },
  totalRow: {
    backgroundColor: "#f5f5f5",
  },
  totalCell: {
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  actionButton: {
    width: "45%",
    backgroundColor: "#008080",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
  actionIconContainer: {
    marginBottom: 10,
  },
  actionText: {
    color: "white",
    fontWeight: "bold",
  },
});