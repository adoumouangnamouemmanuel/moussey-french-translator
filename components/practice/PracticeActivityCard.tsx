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

type Activity = {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: string;
  xp: number;
};

type PracticeActivityCardProps = {
  activity: Activity;
  index: number;
  colors: any;
  onPress: () => void;
};

const PracticeActivityCard = ({
  activity,
  index,
  colors,
  onPress,
}: PracticeActivityCardProps) => {
  // Animation values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(20)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      friction: 5,
      tension: 300,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 400,
      useNativeDriver: true,
    }).start();
  };

  // Determine difficulty color
  const getDifficultyColor = () => {
    switch (activity.difficulty) {
      case "Facile":
        return "#4CAF50";
      case "Moyen":
        return "#FFC107";
      case "Difficile":
        return "#F44336";
      default:
        return colors.inactive;
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacityAnim,
          transform: [{ translateY: translateYAnim }, { scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.card }]}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
      >
        <View
          style={[styles.iconContainer, { backgroundColor: colors.primary }]}
        >
          <Ionicons name={activity.icon as any} size={24} color="white" />
        </View>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.title, { color: colors.text }]}>
              {activity.title}
            </Text>
            <View style={styles.xpContainer}>
              <Ionicons name="flash" size={14} color="#FFD700" />
              <Text style={styles.xp}>{activity.xp} XP</Text>
            </View>
          </View>
          <Text style={[styles.description, { color: colors.inactive }]}>
            {activity.description}
          </Text>
          <View style={styles.footer}>
            <Text style={[styles.difficulty, { color: getDifficultyColor() }]}>
              {activity.difficulty}
            </Text>
            <Ionicons name="play" size={16} color={colors.primary} />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  card: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  xpContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 215, 0, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  xp: {
    color: "#FFD700",
    fontSize: 12,
    marginLeft: 3,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  difficulty: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default PracticeActivityCard;