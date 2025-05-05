"use client";

import type React from "react";

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

interface Story {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  duration: string;
  level: string;
  hasAudio: boolean;
  categories: string[];
}

interface StoryListProps {
  colors: any;
  stories: Story[];
  onSelectStory: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  renderStoryIcon: (imageUrl: string) => React.ReactNode;
}

export const StoryList = ({
  colors,
  stories,
  onSelectStory,
  isBookmarked,
  renderStoryIcon,
}: StoryListProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [itemAnims] = useState(() => stories.map(() => new Animated.Value(0)));

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

  if (stories.length === 0) {
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
        <Ionicons name="book" size={50} color={colors.inactive} />
        <Text
          style={[
            styles.emptyText,
            { color: colors.inactive, fontFamily: "Montserrat" },
          ]}
        >
          Aucune histoire trouvée
        </Text>
      </Animated.View>
    );
  }

  const renderItem = ({ item, index }: { item: Story; index: number }) => {
    const itemAnim = itemAnims[index] || new Animated.Value(1);

    return (
      <Animated.View
        style={{
          opacity: itemAnim,
          transform: [
            {
              translateY: itemAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
            {
              scale: itemAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
          ],
        }}
      >
        <TouchableOpacity
          style={[
            styles.storyItem,
            {
              backgroundColor: colors.card,
              shadowColor: colors.primary,
            },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onSelectStory(item.id);
          }}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.storyIconContainer,
              { backgroundColor: `${colors.primary}20` },
            ]}
          >
            {renderStoryIcon(item.imageUrl)}
          </View>
          <View style={styles.storyItemContent}>
            <Text
              style={[
                styles.storyItemTitle,
                { color: colors.text, fontFamily: "PlayfairBold" },
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                styles.storyItemDescription,
                { color: colors.inactive, fontFamily: "Montserrat" },
              ]}
              numberOfLines={2}
            >
              {item.shortDescription}
            </Text>
            <View style={styles.storyItemFooter}>
              <View style={styles.storyItemMeta}>
                <View
                  style={[
                    styles.levelBadge,
                    { backgroundColor: `${colors.primary}20` },
                  ]}
                >
                  <Text
                    style={[
                      styles.levelText,
                      { color: colors.primary, fontFamily: "MontserratBold" },
                    ]}
                  >
                    {item.level}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.durationText,
                    { color: colors.inactive, fontFamily: "MontserratLight" },
                  ]}
                >
                  {item.duration}
                </Text>
              </View>
              <View style={styles.storyItemIcons}>
                {isBookmarked(item.id) && (
                  <Ionicons
                    name="bookmark"
                    size={18}
                    color={colors.primary}
                    style={styles.storyItemIcon}
                  />
                )}
                {item.hasAudio && (
                  <Ionicons
                    name="volume-medium"
                    size={18}
                    color={colors.primary}
                    style={styles.storyItemIcon}
                  />
                )}
              </View>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.inactive} />
        </TouchableOpacity>
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
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.storiesList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storiesList: {
    padding: 15,
    paddingTop: 5,
  },
  storyItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  storyIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  storyItemContent: {
    flex: 1,
  },
  storyItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storyItemDescription: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  storyItemFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  storyItemMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  storyItemIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  storyItemIcon: {
    marginLeft: 8,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 10,
  },
  levelText: {
    fontSize: 12,
    fontWeight: "500",
  },
  durationText: {
    fontSize: 12,
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
});

export default StoryList;
