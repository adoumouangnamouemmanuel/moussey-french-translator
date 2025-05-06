"use client";

import { useRef, useEffect } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TranslationSectionProps = {
  title: string;
  translations: string[];
  colors: any;
  delay?: number;
};

const TranslationSection = ({
  title,
  translations,
  colors,
  delay = 0,
}: TranslationSectionProps) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Use theme colors or fallback to original colors
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#666";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";

  return (
    <Animated.View
      style={[
        styles.section,
        {
          backgroundColor: cardColor,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <View style={[styles.sectionHeader, { borderBottomColor: borderColor }]}>
        <Text style={[styles.sectionTitle, { color: primaryColor }]}>
          {title}
        </Text>
      </View>

      {/* Translations */}
      {translations.length > 0 ? (
        <View
          style={[
            styles.dictionaryEntryGroup,
            { backgroundColor: colors?.border || "#f9f9f9" },
          ]}
        >
          {translations.map((translation, index) => (
            <View key={`translation-${index}`} style={styles.translationItem}>
              {translations.length > 1 && (
                <Text
                  style={[styles.translationNumber, { color: primaryColor }]}
                >
                  {index + 1}.
                </Text>
              )}
              <Text style={[styles.translation, { color: textColor }]}>
                {translation}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <View
          style={[
            styles.emptyTranslation,
            { backgroundColor: colors?.border || "#f9f9f9" },
          ]}
        >
          <Ionicons name="language-outline" size={24} color={inactiveColor} />
          <Text style={[styles.emptyStateText, { color: inactiveColor }]}>
            Aucune traduction disponible
          </Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "white",
    margin: 10,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sectionHeader: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.05)",
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008080",
  },
  dictionaryEntryGroup: {
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  translationItem: {
    flexDirection: "row",
    marginVertical: 4,
    paddingLeft: 4,
  },
  translationNumber: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
    color: "#008080",
  },
  translation: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  emptyTranslation: {
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  emptyStateText: {
    marginTop: 10,
    color: "#999",
    fontSize: 14,
  },
});

export default TranslationSection;