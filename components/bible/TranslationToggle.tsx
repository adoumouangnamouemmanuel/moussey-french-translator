import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
import * as Haptics from "expo-haptics";

type TranslationOption = "moussey" | "french" | "both";

interface TranslationToggleProps {
  colors: any;
  translationOption: TranslationOption;
  setTranslationOption: (option: TranslationOption) => void;
}

export const TranslationToggle = ({
  colors,
  translationOption,
  setTranslationOption,
}: TranslationToggleProps) => {
  return (
    <MotiView
      from={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: 200 }}
      style={styles.translationToggle}
    >
      <TouchableOpacity
        style={[
          styles.translationOption,
          translationOption === "moussey" && {
            backgroundColor: colors.primary,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          },
        ]}
        onPress={() => {
          setTranslationOption("moussey");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={[
            styles.translationOptionText,
            {
              color: translationOption === "moussey" ? "white" : colors.text,
              fontFamily: "MontserratBold",
            },
          ]}
        >
          Moussey
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.translationOption,
          translationOption === "both" && {
            backgroundColor: colors.primary,
          },
        ]}
        onPress={() => {
          setTranslationOption("both");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={[
            styles.translationOptionText,
            {
              color: translationOption === "both" ? "white" : colors.text,
              fontFamily: "MontserratBold",
            },
          ]}
        >
          Les deux
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.translationOption,
          translationOption === "french" && {
            backgroundColor: colors.primary,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          },
        ]}
        onPress={() => {
          setTranslationOption("french");
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Text
          style={[
            styles.translationOptionText,
            {
              color: translationOption === "french" ? "white" : colors.text,
              fontFamily: "MontserratBold",
            },
          ]}
        >
          Français
        </Text>
      </TouchableOpacity>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  translationToggle: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  translationOption: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "transparent",
  },
  translationOptionText: {
    fontSize: 14,
    fontWeight: "500",
  },
});