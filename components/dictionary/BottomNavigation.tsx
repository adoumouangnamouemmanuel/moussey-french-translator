"use client";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface BottomNavigationProps {
  colors: any;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BottomNavigation = ({
  colors,
  activeTab,
  setActiveTab,
}: BottomNavigationProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));

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

  const cardColor = colors?.card || "white";
  const primaryColor = colors?.primary || "#008080";
  const inactiveColor = colors?.inactive || "#999";
  const borderColor = colors?.border || "#e0e0e0";

  const tabs: Array<{
    id: string;
    icon: React.ComponentProps<typeof Ionicons>["name"];
    activeIcon: React.ComponentProps<typeof Ionicons>["name"];
    label: string;
  }> = [
    { id: "favorites", icon: "star", activeIcon: "star", label: "Favoris" },
    {
      id: "add",
      icon: "add-circle-outline",
      activeIcon: "add-circle",
      label: "Ajouter",
    },
    { id: "mic", icon: "mic-outline", activeIcon: "mic", label: "Vocal" },
    {
      id: "audio",
      icon: "volume-medium-outline",
      activeIcon: "volume-high",
      label: "Audio",
    },
    {
      id: "search",
      icon: "search-outline",
      activeIcon: "search",
      label: "Recherche",
    },
    { id: "more", icon: "menu-outline", activeIcon: "menu", label: "Plus" },
  ];

  return (
    <Animated.View
      style={[
        styles.bottomNav,
        {
          backgroundColor: cardColor,
          borderTopColor: borderColor,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.navButton}
          onPress={() => setActiveTab(tab.id)}
        >
          <View style={styles.navIconContainer}>
            <Ionicons
              name={activeTab === tab.id ? tab.activeIcon : tab.icon}
              size={24}
              color={activeTab === tab.id ? primaryColor : inactiveColor}
            />
            {activeTab === tab.id && (
              <View
                style={[
                  styles.activeIndicator,
                  { backgroundColor: primaryColor },
                ]}
              />
            )}
          </View>
          <Text
            style={[
              styles.navLabel,
              {
                color: activeTab === tab.id ? primaryColor : inactiveColor,
                fontFamily:
                  activeTab === tab.id ? "MontserratBold" : "Montserrat",
              },
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    borderTopWidth: 1,
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
  },
  activeIndicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginTop: 4,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default BottomNavigation;