"use client";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { DictionaryEntry } from "../../utils/dictionary";

type AudioTabProps = {
  colors: any;
  entries: DictionaryEntry[];
};

const AudioTab = ({ colors, entries }: AudioTabProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";

  return (
    <View style={styles.tabContentContainer}>
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text style={[styles.tabTitle, { color: textColor }]}>
          Dictionnaire Audio
        </Text>
      </View>
      <View style={styles.audioListContainer}>
        <Text style={[styles.audioSectionTitle, { color: textColor }]}>
          Récemment écoutés
        </Text>
        <FlatList
          data={entries}
          keyExtractor={(item) => `audio-${item.id}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.audioItem, { backgroundColor: cardColor }]}
            >
              <View style={styles.audioItemContent}>
                <Text style={[styles.audioItemTitle, { color: textColor }]}>
                  {item.id.startsWith("f2m_") ? item.french : item.moussey}
                </Text>
                <Text
                  style={[styles.audioItemSubtitle, { color: inactiveColor }]}
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
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
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
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AudioTab;
