"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";

// Daily word data
const dailyWords = [
  { id: "1", moussey: "hello", french: "bonjour", pronunciation: "/bɔ̃.ʒuʁ/" },
  {
    id: "2",
    moussey: "goodbye",
    french: "au revoir",
    pronunciation: "/o.ʁə.vwaʁ/",
  },
  { id: "3", moussey: "thank you", french: "merci", pronunciation: "/mɛʁ.si/" },
];

// Recent activity data
const recentActivities = [
  { id: "1", type: "search", word: "bonjour", time: "Il y a 2h" },
  {
    id: "2",
    type: "practice",
    score: "8/10",
    lesson: "Salutations",
    time: "Il y a 5h",
  },
  { id: "3", type: "favorite", word: "merci", time: "Hier" },
];

// Feature categories
const featureCategories = [
  {
    title: "Outils",
    items: [
      {
        id: "1",
        title: "Dictionnaire",
        icon: "book-outline",
        screen: "Dictionary",
      },
      {
        id: "2",
        title: "Traducteur",
        icon: "language-outline",
        screen: "Translator",
      },
    ],
  },
  {
    title: "Apprentissage",
    items: [
      {
        id: "3",
        title: "Phrases",
        icon: "chatbubbles-outline",
        screen: "Phrases",
      },
      {
        id: "4",
        title: "Verbes Irréguliers",
        icon: "create-outline",
        screen: "IrregularVerbs",
      },
      {
        id: "5",
        title: "Verbes Phrasaux",
        icon: "git-branch-outline",
        screen: "PhrasalVerbs",
      },
      {
        id: "6",
        title: "Histoires Moussey",
        icon: "book-outline",
        screen: "HistoiresMoussey",
      },
    ],
  },
  {
    title: "Personnel",
    items: [
      { id: "6", title: "Favoris", icon: "star-outline", screen: "Favorites" },
      { id: "7", title: "Historique", icon: "time-outline", screen: "History" },
    ],
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { points } = useAppContext();
  const { colors } = useTheme();
  const [currentDailyWord, setCurrentDailyWord] = useState(0);

  const nextWord = () => {
    setCurrentDailyWord((prev) => (prev + 1) % dailyWords.length);
  };

  const prevWord = () => {
    setCurrentDailyWord(
      (prev) => (prev - 1 + dailyWords.length) % dailyWords.length
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient colors={colors.headerBackground as [string, string, ...string[]]} style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.appName}>Moussey-Français</Text>
          <View style={styles.headerRight}>
            <View style={styles.pointsContainer}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text style={styles.pointsText}>{points}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Word Card */}
        <View style={[styles.dailyWordCard, { backgroundColor: colors.card }]}>
          <View style={styles.dailyWordHeader}>
            <Text style={[styles.dailyWordTitle, { color: colors.text }]}>
              Mot du Jour
            </Text>
            <View style={styles.dailyWordPagination}>
              {dailyWords.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    {
                      backgroundColor:
                        index === currentDailyWord
                          ? colors.primary
                          : colors.inactive,
                    },
                  ]}
                />
              ))}
            </View>
          </View>

          <View style={styles.dailyWordContent}>
            <TouchableOpacity onPress={prevWord} style={styles.wordNavButton}>
              <Ionicons name="chevron-back" size={24} color={colors.primary} />
            </TouchableOpacity>

            <View style={styles.wordContainer}>
              <Text style={[styles.wordMoussey, { color: colors.text }]}>
                {dailyWords[currentDailyWord].moussey}
              </Text>
              <Text
                style={[styles.wordPronunciation, { color: colors.inactive }]}
              >
                {dailyWords[currentDailyWord].pronunciation}
              </Text>
              <Text style={[styles.wordFrench, { color: colors.primary }]}>
                {dailyWords[currentDailyWord].french}
              </Text>
            </View>

            <TouchableOpacity onPress={nextWord} style={styles.wordNavButton}>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[styles.dailyWordActions, { borderTopColor: colors.border }]}
          >
            <TouchableOpacity style={styles.wordActionButton}>
              <Ionicons
                name="volume-high-outline"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.wordActionButton}>
              <Ionicons name="star-outline" size={20} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.wordActionButton}
              onPress={() =>
                navigation.navigate("WordDetail", {
                  word: dailyWords[currentDailyWord],
                })
              }
            >
              <Ionicons
                name="information-circle-outline"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Translator")}
          >
            <LinearGradient
              colors={colors.headerBackground as [string, string]}
              style={styles.quickActionGradient}
            >
              <Ionicons name="language" size={24} color="white" />
            </LinearGradient>
            <Text style={[styles.quickActionText, { color: colors.text }]}>
              Traduire
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("Dictionary")}
          >
            <LinearGradient
              colors={colors.headerBackground as [string, string, ...string[]]}
              style={styles.quickActionGradient}
            >
              <Ionicons name="search" size={24} color="white" />
            </LinearGradient>
            <Text style={[styles.quickActionText, { color: colors.text }]}>
              Rechercher
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("PracticeTab")}
          >
            <LinearGradient
              colors={colors.headerBackground as [string, string, ...string[]]}
              style={styles.quickActionGradient}
            >
              <Ionicons name="fitness" size={24} color="white" />
            </LinearGradient>
            <Text style={[styles.quickActionText, { color: colors.text }]}>
              Pratiquer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickActionButton}
            onPress={() => navigation.navigate("LearnTab")}
          >
            <LinearGradient
              colors={colors.headerBackground as [string, string, ...string[]]}
              style={styles.quickActionGradient}
            >
              <Ionicons name="school" size={24} color="white" />
            </LinearGradient>
            <Text style={[styles.quickActionText, { color: colors.text }]}>
              Apprendre
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Activité Récente
            </Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllText, { color: colors.primary }]}>
                Voir tout
              </Text>
            </TouchableOpacity>
          </View>

          {recentActivities.map((activity) => (
            <View
              key={activity.id}
              style={[styles.activityItem, { backgroundColor: colors.card }]}
            >
              <View
                style={[
                  styles.activityIconContainer,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Ionicons
                  name={
                    activity.type === "search"
                      ? "search"
                      : activity.type === "practice"
                      ? "trophy"
                      : "star"
                  }
                  size={20}
                  color="white"
                  style={styles.activityIcon}
                />
              </View>
              <View style={styles.activityContent}>
                {activity.type === "search" ? (
                  <Text style={[styles.activityText, { color: colors.text }]}>
                    Vous avez recherché "
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary },
                      ]}
                    >
                      {activity.word}
                    </Text>
                    "
                  </Text>
                ) : activity.type === "practice" ? (
                  <Text style={[styles.activityText, { color: colors.text }]}>
                    Vous avez obtenu{" "}
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary },
                      ]}
                    >
                      {activity.score}
                    </Text>{" "}
                    dans{" "}
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary },
                      ]}
                    >
                      {activity.lesson}
                    </Text>
                  </Text>
                ) : (
                  <Text style={[styles.activityText, { color: colors.text }]}>
                    Vous avez ajouté "
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary },
                      ]}
                    >
                      {activity.word}
                    </Text>
                    " aux favoris
                  </Text>
                )}
                <Text style={[styles.activityTime, { color: colors.inactive }]}>
                  {activity.time}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Features by Category */}
        {featureCategories.map((category) => (
          <View key={category.title} style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>
                {category.title}
              </Text>
            </View>

            <View style={styles.featuresGrid}>
              {category.items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.featureItem, { backgroundColor: colors.card }]}
                  onPress={() => navigation.navigate(item.screen)}
                >
                  <View
                    style={[
                      styles.featureIconContainer,
                      { backgroundColor: `${colors.primary}20` },
                    ]}
                  >
                    <Ionicons
                      name={item.icon as any}
                      size={24}
                      color={colors.primary}
                    />
                  </View>
                  <Text style={[styles.featureTitle, { color: colors.text }]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

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
  appName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 15,
  },
  pointsText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  dailyWordCard: {
    margin: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dailyWordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  dailyWordTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dailyWordPagination: {
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  dailyWordContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  wordNavButton: {
    padding: 5,
  },
  wordContainer: {
    flex: 1,
    alignItems: "center",
  },
  wordMoussey: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  wordPronunciation: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
  wordFrench: {
    fontSize: 18,
    textAlign: "center",
  },
  dailyWordActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    borderTopWidth: 1,
    paddingTop: 15,
  },
  wordActionButton: {
    marginHorizontal: 20,
    padding: 5,
  },
  quickActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  quickActionButton: {
    alignItems: "center",
  },
  quickActionGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  quickActionText: {
    fontSize: 12,
  },
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 14,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  activityIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityIcon: {},
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
  },
  activityHighlight: {
    fontWeight: "bold",
  },
  activityTime: {
    fontSize: 12,
    marginTop: 2,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureItem: {
    width: "48%",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  featureIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
  },
});