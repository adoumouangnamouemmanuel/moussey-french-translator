"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";

type Language = "moussey" | "french";

interface TranslatorHeaderProps {
  colors: any;
  fromLanguage: Language;
  toLanguage: Language;
  onSwitchLanguages: () => void;
  onGoBack: () => void;
  switchButtonRotate: Animated.Value;
  isDark: boolean;
}

export const TranslatorHeader = ({
  colors,
  fromLanguage,
  toLanguage,
  onSwitchLanguages,
  onGoBack,
  switchButtonRotate,
  isDark,
}: TranslatorHeaderProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(-10));

  // Calculate rotation for switch button
  const spin = switchButtonRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  useEffect(() => {
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
    <LinearGradient
      colors={colors.headerBackground as [string, string]}
      style={styles.header}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <BlurView
        intensity={20}
        tint={isDark ? "dark" : "light"}
        style={styles.blurOverlay}
      />

      <Animated.View
        style={[
          styles.headerContent,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.languageContainer}>
          <Text style={[styles.languageText, { fontFamily: "PlayfairBold" }]}>
            {fromLanguage === "moussey" ? "Moussey" : "Français"}
          </Text>
          <View style={styles.arrowContainer}>
            <Ionicons name="arrow-forward" size={16} color="white" />
          </View>
          <Text style={[styles.languageText, { fontFamily: "PlayfairBold" }]}>
            {toLanguage === "moussey" ? "Moussey" : "Français"}
          </Text>
        </View>

        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <TouchableOpacity
            onPress={onSwitchLanguages}
            style={styles.switchButton}
          >
            <Ionicons name="swap-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  switchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  languageText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  arrowContainer: {
    marginHorizontal: 10,
  },
});

export default TranslatorHeader;
