"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Language = "moussey" | "french";

interface InputSectionProps {
  colors: any;
  inputText: string;
  setInputText: (text: string) => void;
  fromLanguage: Language;
  onClearText: () => void;
  onSwitchLanguages: () => void;
  inputRef: React.RefObject<TextInput>;
}

export const InputSection = ({
  colors,
  inputText,
  setInputText,
  fromLanguage,
  onClearText,
  onSwitchLanguages,
  inputRef,
}: InputSectionProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [buttonAnims] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);

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

    // Staggered animation for buttons
    buttonAnims.forEach((anim, index) => {
      Animated.spring(anim, {
        toValue: 1,
        friction: 6,
        tension: 40,
        delay: 300 + index * 100,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const handleButtonPress = (action: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (action === "switch") {
      onSwitchLanguages();
    } else {
      // For future implementation of other actions
      console.log(`Action: ${action}`);
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.card,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <View style={styles.inputHeader}>
        <Text
          style={[
            styles.inputLabel,
            { color: colors.primary, fontFamily: "PlayfairBold" },
          ]}
        >
          {fromLanguage === "moussey" ? "Moussey" : "Français"}
        </Text>
        {inputText.length > 0 && (
          <TouchableOpacity onPress={onClearText} style={styles.clearButton}>
            <Ionicons name="close-circle" size={20} color={colors.inactive} />
          </TouchableOpacity>
        )}
      </View>

      <TextInput
        ref={inputRef}
        style={[
          styles.textInput,
          {
            color: colors.text,
            borderColor: colors.border,
            backgroundColor: `${colors.background}50`,
            fontFamily: "Montserrat",
          },
        ]}
        placeholder={`Entrez du texte en ${
          fromLanguage === "moussey" ? "Moussey" : "Français"
        }...`}
        value={inputText}
        onChangeText={setInputText}
        multiline
        placeholderTextColor={colors.inactive}
        returnKeyType="done"
      />

      <View style={styles.inputButtons}>
        {[
          { icon: "image", action: "image" },
          { icon: "mic", action: "voice" },
          { icon: "volume-high", action: "speak" },
          { icon: "swap-horizontal", action: "switch" },
        ].map((button, index) => (
          <Animated.View
            key={button.action}
            style={{
              opacity: buttonAnims[index],
              transform: [
                {
                  scale: buttonAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              style={styles.inputButton}
              onPress={() => handleButtonPress(button.action)}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={[colors.primary, `${colors.primary}CC`]}
                style={styles.iconGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Ionicons name={button.icon as any} size={20} color="white" />
              </LinearGradient>
              <Text
                style={[
                  styles.buttonLabel,
                  { color: colors.inactive, fontFamily: "Montserrat" },
                ]}
              >
                {button.action === "image"
                  ? "Image"
                  : button.action === "voice"
                  ? "Voix"
                  : button.action === "speak"
                  ? "Écouter"
                  : "Inverser"}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 16,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "600",
  },
  clearButton: {
    padding: 5,
  },
  textInput: {
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: "top",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    lineHeight: 24,
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
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 5,
  },
  buttonLabel: {
    fontSize: 12,
    marginTop: 3,
  },
});

export default InputSection;