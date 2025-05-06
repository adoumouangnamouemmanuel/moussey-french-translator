"use client";

import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getAllDictionaryEntries } from "../../../utils/dictionary";

interface AudioTabProps {
  colors: any;
}

export const AudioTab = ({ colors }: AudioTabProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [translateYAnim] = useState(new Animated.Value(20));

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

  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: translateYAnim }],
        },
      ]}
    >
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text
          style={[
            styles.tabTitle,
            { color: textColor, fontFamily: "PlayfairBold" },
          ]}
        >
          Dictionnaire Audio
        </Text>
      </View>
      <View style={styles.audioListContainer}>
        <Text
          style={[
            styles.audioSectionTitle,
            { color: textColor, fontFamily: "PlayfairBold" },
          ]}
        >
          Récemment écoutés
        </Text>
        <FlatList
          data={getAllDictionaryEntries().slice(0, 5)}
          keyExtractor={(item) => `audio-${item.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.audioItem, { backgroundColor: cardColor }]}
            >
              <View style={styles.audioItemContent}>
                <Text
                  style={[
                    styles.audioItemTitle,
                    { color: textColor, fontFamily: "PlayfairBold" },
                  ]}
                >
                  {item.id.startsWith("f2m_") ? item.french : item.moussey}
                </Text>
                <Text
                  style={[
                    styles.audioItemSubtitle,
                    { color: inactiveColor, fontFamily: "Montserrat" },
                  ]}
                >
                  {item.id.startsWith("f2m_") ? item.moussey : item.french}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.audioPlayButton,
                  { backgroundColor: primaryColor },
                ]}
              >
                <Ionicons name="play" size={16} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  audioListContainer: {
    padding: 15,
  },
  audioSectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  audioItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  audioItemContent: {
    flex: 1,
  },
  audioItemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  audioItemSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  audioPlayButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AudioTab;