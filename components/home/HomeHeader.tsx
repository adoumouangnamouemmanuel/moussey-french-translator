"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BlurView } from "expo-blur";

interface HomeHeaderProps {
  colors: any;
  points: number;
  onSettingsPress: () => void;
  onProfilePress: () => void;
  isDark: boolean;
}

export const HomeHeader = ({
  colors,
  points,
  onSettingsPress,
  onProfilePress,
  isDark,
}: HomeHeaderProps) => {
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
    <View style={styles.headerContainer}>
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
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={onProfilePress}
            >
              <View
                style={[
                  styles.profileAvatar,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Text style={styles.profileInitial}>M</Text>
              </View>
            </TouchableOpacity>
            <Text style={[styles.appName, { fontFamily: "PlayfairBold" }]}>
              Moussey-Français
            </Text>
          </View>

          <View style={styles.headerRight}>
            <View style={styles.pointsContainer}>
              <Ionicons name="star" size={20} color="#FFD700" />
              <Text
                style={[styles.pointsText, { fontFamily: "MontserratBold" }]}
              >
                {points}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={onSettingsPress}
            >
              <Ionicons name="settings-outline" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative",
    zIndex: 10,
    elevation: 10,
  },
  header: {
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
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
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileButton: {
    marginRight: 12,
  },
  profileAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  profileInitial: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  appName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  pointsText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
  },
  settingsButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
});

export default HomeHeader;
