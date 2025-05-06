"use client";

import { useRef, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type BottomActionBarProps = {
  isFavorited: boolean;
  colors: any;
  onToggleFavorite: () => void;
  onPlayPronunciation: () => void;
  onShare: () => void;
};

const BottomActionBar = ({
  isFavorited,
  colors,
  onToggleFavorite,
  onPlayPronunciation,
  onShare,
}: BottomActionBarProps) => {
  // Animation values
  const translateY = useRef(new Animated.Value(50)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Use theme colors or fallback to original colors
  const cardColor = colors?.card || "white";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";

  return (
    <Animated.View
      style={[
        styles.actionBar,
        {
          backgroundColor: cardColor,
          borderTopColor: borderColor,
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.actionButton}
        onPress={onToggleFavorite}
        activeOpacity={0.7}
      >
        <Ionicons
          name={isFavorited ? "star" : "star-outline"}
          size={24}
          color={isFavorited ? "#FFD700" : primaryColor}
        />
        <Text style={[styles.actionText, { color: primaryColor }]}>
          Favoris
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={onPlayPronunciation}
        activeOpacity={0.7}
      >
        <Ionicons name="volume-high-outline" size={24} color={primaryColor} />
        <Text style={[styles.actionText, { color: primaryColor }]}>
          Écouter
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={onShare}
        activeOpacity={0.7}
      >
        <Ionicons name="share-outline" size={24} color={primaryColor} />
        <Text style={[styles.actionText, { color: primaryColor }]}>
          Partager
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  actionButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  actionText: {
    color: "#008080",
    marginTop: 5,
    fontSize: 12,
    fontWeight: "500",
  },
});

export default BottomActionBar;