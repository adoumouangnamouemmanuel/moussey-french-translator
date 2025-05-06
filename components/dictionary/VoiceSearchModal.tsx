"use client";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type VoiceSearchModalProps = {
  visible: boolean;
  colors: any;
  isRecording: boolean;
  micScale: Animated.Value;
  onToggleRecording: () => void;
  onClose: () => void;
};

const VoiceSearchModal = ({
  visible,
  colors,
  isRecording,
  micScale,
  onToggleRecording,
  onClose,
}: VoiceSearchModalProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { backgroundColor: cardColor }]}>
          <Text style={[styles.modalTitle, { color: textColor }]}>
            Recherche Vocale
          </Text>
          <Text style={[styles.modalSubtitle, { color: inactiveColor }]}>
            Parlez clairement pour rechercher un mot
          </Text>

          <Animated.View
            style={[
              styles.micButtonLarge,
              {
                backgroundColor: primaryColor,
                transform: [{ scale: micScale }],
              },
            ]}
          >
            <TouchableOpacity
              style={styles.micButtonInner}
              onPress={onToggleRecording}
            >
              <Ionicons
                name={isRecording ? "stop" : "mic"}
                size={40}
                color="white"
              />
            </TouchableOpacity>
          </Animated.View>

          <Text
            style={[
              styles.recordingStatus,
              { color: isRecording ? primaryColor : inactiveColor },
            ]}
          >
            {isRecording
              ? "Écoute en cours..."
              : "Appuyez sur le microphone pour commencer"}
          </Text>

          <TouchableOpacity
            style={[styles.modalCloseButton, { borderColor: borderColor }]}
            onPress={onClose}
          >
            <Text style={[styles.modalCloseText, { color: primaryColor }]}>
              Annuler
            </Text>
          </TouchableOpacity>
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
    width: "80%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  micButtonLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  micButtonInner: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  recordingStatus: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 20,
  },
  modalCloseButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
  },
  modalCloseText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default VoiceSearchModal;
