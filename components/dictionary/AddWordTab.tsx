import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

type AddWordTabProps = {
  colors: any;
  newWord: {
    moussey: string;
    french: string;
    pronunciation: string;
  };
  setNewWord: (word: any) => void;
  onAddWord: () => void;
};

const AddWordTab = ({
  colors,
  newWord,
  setNewWord,
  onAddWord,
}: AddWordTabProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";
  const backgroundColor = colors?.background || "#f5f5f5";

  return (
    <View style={styles.tabContentContainer}>
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text style={[styles.tabTitle, { color: textColor }]}>
          Ajouter un nouveau mot
        </Text>
      </View>
      <View style={[styles.addWordForm, { backgroundColor: cardColor }]}>
        <View style={styles.formGroup}>
          <Text style={[styles.formLabel, { color: textColor }]}>
            Mot Moussey
          </Text>
          <TextInput
            style={[
              styles.formInput,
              { backgroundColor: backgroundColor, color: textColor },
            ]}
            placeholder="Entrez le mot en Moussey"
            placeholderTextColor={inactiveColor}
            value={newWord.moussey}
            onChangeText={(text) => setNewWord({ ...newWord, moussey: text })}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={[styles.formLabel, { color: textColor }]}>
            Traduction Française
          </Text>
          <TextInput
            style={[
              styles.formInput,
              { backgroundColor: backgroundColor, color: textColor },
            ]}
            placeholder="Entrez la traduction française"
            placeholderTextColor={inactiveColor}
            value={newWord.french}
            onChangeText={(text) => setNewWord({ ...newWord, french: text })}
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={[styles.formLabel, { color: textColor }]}>
            Prononciation
          </Text>
          <TextInput
            style={[
              styles.formInput,
              { backgroundColor: backgroundColor, color: textColor },
            ]}
            placeholder="Entrez la prononciation"
            placeholderTextColor={inactiveColor}
            value={newWord.pronunciation}
            onChangeText={(text) =>
              setNewWord({ ...newWord, pronunciation: text })
            }
          />
        </View>
        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: primaryColor }]}
          onPress={onAddWord}
        >
          <Text style={styles.submitButtonText}>Ajouter le mot</Text>
        </TouchableOpacity>
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
  addWordForm: {
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  formGroup: {
    marginBottom: 15,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  submitButton: {
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddWordTab;