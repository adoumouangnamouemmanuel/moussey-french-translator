"use client"

import { Ionicons } from "@expo/vector-icons"
import * as Haptics from "expo-haptics"
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface ParagraphOptionsModalProps {
  colors: any
  visible: boolean
  onClose: () => void
  onCopy: () => void
  onShare: () => void
  onHighlight: () => void
  paragraphOptionsAnim: Animated.Value
}

export const ParagraphOptionsModal = ({
  colors,
  visible,
  onClose,
  onCopy,
  onShare,
  onHighlight,
  paragraphOptionsAnim,
}: ParagraphOptionsModalProps) => {
  if (!visible) return null

  return (
    <Animated.View
      style={[
        styles.paragraphOptionsContainer,
        {
          opacity: paragraphOptionsAnim,
          transform: [
            {
              translateY: paragraphOptionsAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}
    >
      <View style={[styles.paragraphOptionsContent, { backgroundColor: colors.card }]}>
        <TouchableOpacity
          style={styles.paragraphOption}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            onCopy()
          }}
        >
          <Ionicons name="copy-outline" size={24} color={colors.primary} />
          <Text style={[styles.paragraphOptionText, { color: colors.text, fontFamily: "Montserrat" }]}>Copier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paragraphOption}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            onShare()
          }}
        >
          <Ionicons name="share-outline" size={24} color={colors.primary} />
          <Text style={[styles.paragraphOptionText, { color: colors.text, fontFamily: "Montserrat" }]}>Partager</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paragraphOption}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            onHighlight()
          }}
        >
          <Ionicons name="color-fill-outline" size={24} color={colors.primary} />
          <Text style={[styles.paragraphOptionText, { color: colors.text, fontFamily: "Montserrat" }]}>Surligner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paragraphOption}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            onClose()
          }}
        >
          <Ionicons name="close-circle-outline" size={24} color={colors.inactive} />
          <Text style={[styles.paragraphOptionText, { color: colors.inactive, fontFamily: "Montserrat" }]}>
            Annuler
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  paragraphOptionsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 100,
  },
  paragraphOptionsContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 15,
    padding: 15,
  },
  paragraphOption: {
    alignItems: "center",
    padding: 10,
  },
  paragraphOptionText: {
    marginTop: 5,
    fontSize: 12,
  },
})

export default ParagraphOptionsModal
