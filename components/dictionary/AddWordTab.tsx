"use client";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type AddWordTabProps = {
  colors: any;
  newWord: {
    moussey: string;
    french: string;
    pronunciation: string;
    examples: { example: string; translation: string }[];
  };
  setNewWord: (word: {
    moussey: string;
    french: string;
    pronunciation: string;
    examples: { example: string; translation: string }[];
  }) => void;
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
  const borderColor = colors?.border || "#e0e0e0";

  const [formErrors, setFormErrors] = useState<{
    moussey?: string;
    french?: string;
  }>({});

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const successOpacity = useState(new Animated.Value(0))[0];

  const addExample = () => {
    setNewWord({
      ...newWord,
      examples: [...newWord.examples, { example: "", translation: "" }],
    });
  };

  const updateExample = (
    index: number,
    field: "example" | "translation",
    value: string
  ) => {
    const updatedExamples = [...newWord.examples];
    updatedExamples[index][field] = value;
    setNewWord({
      ...newWord,
      examples: updatedExamples,
    });
  };

  const removeExample = (index: number) => {
    const updatedExamples = [...newWord.examples];
    updatedExamples.splice(index, 1);
    setNewWord({
      ...newWord,
      examples: updatedExamples,
    });
  };

  const validateForm = () => {
    const errors: {
      moussey?: string;
      french?: string;
    } = {};

    if (!newWord.moussey.trim()) {
      errors.moussey = "Le mot Moussey est requis";
    }

    if (!newWord.french.trim()) {
      errors.french = "La traduction française est requise";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onAddWord();

      // Show success message with animation
      setShowSuccessMessage(true);
      Animated.sequence([
        Animated.timing(successOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(2000),
        Animated.timing(successOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowSuccessMessage(false);
      });
    }
  };

  return (
    <View style={styles.tabContentContainer}>
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text style={[styles.tabTitle, { color: textColor }]}>
          Ajouter un nouveau mot
        </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={[styles.addWordForm, { backgroundColor: cardColor }]}>
          <View style={styles.formGroup}>
            <Text style={[styles.formLabel, { color: textColor }]}>
              Mot Moussey <Text style={styles.requiredStar}>*</Text>
            </Text>
            <TextInput
              style={[
                styles.formInput,
                {
                  backgroundColor,
                  color: textColor,
                  borderColor: formErrors.moussey ? "#ff6b6b" : borderColor,
                },
              ]}
              placeholder="Entrez le mot en Moussey"
              placeholderTextColor={inactiveColor}
              value={newWord.moussey}
              onChangeText={(text) => {
                setNewWord({ ...newWord, moussey: text });
                if (formErrors.moussey) {
                  setFormErrors({ ...formErrors, moussey: undefined });
                }
              }}
            />
            {formErrors.moussey && (
              <Text style={styles.errorText}>{formErrors.moussey}</Text>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={[styles.formLabel, { color: textColor }]}>
              Traduction Française <Text style={styles.requiredStar}>*</Text>
            </Text>
            <TextInput
              style={[
                styles.formInput,
                {
                  backgroundColor,
                  color: textColor,
                  borderColor: formErrors.french ? "#ff6b6b" : borderColor,
                },
              ]}
              placeholder="Entrez la traduction française"
              placeholderTextColor={inactiveColor}
              value={newWord.french}
              onChangeText={(text) => {
                setNewWord({ ...newWord, french: text });
                if (formErrors.french) {
                  setFormErrors({ ...formErrors, french: undefined });
                }
              }}
            />
            {formErrors.french && (
              <Text style={styles.errorText}>{formErrors.french}</Text>
            )}
          </View>

          <View style={styles.formGroup}>
            <Text style={[styles.formLabel, { color: textColor }]}>
              Prononciation
            </Text>
            <TextInput
              style={[styles.formInput, { backgroundColor, color: textColor }]}
              placeholder="Entrez la prononciation (optionnel)"
              placeholderTextColor={inactiveColor}
              value={newWord.pronunciation}
              onChangeText={(text) =>
                setNewWord({ ...newWord, pronunciation: text })
              }
            />
          </View>

          <View style={styles.formGroup}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: textColor }]}>
                Exemples d'utilisation
              </Text>
              <TouchableOpacity
                style={[
                  styles.addExampleButton,
                  { backgroundColor: `${primaryColor}20` },
                ]}
                onPress={addExample}
              >
                <Ionicons name="add" size={18} color={primaryColor} />
                <Text style={[styles.addExampleText, { color: primaryColor }]}>
                  Ajouter
                </Text>
              </TouchableOpacity>
            </View>

            {newWord.examples.length === 0 ? (
              <View
                style={[styles.emptyExamples, { backgroundColor, borderColor }]}
              >
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color={inactiveColor}
                />
                <Text
                  style={[styles.emptyExamplesText, { color: inactiveColor }]}
                >
                  Ajoutez des exemples pour illustrer l'utilisation du mot
                </Text>
              </View>
            ) : (
              newWord.examples.map((ex, index) => (
                <View
                  key={index}
                  style={[
                    styles.exampleContainer,
                    { backgroundColor, borderColor },
                  ]}
                >
                  <View style={styles.exampleHeader}>
                    <Text
                      style={[styles.exampleNumber, { color: primaryColor }]}
                    >
                      Exemple {index + 1}
                    </Text>
                    <TouchableOpacity onPress={() => removeExample(index)}>
                      <Ionicons
                        name="close-circle"
                        size={20}
                        color={inactiveColor}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.exampleForm}>
                    <TextInput
                      style={[
                        styles.exampleInput,
                        { color: textColor, borderColor },
                      ]}
                      placeholder="Phrase d'exemple"
                      placeholderTextColor={inactiveColor}
                      value={ex.example}
                      onChangeText={(text) =>
                        updateExample(index, "example", text)
                      }
                    />
                    <TextInput
                      style={[
                        styles.exampleInput,
                        { color: textColor, borderColor },
                      ]}
                      placeholder="Traduction de l'exemple"
                      placeholderTextColor={inactiveColor}
                      value={ex.translation}
                      onChangeText={(text) =>
                        updateExample(index, "translation", text)
                      }
                    />
                  </View>
                </View>
              ))
            )}
          </View>

          <TouchableOpacity
            style={[styles.submitButton, { backgroundColor: primaryColor }]}
            onPress={handleSubmit}
          >
            <Ionicons
              name="save-outline"
              size={20}
              color="white"
              style={styles.submitIcon}
            />
            <Text style={styles.submitButtonText}>Ajouter le mot</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {showSuccessMessage && (
        <Animated.View
          style={[
            styles.successMessage,
            { backgroundColor: "#4caf50", opacity: successOpacity },
          ]}
        >
          <Ionicons name="checkmark-circle" size={20} color="white" />
          <Text style={styles.successText}>Mot ajouté avec succès!</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContentContainer: {
    flex: 1,
    position: "relative",
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
  scrollContainer: {
    flex: 1,
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
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "500",
  },
  requiredStar: {
    color: "#ff6b6b",
    fontWeight: "bold",
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    color: "#ff6b6b",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  addExampleButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addExampleText: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
  },
  emptyExamples: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyExamplesText: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
  },
  exampleContainer: {
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  exampleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  exampleNumber: {
    fontWeight: "500",
    fontSize: 14,
  },
  exampleForm: {
    padding: 10,
  },
  exampleInput: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    fontSize: 14,
  },
  submitButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  submitIcon: {
    marginRight: 8,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  successMessage: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#4caf50",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  successText: {
    color: "white",
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default AddWordTab;