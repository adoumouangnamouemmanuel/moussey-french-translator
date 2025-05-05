"use client";

import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  type TextInput,
  StatusBar,
  Animated,
  Share,
  Alert,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "../context/ThemeContext";
import { translateText } from "../utils/dictionary";
import { addToHistory } from "../utils/historyUtils";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import { ToastAndroid } from "react-native";

// Import modular components
import TranslatorHeader from "../components/translator/TranslatorHeader";
import InputSection from "../components/translator/InputSection";
import TranslateButton from "../components/translator/TranslateButton";
import TranslationResult from "../components/translator/TranslationResult";
import BottomActions from "../components/translator/BottomActions";

type Language = "moussey" | "french";

export default function TranslatorScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { colors, isDark } = useTheme();
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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Fade in the screen on mount
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

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

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsLoading(true);

    // Use the translation function from utils/dictionary
    setTimeout(() => {
      const result = translateText(inputText, fromLanguage);
      setTranslatedText(result);
      setIsLoading(false);
      setHasTranslated(true);

      // Add to history
      addToHistory({
        phrase: inputText,
        translation: result,
        type: "translator",
      });
    }, 1000);
  };

  const clearText = () => {
    setInputText("");
    setTranslatedText("");
    setHasTranslated(false);
    inputRef.current?.focus();
  };

  const copyToClipboard = () => {
    if (!translatedText) return;
    Clipboard.setString(translatedText);
    showToast("Texte copié dans le presse-papier");
  };

  const shareTranslation = () => {
    if (!translatedText) return;
    Share.share({
      message: `${inputText}\n\n${translatedText}`,
      title: "Traduction Moussey-Français",
    });
  };

  const speakText = () => {
    if (!translatedText) return;
    showToast("Lecture audio démarrée");
    // Implement text-to-speech functionality here
  };

  // Show toast message
  const showToast = (message: string) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert("", message);
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: colors.background, opacity: fadeAnim },
      ]}
    >
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <TranslatorHeader
        colors={colors}
        fromLanguage={fromLanguage}
        toLanguage={toLanguage}
        onSwitchLanguages={switchLanguages}
        onGoBack={() => navigation.goBack()}
        switchButtonRotate={switchButtonRotate}
        isDark={isDark}
      />

      <ScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <InputSection
          colors={colors}
          inputText={inputText}
          setInputText={setInputText}
          fromLanguage={fromLanguage}
          onClearText={clearText}
          onSwitchLanguages={switchLanguages}
          inputRef={inputRef}
        />

        <TranslateButton
          colors={colors}
          onTranslate={translateTextHandler}
          isDisabled={!inputText.trim()}
          isLoading={isLoading}
          buttonScale={translateButtonScale}
          buttonOpacity={translateButtonOpacity}
        />

        <TranslationResult
          colors={colors}
          translatedText={translatedText}
          hasTranslated={hasTranslated}
          toLanguage={toLanguage}
          onCopy={copyToClipboard}
          onShare={shareTranslation}
          onSpeak={speakText}
        />

        <BottomActions
          colors={colors}
          hasTranslated={hasTranslated}
          onSpeak={speakText}
          onCopy={copyToClipboard}
          onShare={shareTranslation}
        />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
