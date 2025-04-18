"use client";

import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

// Mock audio lessons data
const mockAudioLessons = [
  {
    id: "1",
    title: "Basic Greetings",
    duration: "3:45",
    url: "https://example.com/audio1.mp3",
  },
  {
    id: "2",
    title: "Common Phrases",
    duration: "5:20",
    url: "https://example.com/audio2.mp3",
  },
  {
    id: "3",
    title: "Numbers and Counting",
    duration: "4:10",
    url: "https://example.com/audio3.mp3",
  },
  {
    id: "4",
    title: "Food and Dining",
    duration: "6:30",
    url: "https://example.com/audio4.mp3",
  },
  {
    id: "5",
    title: "Travel Vocabulary",
    duration: "7:15",
    url: "https://example.com/audio5.mp3",
  },
];

export default function AudioPlayerScreen() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioId, setCurrentAudioId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Clean up the sound on unmount
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handlePlayPause = async (audioId: string, audioUrl: string) => {
    // If we're already playing this audio
    if (currentAudioId === audioId && sound) {
      if (isPlaying) {
        await sound.pauseAsync();
        setIsPlaying(false);
      } else {
        await sound.playAsync();
        setIsPlaying(true);
      }
      return;
    }

    // If we're playing a different audio, stop it first
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    // Load and play the new audio
    try {
      setIsLoading(true);
      setCurrentAudioId(audioId);

      // In a real app, you would use the actual URL
      // For this example, we'll simulate loading
      setTimeout(async () => {
        const { sound: newSound } = await Audio.Sound.createAsync(
          // In a real app, use the actual URL
          // { uri: audioUrl }
          require("../assets/silence.mp3") // Use a placeholder sound file
        );

        setSound(newSound);
        await newSound.playAsync();
        setIsPlaying(true);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Moussey → French</Text>
      </View>

      <FlatList
        data={mockAudioLessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.audioItem,
              currentAudioId === item.id && styles.activeAudioItem,
            ]}
            onPress={() => handlePlayPause(item.id, item.url)}
            disabled={isLoading && currentAudioId === item.id}
          >
            <View style={styles.audioInfo}>
              <Text style={styles.audioTitle}>{item.title}</Text>
              <Text style={styles.audioDuration}>{item.duration}</Text>
            </View>

            <View style={styles.audioControls}>
              {isLoading && currentAudioId === item.id ? (
                <ActivityIndicator size="small" color="#008080" />
              ) : (
                <Ionicons
                  name={
                    currentAudioId === item.id && isPlaying
                      ? "pause-circle"
                      : "play-circle"
                  }
                  size={36}
                  color="#008080"
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />

      {currentAudioId && (
        <View style={styles.playerControls}>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>

          <View style={styles.controlButtons}>
            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-skip-back" size={24} color="#008080" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.playPauseButton}
              onPress={() => {
                const currentAudio = mockAudioLessons.find(
                  (audio) => audio.id === currentAudioId
                );
                if (currentAudio) {
                  handlePlayPause(currentAudio.id, currentAudio.url);
                }
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Ionicons
                  name={isPlaying ? "pause" : "play"}
                  size={24}
                  color="white"
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity style={styles.controlButton}>
              <Ionicons name="play-skip-forward" size={24} color="#008080" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  audioItem: {
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  activeAudioItem: {
    borderLeftWidth: 4,
    borderLeftColor: "#008080",
  },
  audioInfo: {
    flex: 1,
  },
  audioTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  audioDuration: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  audioControls: {
    padding: 5,
  },
  playerControls: {
    backgroundColor: "white",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  progressBar: {
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    marginBottom: 15,
  },
  progress: {
    width: "30%", // This would be dynamic based on actual progress
    height: "100%",
    backgroundColor: "#008080",
    borderRadius: 2,
  },
  controlButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  controlButton: {
    padding: 10,
  },
  playPauseButton: {
    backgroundColor: "#008080",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
