"use client";

import { useRef, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type BottomNavigationProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  colors: any;
};

type TabItem = {
  id: string;
  label: string;
  activeIcon:
    | "heart"
    | "heart-outline"
    | "add-circle"
    | "add-circle-outline"
    | "headset"
    | "headset-outline"
    | "search"
    | "search-outline"
    | "grid"
    | "grid-outline";
  inactiveIcon:
    | "heart"
    | "heart-outline"
    | "add-circle"
    | "add-circle-outline"
    | "headset"
    | "headset-outline"
    | "search"
    | "search-outline"
    | "grid"
    | "grid-outline";
};

// Removed the "mic" tab as requested
const tabs: TabItem[] = [
  {
    id: "favorites",
    label: "Favoris",
    activeIcon: "heart",
    inactiveIcon: "heart-outline",
  },
  {
    id: "add",
    label: "Ajouter",
    activeIcon: "add-circle",
    inactiveIcon: "add-circle-outline",
  },
  {
    id: "audio",
    label: "Audio",
    activeIcon: "headset",
    inactiveIcon: "headset-outline",
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
    activeIcon: "grid",
    inactiveIcon: "grid-outline",
  },
];

const BottomNavigation = ({
  activeTab,
  onTabChange,
  colors,
}: BottomNavigationProps) => {
  // Theme colors
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";

  // Gradient colors for active icons
  const iconGradientColors = colors?.headerBackground || ["#00a0a0", "#008080"];

  // Create a single animation value for the container
  const containerAnim = useRef(new Animated.Value(0)).current;

  // Create animation values for each tab
  const tabAnimations = useRef<{ [key: string]: Animated.Value }>({}).current;

  // Initialize animations on mount
  useEffect(() => {
    // Initialize tab animations if not already done
    tabs.forEach((tab) => {
      if (!tabAnimations[tab.id]) {
        tabAnimations[tab.id] = new Animated.Value(
          tab.id === activeTab ? 1 : 0
        );
      }
    });

    // Animate the container appearance
    Animated.spring(containerAnim, {
      toValue: 1,
      tension: 50,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  // Animate tab changes
  useEffect(() => {
    // Make sure all tab animations are initialized
    tabs.forEach((tab) => {
      if (!tabAnimations[tab.id]) {
        tabAnimations[tab.id] = new Animated.Value(
          tab.id === activeTab ? 1 : 0
        );
      }

      // Animate to the appropriate value
      Animated.spring(tabAnimations[tab.id], {
        toValue: tab.id === activeTab ? 1 : 0,
        friction: 6,
        tension: 60,
        useNativeDriver: true,
      }).start();
    });
  }, [activeTab]);

  return (
    <Animated.View
      style={[
        styles.bottomNav,
        {
          backgroundColor: cardColor,
          borderTopColor: borderColor,
          transform: [
            {
              translateY: containerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
          opacity: containerAnim,
        },
      ]}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const animValue =
          tabAnimations[tab.id] || new Animated.Value(isActive ? 1 : 0);

        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.navButton}
            onPress={() => onTabChange(tab.id)}
            activeOpacity={0.7}
          >
            <Animated.View
              style={[
                styles.navIconContainer,
                {
                  transform: [
                    {
                      scale: animValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.15],
                      }),
                    },
                  ],
                  opacity: animValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.7, 1],
                  }),
                },
              ]}
            >
              {isActive ? (
                <LinearGradient
                  colors={iconGradientColors}
                  style={styles.activeIconGradient}
                >
                  <Ionicons name={tab.activeIcon} size={22} color="white" />
                </LinearGradient>
              ) : (
                <View style={styles.inactiveIconContainer}>
                  <Ionicons
                    name={tab.inactiveIcon}
                    size={24}
                    color={inactiveColor}
                    style={styles.inactiveIcon}
                  />
                </View>
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
            <Animated.Text
              style={[
                styles.navLabel,
                {
                  color: isActive ? primaryColor : inactiveColor,
                  fontWeight: isActive ? "600" : "400",
                  opacity: animValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.7, 1],
                  }),
                },
              ]}
            >
              {tab.label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    height: 36,
  },
  activeIconGradient: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  inactiveIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveIcon: {
    opacity: 0.8,
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
    textAlign: "center",
  },
});

export default BottomNavigation;
