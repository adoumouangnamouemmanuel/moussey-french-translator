"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext"; // Import useTheme

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

export default function LearningScreen() {
  const { points } = useAppContext();
  const { colors } = useTheme(); // Use theme colors
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const renderPathCard = (path: (typeof learningPaths)[0]) => {
    const progressPercent = Math.round(path.progress * 100);

    return (
      <TouchableOpacity
        key={path.id}
        style={[styles.pathCard, { backgroundColor: colors.card }]}
        onPress={() => setSelectedPath(path.id)}
        disabled={path.locked}
      >
        <View style={styles.pathCardContent}>
          <View style={styles.pathCardHeader}>
            <Text style={[styles.pathCardTitle, { color: colors.text }]}>
              {path.title}
            </Text>
            {path.locked && (
              <View style={styles.lockIconContainer}>
                <Ionicons
                  name="lock-closed"
                  size={16}
                  color={colors.inactive}
                />
              </View>
            )}
          </View>
          <Text
            style={[styles.pathCardDescription, { color: colors.inactive }]}
          >
            {path.description}
          </Text>
          <View style={styles.pathCardFooter}>
            <View style={styles.progressContainer}>
              <View
                style={[styles.progressBar, { backgroundColor: colors.border }]}
              >
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${progressPercent}%`,
                      backgroundColor: colors.primary,
                    },
                  ]}
                />
              </View>
              <Text style={[styles.progressText, { color: colors.inactive }]}>
                {path.lessonsCompleted}/{path.lessons} leçons
              </Text>
            </View>
            <View
              style={[
                styles.arrowContainer,
                { backgroundColor: colors.primary },
              ]}
            >
              <Ionicons name="arrow-forward" size={16} color="white" />
            </View>
          </View>
        </View>
        <View style={styles.pathCardImageContainer}>
          <View
            style={[
              styles.pathCardImage,
              { backgroundColor: `${colors.primary}20` },
            ]}
          >
            <Ionicons
              name={
                path.image === "beginner"
                  ? "school"
                  : path.image === "intermediate"
                  ? "book"
                  : "trophy"
              }
              size={40}
              color={colors.primary}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
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
        <View style={styles.lessonsHeader}>
          <TouchableOpacity
            onPress={() => setSelectedPath(null)}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={[styles.lessonsTitle, { color: colors.text }]}>
            {path.title}
          </Text>
        </View>

        <ScrollView style={styles.lessonsList}>
          {beginnerLessons.map((lesson, index) => (
            <TouchableOpacity
              key={lesson.id}
              style={[
                styles.lessonCard,
                { backgroundColor: colors.card },
                index < beginnerLessons.length - 1 &&
                  styles.lessonCardWithConnector,
              ]}
            >
              <View
                style={[
                  styles.lessonStatusIndicator,
                  {
                    backgroundColor: lesson.completed
                      ? colors.primary
                      : colors.border,
                  },
                ]}
              >
                {lesson.completed && (
                  <Ionicons name="checkmark" size={16} color="white" />
                )}
              </View>
              {index < beginnerLessons.length - 1 && (
                <View
                  style={[
                    styles.lessonConnector,
                    {
                      backgroundColor: beginnerLessons[index + 1].completed
                        ? colors.primary
                        : colors.border,
                    },
                  ]}
                />
              )}
              <View style={styles.lessonContent}>
                <View style={styles.lessonHeader}>
                  <Text style={[styles.lessonTitle, { color: colors.text }]}>
                    {lesson.title}
                  </Text>
                  <Text
                    style={[styles.lessonDuration, { color: colors.inactive }]}
                  >
                    {lesson.duration}
                  </Text>
                </View>
                <Text
                  style={[styles.lessonDescription, { color: colors.inactive }]}
                >
                  {lesson.description}
                </Text>
                <View style={styles.lessonFooter}>
                  {lesson.completed ? (
                    <Text
                      style={[
                        styles.lessonCompletedText,
                        { color: colors.primary },
                      ]}
                    >
                      Complété
                    </Text>
                  ) : (
                    <TouchableOpacity
                      style={[
                        styles.startButton,
                        { backgroundColor: colors.primary },
                      ]}
                    >
                      <Text style={styles.startButtonText}>Commencer</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient
        colors={colors.headerBackground as [string, string]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Apprendre</Text>
          <View style={styles.pointsContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.pointsText}>{points}</Text>
          </View>
        </View>
      </LinearGradient>

      {selectedPath ? (
        renderLessonsList()
      ) : (
        <ScrollView style={styles.scrollView}>
          {/* Daily goal */}
          <View
            style={[
              styles.dailyGoalContainer,
              { backgroundColor: colors.card },
            ]}
          >
            <View style={styles.dailyGoalContent}>
              <View style={styles.dailyGoalTextContainer}>
                <Text style={[styles.dailyGoalTitle, { color: colors.text }]}>
                  Objectif Quotidien
                </Text>
                <Text
                  style={[
                    styles.dailyGoalDescription,
                    { color: colors.inactive },
                  ]}
                >
                  Complétez 1 leçon aujourd'hui
                </Text>
                <View style={styles.dailyGoalProgress}>
                  <View
                    style={[
                      styles.dailyGoalProgressBar,
                      { backgroundColor: colors.border },
                    ]}
                  >
                    <View
                      style={[
                        styles.dailyGoalProgressFill,
                        { backgroundColor: colors.primary, width: "0%" },
                      ]}
                    />
                  </View>
                  <Text
                    style={[
                      styles.dailyGoalProgressText,
                      { color: colors.inactive },
                    ]}
                  >
                    0/1
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.dailyGoalIconContainer,
                  { backgroundColor: `${colors.primary}20` },
                ]}
              >
                <Ionicons name="calendar" size={30} color={colors.primary} />
              </View>
            </View>
          </View>

          {/* Learning paths */}
          <View style={styles.pathsContainer}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Parcours d'Apprentissage
            </Text>
            {learningPaths.map(renderPathCard)}
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
            >
              <TouchableOpacity
                style={[
                  styles.quickLessonCard,
                  { backgroundColor: colors.card },
                ]}
              >
                <View
                  style={[
                    styles.quickLessonIcon,
                    { backgroundColor: `${colors.primary}20` },
                  ]}
                >
                  <Ionicons
                    name="chatbubbles"
                    size={24}
                    color={colors.primary}
                  />
                </View>
                <Text style={[styles.quickLessonTitle, { color: colors.text }]}>
                  Conversation
                </Text>
                <Text
                  style={[
                    styles.quickLessonDuration,
                    { color: colors.inactive },
                  ]}
                >
                  5 min
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.quickLessonCard,
                  { backgroundColor: colors.card },
                ]}
              >
                <View
                  style={[
                    styles.quickLessonIcon,
                    { backgroundColor: `${colors.primary}20` },
                  ]}
                >
                  <Ionicons name="mic" size={24} color={colors.primary} />
                </View>
                <Text style={[styles.quickLessonTitle, { color: colors.text }]}>
                  Prononciation
                </Text>
                <Text
                  style={[
                    styles.quickLessonDuration,
                    { color: colors.inactive },
                  ]}
                >
                  8 min
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.quickLessonCard,
                  { backgroundColor: colors.card },
                ]}
              >
                <View
                  style={[
                    styles.quickLessonIcon,
                    { backgroundColor: `${colors.primary}20` },
                  ]}
                >
                  <Ionicons name="list" size={24} color={colors.primary} />
                </View>
                <Text style={[styles.quickLessonTitle, { color: colors.text }]}>
                  Vocabulaire
                </Text>
                <Text
                  style={[
                    styles.quickLessonDuration,
                    { color: colors.inactive },
                  ]}
                >
                  10 min
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Bottom spacing */}
          <View style={{ height: 20 }} />
        </ScrollView>
      )}
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
  dailyGoalContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
  },
  dailyGoalContent: {
    flexDirection: "row",
  },
  dailyGoalTextContainer: {
    flex: 1,
  },
  dailyGoalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dailyGoalDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  dailyGoalProgress: {
    flexDirection: "row",
    alignItems: "center",
  },
  dailyGoalProgressBar: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    marginRight: 10,
  },
  dailyGoalProgressFill: {
    height: "100%",
    borderRadius: 3,
  },
  dailyGoalProgressText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  dailyGoalIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  pathsContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  pathCard: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  pathCardContent: {
    flex: 1,
  },
  pathCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  pathCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  lockIconContainer: {
    padding: 2,
  },
  pathCardDescription: {
    fontSize: 14,
    marginBottom: 15,
  },
  pathCardFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressContainer: {
    flex: 1,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    marginBottom: 5,
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
  },
  arrowContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  pathCardImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  pathCardImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  quickLessonsContainer: {
    padding: 15,
  },
  quickLessonsScroll: {
    flexDirection: "row",
  },
  quickLessonCard: {
    width: 120,
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    alignItems: "center",
  },
  quickLessonIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  quickLessonTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
    textAlign: "center",
  },
  quickLessonDuration: {
    fontSize: 12,
  },
  lessonsContainer: {
    flex: 1,
  },
  lessonsHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  backButton: {
    marginRight: 15,
  },
  lessonsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lessonsList: {
    flex: 1,
    padding: 15,
  },
  lessonCard: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    position: "relative",
  },
  lessonCardWithConnector: {
    marginBottom: 40,
  },
  lessonStatusIndicator: {
    position: "absolute",
    left: 15,
    top: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  lessonConnector: {
    position: "absolute",
    left: 24,
    top: 10,
    width: 2,
    height: "100%",
    zIndex: 0,
  },
  lessonContent: {
    marginLeft: 20,
  },
  lessonHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lessonDuration: {
    fontSize: 12,
  },
  lessonDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  lessonFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  lessonCompletedText: {
    fontSize: 14,
    fontWeight: "500",
  },
  startButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  startButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
});