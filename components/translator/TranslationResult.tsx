"use client";

import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Language = "moussey" | "french";

interface TranslationResultProps {
  colors: any;
  translatedText: string;
  hasTranslated: boolean;
  toLanguage: Language;
  onCopy: () => void;
  onShare: () => void;
  onSpeak: () => void;
}

export const TranslationResult = ({
  colors,
  translatedText,
  hasTranslated,
  toLanguage,
  onCopy,
  onShare,
  onSpeak,
}: TranslationResultProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [resultFadeAnim] = useState(new Animated.Value(0));
  const [resultScaleAnim] = useState(new Animated.Value(0.95));

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

  useEffect(() => {
    if (hasTranslated) {
      Animated.parallel([
        Animated.timing(resultFadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(resultScaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      resultFadeAnim.setValue(0);
      resultScaleAnim.setValue(0.95);
    }
  }, [hasTranslated, translatedText]);

  const handleAction = (action: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (action === "copy") {
      onCopy();
    } else if (action === "share") {
      onShare();
    } else if (action === "speak") {
      onSpeak();
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
      <View style={styles.translationHeader}>
        <Text
          style={[
            styles.translationLabel,
            { color: colors.primary, fontFamily: "PlayfairBold" },
          ]}
        >
          {toLanguage === "moussey" ? "Moussey" : "Français"}
        </Text>
        {hasTranslated && (
          <View style={styles.headerActions}>
            <TouchableOpacity
              style={styles.headerAction}
              onPress={() => handleAction("copy")}
            >
              <Ionicons name="copy-outline" size={20} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerAction}
              onPress={() => handleAction("speak")}
            >
              <Ionicons
                name="volume-high-outline"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {hasTranslated ? (
        <Animated.View
          style={{
            opacity: resultFadeAnim,
            transform: [{ scale: resultScaleAnim }],
          }}
        >
          <Text
            style={[
              styles.translatedText,
              {
                color: colors.text,
                fontFamily: "Montserrat",
              },
            ]}
          >
            {translatedText}
          </Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity
              style={[
                styles.actionButton,
                { backgroundColor: `${colors.primary}15` },
              ]}
              onPress={() => handleAction("copy")}
            >
              <Ionicons
                name="copy-outline"
                size={20}
                color={colors.primary}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionText,
                  { color: colors.primary, fontFamily: "MontserratBold" },
                ]}
              >
                Copier
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.actionButton,
                { backgroundColor: `${colors.primary}15` },
              ]}
              onPress={() => handleAction("speak")}
            >
              <Ionicons
                name="volume-high-outline"
                size={20}
                color={colors.primary}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionText,
                  { color: colors.primary, fontFamily: "MontserratBold" },
                ]}
              >
                Écouter
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.actionButton,
                { backgroundColor: `${colors.primary}15` },
              ]}
              onPress={() => handleAction("share")}
            >
              <Ionicons
                name="share-social-outline"
                size={20}
                color={colors.primary}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionText,
                  { color: colors.primary, fontFamily: "MontserratBold" },
                ]}
              >
                Partager
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      ) : (
        <View style={styles.emptyTranslation}>
          <LinearGradient
            colors={[`${colors.primary}30`, `${colors.primary}10`]}
            style={styles.emptyIconContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons
              name="language-outline"
              size={40}
              color={colors.primary}
            />
          </LinearGradient>
          <Text
            style={[
              styles.emptyTranslationText,
              { color: colors.inactive, fontFamily: "Montserrat" },
            ]}
          >
            Entrez du texte et appuyez sur Traduire
          </Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 5,
    borderRadius: 16,
    padding: 15,
    minHeight: 200,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  translationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  translationLabel: {
    fontSize: 18,
    fontWeight: "600",
  },
  headerActions: {
    flexDirection: "row",
  },
  headerAction: {
    marginLeft: 15,
    padding: 5,
  },
  translatedText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  emptyTranslation: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
    minHeight: 150,
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  emptyTranslationText: {
    textAlign: "center",
    fontSize: 14,
    maxWidth: "80%",
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  actionIcon: {
    marginRight: 5,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "600",
  },
});

export default TranslationResult;
