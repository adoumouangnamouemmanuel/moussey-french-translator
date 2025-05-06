"use client";

import { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

type DailyGoalCardProps = {
  completed: number;
  total: number;
  colors: any;
  onPress: () => void;
};

const DailyGoalCard = ({
  completed,
  total,
  colors,
  onPress,
}: DailyGoalCardProps) => {
  // Animation values
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  // Calculate progress percentage
  const progressPercentage = (completed / total) * 100;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate progress bar
    Animated.timing(progressAnim, {
      toValue: progressPercentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [completed]);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <Animated.View
      style={[
        styles.dailyGoalContainer,
        {
          backgroundColor: colors.card,
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.dailyGoalContent}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <View style={styles.dailyGoalTextContainer}>
          <Text style={[styles.dailyGoalTitle, { color: colors.text }]}>
            Objectif Quotidien
          </Text>
          <Text
            style={[styles.dailyGoalDescription, { color: colors.inactive }]}
          >
            Complétez {total} leçon{total > 1 ? "s" : ""} aujourd'hui
          </Text>
          <View style={styles.dailyGoalProgress}>
            <View
              style={[
                styles.dailyGoalProgressBar,
                { backgroundColor: colors.border },
              ]}
            >
              <Animated.View
                style={[
                  styles.dailyGoalProgressFill,
                  {
                    backgroundColor: colors.primary,
                    width: progressAnim.interpolate({
                      inputRange: [0, 100],
                      outputRange: ["0%", "100%"],
                    }),
                  },
                ]}
              />
            </View>
            <Text
              style={[styles.dailyGoalProgressText, { color: colors.inactive }]}
            >
              {completed}/{total}
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
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dailyGoalContainer: {
    margin: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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
    overflow: "hidden",
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
});

export default DailyGoalCard;