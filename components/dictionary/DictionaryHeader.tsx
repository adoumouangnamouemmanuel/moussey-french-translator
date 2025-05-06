"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import { BlurView } from "expo-blur";

type DictionaryHeaderProps = {
  colors: any;
  searchQuery: string;
  searchInputRef: React.RefObject<TextInput>;
  onSearchChange: (text: string) => void;
  onSearchFocus: () => void;
  onSearchSubmit: () => void;
  onClearSearch: () => void;
  onMicPress: () => void;
  onBackPress: () => void;
};

const { width } = Dimensions.get("window");

const DictionaryHeader = ({
  colors,
  searchQuery,
  searchInputRef,
  onSearchChange,
  onSearchFocus,
  onSearchSubmit,
  onClearSearch,
  onMicPress,
  onBackPress,
}: DictionaryHeaderProps) => {
  // Animation values
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const backButtonAnim = useRef(new Animated.Value(0)).current;
  const micButtonAnim = useRef(new Animated.Value(0)).current;
  const headerHeightAnim = useRef(new Animated.Value(0)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.stagger(150, [
      Animated.spring(headerHeightAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: false,
      }),
      Animated.spring(backButtonAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.spring(searchBarAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.spring(micButtonAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Theme colors
  const headerColors =
    colors?.headerBackground && colors.headerBackground.length >= 2
      ? colors.headerBackground
      : ["#00a0a0", "#008080"];
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";

  // Interpolated header height
  const headerHeight = headerHeightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [70, 90],
  });

  return (
    <Animated.View style={{ height: headerHeight }}>
      <LinearGradient colors={headerColors} style={styles.headerGradient}>
        <View
          style={[styles.blurOverlay, { backgroundColor: "rgba(0,0,0,0.1)" }]}
        />
        <View style={styles.headerContent}>
          <Animated.View
            style={[
              styles.backButtonContainer,
              {
                opacity: backButtonAnim,
                transform: [
                  {
                    translateX: backButtonAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={[
              styles.searchContainerWrapper,
              {
                opacity: searchBarAnim,
                transform: [
                  {
                    translateY: searchBarAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0],
                    }),
                  },
                  {
                    scale: searchBarAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.9, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <View
              style={[styles.searchContainer, { backgroundColor: cardColor }]}
            >
              <Ionicons
                name="search"
                size={20}
                color={inactiveColor}
                style={styles.searchIcon}
              />
              <TextInput
                ref={searchInputRef}
                style={[styles.searchInput, { color: textColor }]}
                placeholder="Rechercher un mot..."
                placeholderTextColor={inactiveColor}
                value={searchQuery}
                onChangeText={onSearchChange}
                onFocus={onSearchFocus}
                returnKeyType="search"
                onSubmitEditing={onSearchSubmit}
              />
              {searchQuery.length > 0 && (
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={onClearSearch}
                >
                  <Ionicons
                    name="close-circle"
                    size={18}
                    color={inactiveColor}
                  />
                </TouchableOpacity>
              )}
            </View>
          </Animated.View>

          <Animated.View
            style={[
              styles.micButtonContainer,
              {
                opacity: micButtonAnim,
                transform: [
                  {
                    translateX: micButtonAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity
              onPress={onMicPress}
              style={styles.micSearchButton}
            >
              <View style={styles.micIconContainer}>
                <Ionicons name="mic-outline" size={22} color="white" />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
  },
  headerContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: Platform.OS === "ios" ? 45 : StatusBar.currentHeight || 10,
  },
  backButtonContainer: {
    marginRight: 8,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
  },
  searchContainerWrapper: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 6,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
    height: "100%",
  },
  clearButton: {
    padding: 8,
  },
  micButtonContainer: {
    marginLeft: 8,
  },
  micSearchButton: {
    padding: 8,
    borderRadius: 20,
  },
  micIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
});

export default DictionaryHeader;
