"use client";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";

interface BottomActionsProps {
  colors: any;
  hasTranslated: boolean;
  onSpeak: () => void;
  onCopy: () => void;
  onShare: () => void;
}

export const BottomActions = ({
  colors,
  hasTranslated,
  onSpeak,
  onCopy,
  onShare,
}: BottomActionsProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));
  const [buttonAnims] = useState([
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
  }, []);

  useEffect(() => {
    if (hasTranslated) {
      // Staggered animation for buttons
      buttonAnims.forEach((anim, index) => {
        Animated.spring(anim, {
          toValue: 1,
          friction: 6,
          tension: 40,
          delay: 200 + index * 100,
          useNativeDriver: true,
        }).start();
      });
    } else {
      buttonAnims.forEach((anim) => {
        anim.setValue(0);
      });
    }
  }, [hasTranslated]);

  const handleAction = (action: string) => {
    if (!hasTranslated) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    if (action === "speak") {
      onSpeak();
    } else if (action === "copy") {
      onCopy();
    } else if (action === "share") {
      onShare();
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      {[
        { icon: "volume-high", action: "speak", index: 0 },
        { icon: "copy", action: "copy", index: 1 },
        { icon: "share-social", action: "share", index: 2 },
      ].map((button) => (
        <Animated.View
          key={button.action}
          style={{
            opacity: buttonAnims[button.index],
            transform: [
              {
                scale: buttonAnims[button.index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            style={[
              styles.bottomButton,
              !hasTranslated && styles.bottomButtonDisabled,
            ]}
            onPress={() => handleAction(button.action)}
            disabled={!hasTranslated}
          >
            <LinearGradient
              colors={
                hasTranslated
                  ? ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.2)"]
                  : ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]
              }
              style={styles.bottomButtonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Ionicons
                name={button.icon as any}
                size={24}
                color={hasTranslated ? "white" : "rgba(255,255,255,0.5)"}
              />
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    margin: 15,
    borderRadius: 16,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
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

export default BottomActions;