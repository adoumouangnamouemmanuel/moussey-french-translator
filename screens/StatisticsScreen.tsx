"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext"; // Import useTheme
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// Mock statistics data
const stats = {
  totalPoints: 1100,
  streak: 3,
  wordsLearned: 42,
  timeSpent: "3h 15m",
  categories: {
    reading: {
      questionCount: 50,
      correctAnswers: 40,
      wrongAnswers: 10,
      percentage: "80%",
    },
    writing: {
      questionCount: 30,
      correctAnswers: 25,
      wrongAnswers: 5,
      percentage: "83%",
    },
    listening: {
      questionCount: 20,
      correctAnswers: 15,
      wrongAnswers: 5,
      percentage: "75%",
    },
    speaking: {
      questionCount: 10,
      correctAnswers: 7,
      wrongAnswers: 3,
      percentage: "70%",
    },
  },
  total: {
    questionCount: 110,
    correctAnswers: 87,
    wrongAnswers: 23,
    percentage: "79%",
  },
  weeklyActivity: [60, 30, 45, 0, 90, 120, 75], // minutes per day
  monthlyProgress: [
    { week: "Semaine 1", words: 15 },
    { week: "Semaine 2", words: 12 },
    { week: "Semaine 3", words: 8 },
    { week: "Semaine 4", words: 7 },
  ],
};

// Time periods for filtering
const timePeriods = ["Semaine", "Mois", "Année", "Tout"];

