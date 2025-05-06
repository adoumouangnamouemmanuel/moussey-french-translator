"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

type TabsProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  colors: any;
  delay?: number;
};

const TabsSection = ({
  tabs,
  activeTab,
  onTabChange,
  colors,
  delay = 0,
}: TabsProps) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const [tabIndicatorWidth, setTabIndicatorWidth] = useState(0);
  const [tabIndicatorPosition, setTabIndicatorPosition] = useState(0);
  const tabPositions = useRef<{ [key: string]: number }>({}).current;
  const tabWidths = useRef<{ [key: string]: number }>({}).current;
  const indicatorAnim = useRef(new Animated.Value(0)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Animate tab indicator when active tab changes
  useEffect(() => {
    if (
      tabPositions[activeTab] !== undefined &&
      tabWidths[activeTab] !== undefined
    ) {
      setTabIndicatorPosition(tabPositions[activeTab]);
      setTabIndicatorWidth(tabWidths[activeTab]);

      Animated.spring(indicatorAnim, {
        toValue: tabPositions[activeTab],
        friction: 8,
        tension: 60,
        useNativeDriver: true,
      }).start();
    }
  }, [activeTab, tabPositions, tabWidths]);

  // Store tab position and width when measured
  const onTabLayout = (tab: string, event: any) => {
    const { x, width } = event.nativeEvent.layout;
    tabPositions[tab] = x;
    tabWidths[tab] = width;

    if (tab === activeTab) {
      setTabIndicatorPosition(x);
      setTabIndicatorWidth(width);
      indicatorAnim.setValue(x);
    }
  };

  // Use theme colors or fallback to original colors
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#666";
  const primaryColor = colors?.primary || "#008080";

  return (
    <Animated.View
      style={[
        styles.tabsContainer,
        {
          backgroundColor: cardColor,
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={styles.tab}
          onPress={() => onTabChange(tab)}
          onLayout={(event) => onTabLayout(tab, event)}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.tabText,
              { color: inactiveColor },
              activeTab === tab && [
                styles.activeTabText,
                { color: primaryColor },
              ],
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Animated indicator */}
      <Animated.View
        style={[
          styles.tabIndicator,
          {
            width: tabIndicatorWidth,
            backgroundColor: primaryColor,
            transform: [{ translateX: indicatorAnim }],
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    height: 50,
    position: "relative",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    fontWeight: "600",
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
});

export default TabsSection;