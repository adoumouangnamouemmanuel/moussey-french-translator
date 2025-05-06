import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

type LoadingOverlayProps = {
  colors: any;
  message: string;
};

const LoadingOverlay = ({ colors, message }: LoadingOverlayProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const primaryColor = colors?.primary || "#008080";

  return (
    <View style={styles.loadingOverlay}>
      <View style={[styles.loadingContainer, { backgroundColor: cardColor }]}>
        <ActivityIndicator size="large" color={primaryColor} />
        <Text style={[styles.loadingText, { color: textColor }]}>
          {message}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingText: {
    marginTop: 10,
    color: "#333",
    fontSize: 16,
  },
});

export default LoadingOverlay;