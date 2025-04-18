"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

      {/* Header with language selector */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.languageSelector}>
          <Text style={styles.languageText}>
            {fromLanguage === "moussey" ? "Moussey" : "French"}
          </Text>
          <Text style={styles.arrowText}>→</Text>
          <Text style={styles.languageText}>
            {toLanguage === "moussey" ? "Moussey" : "French"}
          </Text>
        </View>

        <TouchableOpacity onPress={switchLanguages} style={styles.switchButton}>
          <Ionicons name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Input area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={`Enter ${
            fromLanguage === "moussey" ? "Moussey" : "French"
          } text...`}
          value={inputText}
          onChangeText={setInputText}
          multiline
          placeholderTextColor="#999"
        />

        <View style={styles.inputButtons}>
          <TouchableOpacity style={styles.inputButton}>
            <Ionicons name="image" size={24} color="#008080" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton}>
            <Ionicons name="mic" size={24} color="#008080" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton}>
            <Ionicons name="volume-high" size={24} color="#008080" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputButton}
            onPress={switchLanguages}
          >
            <Ionicons name="swap-horizontal" size={24} color="#008080" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Translation result area */}
      <View style={styles.translationContainer}>
        <Text style={styles.translatedText}>
          {translatedText || "Translation will appear here"}
        </Text>
      </View>

      {/* Bottom buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="volume-high" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="copy" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="share-social" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#008080",
    padding: 15,
    paddingTop: StatusBar.currentHeight || 15,
  },
  backButton: {
    padding: 5,
  },
  languageSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  languageText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  arrowText: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 10,
  },
  switchButton: {
    padding: 5,
  },
  inputContainer: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 8,
    padding: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  textInput: {
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: "top",
  },
  inputButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 10,
  },
  inputButton: {
    padding: 10,
  },
  translationContainer: {
    backgroundColor: "#008080",
    margin: 10,
    marginTop: 5,
    borderRadius: 8,
    padding: 15,
    minHeight: 150,
    flex: 1,
  },
  translatedText: {
    fontSize: 16,
    color: "white",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#008080",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});