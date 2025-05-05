"use client"

import * as Haptics from "expo-haptics"
import { useEffect, useState } from "react"
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

interface BookmarkModalProps {
  colors: any
  visible: boolean
  onClose: () => void
  onSave: (note: string) => void
  storyTitle: string
  initialNote?: string
}

export const BookmarkModal = ({
  colors,
  visible,
  onClose,
  onSave,
  storyTitle,
  initialNote = "",
}: BookmarkModalProps) => {
  const [fadeAnim] = useState(new Animated.Value(0))
  const [scaleAnim] = useState(new Animated.Value(0.9))
  const [note, setNote] = useState(initialNote)

  useEffect(() => {
    if (visible) {
      setNote(initialNote)
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
  }, [visible, initialNote])

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
        <Text style={[styles.modalTitle, { color: colors.text, fontFamily: "PlayfairBold" }]}>Ajouter un signet</Text>

        <Text style={[styles.modalSubtitle, { color: colors.inactive, fontFamily: "Montserrat" }]}>{storyTitle}</Text>

        <TextInput
          style={[
            styles.noteInput,
            {
              backgroundColor: colors.background,
              color: colors.text,
              borderColor: colors.border,
              fontFamily: "Montserrat",
            },
          ]}
          placeholder="Ajouter une note (optionnel)"
          placeholderTextColor={colors.inactive}
          value={note}
          onChangeText={setNote}
          multiline
        />

        <View style={styles.modalButtons}>
          <TouchableOpacity
            style={[styles.modalButton, { borderColor: colors.border }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
              onClose()
            }}
          >
            <Text style={[styles.modalButtonText, { color: colors.inactive, fontFamily: "Montserrat" }]}>Annuler</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, { backgroundColor: colors.primary }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
              onSave(note)
            }}
          >
            <Text style={[styles.modalButtonTextPrimary, { fontFamily: "MontserratBold" }]}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 15,
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    minHeight: 120,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 22,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginLeft: 10,
    borderWidth: 1,
    minWidth: 100,
    alignItems: "center",
  },
  modalButtonText: {
    fontWeight: "500",
    fontSize: 15,
  },
  modalButtonTextPrimary: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
})

export default BookmarkModal
