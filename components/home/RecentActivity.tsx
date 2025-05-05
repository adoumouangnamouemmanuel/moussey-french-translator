"use client";

import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomSkeleton from "../CustomSkeleton";

interface RecentActivityProps {
  colors: any;
  activities: Array<{
    id: string;
    type: string;
    word: string;
    time: string;
    score?: string;
    lesson?: string;
  }>;
  loading: boolean;
  isDark: boolean;
  onSeeAllPress: () => void;
  onActivityPress: (activity: any) => void;
}

export const RecentActivity = ({
  colors,
  activities,
  loading,
  isDark,
  onSeeAllPress,
  onActivityPress,
}: RecentActivityProps) => {
  // Create animated values for the animations
  const [containerOpacity] = useState(new Animated.Value(0));
  const [containerTranslateY] = useState(new Animated.Value(20));
  const [itemsOpacity] = useState(new Animated.Value(0));
  const [itemsTranslateY] = useState(new Animated.Value(10));

  // Run the animation when the component mounts
  useEffect(() => {
    // Container animation
    Animated.parallel([
      Animated.timing(containerOpacity, {
        toValue: 1,
        duration: 400,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.timing(containerTranslateY, {
        toValue: 0,
        duration: 400,
        delay: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Items animation
    Animated.parallel([
      Animated.timing(itemsOpacity, {
        toValue: 1,
        duration: 500,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(itemsTranslateY, {
        toValue: 0,
        duration: 500,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.sectionContainer,
        {
          opacity: containerOpacity,
          transform: [{ translateY: containerTranslateY }],
        },
      ]}
    >
      <View style={styles.sectionHeader}>
        <View style={styles.titleContainer}>
          <Ionicons
            name="time"
            size={18}
            color={colors.primary}
            style={styles.titleIcon}
          />
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text, fontFamily: "PlayfairBold" },
            ]}
          >
            Activité Récente
          </Text>
        </View>
        <TouchableOpacity
          style={styles.seeAllButton}
          onPress={() => {
            onSeeAllPress();
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
        >
          <Text
            style={[
              styles.seeAllText,
              { color: colors.primary, fontFamily: "MontserratBold" },
            ]}
          >
            Voir tout
          </Text>
          <Ionicons name="chevron-forward" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.skeletonContainer}>
          {Array.from({ length: 2 }).map((_, index) => (
            <View key={index} style={styles.skeletonItem}>
              <CustomSkeleton
                width={40}
                height={40}
                colorMode={isDark ? "dark" : "light"}
                radius={20}
                show={true}
              />
              <View style={styles.skeletonContent}>
                <CustomSkeleton
                  width="80%"
                  height={16}
                  colorMode={isDark ? "dark" : "light"}
                  radius={4}
                  show={true}
                />
                <CustomSkeleton
                  width="40%"
                  height={12}
                  colorMode={isDark ? "dark" : "light"}
                  radius={4}
                  show={true}
                />
              </View>
            </View>
          ))}
        </View>
      ) : activities.length > 0 ? (
        <Animated.View
          style={{
            opacity: itemsOpacity,
            transform: [{ translateY: itemsTranslateY }],
          }}
        >
          {activities.map((activity, index) => (
            <TouchableOpacity
              key={activity.id}
              style={[
                styles.activityItem,
                {
                  backgroundColor: colors.card,
                  shadowColor: colors.primary,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                },
              ]}
              onPress={() => {
                onActivityPress(activity);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            >
              <View
                style={[
                  styles.activityIconContainer,
                  { backgroundColor: colors.primary },
                ]}
              >
                <Ionicons
                  name={
                    activity.type === "search"
                      ? "search"
                      : activity.type === "practice"
                      ? "trophy"
                      : "language"
                  }
                  size={20}
                  color="white"
                  style={styles.activityIcon}
                />
              </View>
              <View style={styles.activityContent}>
                {activity.type === "search" ? (
                  <Text
                    style={[
                      styles.activityText,
                      { color: colors.text, fontFamily: "Montserrat" },
                    ]}
                  >
                    Vous avez recherché "
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary, fontFamily: "MontserratBold" },
                      ]}
                    >
                      {activity.word}
                    </Text>
                    "
                  </Text>
                ) : activity.type === "practice" ? (
                  <Text
                    style={[
                      styles.activityText,
                      { color: colors.text, fontFamily: "Montserrat" },
                    ]}
                  >
                    Vous avez obtenu{" "}
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary, fontFamily: "MontserratBold" },
                      ]}
                    >
                      {activity.score}
                    </Text>{" "}
                    dans{" "}
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary, fontFamily: "MontserratBold" },
                      ]}
                    >
                      {activity.lesson}
                    </Text>
                  </Text>
                ) : (
                  <Text
                    style={[
                      styles.activityText,
                      { color: colors.text, fontFamily: "Montserrat" },
                    ]}
                  >
                    Vous avez traduit "
                    <Text
                      style={[
                        styles.activityHighlight,
                        { color: colors.primary, fontFamily: "MontserratBold" },
                      ]}
                    >
                      {activity.word}
                    </Text>
                    "
                  </Text>
                )}
                <Text
                  style={[
                    styles.activityTime,
                    { color: colors.inactive, fontFamily: "MontserratLight" },
                  ]}
                >
                  {activity.time}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>
      ) : (
        <Animated.View
          style={[
            styles.activityItem,
            {
              backgroundColor: colors.card,
              justifyContent: "center",
              opacity: itemsOpacity,
              transform: [{ translateY: itemsTranslateY }],
            },
          ]}
        >
          <Text
            style={[
              styles.activityText,
              {
                color: colors.inactive,
                fontFamily: "Montserrat",
                textAlign: "center",
              },
            ]}
          >
            Aucune activité récente
          </Text>
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleIcon: {
    marginRight: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    marginRight: 2,
  },
  skeletonContainer: {
    marginTop: 5,
  },
  skeletonItem: {
    flexDirection: "row",
    marginBottom: 12,
    padding: 5,
  },
  skeletonContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
    height: 40,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  activityIcon: {},
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    lineHeight: 20,
  },
  activityHighlight: {
    fontWeight: "bold",
  },
  activityTime: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default RecentActivity;
