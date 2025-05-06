"use client";

import { useRef, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

import PracticeActivityCard from "./PracticeActivityCard";

type Activity = {
  id: string;
  title: string;
  description: string;
  icon: string;
  difficulty: string;
  xp: number;
};

type PracticeCategoryProps = {
  id: string;
  title: string;
  activities: Activity[];
  isExpanded: boolean;
  index: number;
  colors: any;
  onToggle: (id: string) => void;
  onSelectActivity: (activity: Activity) => void;
};

const PracticeCategory = ({
  id,
  title,
  activities,
  isExpanded,
  index,
  colors,
  onToggle,
  onSelectActivity,
}: PracticeCategoryProps) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const heightAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 100 + 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay: index * 100 + 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Animate expansion
  useEffect(() => {
    Animated.parallel([
      Animated.timing(heightAnim, {
        toValue: isExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(rotateAnim, {
        toValue: isExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isExpanded]);

  const handleToggle = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onToggle(id);
  };

  const handleSelectActivity = (activity: Activity) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onSelectActivity(activity);
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const activitiesHeight = heightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, activities.length * 100],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.header, { backgroundColor: colors.card }]}
        onPress={handleToggle}
        activeOpacity={0.9}
      >
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <Ionicons name="chevron-down" size={20} color={colors.text} />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.activitiesContainer,
          {
            height: activitiesHeight,
            opacity: heightAnim,
          },
        ]}
      >
        {activities.map((activity, activityIndex) => (
          <PracticeActivityCard
            key={activity.id}
            activity={activity}
            index={activityIndex}
            colors={colors}
            onPress={() => handleSelectActivity(activity)}
          />
        ))}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  activitiesContainer: {
    overflow: "hidden",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default PracticeCategory;
