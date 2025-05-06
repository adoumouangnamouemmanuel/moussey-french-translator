"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  Animated,
} from "react-native";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import * as Haptics from "expo-haptics";

// Components
import LearningHeader from "../components/learning/LearningHeader";
import DailyGoalCard from "../components/learning/DailyGoalCard";
import LearningPathCard from "../components/learning/LearningPathCard";
import QuickLessonCard from "../components/learning/QuickLessonCard";
import LessonCard from "../components/learning/LessonCard";

// Mock learning paths
const learningPaths = [
  {
    id: "1",
    title: "Débutant",
    description: "Apprenez les bases du Moussey",
    progress: 0.4,
    lessons: 10,
    lessonsCompleted: 4,
    image: "beginner",
  },
  {
    id: "2",
    title: "Intermédiaire",
    description: "Améliorez votre vocabulaire et grammaire",
    progress: 0.1,
    lessons: 15,
    lessonsCompleted: 2,
    image: "intermediate",
    locked: false,
  },
  {
    id: "3",
    title: "Avancé",
    description: "Maîtrisez les expressions idiomatiques",
    progress: 0,
    lessons: 12,
    lessonsCompleted: 0,
    image: "advanced",
    locked: true,
  },
];

// Mock lessons for the beginner path
const beginnerLessons = [
  {
    id: "1",
    title: "Salutations",
    description: "Apprenez à dire bonjour et au revoir",
    duration: "10 min",
    completed: true,
  },
  {
    id: "2",
    title: "Se présenter",
    description: "Comment se présenter en Moussey",
    duration: "15 min",
    completed: true,
  },
  {
    id: "3",
    title: "Nombres 1-10",
    description: "Apprenez à compter jusqu'à 10",
    duration: "12 min",
    completed: true,
  },
  {
    id: "4",
    title: "La famille",
    description: "Vocabulaire de la famille",
    duration: "20 min",
    completed: true,
  },
  {
    id: "5",
    title: "Questions simples",
    description: "Poser des questions de base",
    duration: "15 min",
    completed: false,
  },
  {
    id: "6",
    title: "Couleurs",
    description: "Noms des couleurs courantes",
    duration: "10 min",
    completed: false,
  },
];

// Quick lessons data
const quickLessons = [
  {
    id: "1",
    title: "Conversation",
    duration: "5 min",
    icon: "chatbubbles",
  },
  {
    id: "2",
    title: "Prononciation",
    duration: "8 min",
    icon: "mic",
  },
  {
    id: "3",
    title: "Vocabulaire",
    duration: "10 min",
    icon: "list",
  },
  {
    id: "4",
    title: "Expressions",
    duration: "7 min",
    icon: "text",
  },
];

export default function LearningScreen() {
  const { points } = useAppContext();
  const { colors } = useTheme();
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

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

  const handlePathSelect = (pathId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setSelectedPath(pathId);
  };

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedPath(null);
  };

  const handleLessonPress = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    // Navigate to lesson content
  };

  const handleQuickLessonPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Navigate to quick lesson
  };

  const handleDailyGoalPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Show daily goal details
  };

  const renderLessonsList = () => {
    const path = learningPaths.find((p) => p.id === selectedPath);
    if (!path) return null;

    return (
      <View
        style={[
          styles.lessonsContainer,
          { backgroundColor: colors.background },
        ]}
      >
        <ScrollView style={styles.lessonsList}>
          {beginnerLessons.map((lesson, index) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
              duration={lesson.duration}
              completed={lesson.completed}
              index={index}
              isLast={index === beginnerLessons.length - 1}
              colors={colors}
              onPress={handleLessonPress}
            />
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LearningHeader
        title={
          selectedPath
            ? learningPaths.find((p) => p.id === selectedPath)?.title ||
              "Apprendre"
            : "Apprendre"
        }
        points={points}
        colors={colors}
        showBackButton={!!selectedPath}
        onBackPress={handleBackPress}
      />

      {selectedPath ? (
        renderLessonsList()
      ) : (
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
          {/* Daily goal */}
          <DailyGoalCard
            completed={0}
            total={1}
            colors={colors}
            onPress={handleDailyGoalPress}
          />

          {/* Learning paths */}
          <View style={styles.pathsContainer}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Parcours d'Apprentissage
            </Text>
            {learningPaths.map((path, index) => (
              <LearningPathCard
                key={path.id}
                {...path}
                index={index}
                onSelect={handlePathSelect}
                colors={colors}
              />
            ))}
          </View>

          {/* Quick lessons */}
          <View style={styles.quickLessonsContainer}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Leçons Rapides
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.quickLessonsScroll}
              contentContainerStyle={styles.quickLessonsContent}
            >
              {quickLessons.map((lesson, index) => (
                <QuickLessonCard
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  icon={lesson.icon}
                  index={index}
                  colors={colors}
                  onPress={handleQuickLessonPress}
                />
              ))}
            </ScrollView>
          </View>

          {/* Bottom spacing */}
          <View style={{ height: 20 }} />
        </Animated.ScrollView>
      )}
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
  pathsContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  quickLessonsContainer: {
    padding: 15,
  },
  quickLessonsScroll: {
    flexDirection: "row",
  },
  quickLessonsContent: {
    paddingRight: 15,
  },
  lessonsContainer: {
    flex: 1,
  },
  lessonsList: {
    flex: 1,
    padding: 15,
  },
});