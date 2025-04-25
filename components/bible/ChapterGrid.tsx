import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { MotiText, MotiView } from "moti";
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ChapterGridProps {
  book: {
    id: string;
    name: string;
    chapters: number;
  };
  colors: any;
  selectedChapter: number | null;
  setSelectedBook: (bookId: string | null) => void;
  setSelectedChapter: (chapter: number | null) => void;
  fadeAnim: Animated.Value;
  setShowJumpToModal: (show: boolean) => void;
}

export const ChapterGrid = ({
  book,
  colors,
  selectedChapter,
  setSelectedBook,
  setSelectedChapter,
  fadeAnim,
  setShowJumpToModal,
}: ChapterGridProps) => {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 400 }}
      style={[styles.chapterContainer, { backgroundColor: colors.card }]}
    >
      <View style={styles.chapterHeader}>
        <TouchableOpacity
          onPress={() => {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
              easing: Easing.out(Easing.cubic),
            }).start(() => {
              setSelectedBook(null);
              fadeAnim.setValue(1);
            });

            // Provide haptic feedback
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>

        <MotiText
          from={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
          style={[
            styles.chapterTitle,
            {
              color: colors.text,
              fontFamily: "PlayfairBold",
            },
          ]}
        >
          {book.name}
        </MotiText>

        <TouchableOpacity
          onPress={() => {
            setShowJumpToModal(true);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }}
        >
          <Ionicons name="search" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.chaptersGrid}>
        {Array.from({ length: book.chapters }, (_, i) => (
          <MotiView
            key={i}
            from={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", delay: i * 20 }}
          >
            <TouchableOpacity
              style={[
                styles.chapterItem,
                {
                  backgroundColor:
                    selectedChapter === i + 1
                      ? colors.primary
                      : colors.background,
                  borderColor: colors.border,
                  shadowColor:
                    selectedChapter === i + 1 ? colors.primary : "transparent",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: selectedChapter === i + 1 ? 0.3 : 0,
                  shadowRadius: 4,
                  elevation: selectedChapter === i + 1 ? 4 : 0,
                },
              ]}
              onPress={() => {
                Animated.timing(fadeAnim, {
                  toValue: 0,
                  duration: 300,
                  useNativeDriver: true,
                  easing: Easing.out(Easing.cubic),
                }).start(() => {
                  setSelectedChapter(i + 1);
                  fadeAnim.setValue(1);
                });

                // Provide haptic feedback
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            >
              <Text
                style={[
                  styles.chapterNumber,
                  {
                    color: selectedChapter === i + 1 ? "white" : colors.text,
                    fontFamily: "MontserratBold",
                  },
                ]}
              >
                {i + 1}
              </Text>
            </TouchableOpacity>
          </MotiView>
        ))}
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  chapterContainer: {
    flex: 1,
  },
  chapterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 5,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  chaptersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
    justifyContent: "center",
  },
  chapterItem: {
    width: "18%",
    aspectRatio: 1,
    margin: "1%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  chapterNumber: {
    fontSize: 16,
    fontWeight: "500",
  },
});
