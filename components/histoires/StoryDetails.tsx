"use client"

import type React from "react"

import { Ionicons } from "@expo/vector-icons"
import * as Haptics from "expo-haptics"
import { useCallback, useEffect, useRef, useState } from "react"
import { Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface StoryContent {
  paragraph: string
  translation: string
}

interface Story {
  id: string
  title: string
  fullDescription: string
  imageUrl: string
  duration: string
  level: string
  hasAudio: boolean
  content: StoryContent[]
}

interface HighlightedText {
  id: string
  storyId: string
  paragraphIndex: number
  text: string
  color: string
  date: string
}

interface StoryDetailsProps {
  colors: any
  story: Story
  isBookmarked: boolean
  onBackPress: () => void
  onBookmarkPress: () => void
  onSharePress: () => void
  onAudioToggle: () => void
  isPlaying: boolean
  translationLanguage: "french" | "english" | "both"
  setTranslationLanguage: (language: "french" | "english" | "both") => void
  highlights: HighlightedText[]
  onParagraphLongPress: (index: number, text: string) => void
  renderStoryIcon: (imageUrl: string) => React.ReactNode
  fontSizes: {
    paragraph: number
    title: number
    subtitle: number
  }
}

export const StoryDetails = ({
  colors,
  story,
  isBookmarked,
  onBackPress,
  onBookmarkPress,
  onSharePress,
  onAudioToggle,
  isPlaying,
  translationLanguage,
  setTranslationLanguage,
  highlights,
  onParagraphLongPress,
  renderStoryIcon,
  fontSizes,
}: StoryDetailsProps) => {
  const [fadeAnim] = useState(new Animated.Value(0))
  const [translateYAnim] = useState(new Animated.Value(20))
  const [contentFadeAnim] = useState(new Animated.Value(0))
  const [headerTranslateY] = useState(new Animated.Value(-50))
  const [footerTranslateY] = useState(new Animated.Value(50))

  const scrollY = useRef(new Animated.Value(0)).current

  // Header opacity based on scroll
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.9],
    extrapolate: "clamp",
  })

  useEffect(() => {
    // Animate the entire component
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
      Animated.timing(headerTranslateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(footerTranslateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start()

    // Animate content with a slight delay
    Animated.timing(contentFadeAnim, {
      toValue: 1,
      duration: 600,
      delay: 200,
      useNativeDriver: true,
    }).start()
  }, [])

  const getHighlightForParagraph = (paragraphIndex: number) => {
    return highlights.find((h) => h.storyId === story.id && h.paragraphIndex === paragraphIndex)
  }

  const Paragraph = useCallback(
    ({ paragraph, index, highlight }) => {
      const [paragraphAnim] = useState(new Animated.Value(0))

      useEffect(() => {
        Animated.timing(paragraphAnim, {
          toValue: 1,
          duration: 400,
          delay: 300 + index * 100,
          useNativeDriver: true,
        }).start()
      }, [index, paragraphAnim])

      return (
        <Animated.View
          style={{
            opacity: paragraphAnim,
            transform: [
              {
                translateY: paragraphAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            style={[
              styles.paragraphContainer,
              { backgroundColor: colors.card },
              highlight && {
                borderLeftWidth: 4,
                borderLeftColor: highlight.color,
              },
            ]}
            onLongPress={() => onParagraphLongPress(index, paragraph.paragraph)}
            delayLongPress={300}
            activeOpacity={0.9}
          >
            {(translationLanguage === "both" || translationLanguage === "french") && (
              <Text
                style={[
                  styles.paragraph,
                  {
                    color: colors.text,
                    fontSize: fontSizes.paragraph,
                    backgroundColor: highlight ? `${highlight.color}20` : "transparent",
                    fontFamily: "Montserrat",
                    lineHeight: fontSizes.paragraph + 8,
                  },
                ]}
              >
                {paragraph.paragraph}
              </Text>
            )}
            {translationLanguage === "both" && <View style={[styles.divider, { backgroundColor: colors.border }]} />}
            {(translationLanguage === "both" || translationLanguage === "english") && (
              <Text
                style={[
                  styles.translation,
                  {
                    color: translationLanguage === "both" ? colors.inactive : colors.text,
                    fontSize: translationLanguage === "both" ? fontSizes.paragraph - 2 : fontSizes.paragraph,
                    fontStyle: translationLanguage === "both" ? "italic" : "normal",
                    backgroundColor: highlight ? `${highlight.color}10` : "transparent",
                    fontFamily: translationLanguage === "both" ? "PlayfairItalic" : "Montserrat",
                    lineHeight: fontSizes.paragraph + 8,
                  },
                ]}
              >
                {paragraph.translation}
              </Text>
            )}
          </TouchableOpacity>
        </Animated.View>
      )
    },
    [colors, fontSizes, onParagraphLongPress, translationLanguage],
  )

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      {/* Header */}
      <Animated.View
        style={[
          styles.storyDetailsHeader,
          {
            borderBottomColor: colors.border,
            opacity: headerOpacity,
            transform: [{ translateY: headerTranslateY }],
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            onBackPress()
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={styles.storyTitleContainer}>
          <Text
            style={[styles.storyTitle, { color: colors.text, fontSize: fontSizes.title, fontFamily: "PlayfairBold" }]}
            numberOfLines={1}
          >
            {story.title}
          </Text>
          <View style={styles.storyMetaContainer}>
            <View style={[styles.levelBadge, { backgroundColor: `${colors.primary}20` }]}>
              <Text style={[styles.levelText, { color: colors.primary, fontFamily: "MontserratBold" }]}>
                {story.level}
              </Text>
            </View>
            <Text style={[styles.durationText, { color: colors.inactive, fontFamily: "MontserratLight" }]}>
              {story.duration}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            onBookmarkPress()
          }}
        >
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={24}
            color={isBookmarked ? colors.primary : colors.text}
          />
        </TouchableOpacity>
      </Animated.View>

      <ScrollView
        style={styles.storyScrollView}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={16}
      >
        <Animated.View style={{ opacity: contentFadeAnim }}>
          {/* Story Image */}
          <View style={[styles.storyImageContainer, { backgroundColor: `${colors.primary}10` }]}>
            <View style={[styles.storyImagePlaceholder, { backgroundColor: `${colors.primary}20` }]}>
              {renderStoryIcon(story.imageUrl)}
            </View>
          </View>

          {/* Description */}
          <View style={styles.storyDescriptionContainer}>
            <Text
              style={[
                styles.storyDescriptionTitle,
                { color: colors.text, fontSize: fontSizes.subtitle, fontFamily: "PlayfairBold" },
              ]}
            >
              Description
            </Text>
            <Text
              style={[
                styles.storyDescription,
                {
                  color: colors.inactive,
                  fontSize: fontSizes.paragraph - 2,
                  fontFamily: "Montserrat",
                  lineHeight: fontSizes.paragraph + 6,
                },
              ]}
            >
              {story.fullDescription}
            </Text>
          </View>

          {/* Translation Options */}
          <View style={styles.translationOptionsContainer}>
            <Text
              style={[
                styles.translationTitle,
                { color: colors.text, fontSize: fontSizes.subtitle, fontFamily: "PlayfairBold" },
              ]}
            >
              Options de traduction
            </Text>
            <View style={styles.translationButtons}>
              <TouchableOpacity
                style={[
                  styles.translationButton,
                  translationLanguage === "both" && {
                    backgroundColor: `${colors.primary}20`,
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                  setTranslationLanguage("both")
                }}
              >
                <Text
                  style={[
                    styles.translationButtonText,
                    {
                      color: translationLanguage === "both" ? colors.primary : colors.inactive,
                      fontFamily: "MontserratBold",
                    },
                  ]}
                >
                  Les deux
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.translationButton,
                  translationLanguage === "french" && {
                    backgroundColor: `${colors.primary}20`,
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                  setTranslationLanguage("french")
                }}
              >
                <Text
                  style={[
                    styles.translationButtonText,
                    {
                      color: translationLanguage === "french" ? colors.primary : colors.inactive,
                      fontFamily: "MontserratBold",
                    },
                  ]}
                >
                  Français
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.translationButton,
                  translationLanguage === "english" && {
                    backgroundColor: `${colors.primary}20`,
                    borderColor: colors.primary,
                  },
                ]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                  setTranslationLanguage("english")
                }}
              >
                <Text
                  style={[
                    styles.translationButtonText,
                    {
                      color: translationLanguage === "english" ? colors.primary : colors.inactive,
                      fontFamily: "MontserratBold",
                    },
                  ]}
                >
                  Anglais
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Story Content */}
          <View style={styles.storyContentContainer}>
            <Text
              style={[
                styles.storyContentTitle,
                { color: colors.text, fontSize: fontSizes.subtitle, fontFamily: "PlayfairBold" },
              ]}
            >
              Histoire
            </Text>
            {story.content.map((paragraph, index) => {
              const highlight = getHighlightForParagraph(index)

              return <Paragraph key={index} paragraph={paragraph} index={index} highlight={highlight} />
            })}
          </View>

          {/* Bottom spacing */}
          <View style={{ height: 80 }} />
        </Animated.View>
      </ScrollView>

      {/* Footer Actions */}
      <Animated.View
        style={[
          styles.storyActionsContainer,
          {
            borderTopColor: colors.border,
            transform: [{ translateY: footerTranslateY }],
          },
        ]}
      >
        {story.hasAudio && (
          <TouchableOpacity
            style={[styles.storyActionButton, { backgroundColor: colors.primary }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
              onAudioToggle()
            }}
          >
            <Ionicons name={isPlaying ? "pause" : "play"} size={20} color="white" style={styles.actionIcon} />
            <Text style={[styles.actionText, { fontFamily: "MontserratBold" }]}>{isPlaying ? "Pause" : "Écouter"}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.storyActionButton, { backgroundColor: colors.primary }]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            onBookmarkPress()
          }}
        >
          <Ionicons name="bookmark" size={20} color="white" style={styles.actionIcon} />
          <Text style={[styles.actionText, { fontFamily: "MontserratBold" }]}>Sauvegarder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.storyActionButton, { backgroundColor: colors.primary }]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            onSharePress()
          }}
        >
          <Ionicons name="share-social" size={20} color="white" style={styles.actionIcon} />
          <Text style={[styles.actionText, { fontFamily: "MontserratBold" }]}>Partager</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storyScrollView: {
    flex: 1,
    padding: 15,
  },
  storyDetailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    zIndex: 10,
  },
  backButton: {
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  storyTitleContainer: {
    flex: 1,
  },
  storyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storyMetaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteButton: {
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  storyImageContainer: {
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  storyImagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  storyDescriptionContainer: {
    marginBottom: 20,
  },
  storyDescriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  storyDescription: {
    fontSize: 14,
    lineHeight: 22,
  },
  translationOptionsContainer: {
    marginBottom: 20,
  },
  translationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  translationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  translationButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  translationButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  storyContentContainer: {
    marginBottom: 20,
  },
  storyContentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  paragraphContainer: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
  translation: {
    fontSize: 14,
    lineHeight: 22,
    fontStyle: "italic",
  },
  storyActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderTopWidth: 1,
    backgroundColor: "rgba(255,255,255,0.9)",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  storyActionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  actionIcon: {
    marginRight: 5,
  },
  actionText: {
    color: "white",
    fontWeight: "600",
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginRight: 10,
  },
  levelText: {
    fontSize: 12,
    fontWeight: "600",
  },
  durationText: {
    fontSize: 12,
  },
})

export default StoryDetails
