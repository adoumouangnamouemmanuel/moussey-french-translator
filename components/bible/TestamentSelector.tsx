import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
import * as Haptics from "expo-haptics";

interface TestamentSelectorProps {
  colors: any;
  testament: "all" | "ancien" | "nouveau";
  setTestament: (testament: "all" | "ancien" | "nouveau") => void;
}

export const TestamentSelector = ({
  colors,
  testament,
  setTestament,
}: TestamentSelectorProps) => {
  return (
    <MotiView
      from={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 400 }}
      style={[
        styles.testamentSelector,
        {
          backgroundColor: colors.card,
          borderRadius: 25,
          margin: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.testamentOption,
          testament === "all" && {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3,
          },
        ]}
        onPress={() => {
          setTestament("all");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={{
            color: testament === "all" ? "white" : colors.text,
            fontFamily: "MontserratBold",
          }}
        >
          Tous
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.testamentOption,
          testament === "ancien" && {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3,
          },
        ]}
        onPress={() => {
          setTestament("ancien");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={{
            color: testament === "ancien" ? "white" : colors.text,
            fontFamily: "MontserratBold",
          }}
        >
          Ancien Testament
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.testamentOption,
          testament === "nouveau" && {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 3,
          },
        ]}
        onPress={() => {
          setTestament("nouveau");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={{
            color: testament === "nouveau" ? "white" : colors.text,
            fontFamily: "MontserratBold",
          }}
        >
          Nouveau Testament
        </Text>
      </TouchableOpacity>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  testamentSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  testamentOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});