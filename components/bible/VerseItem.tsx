"use client";

import { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

interface VerseItemProps {
  verse: {
    id: string;
    verse: number;
    text: string;
    french: string;
  };
  index: number;
  colors: any;
  translationOption: "moussey" | "french" | "both";
  showVerseOptions: string | null;
  handleVersePress: (verse: any) => void;
  copyVerse: (verse: any) => void;
  shareVerse: (verse: any) => void;
  setSelectedVerse: (verse: any) => void;
  setShowBookmarkModal: (show: boolean) => void;
  setShowVerseOptions: (id: string | null) => void;
  fontSizes: {
    verse: number;
    text: number;
  };
}

export const VerseItem = ({
  verse,
  index,
  colors,
  translationOption,
  showVerseOptions,
  handleVersePress,
  copyVerse,
  shareVerse,
  setSelectedVerse,
  setShowBookmarkModal,
  setShowVerseOptions,
  fontSizes,
}: VerseItemProps) => {
  // Create animated values for the animations
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(20));
  const [actionsOpacity] = useState(new Animated.Value(0));
  const [actionsScale] = useState(new Animated.Value(0.8));
  const [textOpacity] = useState(new Animated.Value(0));
  const [translationOpacity] = useState(new Animated.Value(0));

  // Run the animations when the component mounts
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      delay: index * 50,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      delay: index * 50,
      useNativeDriver: true,
    }).start();
  }, [index]);

  // Run text animations with delays
  useEffect(() => {
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 500,
      delay: index * 50 + 100,
      useNativeDriver: true,
    }).start();

    Animated.timing(translationOpacity, {
      toValue: 1,
      duration: 500,
      delay: index * 50 + 200,
      useNativeDriver: true,
    }).start();
  }, [index]);

  // Run actions animations when verse options are shown
  useEffect(() => {
    if (showVerseOptions === verse.id) {
      Animated.spring(actionsOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }).start();

      Animated.spring(actionsScale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      actionsOpacity.setValue(0);
      actionsScale.setValue(0.8);
    }
  }, [showVerseOptions, verse.id]);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ translateY }],
      }}
    >
      <TouchableOpacity
        style={[
          styles.verseItem,
          showVerseOptions === verse.id && {
            backgroundColor: `${colors.primary}15`,
            borderRadius: 12,
          },
        ]}
        onPress={() => handleVersePress(verse)}
        onLongPress={() => handleVersePress(verse)}
      >
        <View style={styles.verseHeader}>
          <Text
            style={[
              styles.verseNumber,
              {
                color: colors.primary,
                fontSize: fontSizes.verse,
                fontFamily: "PlayfairBold",
              },
            ]}
          >
            {verse.verse}
          </Text>

          {showVerseOptions === verse.id && (
            <Animated.View
              style={[
                styles.verseActions,
                {
                  opacity: actionsOpacity,
                  transform: [{ scale: actionsScale }],
                },
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => copyVerse(verse)}
              >
                <Ionicons name="copy-outline" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => shareVerse(verse)}
              >
                <Ionicons name="share-social-outline" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => {
                  setSelectedVerse(verse);
                  setShowBookmarkModal(true);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
              >
                <Ionicons name="bookmark-outline" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => setShowVerseOptions(null)}
              >
                <Ionicons name="close" size={16} color="white" />
              </TouchableOpacity>
            </Animated.View>
          )}
        </View>

        {(translationOption === "moussey" || translationOption === "both") && (
          <Animated.Text
            style={[
              styles.verseText,
              {
                color: colors.text,
                fontSize: fontSizes.text,
                fontFamily: "Playfair",
                lineHeight: fontSizes.text * 1.5,
                opacity: textOpacity,
              },
            ]}
          >
            {verse.text}
          </Animated.Text>
        )}

        {translationOption === "both" && (
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
        )}

        {(translationOption === "french" || translationOption === "both") && (
          <Animated.Text
            style={[
              styles.verseTranslation,
              {
                color:
                  translationOption === "both" ? colors.inactive : colors.text,
                fontSize:
                  fontSizes.text - (translationOption === "both" ? 2 : 0),
                fontFamily:
                  translationOption === "both" ? "PlayfairItalic" : "Playfair",
                lineHeight:
                  (fontSizes.text - (translationOption === "both" ? 2 : 0)) *
                  1.5,
                opacity: translationOpacity,
              },
            ]}
          >
            {verse.french}
          </Animated.Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  verseItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  verseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  verseNumber: {
    fontWeight: "bold",
    marginRight: 8,
  },
  verseText: {
    lineHeight: 24,
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  verseTranslation: {
    lineHeight: 24,
    fontStyle: "italic",
  },
  verseActions: {
    flexDirection: "row",
  },
  verseAction: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});

export default VerseItem;
