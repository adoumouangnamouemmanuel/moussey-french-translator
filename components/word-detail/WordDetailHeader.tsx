"use client";

import { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import type { DictionaryEntry } from "../../utils/dictionary";

type WordDetailHeaderProps = {
  word: DictionaryEntry;
  scrollY: Animated.Value;
  isFavorited: boolean;
  isPlaying: boolean;
  onBackPress: () => void;
  onToggleFavorite: () => void;
  onPlayPronunciation: () => void;
  onShare: () => void;
  colors: any;
};

const WordDetailHeader = ({
  word,
  scrollY,
  isFavorited,
  isPlaying,
  onBackPress,
  onToggleFavorite,
  onPlayPronunciation,
  onShare,
  colors,
}: WordDetailHeaderProps) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const actionsFadeAnim = useRef(new Animated.Value(0)).current;
  const actionsSlideAnim = useRef(new Animated.Value(10)).current;

  // Determine if the word is from French to Moussey or Moussey to French
  const isFrenchToMoussey = word.id.startsWith("f2m_");

  // Run animations on mount
  useEffect(() => {
    Animated.stagger(150, [
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(actionsFadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(actionsSlideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  // Derived animations from scroll position
  const headerHeight = 200;
  const headerScale = scrollY.interpolate({
    inputRange: [-100, 0],
    outputRange: [1.2, 1],
    extrapolate: "clamp",
  });
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 2, headerHeight],
    outputRange: [1, 0.8, 0],
    extrapolate: "clamp",
  });
  const titleScale = scrollY.interpolate({
    inputRange: [-50, 0, 100],
    outputRange: [1.1, 1, 0.9],
    extrapolate: "clamp",
  });
  const titleOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 1.5, headerHeight],
    outputRange: [1, 0.6, 0],
    extrapolate: "clamp",
  });

  // Use theme colors or fallback to original colors
  const headerColors: [string, string, ...string[]] =
    Array.isArray(colors?.headerBackground) &&
    colors.headerBackground.length >= 2
      ? (colors.headerBackground as [string, string, ...string[]])
      : ["#00a0a0", "#008080"];

  return (
    <Animated.View
      style={[
        styles.headerContainer,
        {
          opacity: headerOpacity,
          transform: [{ scale: headerScale }],
        },
      ]}
    >
      <LinearGradient colors={headerColors} style={styles.headerGradient}>
        <View style={styles.blurOverlay} />

        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }],
            }}
          >
            <View style={styles.backButtonInner}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </View>
          </Animated.View>
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.wordHeader,
            {
              opacity: titleOpacity,
              transform: [{ scale: titleScale }, { translateY: slideAnim }],
            },
          ]}
        >
          {/* Always show the searched word at the top */}
          <Text style={styles.wordTitle}>
            {isFrenchToMoussey ? word.french : word.moussey}
          </Text>
          {!isFrenchToMoussey && word.pronunciation && (
            <Text style={styles.pronunciation}>{word.pronunciation}</Text>
          )}
        </Animated.View>

        <Animated.View
          style={[
            styles.headerActions,
            {
              opacity: actionsFadeAnim,
              transform: [{ translateY: actionsSlideAnim }],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.headerActionButton}
            onPress={onPlayPronunciation}
            disabled={isPlaying}
            activeOpacity={0.7}
          >
            <View style={styles.actionButtonInner}>
              {isPlaying ? (
                <MaterialIcons name="volume-up" size={24} color="white" />
              ) : (
                <Ionicons name="volume-high-outline" size={24} color="white" />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerActionButton}
            onPress={onToggleFavorite}
            activeOpacity={0.7}
          >
            <View style={styles.actionButtonInner}>
              <Ionicons
                name={isFavorited ? "star" : "star-outline"}
                size={24}
                color={isFavorited ? "#FFD700" : "white"}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.headerActionButton}
            onPress={onShare}
            activeOpacity={0.7}
          >
            <View style={styles.actionButtonInner}>
              <Ionicons name="share-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: 10,
    overflow: "hidden",
  },
  headerGradient: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight || 20,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : StatusBar.currentHeight || 20,
    left: 15,
    zIndex: 10,
  },
  backButtonInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  wordHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  wordTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  pronunciation: {
    fontSize: 18,
    color: "rgba(255,255,255,0.8)",
    fontStyle: "italic",
    marginTop: 5,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  headerActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  headerActionButton: {
    marginHorizontal: 10,
  },
  actionButtonInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
});

export default WordDetailHeader;