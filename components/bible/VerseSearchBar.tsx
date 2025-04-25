import { Ionicons } from "@expo/vector-icons";
import {
  Animated,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface VerseSearchBarProps {
  colors: any;
  verseSearchAnim: Animated.Value;
  verseSearchQuery: string;
  searchVerses: (query: string) => void;
  showVerseSearch: boolean;
}

export const VerseSearchBar = ({
  colors,
  verseSearchAnim,
  verseSearchQuery,
  searchVerses,
  showVerseSearch,
}: VerseSearchBarProps) => {
  return (
    <Animated.View
      style={[
        styles.verseSearchContainer,
        {
          height: verseSearchAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 60],
          }),
          opacity: verseSearchAnim,
          marginTop: verseSearchAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 10],
          }),
        },
      ]}
    >
      <View
        style={[
          styles.verseSearchInputContainer,
          {
            backgroundColor: colors.background,
            borderColor: colors.border,
          },
        ]}
      >
        <Ionicons
          name="search"
          size={20}
          color={colors.text}
          style={styles.searchIcon}
        />
        <TextInput
          style={[
            styles.verseSearchInput,
            {
              color: colors.text,
              fontFamily: "Montserrat",
            },
          ]}
          placeholder="Rechercher dans les versets..."
          placeholderTextColor={colors.inactive}
          value={verseSearchQuery}
          onChangeText={searchVerses}
          autoFocus={showVerseSearch}
        />
        {verseSearchQuery.length > 0 && (
          <TouchableOpacity onPress={() => searchVerses("")}>
            <Ionicons name="close-circle" size={20} color={colors.inactive} />
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  verseSearchContainer: {
    overflow: "hidden",
    paddingHorizontal: 15,
  },
  verseSearchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    height: 40,
  },
  verseSearchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
});
