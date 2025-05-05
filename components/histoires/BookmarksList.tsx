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

interface Bookmark {
  id: string;
  storyId: string;
  title: string;
  date: string;
  note?: string;
}

interface BookmarksListProps {
  colors: any;
  bookmarks: Bookmark[];
  onSelectStory: (id: string) => void;
  onRemoveBookmark: (id: string) => void;
}

export const BookmarksList = ({
  colors,
  bookmarks,
  onSelectStory,
  onRemoveBookmark,
}: BookmarksListProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [itemAnims] = useState(() =>
    bookmarks.map(() => new Animated.Value(0))
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

  if (bookmarks.length === 0) {
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
        <Ionicons name="bookmark" size={50} color={colors.inactive} />
        <Text
          style={[
            styles.emptyText,
            { color: colors.inactive, fontFamily: "Montserrat" },
          ]}
        >
          Aucun signet enregistré
        </Text>
        <Text
          style={[
            styles.emptySubtext,
            { color: colors.inactive, fontFamily: "MontserratLight" },
          ]}
        >
          Ajoutez des signets en lisant des histoires
        </Text>
      </Animated.View>
    );
  }

  const renderItem = ({ item, index }: { item: Bookmark; index: number }) => {
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
        <TouchableOpacity
          style={[
            styles.bookmarkItem,
            {
              backgroundColor: colors.card,
              shadowColor: colors.primary,
            },
          ]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onSelectStory(item.storyId);
          }}
          activeOpacity={0.7}
        >
          <View style={styles.bookmarkContent}>
            <Text
              style={[
                styles.bookmarkTitle,
                { color: colors.text, fontFamily: "PlayfairBold" },
              ]}
            >
              {item.title}
            </Text>
            {item.note && (
              <Text
                style={[
                  styles.bookmarkNote,
                  { color: colors.inactive, fontFamily: "Montserrat" },
                ]}
                numberOfLines={2}
              >
                {item.note}
              </Text>
            )}
            <Text
              style={[
                styles.bookmarkDate,
                { color: colors.inactive, fontFamily: "MontserratLight" },
              ]}
            >
              {new Date(item.date).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.bookmarkActions}>
            <TouchableOpacity
              style={styles.bookmarkAction}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                onRemoveBookmark(item.id);
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
        data={bookmarks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.bookmarksList}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookmarksList: {
    padding: 15,
  },
  bookmarkItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookmarkContent: {
    flex: 1,
  },
  bookmarkTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  bookmarkNote: {
    fontSize: 14,
    marginBottom: 5,
    lineHeight: 20,
  },
  bookmarkDate: {
    fontSize: 12,
  },
  bookmarkActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkAction: {
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

export default BookmarksList;
