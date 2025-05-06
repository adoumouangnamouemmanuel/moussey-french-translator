"use client";

import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface AddWordModalProps {
  colors: any;
  visible: boolean;
  newWord: {
    moussey: string;
    french: string;
    pronunciation: string;
  };
  setNewWord: (word: {
    moussey: string;
    french: string;
    pronunciation: string;
  }) => void;
  onAddNewWord: () => void;
  onClose: () => void;
}

export const AddWordModal = ({
  colors,
  visible,
  newWord,
  setNewWord,
  onAddNewWord,
  onClose,
}: AddWordModalProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.9));

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
      ]).start();
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
      ]).start();
    }
  }, [visible]);

  if (!visible) return null;

  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const borderColor = colors?.border || "#e0e0e0";
  const backgroundColor = colors?.background || "#f5f5f5";

  return (
    <View style={styles.modalOverlay}>
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />
      <Animated.View
        style={[
          styles.modalContent,
          {
            backgroundColor: cardColor,
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text
          style={[
            styles.modalTitle,
            { color: textColor, fontFamily: "PlayfairBold" },
          ]}
        >
          Ajouter un nouveau mot
        </Text>

        <View style={styles.formGroup}>
          <Text
            style={[
              styles.formLabel,
              { color: textColor, fontFamily: "MontserratBold" },
            ]}
          >
            Mot Moussey
          </Text>
          <TextInput
            style={[
              styles.formInput,
              {
                backgroundColor: backgroundColor,
                color: textColor,
                fontFamily: "Montserrat",
              },
            ]}
            placeholder="Entrez le mot en Moussey"
            placeholderTextColor={inactiveColor}
            value={newWord.moussey}
            onChangeText={(text) => setNewWord({ ...newWord, moussey: text })}
          />
        </View>

        <View style={styles.formGroup}>
          <Text
            style={[
              styles.formLabel,
              { color: textColor, fontFamily: "MontserratBold" },
            ]}
          >
            Traduction Française
          </Text>
          <TextInput
            style={[
              styles.formInput,
              {
                backgroundColor: backgroundColor,
                color: textColor,
                fontFamily: "Montserrat",
              },
            ]}
            placeholder="Entrez la traduction française"
            placeholderTextColor={inactiveColor}
            value={newWord.french}
            onChangeText={(text) => setNewWord({ ...newWord, french: text })}
          />
        </View>

        <View style={styles.formGroup}>
          <Text
            style={[
              styles.formLabel,
              { color: textColor, fontFamily: "MontserratBold" },
            ]}
          >
            Prononciation
          </Text>
          <TextInput
            style={[
              styles.formInput,
              {
                backgroundColor: backgroundColor,
                color: textColor,
                fontFamily: "Montserrat",
              },
            ]}
            placeholder="Entrez la prononciation"
            placeholderTextColor={inactiveColor}
            value={newWord.pronunciation}
            onChangeText={(text) =>
              setNewWord({ ...newWord, pronunciation: text })
            }
          />
        </View>

        <View style={styles.modalActions}>
          <TouchableOpacity
            style={[styles.modalButton, { borderColor: borderColor }]}
            onPress={onClose}
          >
            <Text
              style={[
                styles.modalButtonText,
                { color: inactiveColor, fontFamily: "Montserrat" },
              ]}
            >
              Annuler
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modalButton, { backgroundColor: primaryColor }]}
            onPress={onAddNewWord}
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
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
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
  },
  modalContent: {
    width: "85%",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
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
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 25,
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