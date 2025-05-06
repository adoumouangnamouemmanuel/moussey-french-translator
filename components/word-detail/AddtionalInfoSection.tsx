"use client";

import { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import type { DictionaryEntry } from "../../utils/dictionary";

type AdditionalInfoSectionProps = {
  word: DictionaryEntry;
  isFrenchToMoussey: boolean;
  colors: any;
  onSelectRelatedTerm: (term: string) => void;
  delay?: number;
};

const AdditionalInfoSection = ({
  word,
  isFrenchToMoussey,
  colors,
  onSelectRelatedTerm,
  delay = 0,
}: AdditionalInfoSectionProps) => {
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

  // Format part of speech for display
  const formatPartOfSpeech = (pos: string): string => {
    return pos.charAt(0).toUpperCase() + pos.slice(1);
  };

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
          Informations Supplémentaires
        </Text>
      </View>

      {word.partsOfSpeech && word.partsOfSpeech.length > 0 && (
        <View style={styles.infoItem}>
          <Text style={[styles.infoLabel, { color: inactiveColor }]}>
            Catégorie grammaticale:
          </Text>
          <View style={styles.partsOfSpeechContainer}>
            {word.partsOfSpeech.map((part, index) => (
              <View
                key={index}
                style={[
                  styles.partOfSpeechBadge,
                  { backgroundColor: `${primaryColor}20` },
                ]}
              >
                <Text
                  style={[styles.partOfSpeechText, { color: primaryColor }]}
                >
                  {formatPartOfSpeech(part)}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      <View style={styles.infoItem}>
        <Text style={[styles.infoLabel, { color: inactiveColor }]}>Type:</Text>
        <Text style={[styles.infoValue, { color: textColor }]}>
          {isFrenchToMoussey
            ? "Français vers Moussey"
            : "Moussey vers Français"}
        </Text>
      </View>

      {word.relatedWords && word.relatedWords.length > 0 && (
        <View style={styles.infoItem}>
          <Text style={[styles.infoLabel, { color: inactiveColor }]}>
            Termes liés:
          </Text>
          <View style={styles.relatedTermsContainer}>
            {word.relatedWords.map((term, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.relatedTermBadge,
                  { backgroundColor: `${primaryColor}10` },
                ]}
                onPress={() => onSelectRelatedTerm(term)}
                activeOpacity={0.7}
              >
                <Text style={[styles.relatedTermText, { color: primaryColor }]}>
                  {term}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
  infoItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  infoLabel: {
    width: 100,
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  infoValue: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  partsOfSpeechContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  partOfSpeechBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  partOfSpeechText: {
    fontSize: 12,
    fontWeight: "500",
  },
  relatedTermsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  relatedTermBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  relatedTermText: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default AdditionalInfoSection;