"use client";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type EmptyStateProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonPress?: () => void;
  colors: any;
};

const EmptyState = ({
  icon,
  title,
  subtitle,
  buttonText,
  onButtonPress,
  colors,
}: EmptyStateProps) => {
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const headerColors = colors?.headerBackground || ["#00a0a0", "#008080"];

  return (
    <View style={styles.emptyContainer}>
      <Ionicons name={icon} size={50} color={inactiveColor} />
      <Text style={[styles.emptyText, { color: textColor }]}>{title}</Text>
      <Text style={[styles.emptySubtext, { color: inactiveColor }]}>
        {subtitle}
      </Text>
      {buttonText && onButtonPress && (
        <TouchableOpacity style={styles.browseButton} onPress={onButtonPress}>
          <LinearGradient
            colors={headerColors}
            style={styles.browseButtonGradient}
          >
            <Text style={styles.browseButtonText}>{buttonText}</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
    fontWeight: "500",
  },
  emptySubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 5,
  },
  browseButton: {
    marginTop: 15,
    overflow: "hidden",
    borderRadius: 20,
  },
  browseButtonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  browseButtonText: {
    color: "white",
    fontWeight: "500",
  },
});

export default EmptyState;
