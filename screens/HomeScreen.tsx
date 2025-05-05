"use client";

import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Animated,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";
import { getWordOfDay } from "../utils/dictionary";
import { getHistoryItems } from "../utils/historyUtils";

// Import modular components
import HomeHeader from "../components/home/HomeHeader";
import DailyWordCard from "../components/home/DailyWordCard";
import QuickActions from "../components/home/QuickActions";
import RecentActivity from "../components/home/RecentActivity";
import FeatureCategory from "../components/home/FeatureCategory";

// Import the featureCategories from your original file
import { featureCategories } from "../data/home/homeData";

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { points, isFavorite, toggleFavorite } = useAppContext();
  const { colors, isDark } = useTheme();
  const [dailyWords, setDailyWords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // Animation values
  const scrollY = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // No need to define isDark as it's already provided by useTheme()

  useEffect(() => {
    // Fade in the entire screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    loadData();

    // Refresh recent activities when the screen is focused
    const unsubscribe = navigation.addListener("focus", () => {
      loadRecentActivities();
    });

    return unsubscribe;
  }, [navigation]);

  const loadData = async () => {
    await Promise.all([loadDailyWords(), loadRecentActivities()]);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const loadDailyWords = async () => {
    try {
      setLoading(true);
      const words = await getWordOfDay();

      // Convert WordOfDayItem[] to the format expected by your UI
      const formattedWords = words.map((item) => ({
        moussey: item.mousseyWord.word,
        french: item.frenchWord.word,
        pronunciation: "", // Add pronunciation if available
        id: item.mousseyWord.id,
      }));

      setDailyWords(formattedWords);
    } catch (error) {
      console.error("Error loading daily words:", error);
      // Fallback to empty array if there's an error
      setDailyWords([]);
    } finally {
      setLoading(false);
    }
  };

  // Load recent activities from history
  const loadRecentActivities = async () => {
    try {
      const historyItems = await getHistoryItems();

      // Convert history items to the format expected by your UI
      const activities = historyItems.slice(0, 2).map((item) => {
        return {
          id: item.id,
          type: item.type === "dictionary" ? "search" : "translate",
          word: item.word || item.phrase || "",
          time: item.timestamp,
        };
      });

      setRecentActivities(activities);
    } catch (error) {
      console.error("Error loading recent activities:", error);
      // In case of error, set an empty array
      setRecentActivities([]);
    }
  };

  // Handle favorite toggle for word of the day
  const handleFavoriteToggle = () => {
    if (dailyWords.length > 0) {
      toggleFavorite(dailyWords[0].id);
    }
  };

  // Calculate header opacity based on scroll position
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.9],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          opacity: fadeAnim,
        },
      ]}
    >
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header with animated opacity */}
      <Animated.View style={{ opacity: headerOpacity }}>
        <HomeHeader
          colors={colors}
          points={points}
          onSettingsPress={() => navigation.navigate("Settings")}
          onProfilePress={() => navigation.navigate("Profile")}
          isDark={isDark}
        />
      </Animated.View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.primary}
            colors={[colors.primary]}
          />
        }
      >
        {/* Daily Word Card */}
        <DailyWordCard
          colors={colors}
          dailyWords={dailyWords}
          loading={loading}
          isFavorite={isFavorite}
          onFavoriteToggle={handleFavoriteToggle}
          onWordDetailPress={() =>
            navigation.navigate("WordDetail", {
              word: dailyWords[0],
            })
          }
        />

        {/* Quick Actions */}
        <QuickActions
          colors={colors}
          onActionPress={(screen) => navigation.navigate(screen)}
        />

        {/* Recent Activity */}
        <RecentActivity
          colors={colors}
          activities={recentActivities}
          loading={loading}
          isDark={isDark}
          onSeeAllPress={() => navigation.navigate("History")}
          onActivityPress={(activity) => {
            if (activity.type === "search" && activity.word) {
              navigation.navigate("DictionaryScreen", {
                searchQuery: activity.word,
              });
            } else if (activity.type === "translate" && activity.word) {
              navigation.navigate("TranslatorScreen", {
                text: activity.word,
              });
            }
          }}
        />

        {/* Features by Category */}
        {featureCategories.map((category, index) => (
          <FeatureCategory
            key={category.title}
            colors={colors}
            category={category}
            index={index}
            onFeaturePress={(screen) => navigation.navigate(screen)}
          />
        ))}

        {/* Bottom spacing */}
        <View style={{ height: 30 }} />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
