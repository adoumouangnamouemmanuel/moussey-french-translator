"use client";

import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext"; // Import useTheme
import { LinearGradient } from "expo-linear-gradient";

// Practice activities data
const practiceCategories = [
  {
    id: "1",
    title: "Vocabulaire",
    activities: [
      {
        id: "1",
        title: "Quiz de Mots",
        description: "Testez votre connaissance des mots",
        icon: "help-circle-outline",
        difficulty: "Facile",
        xp: 20,
      },
      {
        id: "2",
        title: "Associations",
        description: "Associez les mots à leur traduction",
        icon: "git-merge-outline",
        difficulty: "Moyen",
        xp: 30,
      },
    ],
  },
  {
    id: "2",
    title: "Écoute",
    activities: [
      {
        id: "3",
        title: "Dictée",
        description: "Écrivez ce que vous entendez",
        icon: "ear-outline",
        difficulty: "Difficile",
        xp: 40,
      },
      {
        id: "4",
        title: "Compréhension",
        description: "Répondez aux questions sur l'audio",
        icon: "headset-outline",
        difficulty: "Moyen",
        xp: 35,
      },
    ],
  },
  {
    id: "3",
    title: "Grammaire",
    activities: [
      {
        id: "5",
        title: "Phrases à Trous",
        description: "Complétez les phrases",
        icon: "create-outline",
        difficulty: "Moyen",
        xp: 30,
      },
      {
        id: "6",
        title: "Ordre des Mots",
        description: "Remettez les mots dans le bon ordre",
        icon: "reorder-four-outline",
        difficulty: "Difficile",
        xp: 40,
      },
    ],
  },
  {
    id: "4",
    title: "Jeux",
    activities: [
      {
        id: "7",
        title: "Mots Croisés",
        description: "Trouvez les mots cachés",
        icon: "grid-outline",
        difficulty: "Facile",
        xp: 25,
      },
      {
        id: "8",
        title: "Pendu",
        description: "Devinez le mot lettre par lettre",
        icon: "person-outline",
        difficulty: "Moyen",
        xp: 30,
      },
    ],
  },
];

// Word lists data
const wordLists = [
  { id: "1", title: "Liste par défaut" },
  { id: "2", title: "Mots débutants" },
  { id: "3", title: "Vocabulaire de voyage" },
  { id: "4", title: "Nourriture et cuisine" },
];

