"use client";

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type BottomNavigationProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  colors: any;
};

const BottomNavigation = ({
  activeTab,
  onTabChange,
  colors,
}: BottomNavigationProps) => {
  // Theme colors
  const cardColor = colors?.card || "white";
  const borderColor = colors?.border || "#e0e0e0";
  const primaryColor = colors?.primary || "#008080";
  const inactiveColor = colors?.inactive || "#999";

  // Animation refs for each tab
  const searchScale = React.useRef(
    new Animated.Value(activeTab === "search" ? 1.1 : 1)
  ).current;
  const favoritesScale = React.useRef(
    new Animated.Value(activeTab === "favorites" ? 1.1 : 1)
  ).current;
  const addScale = React.useRef(
    new Animated.Value(activeTab === "add" ? 1.1 : 1)
  ).current;
  const micScale = React.useRef(
    new Animated.Value(activeTab === "mic" ? 1.1 : 1)
  ).current;
  const audioScale = React.useRef(
    new Animated.Value(activeTab === "audio" ? 1.1 : 1)
  ).current;
  const moreScale = React.useRef(
    new Animated.Value(activeTab === "more" ? 1.1 : 1)
  ).current;

  // Handle tab change with animation
  const handleTabChange = (tab: string) => {
    // Reset all animations
    Animated.parallel([
      Animated.spring(searchScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(favoritesScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(addScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(micScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(audioScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(moreScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate the selected tab
    const scaleRef =
      tab === "search"
        ? searchScale
        : tab === "favorites"
        ? favoritesScale
        : tab === "add"
        ? addScale
        : tab === "mic"
        ? micScale
        : tab === "audio"
        ? audioScale
        : moreScale;

    Animated.spring(scaleRef, {
      toValue: 1.1,
      friction: 5,
      useNativeDriver: true,
    }).start();

    onTabChange(tab);
  };

  // Render a tab button with animation
  const renderTabButton = (
    tabName: string,
    activeIcon: keyof typeof Ionicons.glyphMap,
    inactiveIcon: keyof typeof Ionicons.glyphMap,
    label: string,
    scaleAnim: Animated.Value
  ) => {
    const isActive = activeTab === tabName;

    return (
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => handleTabChange(tabName)}
      >
        <Animated.View
          style={[
            styles.navIconContainer,
            { transform: [{ scale: scaleAnim }] },
          ]}
        >
          <Ionicons
            name={isActive ? activeIcon : inactiveIcon}
            size={24}
            color={isActive ? primaryColor : inactiveColor}
            style={isActive ? styles.activeIcon : styles.inactiveIcon}
          />
          {isActive && (
            <View
              style={[
                styles.activeIndicator,
                { backgroundColor: primaryColor },
              ]}
            />
          )}
        </Animated.View>
        <Text
          style={[
            styles.navLabel,
            {
              color: isActive ? primaryColor : inactiveColor,
              fontWeight: isActive ? "600" : "400",
              opacity: isActive ? 1 : 0.8,
            },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.bottomNav,
        { backgroundColor: cardColor, borderTopColor: borderColor },
      ]}
    >
      {renderTabButton(
        "favorites",
        "star",
        "star-outline",
        "Favoris",
        favoritesScale
      )}
      {renderTabButton(
        "add",
        "add-circle",
        "add-circle-outline",
        "Ajouter",
        addScale
      )}
      {renderTabButton("mic", "mic", "mic-outline", "Vocal", micScale)}
      {renderTabButton(
        "audio",
        "volume-high",
        "volume-medium-outline",
        "Audio",
        audioScale
      )}
      {renderTabButton(
        "search",
        "search",
        "search-outline",
        "Recherche",
        searchScale
      )}
      {renderTabButton("more", "menu", "menu-outline", "Plus", moreScale)}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  navButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  navIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 28,
  },
  activeIcon: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  inactiveIcon: {
    opacity: 0.7,
  },
  activeIndicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#008080",
    marginTop: 4,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default BottomNavigation;