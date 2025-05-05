"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";

interface HistoiresHeaderProps {
  colors: any;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showAdvancedSearch: boolean;
  toggleAdvancedSearch: () => void;
  advancedSearchQuery: string;
  setAdvancedSearchQuery: (query: string) => void;
  searchInContent: () => void;
  onSettingsPress: () => void;
  isDark: boolean;
  searchBarAnim: Animated.Value;
}

export const HistoiresHeader = ({
  colors,
  searchQuery,
  setSearchQuery,
  showAdvancedSearch,
  toggleAdvancedSearch,
  advancedSearchQuery,
  setAdvancedSearchQuery,
  searchInContent,
  onSettingsPress,
  isDark,
  searchBarAnim,
}: HistoiresHeaderProps) => {
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

  return (
    <LinearGradient
      colors={colors.headerBackground as [string, string]}
      style={styles.header}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <BlurView
        intensity={20}
        tint={isDark ? "dark" : "light"}
        style={styles.blurOverlay}
      />

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
          Histoires Moussey
        </Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={toggleAdvancedSearch}
            style={styles.headerAction}
          >
            <Ionicons
              name={showAdvancedSearch ? "close" : "search"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSettingsPress}
            style={styles.headerAction}
          >
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {/* Basic Search bar - for story titles and categories */}
      {!showAdvancedSearch && (
        <Animated.View
          style={[
            styles.searchContainer,
            {
              backgroundColor: "rgba(255,255,255,0.2)",
              opacity: fadeAnim,
              transform: [{ translateY: translateYAnim }],
            },
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
            placeholder="Rechercher une histoire..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="white" />
            </TouchableOpacity>
          )}
        </Animated.View>
      )}

      {/* Advanced Search bar - for searching within story content */}
      <Animated.View
        style={[
          styles.advancedSearchContainer,
          {
            height: searchBarAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100],
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
            styles.advancedSearchInputContainer,
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
            placeholder="Rechercher dans le contenu des histoires..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            value={advancedSearchQuery}
            onChangeText={setAdvancedSearchQuery}
            onSubmitEditing={searchInContent}
          />
          {advancedSearchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setAdvancedSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={[
            styles.searchButton,
            { backgroundColor: "rgba(255,255,255,0.3)" },
          ]}
          onPress={searchInContent}
        >
          <Text
            style={[styles.searchButtonText, { fontFamily: "MontserratBold" }]}
          >
            Rechercher
          </Text>
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
    overflow: "hidden",
    position: "relative",
    zIndex: 10,
  },
  blurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "white",
    fontSize: 16,
  },
  advancedSearchContainer: {
    overflow: "hidden",
  },
  advancedSearchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  searchButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default HistoiresHeader;
