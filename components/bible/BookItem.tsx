"use client";

import { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

interface BookItemProps {
  item: {
    id: string;
    name: string;
    chapters: number;
    testament: string;
  };
  index: number;
  colors: any;
  onPress: (bookId: string) => void;
  fadeAnim: Animated.Value;
}

export const BookItem = ({
  item,
  index,
  colors,
  onPress,
  fadeAnim,
}: BookItemProps) => {
  // Create animated values for the animation
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(20));

  // Run the animation when the component mounts
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      delay: index * 50,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      delay: index * 50,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  }, [index]);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [{ translateY }],
      }}
    >
      <TouchableOpacity
        style={[
          styles.bookItem,
          {
            borderBottomColor: colors.border,
            backgroundColor: colors.card,
            borderRadius: 12,
            marginBottom: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          },
        ]}
        onPress={() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }).start(() => {
            onPress(item.id);
            fadeAnim.setValue(1);
          });

          // Provide haptic feedback
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={[
              styles.bookIcon,
              {
                backgroundColor:
                  item.testament === "ancien"
                    ? `${colors.primary}`
                    : `${colors.primary}80`,
              },
            ]}
          >
            <Text style={styles.bookIconText}>{item.name.charAt(0)}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.bookName,
                {
                  color: colors.text,
                  fontFamily: "PlayfairBold",
                },
              ]}
            >
              {item.name}
            </Text>
            <Text
              style={[
                styles.chapterCount,
                {
                  color: colors.inactive,
                  fontFamily: "Montserrat",
                },
              ]}
            >
              {item.chapters} chapitres
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.inactive} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  bookIconText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bookName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  chapterCount: {
    fontSize: 12,
  },
});

export default BookItem;
