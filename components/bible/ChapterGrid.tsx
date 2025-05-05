"use client";

import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";

interface ChapterGridProps {
  book: {
    id: string;
    name: string;
    chapters: number;
  };
  colors: any;
  selectedChapter: number | null;
  setSelectedBook: (bookId: string | null) => void;
  setSelectedChapter: (chapter: number | null) => void;
  fadeAnim: Animated.Value;
  setShowJumpToModal: (show: boolean) => void;
}

export const ChapterGrid = ({
  book,
  colors,
  selectedChapter,
  setSelectedBook,
  setSelectedChapter,
  fadeAnim,
  setShowJumpToModal,
}: ChapterGridProps) => {
  // Get screen dimensions
  const { width: screenWidth } = Dimensions.get("window");

  // Calculate grid dimensions
  const itemsPerRow = 4;
  const spacing = 12;
  const availableWidth = screenWidth - spacing * 2 * (itemsPerRow + 1);
  const itemSize = availableWidth / itemsPerRow;

  // Create animated values for the animations
  const [containerOpacity] = useState(new Animated.Value(0));
  const [containerTranslateY] = useState(new Animated.Value(20));
  const [titleOpacity] = useState(new Animated.Value(0));
  const [titleScale] = useState(new Animated.Value(0.9));

  // Create a single animation for all chapter items
  const [itemsOpacity] = useState(new Animated.Value(0));
  const [itemsScale] = useState(new Animated.Value(0.8));

  // Run the container animation when the component mounts
  useEffect(() => {
    // Container animation
    Animated.parallel([
      Animated.timing(containerOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(containerTranslateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    // Title animation
    Animated.parallel([
      Animated.spring(titleOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(titleScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();

    // Items animation
    Animated.parallel([
      Animated.timing(itemsOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(itemsScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.chapterContainer,
        {
          backgroundColor: colors.card,
          opacity: containerOpacity,
          transform: [{ translateY: containerTranslateY }],
        },
      ]}
    >
      <View style={styles.chapterHeader}>
        <TouchableOpacity
          onPress={() => {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
              easing: Easing.out(Easing.cubic),
            }).start(() => {
              setSelectedBook(null);
              fadeAnim.setValue(1);
            });

            // Provide haptic feedback
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <Animated.Text
          style={[
            styles.chapterTitle,
            {
              color: colors.text,
              fontFamily: "PlayfairBold",
              opacity: titleOpacity,
              transform: [{ scale: titleScale }],
            },
          ]}
        >
          {book.name}
        </Animated.Text>

        <TouchableOpacity
          onPress={() => {
            setShowJumpToModal(true);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
        >
          <Ionicons name="search" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.chaptersGrid}>
          {Array.from({ length: book.chapters }, (_, i) => (
            <Animated.View
              key={`chapter-${i}`}
              style={{
                opacity: itemsOpacity,
                transform: [
                  { scale: itemsScale },
                  {
                    translateY: itemsOpacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0],
                    }),
                  },
                ],
                margin: spacing,
              }}
            >
              <TouchableOpacity
                style={[
                  styles.chapterItem,
                  {
                    width: itemSize,
                    height: itemSize,
                    backgroundColor:
                      selectedChapter === i + 1
                        ? colors.primary
                        : colors.background,
                    borderColor: colors.border,
                    shadowColor:
                      selectedChapter === i + 1
                        ? colors.primary
                        : "transparent",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: selectedChapter === i + 1 ? 0.3 : 0,
                    shadowRadius: 4,
                    elevation: selectedChapter === i + 1 ? 4 : 0,
                  },
                ]}
                onPress={() => {
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                    easing: Easing.out(Easing.cubic),
                  }).start(() => {
                    setSelectedChapter(i + 1);
                    fadeAnim.setValue(1);
                  });

                  // Provide haptic feedback
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }}
              >
                <Text
                  style={[
                    styles.chapterNumber,
                    {
                      color: selectedChapter === i + 1 ? "white" : colors.text,
                      fontFamily: "MontserratBold",
                    },
                  ]}
                >
                  {i + 1}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  chapterContainer: {
    flex: 1,
  },
  chapterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 5,
  },
  chapterTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 30,
  },
  chaptersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  chapterItem: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chapterNumber: {
    fontSize: 22,
    fontWeight: "600",
  },
});

export default ChapterGrid;
