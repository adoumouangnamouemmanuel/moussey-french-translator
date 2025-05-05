"use client";

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Animated } from "react-native";
import * as Haptics from "expo-haptics";

// Replace MotiView with Animated.View
interface TestamentSelectorProps {
  colors: any;
  testament: "all" | "ancien" | "nouveau";
  setTestament: (testament: "all" | "ancien" | "nouveau") => void;
}

export const TestamentSelector = ({
  colors,
  testament,
  setTestament,
}: TestamentSelectorProps) => {
  // Create an animated value for the animation
  const [fadeAnim] = React.useState(new Animated.Value(0));
  const [translateYAnim] = React.useState(new Animated.Value(-10));

  // Run the animation when the component mounts
  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.testamentSelector,
        {
          backgroundColor: colors.card,
          borderRadius: 25,
          margin: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.testamentOption,
          testament === "all" && {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3,
          },
        ]}
        onPress={() => {
          setTestament("all");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={{
            color: testament === "all" ? "white" : colors.text,
            fontFamily: "MontserratBold",
            fontSize: 12,
          }}
        >
          Tous
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.testamentOption,
          testament === "ancien" && {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3,
          },
        ]}
        onPress={() => {
          setTestament("ancien");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={{
            color: testament === "ancien" ? "white" : colors.text,
            fontFamily: "MontserratBold",
            fontSize: 12,
          }}
        >
          Ancien Testament
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.testamentOption,
          testament === "nouveau" && {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3,
          },
        ]}
        onPress={() => {
          setTestament("nouveau");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={{
            color: testament === "nouveau" ? "white" : colors.text,
            fontFamily: "MontserratBold",
            fontSize: 12,
          }}
        >
          Nouveau Testament
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  testamentSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  testamentOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
