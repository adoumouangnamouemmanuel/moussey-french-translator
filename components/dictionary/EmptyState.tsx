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

interface EmptyStateProps {
  colors: any;
  searchQuery: string;
  onClearSearch: () => void;
}

export const EmptyState = ({
  colors,
  searchQuery,
  onClearSearch,
}: EmptyStateProps) => {
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

  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const headerColors = colors?.headerBackground || ["#00a0a0", "#008080"];

  if (searchQuery.trim() !== "") {
    return (
      <Animated.View
        style={[
          styles.emptyContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <Ionicons name="search-outline" size={50} color={inactiveColor} />
        <Text
          style={[
            styles.emptyText,
            { color: inactiveColor, fontFamily: "PlayfairBold" },
          ]}
        >
          Aucun mot trouvé
        </Text>
        <Text
          style={[
            styles.emptySubtext,
            { color: inactiveColor, fontFamily: "Montserrat" },
          ]}
        >
          Essayez un terme de recherche différent ou parcourez les suggestions
        </Text>
        <TouchableOpacity style={styles.browseButton} onPress={onClearSearch}>
          <LinearGradient
            colors={headerColors}
            style={styles.browseButtonGradient}
          >
            <Text
              style={[
                styles.browseButtonText,
                { fontFamily: "MontserratBold" },
              ]}
            >
              Parcourir les suggestions
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={[
        styles.emptyContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <Ionicons name="book-outline" size={50} color={inactiveColor} />
      <Text
        style={[
          styles.emptyText,
          { color: textColor, fontFamily: "PlayfairBold" },
        ]}
      >
        Dictionnaire
      </Text>
      <Text
        style={[
          styles.emptySubtext,
          { color: inactiveColor, fontFamily: "Montserrat" },
        ]}
      >
        Recherchez des mots en Moussey ou en Français
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "500",
  },
  emptySubtext: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  browseButton: {
    marginTop: 15,
    overflow: "hidden",
    borderRadius: 20,
  },
  browseButtonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  browseButtonText: {
    color: "white",
    fontWeight: "500",
  },
});

export default EmptyState;