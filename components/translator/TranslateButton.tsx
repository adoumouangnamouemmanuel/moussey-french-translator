"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface TranslateButtonProps {
  colors: any;
  onTranslate: () => void;
  isDisabled: boolean;
  isLoading: boolean;
  buttonScale: Animated.Value;
  buttonOpacity: Animated.Value;
}

export const TranslateButton = ({
  colors,
  onTranslate,
  isDisabled,
  isLoading,
  buttonScale,
  buttonOpacity,
}: TranslateButtonProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));

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

  const handlePress = () => {
    if (isDisabled || isLoading) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onTranslate();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        disabled={isDisabled || isLoading}
      >
        <Animated.View
          style={[
            styles.translateButton,
            {
              transform: [{ scale: buttonScale }],
              opacity: isDisabled ? 0.6 : buttonOpacity,
            },
          ]}
        >
          <LinearGradient
            colors={
              isDisabled
                ? ["#ccc", "#aaa"]
                : [colors.primary, `${colors.primary}CC`]
            }
            style={styles.translateGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <>
                <Ionicons
                  name="language"
                  size={20}
                  color="white"
                  style={styles.translateIcon}
                />
                <Text
                  style={[
                    styles.translateButtonText,
                    { fontFamily: "MontserratBold" },
                  ]}
                >
                  Traduire
                </Text>
              </>
            )}
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  translateButton: {
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  translateGradient: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  translateIcon: {
    marginRight: 10,
  },
  translateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TranslateButton;