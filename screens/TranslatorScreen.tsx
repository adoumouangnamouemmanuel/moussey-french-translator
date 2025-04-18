"use client";

import { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Keyboard,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Language = "moussey" | "french";

export default function TranslatorScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLanguage, setFromLanguage] = useState<Language>("moussey");
  const [toLanguage, setToLanguage] = useState<Language>("french");
  const [isLoading, setIsLoading] = useState(false);
  const [hasTranslated, setHasTranslated] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const switchLanguages = () => {
    setFromLanguage(fromLanguage === "moussey" ? "french" : "moussey");
    setToLanguage(toLanguage === "moussey" ? "french" : "moussey");
    setInputText(translatedText);
    setTranslatedText(inputText);
    setHasTranslated(false);
  };

  const translateText = () => {
    if (!inputText.trim()) {
      return;
    }

    Keyboard.dismiss();
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
      setHasTranslated(true);
    }, 1000);
  };

  const clearText = () => {
    setInputText("");
    setTranslatedText("");
    setHasTranslated(false);
    inputRef.current?.focus();
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

      {/* Single header with language direction */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {fromLanguage === "moussey" ? "Moussey → French" : "French → Moussey"}
        </Text>
        <TouchableOpacity onPress={switchLanguages}>
          <Ionicons name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Input area */}
      <View style={styles.inputContainer}>
        <View style={styles.inputHeader}>
          <Text style={styles.inputLabel}>
            {fromLanguage === "moussey" ? "Moussey" : "French"}
          </Text>
          {inputText.length > 0 && (
            <TouchableOpacity onPress={clearText} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          placeholder={`Enter ${
            fromLanguage === "moussey" ? "Moussey" : "French"
          } text here...`}
          value={inputText}
          onChangeText={setInputText}
          multiline
          placeholderTextColor="#999"
          returnKeyType="done"
          onSubmitEditing={translateText}
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

      {/* Translate button */}
      <TouchableOpacity
        style={[
          styles.translateButton,
          !inputText.trim() && styles.translateButtonDisabled,
        ]}
        onPress={translateText}
        disabled={!inputText.trim() || isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <>
            <Ionicons
              name="language"
              size={20}
              color="white"
              style={styles.translateIcon}
            />
            <Text style={styles.translateButtonText}>Translate</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Translation result area */}
      <View
        style={[
          styles.translationContainer,
          !hasTranslated && styles.translationContainerEmpty,
        ]}
      >
        {hasTranslated ? (
          <>
            <View style={styles.translationHeader}>
              <Text style={styles.translationLabel}>
                {toLanguage === "moussey" ? "Moussey" : "French"}
              </Text>
              <TouchableOpacity style={styles.copyButton}>
                <Ionicons name="copy-outline" size={20} color="#008080" />
              </TouchableOpacity>
            </View>
            <Text style={styles.translatedText}>{translatedText}</Text>
          </>
        ) : (
          <View style={styles.emptyTranslation}>
            <Ionicons name="language-outline" size={40} color="#ccc" />
            <Text style={styles.emptyTranslationText}>
              {inputText.trim()
                ? "Press Translate to see the translation"
                : "Enter text and press Translate"}
            </Text>
          </View>
        )}
      </View>

      {/* Bottom buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton} disabled={!hasTranslated}>
          <Ionicons
            name="volume-high"
            size={24}
            color={hasTranslated ? "white" : "rgba(255,255,255,0.5)"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} disabled={!hasTranslated}>
          <Ionicons
            name="copy"
            size={24}
            color={hasTranslated ? "white" : "rgba(255,255,255,0.5)"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} disabled={!hasTranslated}>
          <Ionicons
            name="share-social"
            size={24}
            color={hasTranslated ? "white" : "rgba(255,255,255,0.5)"}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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
  inputHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#008080",
  },
  clearButton: {
    padding: 5,
  },
  textInput: {
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    padding: 10,
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
  translateButton: {
    backgroundColor: "#008080",
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  translateButtonDisabled: {
    backgroundColor: "#cccccc",
  },
  translateIcon: {
    marginRight: 8,
  },
  translateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  translationContainer: {
    backgroundColor: "white",
    margin: 10,
    marginTop: 5,
    borderRadius: 8,
    padding: 15,
    minHeight: 150,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  translationContainerEmpty: {
    justifyContent: "center",
    alignItems: "center",
  },
  translationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  translationLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#008080",
  },
  copyButton: {
    padding: 5,
  },
  translatedText: {
    fontSize: 16,
    color: "#333",
  },
  emptyTranslation: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyTranslationText: {
    marginTop: 10,
    color: "#999",
    textAlign: "center",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#008080",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
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