import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

type AddWordModalProps = {
  visible: boolean;
  colors: any;
  newWord: {
    moussey: string;
    french: string;
    pronunciation: string;
  };
  onChangeWord: (word: any) => void;
  onAddWord: () => void;
  onClose: () => void;
};

const AddWordModal = ({
  visible,
  colors,
  newWord,
  onChangeWord,
  onAddWord,
  onClose,
}: AddWordModalProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";
  const backgroundColor = colors?.background || "#f5f5f5";

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: cardColor }]}>
          <Text style={[styles.modalTitle, { color: textColor }]}>
            Ajouter un nouveau mot
          </Text>

          <View style={styles.formGroup}>
            <Text style={[styles.formLabel, { color: textColor }]}>
              Mot Moussey
            </Text>
            <TextInput
              style={[
                styles.formInput,
                { backgroundColor: backgroundColor, color: textColor },
              ]}
              placeholder="Entrez le mot en Moussey"
              placeholderTextColor={inactiveColor}
              value={newWord.moussey}
              onChangeText={(text) =>
                onChangeWord({ ...newWord, moussey: text })
              }
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={[styles.formLabel, { color: textColor }]}>
              Traduction Française
            </Text>
            <TextInput
              style={[
                styles.formInput,
                { backgroundColor: backgroundColor, color: textColor },
              ]}
              placeholder="Entrez la traduction française"
              placeholderTextColor={inactiveColor}
              value={newWord.french}
              onChangeText={(text) =>
                onChangeWord({ ...newWord, french: text })
              }
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={[styles.formLabel, { color: textColor }]}>
              Prononciation
            </Text>
            <TextInput
              style={[
                styles.formInput,
                { backgroundColor: backgroundColor, color: textColor },
              ]}
              placeholder="Entrez la prononciation"
              placeholderTextColor={inactiveColor}
              value={newWord.pronunciation}
              onChangeText={(text) =>
                onChangeWord({ ...newWord, pronunciation: text })
              }
            />
          </View>

          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[styles.modalButton, { borderColor: borderColor }]}
              onPress={onClose}
            >
              <Text style={[styles.modalButtonText, { color: inactiveColor }]}>
                Annuler
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: primaryColor }]}
              onPress={onAddWord}
            >
              <Text style={styles.modalButtonTextPrimary}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  formGroup: {
    width: "100%",
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
  },
  modalButtonText: {
    fontSize: 16,
  },
  modalButtonTextPrimary: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default AddWordModal;
