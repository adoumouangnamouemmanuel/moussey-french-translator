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

  const options: { icon: "settings-outline" | "download-outline" | "help-circle-outline" | "information-circle-outline"; label: string }[] = [
    { icon: "settings-outline", label: "Paramètres" },
    { icon: "download-outline", label: "Télécharger le dictionnaire" },
    { icon: "help-circle-outline", label: "Aide" },
    { icon: "information-circle-outline", label: "À propos" },
  ];

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={[styles.optionsMenu, { backgroundColor: cardColor }]}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} style={styles.optionItem}>
                <Ionicons
                  name={option.icon}
                  size={24}
                  color={primaryColor}
                  style={styles.optionIcon}
                />
                <Text style={[styles.optionText, { color: textColor }]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
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