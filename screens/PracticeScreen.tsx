"use client";

import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, StatusBar, Animated } from "react-native";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import * as Haptics from "expo-haptics";

// Components
import PracticeHeader from "../components/practice/PracticeHeader";
import DailyChallengeBanner from "../components/practice/DailyChallengeBanner";
import ListSelector from "../components/practice/ListSelector";
import PracticeCategory from "../components/practice/PracticeCategory";
import QuickPracticeCard from "../components/practice/QuickPracticeCard";

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

// Quick practice data
const quickPractices = [
  {
    id: "1",
    title: "5 Minutes",
    description: "Pratique rapide avec des mots aléatoires",
    icon: "flash",
    gradientColors: ["#00a0a0", "#008080"],
  },
  {
    id: "2",
    title: "Révision",
    description: "Révisez les mots que vous avez appris",
    icon: "time-outline",
    gradientColors: ["#333", "#222"],
  },
  {
    id: "3",
    title: "Challenge",
    description: "Un défi rapide pour tester vos compétences",
    icon: "trophy-outline",
    gradientColors: ["#ff7f50", "#ff4500"],
  },
];

export default function PracticeScreen() {
  const { points } = useAppContext();
  const { colors } = useTheme();
  const [selectedList, setSelectedList] = useState(wordLists[0]);
  const [showListDropdown, setShowListDropdown] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const toggleListDropdown = () => {
    setShowListDropdown(!showListDropdown);
  };

  const selectList = (list: (typeof wordLists)[0]) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedList(list);
    setShowListDropdown(false);
  };

  const toggleCategory = (categoryId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleActivitySelect = (activity: any) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    // Navigate to activity
    console.log("Selected activity:", activity.title);
  };

  const handleQuickPracticeSelect = (practice: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // Navigate to quick practice
    console.log("Selected quick practice:", practice.title);
  };

  const handleDailyChallengePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Show daily challenge details
    console.log("Daily challenge pressed");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <PracticeHeader title="Pratique" points={points} colors={colors} />

      <Animated.ScrollView
        style={[
          styles.scrollView,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Daily challenge banner */}
        <DailyChallengeBanner
          completed={1}
          total={3}
          colors={colors}
          onPress={handleDailyChallengePress}
        />

        {/* List selector */}
        <ListSelector
          lists={wordLists}
          selectedList={selectedList}
          showDropdown={showListDropdown}
          colors={colors}
          onToggleDropdown={toggleListDropdown}
          onSelectList={selectList}
        />

        {/* Practice categories */}
        <View style={styles.categoriesContainer}>
          {practiceCategories.map((category, index) => (
            <PracticeCategory
              key={category.id}
              id={category.id}
              title={category.title}
              activities={category.activities}
              isExpanded={expandedCategory === category.id}
              index={index}
              colors={colors}
              onToggle={toggleCategory}
              onSelectActivity={handleActivitySelect}
            />
          ))}
        </View>

        {/* Quick practice section */}
        <View style={styles.quickPracticeContainer}>
          <View style={styles.quickPracticeGrid}>
            {quickPractices.map((practice, index) => (
              <QuickPracticeCard
                key={practice.id}
                title={practice.title}
                description={practice.description}
                icon={practice.icon}
                colors={colors}
                gradientColors={practice.gradientColors}
                index={index}
                onPress={() => handleQuickPracticeSelect(practice)}
              />
            ))}
          </View>
        </View>

        {/* Bottom spacing */}
        <View style={{ height: 20 }} />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  categoriesContainer: {
    padding: 15,
  },
  quickPracticeContainer: {
    padding: 15,
  },
  quickPracticeGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});