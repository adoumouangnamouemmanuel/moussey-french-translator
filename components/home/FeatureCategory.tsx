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
import { LinearGradient } from "expo-linear-gradient";

interface FeatureCategoryProps {
  colors: any;
  category: {
    title: string;
    items: Array<{
      id: string;
      title: string;
      icon: string;
      screen: string;
    }>;
  };
  onFeaturePress: (screen: string) => void;
  index: number;
}

export const FeatureCategory = ({
  colors,
  category,
  onFeaturePress,
  index,
}: FeatureCategoryProps) => {
  // Create animated values for the animations
  const [containerOpacity] = useState(new Animated.Value(0));
  const [containerTranslateY] = useState(new Animated.Value(20));
  const [itemsOpacity] = useState(new Animated.Value(0));
  const [itemsScale] = useState(new Animated.Value(0.9));

  // Run the animation when the component mounts
  useEffect(() => {
    // Container animation with delay based on category index
    Animated.parallel([
      Animated.timing(containerOpacity, {
        toValue: 1,
        duration: 400,
        delay: 200 + index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(containerTranslateY, {
        toValue: 0,
        duration: 400,
        delay: 200 + index * 100,
        useNativeDriver: true,
      }),
    ]).start();

    // Items animation
    Animated.parallel([
      Animated.timing(itemsOpacity, {
        toValue: 1,
        duration: 500,
        delay: 400 + index * 100,
        useNativeDriver: true,
      }),
      Animated.spring(itemsScale, {
        toValue: 1,
        friction: 8,
        tension: 40,
        delay: 400 + index * 100,
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
            name="grid"
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
            {category.title}
          </Text>
        </View>
      </View>

      <Animated.View
        style={[
          styles.featuresGrid,
          {
            opacity: itemsOpacity,
            transform: [{ scale: itemsScale }],
          },
        ]}
      >
        {category.items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.featureItem,
              {
                backgroundColor: colors.card,
                shadowColor: colors.primary,
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
              },
            ]}
            onPress={() => {
              onFeaturePress(item.screen);
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
          >
            <LinearGradient
              colors={[`${colors.primary}20`, `${colors.primary}05`]}
              style={styles.featureGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
            <View
              style={[
                styles.featureIconContainer,
                { backgroundColor: `${colors.primary}15` },
              ]}
            >
              <Ionicons
                name={item.icon as any}
                size={22}
                color={colors.primary}
              />
            </View>
            <Text
              style={[
                styles.featureTitle,
                { color: colors.text, fontFamily: "Montserrat" },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
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
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureItem: {
    width: "48%",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  featureGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  featureIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "500",
    flex: 1,
  },
});

export default FeatureCategory;
