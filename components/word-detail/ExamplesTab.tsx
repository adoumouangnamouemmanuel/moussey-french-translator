"use client";

import { useRef, useEffect } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ExamplesTabProps = {
  examples: { example: string; translation: string }[];
  isFrenchToMoussey: boolean;
  colors: any;
};

const ExamplesTab = ({
  examples,
  isFrenchToMoussey,
  colors,
}: ExamplesTabProps) => {
  // Animation values for staggered appearance
  const animatedValues = useRef(
    examples.map(() => new Animated.Value(0))
  ).current;

  // Run animations on mount
  useEffect(() => {
    const animations = animatedValues.map((anim, index) => {
      return Animated.timing(anim, {
        toValue: 1,
        duration: 300,
        delay: 100 + index * 100,
        useNativeDriver: true,
      });
    });

    Animated.stagger(50, animations).start();
  }, [examples]);

  // Use theme colors or fallback to original colors
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#666";
  const primaryColor = colors?.primary || "#008080";

  return (
    <View style={[styles.tabContent, { backgroundColor: cardColor }]}>
      {examples.length > 0 ? (
        examples.map((example, index) => (
          <Animated.View
            key={index}
            style={[
              styles.example,
              { backgroundColor: colors?.border || "#f9f9f9" },
              index > 0 && { marginTop: 8 },
              {
                opacity: animatedValues[index],
                transform: [
                  {
                    translateY: animatedValues[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={[styles.exampleText, { color: textColor }]}>
              <Text style={[styles.exampleLanguage, { color: primaryColor }]}>
                {isFrenchToMoussey ? "Français: " : "Moussey: "}
              </Text>
              {example.example}
            </Text>
            <Text style={[styles.exampleText, { color: textColor }]}>
              <Text style={[styles.exampleLanguage, { color: primaryColor }]}>
                {isFrenchToMoussey ? "Moussey: " : "Français: "}
              </Text>
              {example.translation}
            </Text>
          </Animated.View>
        ))
      ) : (
        <View style={styles.emptyState}>
          <Ionicons
            name="document-text-outline"
            size={40}
            color={inactiveColor}
          />
          <Text style={[styles.emptyStateText, { color: inactiveColor }]}>
            Aucun exemple disponible
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  example: {
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
  },
  exampleText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
    lineHeight: 20,
  },
  exampleLanguage: {
    fontWeight: "bold",
    color: "#008080",
  },
  emptyState: {
    alignItems: "center",
    padding: 30,
  },
  emptyStateText: {
    marginTop: 10,
    color: "#999",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ExamplesTab;