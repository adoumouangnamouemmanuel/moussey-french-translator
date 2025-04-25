import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface NavigationControlsProps {
  colors: any;
  nightMode: boolean;
  selectedChapter: number | null;
  setSelectedChapter: (chapter: number | null) => void;
  fadeAnim: Animated.Value;
  setShowJumpToModal: (show: boolean) => void;
  bookChapters: number;
}

export const NavigationControls = ({
  colors,
  nightMode,
  selectedChapter,
  setSelectedChapter,
  fadeAnim,
  setShowJumpToModal,
  bookChapters,
}: NavigationControlsProps) => {
  return (
    <BlurView
      intensity={80}
      tint={nightMode ? "dark" : "light"}
      style={[styles.navigationControls]}
    >
      <TouchableOpacity
        style={[
          styles.navButton,
          {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
          },
        ]}
        onPress={() => {
          if (selectedChapter && selectedChapter > 1) {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
              easing: Easing.out(Easing.cubic),
            }).start(() => {
              setSelectedChapter(selectedChapter - 1);
              fadeAnim.setValue(1);
            });

            // Provide haptic feedback
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }
        }}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
        <Text style={[styles.navButtonText, { fontFamily: "MontserratBold" }]}>
          Précédent
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.jumpButton,
          {
            borderColor: colors.border,
            backgroundColor: `${colors.primary}20`,
          },
        ]}
        onPress={() => {
          setShowJumpToModal(true);
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <Ionicons name="search" size={20} color={colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navButton,
          {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 4,
          },
        ]}
        onPress={() => {
          if (selectedChapter && selectedChapter < bookChapters) {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
              easing: Easing.out(Easing.cubic),
            }).start(() => {
              setSelectedChapter(selectedChapter + 1);
              fadeAnim.setValue(1);
            });

            // Provide haptic feedback
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }
        }}
      >
        <Text style={[styles.navButtonText, { fontFamily: "MontserratBold" }]}>
          Suivant
        </Text>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  navigationControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(200,200,200,0.3)",
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  navButtonText: {
    color: "white",
    fontWeight: "500",
    marginHorizontal: 5,
  },
  jumpButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