export default function PracticeScreen() {
  const { points } = useAppContext();
  const { colors } = useTheme(); // Use theme colors
  const [selectedList, setSelectedList] = useState(wordLists[0]);
  const [showListDropdown, setShowListDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Animation values
  const dropdownAnim = useRef(new Animated.Value(0)).current;
  const categoryAnimValues = useRef(
    practiceCategories.map(() => new Animated.Value(0))
  ).current;

  const toggleListDropdown = () => {
    setShowListDropdown(!showListDropdown);
    Animated.timing(dropdownAnim, {
      toValue: showListDropdown ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const selectList = (list: (typeof wordLists)[0]) => {
    setSelectedList(list);
    toggleListDropdown();
  };

  const toggleCategory = (categoryId: string) => {
    const newSelectedCategory =
      selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(newSelectedCategory);

    practiceCategories.forEach((category, index) => {
      Animated.timing(categoryAnimValues[index], {
        toValue: category.id === newSelectedCategory ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  };

  const dropdownHeight = dropdownAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, wordLists.length * 50],
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Pratique</Text>
          <View style={styles.pointsContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.pointsText}>{points}</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView}>
        {/* Daily challenge banner */}
        <TouchableOpacity style={styles.dailyChallengeBanner}>
          <LinearGradient
            colors={colors.headerBackground as [string, string]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.dailyChallengeGradient}
          >
            <View style={styles.dailyChallengeContent}>
              <View style={styles.dailyChallengeTextContainer}>
                <Text style={styles.dailyChallengeTitle}>Défi Quotidien</Text>
                <Text style={styles.dailyChallengeDescription}>
                  Complétez 3 activités aujourd'hui pour gagner 100 points
                  bonus!
                </Text>
                <View style={styles.dailyChallengeProgress}>
                  <View style={styles.dailyChallengeProgressBar}>
                    <View
                      style={[
                        styles.dailyChallengeProgressFill,
                        { width: "33%" },
                      ]}
                    />
                  </View>
                  <Text style={styles.dailyChallengeProgressText}>1/3</Text>
                </View>
              </View>
              <View style={styles.dailyChallengeIconContainer}>
                <Ionicons name="trophy" size={40} color="white" />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* List selector */}
        <View style={styles.listSelectorContainer}>
          <Text style={[styles.listSelectorLabel, { color: colors.text }]}>
            Pratiquer avec cette liste
          </Text>

          <TouchableOpacity
            style={[
              styles.listSelector,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={toggleListDropdown}
          >
            <Text style={[styles.listSelectorText, { color: colors.text }]}>
              {selectedList.title}
            </Text>
            <Ionicons
              name={showListDropdown ? "chevron-up" : "chevron-down"}
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>

          <Animated.View
            style={[
              styles.dropdown,
              {
                height: dropdownHeight,
                backgroundColor: colors.card,
                borderColor: colors.border,
              },
            ]}
          >
            {wordLists.map((list) => (
              <TouchableOpacity
                key={list.id}
                style={[
                  styles.dropdownItem,
                  { borderBottomColor: colors.border },
                ]}
                onPress={() => selectList(list)}
              >
                <Text style={[styles.dropdownText, { color: colors.text }]}>
                  {list.title}
                </Text>
                {selectedList.id === list.id && (
                  <Ionicons name="checkmark" size={20} color={colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </Animated.View>
        </View>

        {/* Practice categories */}
        <View style={styles.categoriesContainer}>
          {practiceCategories.map((category, index) => (
            <View key={category.id} style={styles.categorySection}>
              <TouchableOpacity
                style={[
                  styles.categoryHeader,
                  { backgroundColor: colors.card },
                ]}
                onPress={() => toggleCategory(category.id)}
              >
                <Text style={[styles.categoryTitle, { color: colors.text }]}>
                  {category.title}
                </Text>
                <Ionicons
                  name={
                    selectedCategory === category.id
                      ? "chevron-up"
                      : "chevron-down"
                  }
                  size={20}
                  color={colors.text}
                />
              </TouchableOpacity>

              <Animated.View
                style={[
                  styles.activitiesContainer,
                  {
                    height: categoryAnimValues[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, category.activities.length * 100],
                    }),
                    opacity: categoryAnimValues[index],
                  },
                ]}
              >
                {category.activities.map((activity) => (
                  <TouchableOpacity
                    key={activity.id}
                    style={[
                      styles.activityCard,
                      { backgroundColor: colors.card },
                    ]}
                  >
                    <View
                      style={[
                        styles.activityIconContainer,
                        { backgroundColor: colors.primary },
                      ]}
                    >
                      <Ionicons
                        name={activity.icon as any}
                        size={24}
                        color="white"
                      />
                    </View>
                    <View style={styles.activityContent}>
                      <View style={styles.activityHeader}>
                        <Text
                          style={[styles.activityTitle, { color: colors.text }]}
                        >
                          {activity.title}
                        </Text>
                        <View style={styles.activityXpContainer}>
                          <Ionicons name="flash" size={14} color="#FFD700" />
                          <Text style={styles.activityXp}>
                            {activity.xp} XP
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          styles.activityDescription,
                          { color: colors.inactive },
                        ]}
                      >
                        {activity.description}
                      </Text>
                      <View style={styles.activityFooter}>
                        <View style={styles.difficultyContainer}>
                          <Text
                            style={[
                              styles.difficultyText,
                              activity.difficulty === "Facile"
                                ? styles.easyText
                                : activity.difficulty === "Moyen"
                                ? styles.mediumText
                                : styles.hardText,
                            ]}
                          >
                            {activity.difficulty}
                          </Text>
                        </View>
                        <Ionicons
                          name="play"
                          size={16}
                          color={colors.primary}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </Animated.View>
            </View>
          ))}
        </View>

        {/* Quick practice section */}
        <View style={styles.quickPracticeContainer}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Pratique Rapide
          </Text>
          <View style={styles.quickPracticeGrid}>
            <TouchableOpacity style={styles.quickPracticeCard}>
              <LinearGradient
                colors={colors.headerBackground as [string, string]}
                style={styles.quickPracticeGradient}
              >
                <Ionicons name="flash" size={30} color="white" />
                <Text style={styles.quickPracticeTitle}>5 Minutes</Text>
                <Text style={styles.quickPracticeDescription}>
                  Pratique rapide avec des mots aléatoires
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quickPracticeCard}>
              <LinearGradient
                colors={["#333", "#222"]}
                style={styles.quickPracticeGradient}
              >
                <Ionicons name="time-outline" size={30} color="white" />
                <Text style={styles.quickPracticeTitle}>Révision</Text>
                <Text style={styles.quickPracticeDescription}>
                  Révisez les mots que vous avez appris
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

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
  scrollView: {
    flex: 1,
  },
  dailyChallengeBanner: {
    margin: 15,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  dailyChallengeGradient: {
    padding: 15,
  },
  dailyChallengeContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  dailyChallengeTextContainer: {
    flex: 1,
  },
  dailyChallengeTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dailyChallengeDescription: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },
  dailyChallengeProgress: {
    flexDirection: "row",
    alignItems: "center",
  },
  dailyChallengeProgressBar: {
    flex: 1,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 3,
    marginRight: 10,
  },
  dailyChallengeProgressFill: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 3,
  },
  dailyChallengeProgressText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  dailyChallengeIconContainer: {
    marginLeft: 15,
  },
  listSelectorContainer: {
    padding: 15,
    position: "relative",
  },
  listSelectorLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  listSelectorText: {
    fontSize: 16,
  },
  dropdown: {
    borderRadius: 8,
    marginTop: 5,
    overflow: "hidden",
    borderWidth: 1,
  },
  dropdownItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
  },
  dropdownText: {
    fontSize: 16,
  },
  categoriesContainer: {
    padding: 15,
  },
  categorySection: {
    marginBottom: 15,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activitiesContainer: {
    overflow: "hidden",
  },
  activityCard: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  activityIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  activityXpContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 215, 0, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  activityXp: {
    color: "#FFD700",
    fontSize: 12,
    marginLeft: 3,
    fontWeight: "bold",
  },
  activityDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  activityFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  difficultyContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  difficultyText: {
    fontSize: 12,
    fontWeight: "500",
  },
  easyText: {
    color: "#4CAF50",
  },
  mediumText: {
    color: "#FFC107",
  },
  hardText: {
    color: "#F44336",
  },
  quickPracticeContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  quickPracticeGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickPracticeCard: {
    width: "48%",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  quickPracticeGradient: {
    padding: 15,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  quickPracticeTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  quickPracticeDescription: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
    textAlign: "center",
  },
});