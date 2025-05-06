"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

interface BibleHeaderProps {
  colors: any;
  showSearch: boolean;
  toggleSearch: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchBarAnim: Animated.Value;
}

export const BibleHeader = ({
  colors,
  showSearch,
  toggleSearch,
  searchQuery,
  setSearchQuery,
  searchBarAnim,
}: BibleHeaderProps) => {
  // Create animated values for the header content
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(-10));

  // Run the animation when the component mounts
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

  return (
    <LinearGradient
      colors={colors.headerBackground as [string, string]}
      style={styles.header}
    >
      <Animated.View
        style={[
          styles.headerContent,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <Text style={[styles.headerTitle, { fontFamily: "PlayfairBold" }]}>
          Bible
        </Text>
        <TouchableOpacity onPress={toggleSearch}>
          <Ionicons
            name={showSearch ? "close" : "search"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </Animated.View>

      {/* Search bar */}
      <Animated.View
        style={[
          styles.searchContainer,
          {
            height: searchBarAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50],
            }),
            opacity: searchBarAnim,
            marginTop: searchBarAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 10],
            }),
          },
        ]}
      >
        <View
          style={[
            styles.searchInputContainer,
            { backgroundColor: "rgba(255,255,255,0.2)" },
          ]}
        >
          <Ionicons
            name="search"
            size={20}
            color="white"
            style={styles.searchIcon}
          />
          <TextInput
            style={[styles.searchInput, { fontFamily: "Montserrat" }]}
            placeholder="Rechercher un livre..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    overflow: "hidden",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "white",
  },
});

export default BibleHeader;
