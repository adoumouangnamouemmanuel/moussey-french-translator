"use client";

import { useEffect, useState } from "react";
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface BookmarkModalProps {
  colors: any;
  nightMode: boolean;
  showBookmarkModal: boolean;
  setShowBookmarkModal: (show: boolean) => void;
  selectedVerse: any;
  selectedBook: string | null;
  selectedChapter: number | null;
  bookmarkNote: string;
  setBookmarkNote: (note: string) => void;
  addBookmark: () => void;
  bibleBooks: any[];
}

export const BookmarkModal = ({
  colors,
  nightMode,
  showBookmarkModal,
  setShowBookmarkModal,
  selectedVerse,
  selectedBook,
  selectedChapter,
  bookmarkNote,
  setBookmarkNote,
  addBookmark,
  bibleBooks,
}: BookmarkModalProps) => {
  // Create animated values for the animations
  const [opacity] = useState(new Animated.Value(0));
  const [scale] = useState(new Animated.Value(0.9));

  // Run the animation when the modal is shown
  useEffect(() => {
    if (showBookmarkModal) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Reset animations when modal is hidden
      opacity.setValue(0);
      scale.setValue(0.9);
    }
  }, [showBookmarkModal]);

  return (
    <Modal
      visible={showBookmarkModal}
      transparent
      animationType="fade"
      onRequestClose={() => setShowBookmarkModal(false)}
    >
      <View
        style={[
          styles.modalOverlay,
          {
            backgroundColor: nightMode ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)",
          },
        ]}
      >
        <Animated.View
          key="bookmark-modal"
          style={[
            styles.modalContainer,
            {
              backgroundColor: colors.card,
              borderRadius: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 8,
              elevation: 8,
              opacity,
              transform: [{ scale }],
            },
          ]}
        >
          <Text
            style={[
              styles.modalTitle,
              {
                color: colors.text,
                fontFamily: "PlayfairBold",
              },
            ]}
          >
            Ajouter un signet
          </Text>

          {selectedVerse && selectedBook && (
            <Text
              style={[
                styles.modalSubtitle,
                {
                  color: colors.inactive,
                  fontFamily: "Montserrat",
                },
              ]}
            >
              {bibleBooks.find((b) => b.id === selectedBook)?.name}{" "}
              {selectedChapter}:{selectedVerse.verse}
            </Text>
          )}

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
            value={bookmarkNote}
            onChangeText={setBookmarkNote}
            multiline
          />

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[
                styles.modalButton,
                {
                  borderColor: colors.border,
                  backgroundColor: `${colors.inactive}20`,
                },
              ]}
              onPress={() => setShowBookmarkModal(false)}
            >
              <Text
                style={[
                  styles.modalButtonText,
                  {
                    color: colors.inactive,
                    fontFamily: "MontserratBold",
                  },
                ]}
              >
                Annuler
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.modalButton,
                {
                  backgroundColor: colors.primary,
                  shadowColor: colors.primary,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 4,
                },
              ]}
              onPress={addBookmark}
            >
              <Text
                style={[
                  styles.modalButtonTextPrimary,
                  { fontFamily: "MontserratBold" },
                ]}
              >
                Enregistrer
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 15,
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    minHeight: 120,
    textAlignVertical: "top",
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginLeft: 10,
    borderWidth: 1,
    minWidth: 100,
    alignItems: "center",
  },
  modalButtonText: {
    fontWeight: "500",
    fontSize: 16,
  },
  modalButtonTextPrimary: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default BookmarkModal;
