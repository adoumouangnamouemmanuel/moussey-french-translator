"use client";

import { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

type LessonCardProps = {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  index: number;
  isLast: boolean;
  colors: any;
  onPress: () => void;
};

const LessonCard = ({
  id,
  title,
  description,
  duration,
  completed,
  index,
  isLast,
  colors,
  onPress,
}: LessonCardProps) => {
  // Animation values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(30)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Animate button press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.98,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onPress();
  };

  return (
    <Animated.View
      style={[
        styles.lessonCardContainer,
        isLast ? null : styles.lessonCardWithConnector,
        {
          opacity: opacityAnim,
          transform: [{ translateY: translateYAnim }, { scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.lessonCard, { backgroundColor: colors.card }]}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <View
          style={[
            styles.lessonStatusIndicator,
            {
              backgroundColor: completed ? colors.primary : colors.border,
            },
          ]}
        >
          {completed && <Ionicons name="checkmark" size={16} color="white" />}
        </View>

        {!isLast && (
          <View
            style={[
              styles.lessonConnector,
              {
                backgroundColor: completed ? colors.primary : colors.border,
              },
            ]}
          />
        )}

        <View style={styles.lessonContent}>
          <View style={styles.lessonHeader}>
            <Text style={[styles.lessonTitle, { color: colors.text }]}>
              {title}
            </Text>
            <Text style={[styles.lessonDuration, { color: colors.inactive }]}>
              {duration}
            </Text>
          </View>
          <Text style={[styles.lessonDescription, { color: colors.inactive }]}>
            {description}
          </Text>
          <View style={styles.lessonFooter}>
            {completed ? (
              <Text
                style={[styles.lessonCompletedText, { color: colors.primary }]}
              >
                Complété
              </Text>
            ) : (
              <TouchableOpacity
                style={[
                  styles.startButton,
                  { backgroundColor: colors.primary },
                ]}
                onPress={handlePress}
              >
                <Text style={styles.startButtonText}>Commencer</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  lessonCardContainer: {
    marginBottom: 30,
    position: "relative",
  },
  lessonCardWithConnector: {
    marginBottom: 40,
  },
  lessonCard: {
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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

export default LessonCard;