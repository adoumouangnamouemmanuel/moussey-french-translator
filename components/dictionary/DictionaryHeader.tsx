"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
  // Animation for search bar
  const searchBarAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(searchBarAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  // Theme colors
  const headerColors: [string, string, ...string[]] = (
    colors?.headerBackground?.length >= 2
      ? colors.headerBackground
      : ["#00a0a0", "#008080"]
  ) as [string, string, ...string[]];
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";

  return (
    <LinearGradient colors={headerColors} style={styles.header}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.searchContainerWrapper,
          {
            transform: [
              {
                translateY: searchBarAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [10, 0],
                }),
              },
              { scale: searchBarAnim },
            ],
            opacity: searchBarAnim,
          },
        ]}
      >
        <View style={[styles.searchContainer, { backgroundColor: cardColor }]}>
          <TextInput
            ref={searchInputRef}
            style={[styles.searchInput, { color: textColor }]}
            placeholder="Rechercher..."
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
              <Ionicons name="close-circle" size={18} color={inactiveColor} />
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>

      <TouchableOpacity onPress={onMicPress} style={styles.micSearchButton}>
        <Animated.View
          style={{
            transform: [{ scale: searchBarAnim }],
            opacity: searchBarAnim,
          }}
        >
          <Ionicons name="mic-outline" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: 40, // Account for status bar
  },
  backButton: {
    padding: 5,
    marginRight: 5,
  },
  searchContainerWrapper: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  clearButton: {
    padding: 8,
  },
  micSearchButton: {
    padding: 10,
    marginLeft: 5,
  },
});

export default DictionaryHeader;
