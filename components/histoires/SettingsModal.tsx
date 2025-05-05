"use client"

import * as Haptics from "expo-haptics"
import { useEffect, useState } from "react"
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native"

type FontSize = "small" | "medium" | "large"

interface SettingsModalProps {
  colors: any
  visible: boolean
  onClose: () => void
  fontSize: FontSize
  onFontSizeChange: (size: FontSize) => void
}

export const SettingsModal = ({ colors, visible, onClose, fontSize, onFontSizeChange }: SettingsModalProps) => {
  const [fadeAnim] = useState(new Animated.Value(0))
  const [scaleAnim] = useState(new Animated.Value(0.9))

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.9,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [visible])

  if (!visible) return null

  return (
    <Animated.View
      style={[
        styles.modalOverlay,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
      <Animated.View
        style={[
          styles.modalContainer,
          {
            backgroundColor: colors.card,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={[styles.modalTitle, { color: colors.text, fontFamily: "PlayfairBold" }]}>Paramètres</Text>

        <View style={styles.settingsSection}>
          <Text style={[styles.settingsSectionTitle, { color: colors.text, fontFamily: "Montserrat" }]}>
            Taille du texte
          </Text>
          <View style={styles.fontSizeOptions}>
            <TouchableOpacity
              style={[styles.fontSizeOption, fontSize === "small" && { backgroundColor: colors.primary }]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                onFontSizeChange("small")
              }}
            >
              <Text
                style={[
                  styles.fontSizeOptionText,
                  {
                    color: fontSize === "small" ? "white" : colors.text,
                    fontFamily: "Montserrat",
                  },
                ]}
              >
                Petit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.fontSizeOption,
                fontSize === "medium" && {
                  backgroundColor: colors.primary,
                },
              ]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                onFontSizeChange("medium")
              }}
            >
              <Text
                style={[
                  styles.fontSizeOptionText,
                  {
                    color: fontSize === "medium" ? "white" : colors.text,
                    fontFamily: "Montserrat",
                  },
                ]}
              >
                Moyen
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.fontSizeOption, fontSize === "large" && { backgroundColor: colors.primary }]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                onFontSizeChange("large")
              }}
            >
              <Text
                style={[
                  styles.fontSizeOptionText,
                  {
                    color: fontSize === "large" ? "white" : colors.text,
                    fontFamily: "Montserrat",
                  },
                ]}
              >
                Grand
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.settingsButton, { backgroundColor: colors.primary }]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            onClose()
          }}
        >
          <Text style={[styles.settingsButtonText, { fontFamily: "MontserratBold" }]}>Terminé</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "85%",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  settingsSection: {
    marginBottom: 20,
  },
  settingsSectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  fontSizeOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fontSizeOption: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  fontSizeOptionText: {
    fontWeight: "500",
    fontSize: 15,
  },
  settingsButton: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  settingsButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
})

export default SettingsModal
