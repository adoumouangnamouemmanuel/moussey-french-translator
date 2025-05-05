"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface QuickActionProps {
  colors: any;
  onActionPress: (screen: string) => void;
}

export const QuickActions = ({ colors, onActionPress }: QuickActionProps) => {
  // Create animated values for staggered animations
  const [containerOpacity] = useState(new Animated.Value(0));
  const [containerTranslateY] = useState(new Animated.Value(20));
  const actionAnims = [
    useState(new Animated.Value(0)),
    useState(new Animated.Value(0)),
    useState(new Animated.Value(0)),
    useState(new Animated.Value(0)),
  ];

  // Run the animation when the component mounts
  useEffect(() => {
    // Container animation
    Animated.parallel([
      Animated.timing(containerOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(containerTranslateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    // Staggered animations for each action button
    actionAnims.forEach(([anim], index) => {
      Animated.spring(anim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        delay: 200 + index * 100,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const actions: {
    icon: string;
    text: string;
    screen: string;
    gradient: readonly [string, string];
  }[] = [
    {
      icon: "language",
      text: "Traduire",
      screen: "Translator",
      gradient: [colors.primary, colors.primary + "CC"],
    },
    {
      icon: "search",
      text: "Rechercher",
      screen: "Dictionary",
      gradient: [colors.primary, colors.primary + "CC"],
    },
    {
      icon: "fitness",
      text: "Pratiquer",
      screen: "PracticeTab",
      gradient: [colors.primary, colors.primary + "CC"],
    },
    {
      icon: "school",
      text: "Apprendre",
      screen: "LearnTab",
      gradient: [colors.primary, colors.primary + "CC"],
    },
  ];

  return (
    <Animated.View
      style={[
        styles.quickActionsContainer,
        {
          opacity: containerOpacity,
          transform: [{ translateY: containerTranslateY }],
        },
      ]}
    >
      <View style={styles.sectionHeader}>
        <View style={styles.titleContainer}>
          <Ionicons
            name="flash"
            size={18}
            color={colors.primary}
            style={styles.titleIcon}
          />
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text, fontFamily: "PlayfairBold" },
            ]}
          >
            Actions Rapides
          </Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        {actions.map((action, index) => (
          <Animated.View
            key={action.screen}
            style={{
              opacity: actionAnims[index][0],
              transform: [
                {
                  scale: actionAnims[index][0].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              style={styles.quickActionButton}
              onPress={() => {
                onActionPress(action.screen);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            >
              <LinearGradient
                colors={action.gradient}
                style={styles.quickActionGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Ionicons name={action.icon as any} size={24} color="white" />
              </LinearGradient>
              <Text
                style={[
                  styles.quickActionText,
                  { color: colors.text, fontFamily: "Montserrat" },
                ]}
              >
                {action.text}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  quickActionsContainer: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleIcon: {
    marginRight: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickActionButton: {
    alignItems: "center",
  },
  quickActionGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  quickActionText: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "500",
  },
});

export default QuickActions;
