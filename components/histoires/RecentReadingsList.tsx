"use client";

import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface RecentReading {
  id: string;
  storyId: string;
  title: string;
  date: string;
  lastPosition?: number;
}

interface RecentReadingsListProps {
  colors: any;
  recentReadings: RecentReading[];
  onSelectStory: (id: string) => void;
  onRemoveRecentReading: (id: string) => void;
}

export const RecentReadingsList = ({
  colors,
  recentReadings,
  onSelectStory,
  onRemoveRecentReading,
}: RecentReadingsListProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [itemAnims] = useState(() =>
    recentReadings.map(() => new Animated.Value(0))
  );

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate each item with staggered delay
    itemAnims.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        delay: 100 + index * 70,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  if (recentReadings.length === 0) {
    return (
      <Animated.View
        style={[
          styles.emptyContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <Ionicons name="time" size={50} color={colors.inactive} />
        <Text
          style={[
            styles.emptyText,
            { color: colors.inactive, fontFamily: "Montserrat" },
          ]}
        >
          Aucune lecture récente
        </Text>
        <Text
          style={[
            styles.emptySubtext,
            { color: colors.inactive, fontFamily: "MontserratLight" },
          ]}
        >
          Les histoires que vous lisez apparaîtront ici
        </Text>
      </Animated.View>
    );
  }

  const renderItem = ({ item, index }: { item: RecentReading; index: number }) => {
    const itemAnim = itemAnims[index] || new Animated.Value(1);

    return (
      <Animated.View
        style={{
          opacity: itemAnim,
          transform: [
            {
              translateY: itemAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [30, 0],
              }),
            },
            {
              scale: itemAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.95, 1],
              }),
            },
          ],
        }}
      >
        <View
          style={[
            styles.recentItem,
            {
              backgroundColor: colors.card,
              shadowColor: colors.primary,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.recentContent}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              onSelectStory(item.storyId);
            }}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.recentTitle,
                { color: colors.text, fontFamily: "PlayfairBold" },
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                styles.recentDate,
                { color: colors.inactive, fontFamily: "MontserratLight" },
              ]}
            >
              {new Date(item.date).toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          <View style={styles.recentActions}>
            <TouchableOpacity
              style={styles.recentAction}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                onRemoveRecentReading(item.id);
              }}
            >
              <Ionicons
                name="trash-outline"
                size={20}
                color={colors.inactive}
              />
            </TouchableOpacity>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <FlatList
        data={recentReadings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.recentsList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recentsList: {
    padding: 15,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recentContent: {
    flex: 1,
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  recentDate: {
    fontSize: 12,
  },
  recentActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentAction: {
    padding: 10,
    marginRight: 5,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  emptyText: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
  emptySubtext: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
});

export default RecentReadingsList;
