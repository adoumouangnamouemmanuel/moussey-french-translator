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

interface AddWordTabProps {
  colors: any;
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
}

export const AddWordTab = ({
  colors,
  newWord,
  setNewWord,
  onAddNewWord,
}: AddWordTabProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const backgroundColor = colors?.background || "#f5f5f5";

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text
          style={[
            styles.tabTitle,
            { color: textColor, fontFamily: "PlayfairBold" },
          ]}
        >
          Ajouter un nouveau mot
        </Text>
      </View>
      <View style={[styles.addWordForm, { backgroundColor: cardColor }]}>
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
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: primaryColor }]}
          onPress={onAddNewWord}
        >
          <Text
            style={[styles.submitButtonText, { fontFamily: "MontserratBold" }]}
          >
            Ajouter le mot
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabHeader: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tabTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addWordForm: {
    margin: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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
  submitButton: {
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddWordTab;