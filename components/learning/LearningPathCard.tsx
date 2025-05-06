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

type LearningPathProps = {
  id: string;
  title: string;
  description: string;
  progress: number;
  lessons: number;
  lessonsCompleted: number;
  image: string;
  locked?: boolean;
  index: number;
  onSelect: (id: string) => void;
  colors: any;
};

const LearningPathCard = ({
  id,
  title,
  description,
  progress,
  lessons,
  lessonsCompleted,
  image,
  locked = false,
  index,
  onSelect,
  colors,
}: LearningPathProps) => {
  // Animation values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(50)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  // Calculate progress percentage
  const progressPercent = Math.round(progress * 100);

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

    // Animate progress bar
    Animated.timing(progressAnim, {
      toValue: progressPercent,
      duration: 1000,
      delay: index * 100 + 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const handlePress = () => {
    if (locked) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // Animate button press
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onSelect(id);
  };

  return (
    <Animated.View
      style={[
        styles.pathCardContainer,
        {
          opacity: opacityAnim,
          transform: [{ translateY: translateYAnim }, { scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.pathCard, { backgroundColor: colors.card }]}
        onPress={handlePress}
        disabled={locked}
        activeOpacity={0.9}
      >
        <View style={styles.pathCardContent}>
          <View style={styles.pathCardHeader}>
            <Text style={[styles.pathCardTitle, { color: colors.text }]}>
              {title}
            </Text>
            {locked && (
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
            {description}
          </Text>
          <View style={styles.pathCardFooter}>
            <View style={styles.progressContainer}>
              <View
                style={[styles.progressBar, { backgroundColor: colors.border }]}
              >
                <Animated.View
                  style={[
                    styles.progressFill,
                    {
                      width: progressAnim.interpolate({
                        inputRange: [0, 100],
                        outputRange: ["0%", "100%"],
                      }),
                      backgroundColor: colors.primary,
                    },
                  ]}
                />
              </View>
              <Text style={[styles.progressText, { color: colors.inactive }]}>
                {lessonsCompleted}/{lessons} leçons
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
                image === "beginner"
                  ? "school"
                  : image === "intermediate"
                  ? "book"
                  : "trophy"
              }
              size={40}
              color={colors.primary}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  pathCardContainer: {
    marginBottom: 15,
  },
  pathCard: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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
    overflow: "hidden",
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
});

export default LearningPathCard;