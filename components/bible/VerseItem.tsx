import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MotiView, MotiText } from "moti";
import { SharedElement } from "react-navigation-shared-element";
import * as Haptics from "expo-haptics";

interface VerseItemProps {
  verse: {
    id: string;
    verse: number;
    text: string;
    french: string;
  };
  index: number;
  colors: any;
  translationOption: "moussey" | "french" | "both";
  showVerseOptions: string | null;
  handleVersePress: (verse: any) => void;
  copyVerse: (verse: any) => void;
  shareVerse: (verse: any) => void;
  setSelectedVerse: (verse: any) => void;
  setShowBookmarkModal: (show: boolean) => void;
  setShowVerseOptions: (id: string | null) => void;
  fontSizes: {
    verse: number;
    text: number;
  };
}

export const VerseItem = ({
  verse,
  index,
  colors,
  translationOption,
  showVerseOptions,
  handleVersePress,
  copyVerse,
  shareVerse,
  setSelectedVerse,
  setShowBookmarkModal,
  setShowVerseOptions,
  fontSizes,
}: VerseItemProps) => {
  return (
    <MotiView
      key={verse.id}
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 400, delay: index * 50 }}
    >
      <TouchableOpacity
        style={[
          styles.verseItem,
          showVerseOptions === verse.id && {
            backgroundColor: `${colors.primary}15`,
            borderRadius: 12,
          },
        ]}
        onPress={() => handleVersePress(verse)}
        onLongPress={() => handleVersePress(verse)}
      >
        <View style={styles.verseHeader}>
          <SharedElement id={`verse.${verse.id}.number`}>
            <Text
              style={[
                styles.verseNumber,
                {
                  color: colors.primary,
                  fontSize: fontSizes.verse,
                  fontFamily: "PlayfairBold",
                },
              ]}
            >
              {verse.verse}
            </Text>
          </SharedElement>

          {showVerseOptions === verse.id && (
            <MotiView
              from={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring" }}
              style={styles.verseActions}
            >
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => copyVerse(verse)}
              >
                <Ionicons name="copy-outline" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => shareVerse(verse)}
              >
                <Ionicons name="share-social-outline" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => {
                  setSelectedVerse(verse);
                  setShowBookmarkModal(true);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
              >
                <Ionicons name="bookmark-outline" size={16} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.verseAction,
                  { backgroundColor: colors.primary },
                ]}
                onPress={() => setShowVerseOptions(null)}
              >
                <Ionicons name="close" size={16} color="white" />
              </TouchableOpacity>
            </MotiView>
          )}
        </View>

        {(translationOption === "moussey" || translationOption === "both") && (
          <MotiText
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "timing",
              duration: 500,
              delay: index * 50 + 100,
            }}
            style={[
              styles.verseText,
              {
                color: colors.text,
                fontSize: fontSizes.text,
                fontFamily: "Playfair",
                lineHeight: fontSizes.text * 1.5,
              },
            ]}
          >
            {verse.text}
          </MotiText>
        )}

        {translationOption === "both" && (
          <View style={[styles.divider, { backgroundColor: colors.border }]} />
        )}

        {(translationOption === "french" || translationOption === "both") && (
          <MotiText
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "timing",
              duration: 500,
              delay: index * 50 + 200,
            }}
            style={[
              styles.verseTranslation,
              {
                color:
                  translationOption === "both" ? colors.inactive : colors.text,
                fontSize:
                  fontSizes.text - (translationOption === "both" ? 2 : 0),
                fontFamily:
                  translationOption === "both" ? "PlayfairItalic" : "Playfair",
                lineHeight:
                  (fontSizes.text - (translationOption === "both" ? 2 : 0)) *
                  1.5,
              },
            ]}
          >
            {verse.french}
          </MotiText>
        )}
      </TouchableOpacity>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  verseItem: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  verseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  verseNumber: {
    fontWeight: "bold",
    marginRight: 8,
  },
  verseText: {
    lineHeight: 24,
  },
  divider: {
    height: 1,
    marginVertical: 8,
  },
  verseTranslation: {
    lineHeight: 24,
    fontStyle: "italic",
  },
  verseActions: {
    flexDirection: "row",
  },
  verseAction: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
});