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
import type { DictionaryEntry } from "../../utils/dictionary";

type RelatedWordsTabProps = {
  words: DictionaryEntry[];
  isFrenchToMoussey: boolean;
  colors: any;
  onSelectWord: (word: DictionaryEntry) => void;
  emptyIcon: keyof typeof Ionicons.glyphMap;
  emptyText: string;
};

const RelatedWordsTab = ({
  words,
  isFrenchToMoussey,
  colors,
  onSelectWord,
  emptyIcon,
  emptyText,
}: RelatedWordsTabProps) => {
  // Animation values for staggered appearance - initialize with empty array if words is empty
  const animatedValues = useRef(
    words && words.length > 0 ? words.map(() => new Animated.Value(0)) : []
  ).current;
  const scaleAnims = useRef(
    words && words.length > 0 ? words.map(() => new Animated.Value(1)) : []
  ).current;

  // Run animations on mount
  useEffect(() => {
    if (words && words.length > 0) {
      const animations = animatedValues.map((anim, index) => {
        return Animated.timing(anim, {
          toValue: 1,
          duration: 300,
          delay: 100 + index * 100,
          useNativeDriver: true,
        });
      });

      Animated.stagger(50, animations).start();
    }
  }, [words, animatedValues]);

  // Use theme colors or fallback to original colors
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#666";
  const primaryColor = colors?.primary || "#008080";

  const onPressIn = (index: number) => {
    if (scaleAnims[index]) {
      Animated.spring(scaleAnims[index], {
        toValue: 0.97,
        friction: 5,
        tension: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const onPressOut = (index: number) => {
    if (scaleAnims[index]) {
      Animated.spring(scaleAnims[index], {
        toValue: 1,
        friction: 3,
        tension: 400,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={[styles.tabContent, { backgroundColor: cardColor }]}>
      {words && words.length > 0 ? (
        words.map((word, index) => {
          // Make sure we have valid animation values
          const animValue = animatedValues[index] || new Animated.Value(0);
          const scaleValue = scaleAnims[index] || new Animated.Value(1);

          return (
            <Animated.View
              key={word.id}
              style={[
                {
                  opacity: animValue,
                  transform: [
                    {
                      translateY: animValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      }),
                    },
                    { scale: scaleValue },
                  ],
                },
                index > 0 && { marginTop: 8 },
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.relatedWord,
                  { backgroundColor: colors?.border || "#f9f9f9" },
                ]}
                onPress={() => onSelectWord(word)}
                onPressIn={() => onPressIn(index)}
                onPressOut={() => onPressOut(index)}
                activeOpacity={0.9}
              >
                <View>
                  <Text style={[styles.relatedWordText, { color: textColor }]}>
                    {isFrenchToMoussey ? word.french : word.moussey}
                  </Text>
                  <Text
                    style={[
                      styles.relatedWordTranslation,
                      { color: inactiveColor },
                    ]}
                  >
                    {isFrenchToMoussey ? word.moussey : word.french}
                  </Text>
                </View>
                <View style={styles.chevronContainer}>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={primaryColor}
                  />
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        })
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name={emptyIcon as keyof typeof Ionicons.glyphMap} size={40} color={inactiveColor} />
          <Text style={[styles.emptyStateText, { color: inactiveColor }]}>
            {emptyText}
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
  relatedWord: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 8,
  },
  relatedWordText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  relatedWordTranslation: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  chevronContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.05)",
    justifyContent: "center",
    alignItems: "center",
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

export default RelatedWordsTab;