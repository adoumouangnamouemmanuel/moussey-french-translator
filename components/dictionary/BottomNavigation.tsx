"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type BottomNavigationProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  colors: any;
};

type TabItem = {
  id: string;
  label: string;
  activeIcon:
    | "star"
    | "star-outline"
    | "add-circle"
    | "add-circle-outline"
    | "mic"
    | "mic-outline"
    | "volume-high"
    | "volume-medium-outline"
    | "search"
    | "search-outline"
    | "menu"
    | "menu-outline";
  inactiveIcon:
    | "star"
    | "star-outline"
    | "add-circle"
    | "add-circle-outline"
    | "mic"
    | "mic-outline"
    | "volume-high"
    | "volume-medium-outline"
    | "search"
    | "search-outline"
    | "menu"
    | "menu-outline";
};

const tabs: TabItem[] = [
  {
    id: "favorites",
    label: "Favoris",
    activeIcon: "star",
    inactiveIcon: "star-outline",
  },
  {
    id: "add",
    label: "Ajouter",
    activeIcon: "add-circle",
    inactiveIcon: "add-circle-outline",
  },
  { id: "mic", label: "Vocal", activeIcon: "mic", inactiveIcon: "mic-outline" },
  {
    id: "audio",
    label: "Audio",
    activeIcon: "volume-high",
    inactiveIcon: "volume-medium-outline",
  },
  {
    id: "search",
    label: "Recherche",
    activeIcon: "search",
    inactiveIcon: "search-outline",
  },
  {
    id: "more",
    label: "Plus",
    activeIcon: "menu",
    inactiveIcon: "menu-outline",
  },
];

const BottomNavigation = ({
  activeTab,
  onTabChange,
  colors,
}: BottomNavigationProps) => {
  // Animation references for each tab
  const tabAnimations = React.useRef<{ [key: string]: Animated.Value }>({});

  // Initialize animations if not already done
  React.useEffect(() => {
    tabs.forEach((tab) => {
      if (!tabAnimations.current[tab.id]) {
        tabAnimations.current[tab.id] = new Animated.Value(
          tab.id === activeTab ? 1 : 0
        );
      }
    });
  }, []);

  // Animate tab changes
  React.useEffect(() => {
    tabs.forEach((tab) => {
      Animated.spring(tabAnimations.current[tab.id], {
        toValue: tab.id === activeTab ? 1 : 0,
        friction: 8,
        tension: 50,
        useNativeDriver: true,
      }).start();
    });
  }, [activeTab]);

  // Theme colors
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";

  // Gradient colors for active icons
  const iconGradientColors = colors?.headerBackground || ["#00a0a0", "#008080"];

  return (
    <View
      style={[
        styles.bottomNav,
        { backgroundColor: cardColor, borderTopColor: borderColor },
      ]}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const scale =
          tabAnimations.current[tab.id]?.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.15],
          }) || new Animated.Value(1);

        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.navButton}
            onPress={() => onTabChange(tab.id)}
            activeOpacity={0.7}
          >
            <Animated.View
              style={[styles.navIconContainer, { transform: [{ scale }] }]}
            >
              {isActive ? (
                <LinearGradient
                  colors={iconGradientColors}
                  style={styles.activeIconGradient}
                >
                  <Ionicons name={tab.activeIcon} size={22} color="white" />
                </LinearGradient>
              ) : (
                <Ionicons
                  name={tab.inactiveIcon}
                  size={24}
                  color={inactiveColor}
                />
              )}

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
                },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
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
    height: 32,
  },
  activeIconGradient: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
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
    marginTop: 4,
  },
});

export default BottomNavigation;
