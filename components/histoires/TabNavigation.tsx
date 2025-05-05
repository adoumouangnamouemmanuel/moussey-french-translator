"use client";

import * as Haptics from "expo-haptics";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type TabType = "stories" | "bookmarks" | "recent";

interface TabNavigationProps {
  colors: any;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const TabNavigation = ({
  colors,
  activeTab,
  setActiveTab,
}: TabNavigationProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(10));

  // Animated indicator
  const indicatorPosition = useRef(new Animated.Value(0)).current;
  const indicatorWidth = useRef(new Animated.Value(0)).current;

  // References to measure tab widths - using proper type
  const storiesRef = useRef<any>(null);
  const bookmarksRef = useRef<any>(null);
  const recentRef = useRef<any>(null);

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

  useEffect(() => {
    // Animate the indicator to the active tab
    let currentTabRef = null;

    if (activeTab === "stories") currentTabRef = storiesRef;
    else if (activeTab === "bookmarks") currentTabRef = bookmarksRef;
    else if (activeTab === "recent") currentTabRef = recentRef;

    if (currentTabRef && currentTabRef.current) {
      currentTabRef.current.measure(( width: number, pageX: number) => {
        Animated.parallel([
          Animated.spring(indicatorPosition, {
            toValue: pageX,
            friction: 8,
            tension: 60,
            useNativeDriver: false,
          }),
          Animated.spring(indicatorWidth, {
            toValue: width,
            friction: 8,
            tension: 60,
            useNativeDriver: false,
          }),
        ]).start();
      });
    }
  }, [activeTab]);

  const handleTabPress = (tab: TabType) => {
    if (tab !== activeTab) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setActiveTab(tab);
    }
  };

  return (
    <Animated.View
      style={[
        styles.tabsContainer,
        {
          backgroundColor: colors.card,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <TouchableOpacity
        ref={storiesRef}
        style={styles.tab}
        onPress={() => handleTabPress("stories")}
      >
        <Text
          style={[
            styles.tabText,
            {
              color: activeTab === "stories" ? colors.primary : colors.inactive,
              fontFamily:
                activeTab === "stories" ? "MontserratBold" : "Montserrat",
            },
          ]}
        >
          Histoires
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        ref={bookmarksRef}
        style={styles.tab}
        onPress={() => handleTabPress("bookmarks")}
      >
        <Text
          style={[
            styles.tabText,
            {
              color:
                activeTab === "bookmarks" ? colors.primary : colors.inactive,
              fontFamily:
                activeTab === "bookmarks" ? "MontserratBold" : "Montserrat",
            },
          ]}
        >
          Signets
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        ref={recentRef}
        style={styles.tab}
        onPress={() => handleTabPress("recent")}
      >
        <Text
          style={[
            styles.tabText,
            {
              color: activeTab === "recent" ? colors.primary : colors.inactive,
              fontFamily:
                activeTab === "recent" ? "MontserratBold" : "Montserrat",
            },
          ]}
        >
          Récents
        </Text>
      </TouchableOpacity>

      {/* Animated indicator */}
      <Animated.View
        style={[
          styles.indicator,
          {
            backgroundColor: colors.primary,
            left: indicatorPosition,
            width: indicatorWidth,
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    borderRadius: 12,
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 15,
    position: "relative",
    zIndex: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
});

export default TabNavigation;
