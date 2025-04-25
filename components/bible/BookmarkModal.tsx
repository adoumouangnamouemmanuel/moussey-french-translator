import { BlurView } from "expo-blur";
import { MotiView } from "moti";
import {
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
  return (
    <Modal
      visible={showBookmarkModal}
      transparent
      animationType="fade"
      onRequestClose={() => setShowBookmarkModal(false)}
    >
      <BlurView
        intensity={80}
        tint={nightMode ? "dark" : "light"}
        style={styles.modalOverlay}
      >
        <MotiView
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
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
        </MotiView>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 14,
    marginBottom: 15,
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 1,
  },
  modalButtonText: {
    fontWeight: "500",
  },
  modalButtonTextPrimary: {
    color: "white",
    fontWeight: "500",
  },
});
