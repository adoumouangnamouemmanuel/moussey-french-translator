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

type QuickLessonCardProps = {
  title: string;
  duration: string;
  icon: string;
  index: number;
  colors: any;
  onPress: () => void;
};

const QuickLessonCard = ({
  title,
  duration,
  icon,
  index,
  colors,
  onPress,
}: QuickLessonCardProps) => {
  // Animation values
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const translateXAnim = useRef(new Animated.Value(50)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 100 + 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnim, {
        toValue: 0,
        duration: 500,
        delay: index * 100 + 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

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

    onPress();
  };

  return (
    <Animated.View
      style={[
        styles.quickLessonContainer,
        {
          opacity: opacityAnim,
          transform: [{ translateX: translateXAnim }, { scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={[styles.quickLessonCard, { backgroundColor: colors.card }]}
        onPress={handlePress}
        activeOpacity={0.9}
      >
        <View
          style={[
            styles.quickLessonIcon,
            { backgroundColor: `${colors.primary}20` },
          ]}
        >
          <Ionicons name={icon as any} size={24} color={colors.primary} />
        </View>
        <Text style={[styles.quickLessonTitle, { color: colors.text }]}>
          {title}
        </Text>
        <Text style={[styles.quickLessonDuration, { color: colors.inactive }]}>
          {duration}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  quickLessonContainer: {
    marginRight: 10,
  },
  quickLessonCard: {
    width: 120,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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
});

export default QuickLessonCard;