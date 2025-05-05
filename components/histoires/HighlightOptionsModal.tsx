"use client";

import * as Haptics from "expo-haptics";
import { useEffect, useState, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface HighlightOptionsModalProps {
  colors: any;
  visible: boolean;
  onClose: () => void;
  onSelectColor: (color: string) => void;
  onRemoveHighlight?: () => void;
  hasExistingHighlight?: boolean;
}

export const HighlightOptionsModal = ({
  colors,
  visible,
  onClose,
  onSelectColor,
  onRemoveHighlight,
  hasExistingHighlight = false,
}: HighlightOptionsModalProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(100));
  const [modalVisible, setModalVisible] = useState(false);
  const [itemAnims] = useState(() =>
    new Array(6).fill(0).map(() => new Animated.Value(0))
  );

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(translateYAnim, {
          toValue: 0,
          friction: 8,
          tension: 60,
          useNativeDriver: true,
        }),
      ]).start();

      // Animate each color option with staggered delay
      itemAnims.forEach((anim, index) => {
        Animated.spring(anim, {
          toValue: 1,
          friction: 6,
          tension: 40,
          delay: 100 + index * 50,
          useNativeDriver: true,
        }).start();
      });
    } else {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateYAnim, {
          toValue: 100,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setModalVisible(false);
      });
    }
  }, [visible]);

  const highlightColors = [
    "#FFEB3B", // Yellow
    "#4CAF50", // Green
    "#2196F3", // Blue
    "#F44336", // Red
    "#9C27B0", // Purple
  ];

  if (!modalVisible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={onClose}
      />
      <Animated.View
        style={[
          styles.highlightOptionsContainer,
          {
            backgroundColor: colors.card,
            transform: [{ translateY: translateYAnim }],
          },
        ]}
      >
        <Text
          style={[
            styles.highlightTitle,
            { color: colors.text, fontFamily: "PlayfairBold" },
          ]}
        >
          {hasExistingHighlight
            ? "Modifier le surlignage"
            : "Choisir une couleur"}
        </Text>
        <View style={styles.colorOptions}>
          {highlightColors.map((color, index) => (
            <Animated.View
              key={color}
              style={{
                opacity: itemAnims[index],
                transform: [
                  {
                    scale: itemAnims[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.5, 1],
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: color }]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  onSelectColor(color);
                }}
              />
            </Animated.View>
          ))}
        </View>

        {hasExistingHighlight && (
          <TouchableOpacity
            style={[
              styles.removeHighlightButton,
              {
                backgroundColor: colors.inactive + "30",
                borderColor: colors.inactive,
              },
            ]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              if (onRemoveHighlight) onRemoveHighlight();
            }}
          >
            <Text
              style={[
                styles.removeHighlightText,
                { color: colors.inactive, fontFamily: "MontserratBold" },
              ]}
            >
              Supprimer le surlignage
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.cancelHighlightButton, { borderColor: colors.border }]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            onClose();
          }}
        >
          <Text
            style={[
              styles.cancelHighlightText,
              { color: colors.inactive, fontFamily: "Montserrat" },
            ]}
          >
            Annuler
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    zIndex: 100,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  highlightOptionsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  removeHighlightButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
  },
  removeHighlightText: {
    fontSize: 14,
    fontWeight: "600",
  },
  cancelHighlightButton: {
    paddingVertical: 12,
    alignItems: "center",
    borderTopWidth: 1,
  },
  cancelHighlightText: {
    fontSize: 16,
  },
});

export default HighlightOptionsModal;
