"use client"

import * as Haptics from "expo-haptics"
import { useEffect, useRef, useState } from "react"
import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native"

interface CategoryFilterProps {
  colors: any
  categories: string[]
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
}

export const CategoryFilter = ({ colors, categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  const [fadeAnim] = useState(new Animated.Value(0))
  const [translateYAnim] = useState(new Animated.Value(10))
  const scrollViewRef = useRef<ScrollView>(null)

  // Animation values for each category chip
  const chipAnims = useRef(categories.map(() => new Animated.Value(0))).current

  useEffect(() => {
    // Animate container
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
    ]).start()

    // Staggered animation for chips
    chipAnims.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        delay: 200 + index * 50,
        useNativeDriver: true,
      }).start()
    })
  }, [])

  useEffect(() => {
    // Scroll to selected category
    if (selectedCategory && scrollViewRef.current) {
      const index = categories.indexOf(selectedCategory)
      if (index > -1) {
        // Approximate position calculation
        const position = index * 100 // Assuming each chip is about 100px wide
        scrollViewRef.current.scrollTo({ x: position, animated: true })
      }
    }
  }, [selectedCategory])

  const handleCategoryPress = (category: string | null) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    setSelectedCategory(category === selectedCategory ? null : category)
  }

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
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        <Animated.View
          style={{
            opacity: chipAnims[0],
            transform: [
              {
                scale: chipAnims[0].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            style={[
              styles.categoryChip,
              {
                backgroundColor: selectedCategory === null ? colors.primary : `${colors.primary}15`,
                borderColor: selectedCategory === null ? colors.primary : `${colors.primary}30`,
              },
            ]}
            onPress={() => handleCategoryPress(null)}
          >
            <Text
              style={[
                styles.categoryChipText,
                {
                  color: selectedCategory === null ? "white" : colors.primary,
                  fontFamily: "MontserratBold",
                },
              ]}
            >
              Tous
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {categories.map((category, index) => (
          <Animated.View
            key={category}
            style={{
              opacity: chipAnims[index + 1] || chipAnims[0],
              transform: [
                {
                  scale: (chipAnims[index + 1] || chipAnims[0]).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              style={[
                styles.categoryChip,
                {
                  backgroundColor: selectedCategory === category ? colors.primary : `${colors.primary}15`,
                  borderColor: selectedCategory === category ? colors.primary : `${colors.primary}30`,
                },
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text
                style={[
                  styles.categoryChipText,
                  {
                    color: selectedCategory === category ? "white" : colors.primary,
                    fontFamily: "MontserratBold",
                  },
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  categoriesContainer: {
    maxHeight: 50,
  },
  categoriesContent: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  categoryChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryChipText: {
    fontSize: 13,
    fontWeight: "600",
  },
})

export default CategoryFilter
