"use client";

import { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { DictionaryEntry } from "../../utils/dictionary";
import { LinearGradient } from "expo-linear-gradient";

type WordItemProps = {
  item: DictionaryEntry;
  onPress: () => void;
  onPronounce: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  highlightText?: string;
  themeColors?: any;
};

const WordItem = ({
  item,
  onPress,
  onPronounce,
  onToggleFavorite,
  isFavorite,
  highlightText,
  themeColors,
}: WordItemProps) => {
  // Animation for press feedback
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      friction: 5,
      tension: 300,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 400,
      useNativeDriver: true,
    }).start();
  };

  // Function to highlight matching text
  const highlightMatch = (text: string, highlight: string) => {
    if (!highlight || highlight.trim() === "") return <Text>{text}</Text>;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <Text key={i} style={styles.highlightedText}>
              {part}
            </Text>
          ) : (
            <Text key={i}>{part}</Text>
          )
        )}
      </>
    );
  };

  // Determine if this is a French primary match
  const isFrenchPrimary = item.id.startsWith("f2m_");

  // Use theme colors or fallback to original colors
  const cardColor = themeColors?.card || "white";
  const textColor = themeColors?.text || "#333";
  const inactiveColor = themeColors?.inactive || "#777";
  const primaryColor = themeColors?.primary || "#008080";
  const headerColors = themeColors?.headerBackground || ["#00a0a0", "#008080"];

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          styles.wordItem,
          {
            backgroundColor: cardColor,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.wordContent}>
          {/* If it's a French primary match, show French first */}
          {isFrenchPrimary ? (
            <>
              <Text style={[styles.moussey, { color: textColor }]}>
                {highlightText
                  ? highlightMatch(item.french, highlightText)
                  : item.french}
              </Text>
              <Text style={[styles.french, { color: inactiveColor }]}>
                {item.moussey}
              </Text>
            </>
          ) : (
            <>
              <Text style={[styles.moussey, { color: textColor }]}>
                {highlightText
                  ? highlightMatch(item.moussey, highlightText)
                  : item.moussey}
              </Text>
              <Text style={[styles.french, { color: inactiveColor }]}>
                {highlightText
                  ? highlightMatch(item.french, highlightText)
                  : item.french}
              </Text>
            </>
          )}
          {item.pronunciation && !isFrenchPrimary && (
            <Text style={[styles.pronunciation, { color: inactiveColor }]}>
              {item.pronunciation}
            </Text>
          )}
        </View>
        <View style={styles.wordActions}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={onToggleFavorite}
          >
            <Ionicons
              name={isFavorite ? "star" : "star-outline"}
              size={20}
              color={isFavorite ? "#FFD700" : primaryColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pronounceButton}
            onPress={onPronounce}
          >
            <LinearGradient
              colors={headerColors}
              style={styles.pronounceGradient}
            >
              <Ionicons name="volume-medium-outline" size={18} color="white" />
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.chevronContainer}>
            <Ionicons name="chevron-forward" size={20} color={primaryColor} />
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wordItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  wordContent: {
    flex: 1,
  },
  wordActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  pronounceButton: {
    marginRight: 10,
  },
  pronounceGradient: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  chevronContainer: {
    width: 20,
    alignItems: "center",
  },
  moussey: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  french: {
    fontSize: 14,
    color: "#555",
    marginTop: 2,
  },
  pronunciation: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
    fontStyle: "italic",
  },
  highlightedText: {
    backgroundColor: "rgba(255, 235, 59, 0.3)",
    fontWeight: "bold",
  },
  favoriteButton: {
    marginRight: 10,
  },
});

export default WordItem;
