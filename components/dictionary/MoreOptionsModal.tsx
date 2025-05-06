"use client";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type MoreOptionsModalProps = {
  visible: boolean;
  colors: any;
  onClose: () => void;
};

const MoreOptionsModal = ({
  visible,
  colors,
  onClose,
}: MoreOptionsModalProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={[styles.optionsMenu, { backgroundColor: cardColor }]}>
            <TouchableOpacity
              style={[styles.optionItem, { borderBottomColor: borderColor }]}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color={primaryColor}
                style={styles.optionIcon}
              />
              <Text style={[styles.optionText, { color: textColor }]}>
                Paramètres
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.optionItem, { borderBottomColor: borderColor }]}
            >
              <Ionicons
                name="download-outline"
                size={24}
                color={primaryColor}
                style={styles.optionIcon}
              />
              <Text style={[styles.optionText, { color: textColor }]}>
                Télécharger le dictionnaire
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.optionItem, { borderBottomColor: borderColor }]}
            >
              <Ionicons
                name="help-circle-outline"
                size={24}
                color={primaryColor}
                style={styles.optionIcon}
              />
              <Text style={[styles.optionText, { color: textColor }]}>
                Aide
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.optionItem, { borderBottomColor: borderColor }]}
            >
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={primaryColor}
                style={styles.optionIcon}
              />
              <Text style={[styles.optionText, { color: textColor }]}>
                À propos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  optionsMenu: {
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
  },
});

export default MoreOptionsModal;
