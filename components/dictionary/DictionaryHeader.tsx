"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface DictionaryHeaderProps {
  colors: any;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchInputRef: any;
  onMicPress: () => void;
  onFocus: () => void;
  onSubmitEditing: () => void;
  onGoBack: () => void;
}

export const DictionaryHeader = ({
  colors,
  searchQuery,
  setSearchQuery,
  searchInputRef,
  onMicPress,
  onFocus,
  onSubmitEditing,
  onGoBack,
}: DictionaryHeaderProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(-10));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Use theme colors or fallback to original colors
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
      <Animated.View
        style={[
          styles.headerContent,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={[styles.searchContainer, { backgroundColor: cardColor }]}>
          <TextInput
            ref={searchInputRef}
            style={[
              styles.searchInput,
              { color: textColor, fontFamily: "Montserrat" },
            ]}
            placeholder="Rechercher..."
            placeholderTextColor={inactiveColor}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onFocus={onFocus}
            returnKeyType="search"
            onSubmitEditing={onSubmitEditing}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSearchQuery("")}
            >
              <Ionicons name="close-circle" size={18} color={inactiveColor} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity onPress={onMicPress} style={styles.micSearchButton}>
          <Ionicons name="mic-outline" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    padding: 5,
    marginRight: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  searchContainer: {
    flex: 1,
    borderRadius: 12,
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
  },
  clearButton: {
    padding: 8,
  },
  micSearchButton: {
    padding: 5,
    marginLeft: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});

export default DictionaryHeader;