export default function StatisticsScreen() {
  const { points } = useAppContext();
  const { colors } = useTheme(); // Use theme colors
  const [selectedPeriod, setSelectedPeriod] = useState("Semaine");
  const [selectedTab, setSelectedTab] = useState("performance");

  // Calculate max value for weekly activity chart
  const maxActivity = Math.max(...stats.weeklyActivity);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Statistiques</Text>
          <View style={styles.pointsContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.pointsText}>{points}</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Tabs */}
      <View style={[styles.tabsContainer, { backgroundColor: colors.card }]}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "performance" && styles.activeTab,
            selectedTab === "performance" && {
              borderBottomColor: colors.primary,
            },
          ]}
          onPress={() => setSelectedTab("performance")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  selectedTab === "performance"
                    ? colors.primary
                    : colors.inactive,
              },
            ]}
          >
            Performance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "activity" && styles.activeTab,
            selectedTab === "activity" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setSelectedTab("activity")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  selectedTab === "activity" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Activité
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "progress" && styles.activeTab,
            selectedTab === "progress" && { borderBottomColor: colors.primary },
          ]}
          onPress={() => setSelectedTab("progress")}
        >
          <Text
            style={[
              styles.tabText,
              {
                color:
                  selectedTab === "progress" ? colors.primary : colors.inactive,
              },
            ]}
          >
            Progrès
          </Text>
        </TouchableOpacity>
      </View>

      {/* Time period filter */}
      <View
        style={[styles.periodFilterContainer, { backgroundColor: colors.card }]}
      >
        {timePeriods.map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              selectedPeriod === period && styles.activePeriodButton,
              selectedPeriod === period && { backgroundColor: colors.primary },
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text
              style={[
                styles.periodButtonText,
                {
                  color: selectedPeriod === period ? "white" : colors.inactive,
                },
              ]}
            >
              {period}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Summary cards */}
        <View style={styles.summaryContainer}>
          <View style={[styles.summaryCard, { backgroundColor: colors.card }]}>
            <View
              style={[
                styles.summaryIconContainer,
                { backgroundColor: `${colors.primary}20` },
              ]}
            >
              <Ionicons name="flame" size={24} color={colors.primary} />
            </View>
            <Text style={[styles.summaryValue, { color: colors.text }]}>
              {stats.streak}
            </Text>
            <Text style={[styles.summaryLabel, { color: colors.inactive }]}>
              Jours de série
            </Text>
          </View>

          <View style={[styles.summaryCard, { backgroundColor: colors.card }]}>
            <View
              style={[
                styles.summaryIconContainer,
                { backgroundColor: `${colors.primary}20` },
              ]}
            >
              <Ionicons name="book" size={24} color={colors.primary} />
            </View>
            <Text style={[styles.summaryValue, { color: colors.text }]}>
              {stats.wordsLearned}
            </Text>
            <Text style={[styles.summaryLabel, { color: colors.inactive }]}>
              Mots appris
            </Text>
          </View>

          <View style={[styles.summaryCard, { backgroundColor: colors.card }]}>
            <View
              style={[
                styles.summaryIconContainer,
                { backgroundColor: `${colors.primary}20` },
              ]}
            >
              <Ionicons name="time" size={24} color={colors.primary} />
            </View>
            <Text style={[styles.summaryValue, { color: colors.text }]}>
              {stats.timeSpent}
            </Text>
            <Text style={[styles.summaryLabel, { color: colors.inactive }]}>
              Temps total
            </Text>
          </View>
        </View>

        {selectedTab === "performance" && (
          <>
            {/* Overall score */}
            <View style={styles.scoreContainer}>
              <View
                style={[
                  styles.scoreCircleContainer,
                  { backgroundColor: colors.card },
                ]}
              >
                <View
                  style={[
                    styles.scoreCircle,
                    { backgroundColor: colors.primary },
                  ]}
                >
                  <Text style={styles.scorePercentage}>
                    {stats.total.percentage}
                  </Text>
                  <Text style={styles.scoreLabel}>Score global</Text>
                </View>
              </View>
            </View>

            {/* Statistics table */}
            <View
              style={[styles.tableContainer, { backgroundColor: colors.card }]}
            >
              <View
                style={[styles.tableHeader, { backgroundColor: colors.border }]}
              >
                <Text
                  style={[
                    styles.tableHeaderCell,
                    styles.firstColumn,
                    { color: colors.text },
                  ]}
                >
                  Catégorie
                </Text>
                <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                  Questions
                </Text>
                <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                  Correctes
                </Text>
                <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                  Incorrectes
                </Text>
                <Text style={[styles.tableHeaderCell, { color: colors.text }]}>
                  %
                </Text>
              </View>

              {Object.entries(stats.categories).map(([category, data]) => (
                <View
                  key={category}
                  style={[
                    styles.tableRow,
                    { borderBottomColor: colors.border },
                  ]}
                >
                  <Text
                    style={[
                      styles.tableCell,
                      styles.firstColumn,
                      styles.categoryCell,
                      { color: colors.primary },
                    ]}
                  >
                    {category === "reading"
                      ? "Lecture"
                      : category === "writing"
                      ? "Écriture"
                      : category === "listening"
                      ? "Écoute"
                      : "Parole"}
                  </Text>
                  <Text style={[styles.tableCell, { color: colors.text }]}>
                    {data.questionCount}
                  </Text>
                  <Text style={[styles.tableCell, { color: colors.text }]}>
                    {data.correctAnswers}
                  </Text>
                  <Text style={[styles.tableCell, { color: colors.text }]}>
                    {data.wrongAnswers}
                  </Text>
                  <Text style={[styles.tableCell, { color: colors.text }]}>
                    {data.percentage}
                  </Text>
                </View>
              ))}

              <View
                style={[
                  styles.tableRow,
                  styles.totalRow,
                  { backgroundColor: colors.border },
                ]}
              >
                <Text
                  style={[
                    styles.tableCell,
                    styles.firstColumn,
                    styles.totalCell,
                    { color: colors.text },
                  ]}
                >
                  Total
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.totalCell,
                    { color: colors.text },
                  ]}
                >
                  {stats.total.questionCount}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.totalCell,
                    { color: colors.text },
                  ]}
                >
                  {stats.total.correctAnswers}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.totalCell,
                    { color: colors.text },
                  ]}
                >
                  {stats.total.wrongAnswers}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.totalCell,
                    { color: colors.text },
                  ]}
                >
                  {stats.total.percentage}
                </Text>
              </View>
            </View>
          </>
        )}

        {selectedTab === "activity" && (
          <>
            {/* Weekly activity chart */}
            <View
              style={[styles.chartContainer, { backgroundColor: colors.card }]}
            >
              <Text style={[styles.chartTitle, { color: colors.text }]}>
                Activité Hebdomadaire
              </Text>
              <View style={styles.weeklyChart}>
                {stats.weeklyActivity.map((minutes, index) => (
                  <View key={index} style={styles.chartBarContainer}>
                    <View style={styles.chartBarLabelContainer}>
                      <Text
                        style={[
                          styles.chartBarValue,
                          { color: colors.inactive },
                        ]}
                      >
                        {minutes}m
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.chartBar,
                        { backgroundColor: colors.border },
                      ]}
                    >
                      <View
                        style={[
                          styles.chartBarFill,
                          {
                            height: `${(minutes / maxActivity) * 100}%`,
                            backgroundColor: colors.primary,
                          },
                          minutes === 0 && styles.emptyBar,
                        ]}
                      />
                    </View>
                    <Text
                      style={[styles.chartBarLabel, { color: colors.inactive }]}
                    >
                      {index === 0
                        ? "Lun"
                        : index === 1
                        ? "Mar"
                        : index === 2
                        ? "Mer"
                        : index === 3
                        ? "Jeu"
                        : index === 4
                        ? "Ven"
                        : index === 5
                        ? "Sam"
                        : "Dim"}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Activity breakdown */}
            <View
              style={[
                styles.activityBreakdownContainer,
                { backgroundColor: colors.card },
              ]}
            >
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Répartition de l'Activité
              </Text>
              <View style={styles.activityBreakdown}>
                <View style={styles.activityBreakdownItem}>
                  <View
                    style={[
                      styles.activityBreakdownColor,
                      { backgroundColor: colors.primary },
                    ]}
                  />
                  <Text
                    style={[
                      styles.activityBreakdownLabel,
                      { color: colors.text },
                    ]}
                  >
                    Vocabulaire
                  </Text>
                  <Text
                    style={[
                      styles.activityBreakdownValue,
                      { color: colors.inactive },
                    ]}
                  >
                    45%
                  </Text>
                </View>
                <View style={styles.activityBreakdownItem}>
                  <View
                    style={[
                      styles.activityBreakdownColor,
                      { backgroundColor: "#FFD700" },
                    ]}
                  />
                  <Text
                    style={[
                      styles.activityBreakdownLabel,
                      { color: colors.text },
                    ]}
                  >
                    Grammaire
                  </Text>
                  <Text
                    style={[
                      styles.activityBreakdownValue,
                      { color: colors.inactive },
                    ]}
                  >
                    25%
                  </Text>
                </View>
                <View style={styles.activityBreakdownItem}>
                  <View
                    style={[
                      styles.activityBreakdownColor,
                      { backgroundColor: "#4CAF50" },
                    ]}
                  />
                  <Text
                    style={[
                      styles.activityBreakdownLabel,
                      { color: colors.text },
                    ]}
                  >
                    Écoute
                  </Text>
                  <Text
                    style={[
                      styles.activityBreakdownValue,
                      { color: colors.inactive },
                    ]}
                  >
                    20%
                  </Text>
                </View>
                <View style={styles.activityBreakdownItem}>
                  <View
                    style={[
                      styles.activityBreakdownColor,
                      { backgroundColor: "#2196F3" },
                    ]}
                  />
                  <Text
                    style={[
                      styles.activityBreakdownLabel,
                      { color: colors.text },
                    ]}
                  >
                    Parole
                  </Text>
                  <Text
                    style={[
                      styles.activityBreakdownValue,
                      { color: colors.inactive },
                    ]}
                  >
                    10%
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}

        {selectedTab === "progress" && (
          <>
            {/* Monthly progress */}
            <View
              style={[
                styles.progressContainer,
                { backgroundColor: colors.card },
              ]}
            >
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Progrès Mensuel
              </Text>
              <View style={styles.monthlyProgressChart}>
                {stats.monthlyProgress.map((week, index) => (
                  <View key={index} style={styles.progressBarContainer}>
                    <Text
                      style={[styles.progressBarLabel, { color: colors.text }]}
                    >
                      {week.week}
                    </Text>
                    <View
                      style={[
                        styles.progressBar,
                        { backgroundColor: colors.border },
                      ]}
                    >
                      <LinearGradient
                        colors={colors.headerBackground as [string, string]}
                        style={[
                          styles.progressBarFill,
                          { width: `${(week.words / 15) * 100}%` },
                        ]}
                      />
                    </View>
                    <Text
                      style={[
                        styles.progressBarValue,
                        { color: colors.inactive },
                      ]}
                    >
                      {week.words} mots
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Achievement badges */}
            <View
              style={[
                styles.achievementsContainer,
                { backgroundColor: colors.card },
              ]}
            >
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                Badges et Réalisations
              </Text>
              <View style={styles.badgesGrid}>
                <View style={styles.badgeItem}>
                  <View
                    style={[
                      styles.badgeIconContainer,
                      styles.badgeUnlocked,
                      { backgroundColor: colors.primary },
                    ]}
                  >
                    <Ionicons name="rocket" size={30} color="white" />
                  </View>
                  <Text style={[styles.badgeName, { color: colors.text }]}>
                    Débutant
                  </Text>
                </View>
                <View style={styles.badgeItem}>
                  <View
                    style={[
                      styles.badgeIconContainer,
                      styles.badgeUnlocked,
                      { backgroundColor: colors.primary },
                    ]}
                  >
                    <Ionicons name="flame" size={30} color="white" />
                  </View>
                  <Text style={[styles.badgeName, { color: colors.text }]}>
                    Série de 3 jours
                  </Text>
                </View>
                <View style={styles.badgeItem}>
                  <View
                    style={[
                      styles.badgeIconContainer,
                      styles.badgeLocked,
                      { backgroundColor: colors.border },
                    ]}
                  >
                    <Ionicons name="trophy" size={30} color={colors.inactive} />
                  </View>
                  <Text
                    style={[
                      styles.badgeName,
                      styles.badgeNameLocked,
                      { color: colors.inactive },
                    ]}
                  >
                    Expert
                  </Text>
                </View>
                <View style={styles.badgeItem}>
                  <View
                    style={[
                      styles.badgeIconContainer,
                      styles.badgeLocked,
                      { backgroundColor: colors.border },
                    ]}
                  >
                    <Ionicons name="star" size={30} color={colors.inactive} />
                  </View>
                  <Text
                    style={[
                      styles.badgeName,
                      styles.badgeNameLocked,
                      { color: colors.inactive },
                    ]}
                  >
                    100 mots
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}

        {/* Bottom spacing */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: StatusBar.currentHeight || 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  pointsText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  periodFilterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  periodButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  activePeriodButton: {},
  periodButtonText: {
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  summaryCard: {
    width: "30%",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  summaryIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 12,
    textAlign: "center",
  },
  scoreContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
  scoreCircleContainer: {
    width: 150,
    height: 150,
    padding: 5,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  scorePercentage: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  scoreLabel: {
    color: "white",
    fontSize: 14,
  },
  tableContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    padding: 10,
  },
  tableHeaderCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
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
  totalRow: {},
  totalCell: {
    fontWeight: "bold",
  },
  chartContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  weeklyChart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 200,
  },
  chartBarContainer: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  chartBarLabelContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  chartBarValue: {
    fontSize: 10,
  },
  chartBar: {
    width: 20,
    height: "85%",
    borderRadius: 10,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  chartBarFill: {
    width: "100%",
    borderRadius: 10,
  },
  emptyBar: {
    height: 5,
  },
  chartBarLabel: {
    fontSize: 12,
    marginTop: 5,
  },
  activityBreakdownContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  activityBreakdown: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  activityBreakdownItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  activityBreakdownColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  activityBreakdownLabel: {
    fontSize: 14,
    flex: 1,
  },
  activityBreakdownValue: {
    fontSize: 14,
    fontWeight: "bold",
  },
  progressContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  monthlyProgressChart: {
    marginTop: 10,
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  progressBarLabel: {
    fontSize: 14,
    width: 80,
  },
  progressBar: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 5,
  },
  progressBarValue: {
    fontSize: 12,
    width: 60,
    textAlign: "right",
  },
  achievementsContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  badgeItem: {
    width: "48%",
    alignItems: "center",
    marginBottom: 15,
  },
  badgeIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  badgeUnlocked: {},
  badgeLocked: {},
  badgeName: {
    fontSize: 12,
    textAlign: "center",
  },
  badgeNameLocked: {},
});