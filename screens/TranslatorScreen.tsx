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
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext";
import { translateText } from "../utils/dictionary";

type Language = "moussey" | "french";

export default function TranslatorScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { colors } = useTheme();
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLanguage, setFromLanguage] = useState<Language>("moussey");
  const [toLanguage, setToLanguage] = useState<Language>("french");
  const [isLoading, setIsLoading] = useState(false);
  const [hasTranslated, setHasTranslated] = useState(false);
  const inputRef = useRef<TextInput>(null);

  // Animation values
  const translateButtonScale = useRef(new Animated.Value(1)).current;
  const translateButtonOpacity = useRef(new Animated.Value(1)).current;
  const switchButtonRotate = useRef(new Animated.Value(0)).current;

  const switchLanguages = () => {
    // Animate the switch button
    Animated.sequence([
      Animated.timing(switchButtonRotate, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(switchButtonRotate, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start();

    setFromLanguage(fromLanguage === "moussey" ? "french" : "moussey");
    setToLanguage(toLanguage === "moussey" ? "french" : "moussey");
    setInputText(translatedText);
    setTranslatedText(inputText);
    setHasTranslated(translatedText !== "");
  };

  const translateTextHandler = () => {
    if (!inputText.trim()) {
      return;
    }

    // Animate the translate button
    Animated.sequence([
      Animated.parallel([
        Animated.timing(translateButtonScale, {
          toValue: 0.95,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(translateButtonOpacity, {
          toValue: 0.8,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(translateButtonScale, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(translateButtonOpacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    Keyboard.dismiss();
    setIsLoading(true);

    // Use the translation function from utils/dictionary
    setTimeout(() => {
      const result = translateText(inputText, fromLanguage);
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

  // Calculate rotation for switch button
  const spin = switchButtonRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  // Use theme colors or fallback to original colors
  const headerColors: [string, string, ...string[]] =
    colors?.headerBackground?.length >= 2
      ? (colors.headerBackground as [string, string, ...string[]])
      : ["#00a0a0", "#008080"];
  const primaryColor = colors?.primary || "#008080";
  const backgroundColor = colors?.background || "#f5f5f5";
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: backgroundColor }]}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar backgroundColor={primaryColor} barStyle="light-content" />

      {/* Single header with language direction */}
      <LinearGradient colors={headerColors} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {fromLanguage === "moussey" ? "Moussey → French" : "French → Moussey"}
        </Text>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <TouchableOpacity onPress={switchLanguages}>
            <Ionicons name="refresh" size={24} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>

      {/* Input area */}
      <View style={[styles.inputContainer, { backgroundColor: cardColor }]}>
        <View style={styles.inputHeader}>
          <Text style={[styles.inputLabel, { color: primaryColor }]}>
            {fromLanguage === "moussey" ? "Moussey" : "French"}
          </Text>
          {inputText.length > 0 && (
            <TouchableOpacity onPress={clearText} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color={inactiveColor} />
            </TouchableOpacity>
          )}
        </View>
        <TextInput
          ref={inputRef}
          style={[
            styles.textInput,
            { color: textColor, borderColor: colors?.border || "#e0e0e0" },
          ]}
          placeholder={`Enter ${
            fromLanguage === "moussey" ? "Moussey" : "French"
          } text here...`}
          value={inputText}
          onChangeText={setInputText}
          multiline
          placeholderTextColor={inactiveColor}
          returnKeyType="done"
          onSubmitEditing={translateTextHandler}
        />

        <View style={styles.inputButtons}>
          <TouchableOpacity style={styles.inputButton}>
            <LinearGradient colors={headerColors} style={styles.iconGradient}>
              <Ionicons name="image" size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton}>
            <LinearGradient colors={headerColors} style={styles.iconGradient}>
              <Ionicons name="mic" size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.inputButton}>
            <LinearGradient colors={headerColors} style={styles.iconGradient}>
              <Ionicons name="volume-high" size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputButton}
            onPress={switchLanguages}
          >
            <LinearGradient colors={headerColors} style={styles.iconGradient}>
              <Ionicons name="swap-horizontal" size={20} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>

      {/* Translate button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={translateTextHandler}
        disabled={!inputText.trim() || isLoading}
      >
        <Animated.View
          style={[
            styles.translateButton,
            !inputText.trim() && styles.translateButtonDisabled,
            {
              transform: [{ scale: translateButtonScale }],
              opacity: !inputText.trim() ? 0.6 : translateButtonOpacity,
            },
          ]}
        >
          <LinearGradient
            colors={!inputText.trim() ? ["#ccc", "#aaa"] : headerColors}
            style={styles.translateGradient}
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
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>

      {/* Translation result area */}
      <View
        style={[
          styles.translationContainer,
          !hasTranslated && styles.translationContainerEmpty,
          { backgroundColor: cardColor },
        ]}
      >
        {hasTranslated ? (
          <>
            <View style={styles.translationHeader}>
              <Text style={[styles.translationLabel, { color: primaryColor }]}>
                {toLanguage === "moussey" ? "Moussey" : "French"}
              </Text>
              <TouchableOpacity style={styles.copyButton}>
                <Ionicons name="copy-outline" size={20} color={primaryColor} />
              </TouchableOpacity>
            </View>
            <Text style={[styles.translatedText, { color: textColor }]}>
              {translatedText}
            </Text>
          </>
        ) : (
          <View style={styles.emptyTranslation}>
            <Ionicons name="language-outline" size={40} color={inactiveColor} />
            <Text
              style={[styles.emptyTranslationText, { color: inactiveColor }]}
            >
              {inputText.trim()
                ? "Press Translate to see the translation"
                : "Enter text and press Translate"}
            </Text>
          </View>
        )}
      </View>

      {/* Bottom buttons */}
      <View style={[styles.bottomButtons, { backgroundColor: primaryColor }]}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            !hasTranslated && styles.bottomButtonDisabled,
          ]}
          disabled={!hasTranslated}
        >
          <LinearGradient
            colors={
              hasTranslated
                ? ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.2)"]
                : ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]
            }
            style={styles.bottomButtonGradient}
          >
            <Ionicons
              name="volume-high"
              size={24}
              color={hasTranslated ? "white" : "rgba(255,255,255,0.5)"}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bottomButton,
            !hasTranslated && styles.bottomButtonDisabled,
          ]}
          disabled={!hasTranslated}
        >
          <LinearGradient
            colors={
              hasTranslated
                ? ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.2)"]
                : ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]
            }
            style={styles.bottomButtonGradient}
          >
            <Ionicons
              name="copy"
              size={24}
              color={hasTranslated ? "white" : "rgba(255,255,255,0.5)"}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bottomButton,
            !hasTranslated && styles.bottomButtonDisabled,
          ]}
          disabled={!hasTranslated}
        >
          <LinearGradient
            colors={
              hasTranslated
                ? ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.2)"]
                : ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]
            }
            style={styles.bottomButtonGradient}
          >
            <Ionicons
              name="share-social"
              size={24}
              color={hasTranslated ? "white" : "rgba(255,255,255,0.5)"}
            />
          </LinearGradient>
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
    borderRadius: 12,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    borderRadius: 8,
    padding: 10,
  },
  inputButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  inputButton: {
    alignItems: "center",
  },
  iconGradient: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  translateButton: {
    margin: 10,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  translateGradient: {
    padding: 12,
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
    borderRadius: 12,
    padding: 15,
    minHeight: 150,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
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
    lineHeight: 24,
  },
  emptyTranslation: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  emptyTranslationText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 14,
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    margin: 10,
    borderRadius: 12,
    marginBottom: 30,
  },
  bottomButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtonDisabled: {
    opacity: 0.5,
  },
  bottomButtonGradient: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});