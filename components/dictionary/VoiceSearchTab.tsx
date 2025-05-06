"use client";

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type VoiceSearchTabProps = {
  colors: any;
  isRecording: boolean;
  onToggleRecording: () => void;
};

const VoiceSearchTab = ({
  colors,
  isRecording,
  onToggleRecording,
}: VoiceSearchTabProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";

  // Animation for mic pulse
  const pulseAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (isRecording) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.2,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }

    return () => {
      pulseAnim.stopAnimation();
    };
  }, [isRecording, pulseAnim]);

  return (
    <View style={styles.tabContentContainer}>
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text style={[styles.tabTitle, { color: textColor }]}>
          Recherche vocale
        </Text>
      </View>
      <View style={styles.micContainer}>
        <Text style={[styles.micInstructions, { color: textColor }]}>
          Appuyez sur le microphone et prononcez un mot à rechercher
        </Text>
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <TouchableOpacity
            style={[styles.micButton, { backgroundColor: primaryColor }]}
            onPress={onToggleRecording}
          >
            <Ionicons
              name={isRecording ? "stop" : "mic"}
              size={40}
              color="white"
            />
          </TouchableOpacity>
        </Animated.View>
        <Text
          style={[
            styles.micStatus,
            { color: isRecording ? primaryColor : inactiveColor },
          ]}
        >
          {isRecording ? "Écoute en cours..." : "Appuyez pour commencer"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContentContainer: {
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
  micContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  micInstructions: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  micStatus: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default VoiceSearchTab;
