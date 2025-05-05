"use client";

import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface DailyWordCardProps {
  colors: any;
  dailyWords: Array<{
    id: string;
    moussey: string;
    french: string;
    pronunciation: string;
  }>;
  loading: boolean;
  isFavorite: (id: string) => boolean;
  onFavoriteToggle: () => void;
  onWordDetailPress: () => void;
}

export const DailyWordCard = ({
  colors,
  dailyWords,
  loading,
  isFavorite,
  onFavoriteToggle,
  onWordDetailPress,
}: DailyWordCardProps) => {
  const [currentDailyWord, setCurrentDailyWord] = useState(0);
  const [cardOpacity] = useState(new Animated.Value(0));
  const [cardScale] = useState(new Animated.Value(0.95));
  const [wordOpacity] = useState(new Animated.Value(1));
  const [wordTranslateX] = useState(new Animated.Value(0));
  const [buttonScale] = useState(new Animated.Value(1));

  useEffect(() => {
    // Animate card appearance
    Animated.parallel([
      Animated.timing(cardOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(cardScale, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const nextWord = () => {
    if (dailyWords.length <= 1) return;

    // Provide haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Animate word transition
    Animated.sequence([
      // Fade out and slide left
      Animated.parallel([
        Animated.timing(wordOpacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(wordTranslateX, {
          toValue: -50,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]),
      // Update word index
      Animated.timing(wordTranslateX, {
        toValue: 50,
        duration: 0,
        useNativeDriver: true,
      }),
      // Fade in and slide right to center
      Animated.parallel([
        Animated.timing(wordOpacity, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(wordTranslateX, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]),
    ]).start();

    // Update the current word index
    setCurrentDailyWord((prev) => (prev + 1) % dailyWords.length);
  };

  const prevWord = () => {
    if (dailyWords.length <= 1) return;

    // Provide haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Animate word transition
    Animated.sequence([
      // Fade out and slide right
      Animated.parallel([
        Animated.timing(wordOpacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(wordTranslateX, {
          toValue: 50,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]),
      // Update word index
      Animated.timing(wordTranslateX, {
        toValue: -50,
        duration: 0,
        useNativeDriver: true,
      }),
      // Fade in and slide left to center
      Animated.parallel([
        Animated.timing(wordOpacity, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
        Animated.timing(wordTranslateX, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
          easing: Easing.out(Easing.cubic),
        }),
      ]),
    ]).start();

    // Update the current word index
    setCurrentDailyWord(
      (prev) => (prev - 1 + dailyWords.length) % dailyWords.length
    );
  };

  const animateButtonPress = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Animated.View
      style={[
        styles.dailyWordCard,
        {
          backgroundColor: colors.card,
          opacity: cardOpacity,
          transform: [{ scale: cardScale }],
        },
      ]}
    >
      <LinearGradient
        colors={[`${colors.primary}10`, `${colors.primary}05`]}
        style={styles.cardGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <View style={styles.dailyWordHeader}>
        <View style={styles.titleContainer}>
          <Ionicons
            name="calendar"
            size={18}
            color={colors.primary}
            style={styles.titleIcon}
          />
          <Text
            style={[
              styles.dailyWordTitle,
              { color: colors.text, fontFamily: "PlayfairBold" },
            ]}
          >
            Mot du Jour
          </Text>
        </View>
        <View style={styles.dailyWordPagination}>
          {dailyWords.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                {
                  backgroundColor:
                    index === currentDailyWord
                      ? colors.primary
                      : colors.inactive,
                  width: index === currentDailyWord ? 12 : 8,
                  height: index === currentDailyWord ? 8 : 8,
                },
              ]}
            />
          ))}
        </View>
      </View>

      {loading ? (
        <View style={styles.dailyWordContent}>
          <Text
            style={[
              styles.wordMoussey,
              { color: colors.inactive, fontFamily: "Montserrat" },
            ]}
          >
            Chargement...
          </Text>
        </View>
      ) : dailyWords.length > 0 ? (
        <View style={styles.dailyWordContent}>
          <TouchableOpacity onPress={prevWord} style={styles.wordNavButton}>
            <Ionicons name="chevron-back" size={24} color={colors.primary} />
          </TouchableOpacity>

          <Animated.View
            style={[
              styles.wordContainer,
              {
                opacity: wordOpacity,
                transform: [{ translateX: wordTranslateX }],
              },
            ]}
          >
            <Text
              style={[
                styles.wordMoussey,
                { color: colors.text, fontFamily: "PlayfairBold" },
              ]}
            >
              {dailyWords[currentDailyWord].moussey}
            </Text>
            <Text
              style={[
                styles.wordPronunciation,
                { color: colors.inactive, fontFamily: "PlayfairItalic" },
              ]}
            >
              {dailyWords[currentDailyWord].pronunciation || ""}
            </Text>
            <Text
              style={[
                styles.wordFrench,
                { color: colors.primary, fontFamily: "Montserrat" },
              ]}
            >
              {dailyWords[currentDailyWord].french}
            </Text>
          </Animated.View>

          <TouchableOpacity onPress={nextWord} style={styles.wordNavButton}>
            <Ionicons name="chevron-forward" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.dailyWordContent}>
          <Text
            style={[
              styles.wordMoussey,
              { color: colors.inactive, fontFamily: "Montserrat" },
            ]}
          >
            Aucun mot disponible
          </Text>
        </View>
      )}

      <View
        style={[
          styles.dailyWordActions,
          { borderTopColor: `${colors.border}50` },
        ]}
      >
        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity
            style={[
              styles.wordActionButton,
              { backgroundColor: `${colors.primary}15` },
            ]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              animateButtonPress();
            }}
          >
            <Ionicons
              name="volume-high-outline"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity
            style={[
              styles.wordActionButton,
              { backgroundColor: `${colors.primary}15` },
            ]}
            onPress={() => {
              onFavoriteToggle();
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              animateButtonPress();
            }}
          >
            <Ionicons
              name={
                dailyWords.length > 0 &&
                isFavorite(dailyWords[currentDailyWord].id)
                  ? "star"
                  : "star-outline"
              }
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
          <TouchableOpacity
            style={[
              styles.wordActionButton,
              { backgroundColor: `${colors.primary}15` },
            ]}
            onPress={() => {
              onWordDetailPress();
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              animateButtonPress();
            }}
          >
            <Ionicons
              name="information-circle-outline"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dailyWordCard: {
    margin: 15,
    marginTop: 5,
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    position: "relative",
    overflow: "hidden",
    zIndex: 5,
  },
  cardGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dailyWordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleIcon: {
    marginRight: 6,
  },
  dailyWordTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dailyWordPagination: {
    flexDirection: "row",
  },
  paginationDot: {
    borderRadius: 4,
    marginHorizontal: 3,
  },
  dailyWordContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    minHeight: 120,
  },
  wordNavButton: {
    padding: 8,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  wordContainer: {
    flex: 1,
    alignItems: "center",
  },
  wordMoussey: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  wordPronunciation: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
  wordFrench: {
    fontSize: 18,
    textAlign: "center",
  },
  dailyWordActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    borderTopWidth: 1,
    paddingTop: 15,
  },
  wordActionButton: {
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 25,
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DailyWordCard;
