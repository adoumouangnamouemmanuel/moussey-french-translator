"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type Language = "moussey" | "french";

export default function TranslatorScreen() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLanguage, setFromLanguage] = useState<Language>("moussey");
  const [toLanguage, setToLanguage] = useState<Language>("french");
  const [isLoading, setIsLoading] = useState(false);

  const switchLanguages = () => {
    setFromLanguage(fromLanguage === "moussey" ? "french" : "moussey");
    setToLanguage(toLanguage === "moussey" ? "french" : "moussey");
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  const translateText = () => {
    if (!inputText.trim()) return;

    setIsLoading(true);

    // Simulate translation API call
    setTimeout(() => {
      // Mock translation - replace with actual translation logic
      const mockTranslations: Record<string, string> = {
        hello: "bonjour",
        goodbye: "au revoir",
        "thank you": "merci",
        bonjour: "hello",
        "au revoir": "goodbye",
        merci: "thank you",
      };

      const result =
        mockTranslations[inputText.toLowerCase()] ||
        `[${
          fromLanguage === "moussey" ? "French" : "Moussey"
        } translation would appear here]`;

      setTranslatedText(result);
      setIsLoading(false);
    }, 1000);
  };

  const clearText = () => {
    setInputText("");
    setTranslatedText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.languageSelector}>
        <View style={styles.languageBox}>
          <Text style={styles.languageText}>
            {fromLanguage === "moussey" ? "Moussey" : "French"}
          </Text>
        </View>

        <TouchableOpacity onPress={switchLanguages} style={styles.switchButton}>
          <MaterialCommunityIcons
            name="swap-horizontal"
            size={24}
            color="#008080"
          />
        </TouchableOpacity>

        <View style={styles.languageBox}>
          <Text style={styles.languageText}>
            {toLanguage === "moussey" ? "Moussey" : "French"}
          </Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={`Enter ${
              fromLanguage === "moussey" ? "Moussey" : "French"
            } text...`}
            value={inputText}
            onChangeText={setInputText}
            multiline
            textAlignVertical="top"
          />
          {inputText.length > 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={clearText}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.translationContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#008080" />
          ) : (
            <Text style={styles.translatedText}>
              {translatedText || `Translation will appear here`}
            </Text>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.translateButton,
            !inputText.trim() && styles.disabledButton,
          ]}
          onPress={translateText}
          disabled={!inputText.trim() || isLoading}
        >
          <Text style={styles.translateButtonText}>Translate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  languageSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  languageBox: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  languageText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008080",
  },
  switchButton: {
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 8,
    padding: 10,
    minHeight: 150,
    position: "relative",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  textInput: {
    fontSize: 16,
    minHeight: 130,
  },
  clearButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  translationContainer: {
    backgroundColor: "white",
    margin: 15,
    marginTop: 0,
    borderRadius: 8,
    padding: 15,
    minHeight: 150,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  translatedText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    padding: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  translateButton: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  translateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
