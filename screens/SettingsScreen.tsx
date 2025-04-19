"use client";

import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
  StatusBar,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/ThemeContext";

// Color options for customization
const colorOptions = [
  { id: "red", name: "Rouge", color: "#E50914" },
  { id: "blue", name: "Bleu", color: "#1877F2" },
  { id: "green", name: "Vert", color: "#4CAF50" },
  { id: "purple", name: "Violet", color: "#9C27B0" },
  { id: "orange", name: "Orange", color: "#FF9800" },
];

export default function SettingsScreen() {
  const { colors, isDark, toggleTheme, accentColor, setAccentColor } =
    useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [appLanguage, setAppLanguage] = useState("fr"); // 'fr' for French, 'en' for English
  const [showColorModal, setShowColorModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);
  const [showPronunciation, setShowPronunciation] = useState(true);

  const toggleNotifications = () =>
    setNotificationsEnabled((previousState) => !previousState);
  const toggleSound = () => setSoundEnabled((previousState) => !previousState);
  const toggleAutoPlayAudio = () =>
    setAutoPlayAudio((previousState) => !previousState);
  const toggleOfflineMode = () =>
    setOfflineMode((previousState) => !previousState);
  const toggleShowPronunciation = () =>
    setShowPronunciation((previousState) => !previousState);

  const handleClearData = () => {
    Alert.alert(
      appLanguage === "fr" ? "Effacer les données" : "Clear App Data",
      appLanguage === "fr"
        ? "Êtes-vous sûr de vouloir effacer toutes les données de l'application? Cette action ne peut pas être annulée."
        : "Are you sure you want to clear all app data? This action cannot be undone.",
      [
        {
          text: appLanguage === "fr" ? "Annuler" : "Cancel",
          style: "cancel",
        },
        {
          text: appLanguage === "fr" ? "Effacer" : "Clear",
          onPress: () => console.log("Clear data pressed"),
          style: "destructive",
        },
      ]
    );
  };

  const toggleAppLanguage = () => {
    setShowLanguageModal(true);
  };

  const selectLanguage = (language: string) => {
    setAppLanguage(language);
    setShowLanguageModal(false);
  };

  const openColorModal = () => {
    setShowColorModal(true);
  };

  const selectColor = (colorId: string) => {
    setAccentColor(colorId as any);
    setShowColorModal(false);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["bottom"]}
    >
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />

      {/* Header */}
      <LinearGradient colors={colors.headerBackground as [string, string]} style={styles.header}>
        <Text style={styles.headerTitle}>
          {appLanguage === "fr" ? "Paramètres" : "Settings"}
        </Text>
      </LinearGradient>

      <ScrollView style={styles.scrollView}>
        {/* Appearance Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text, borderBottomColor: colors.border },
            ]}
          >
            {appLanguage === "fr" ? "Apparence" : "Appearance"}
          </Text>

          <View
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="moon-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Mode Sombre" : "Dark Mode"}
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={isDark}
            />
          </View>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
            onPress={openColorModal}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="color-palette-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Couleur d'Accent" : "Accent Color"}
              </Text>
            </View>
            <View style={styles.settingValue}>
              <View
                style={[
                  styles.colorPreview,
                  { backgroundColor: colors.primary },
                ]}
              />
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.inactive}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text, borderBottomColor: colors.border },
            ]}
          >
            {appLanguage === "fr" ? "Préférences" : "Preferences"}
          </Text>

          <View
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Notifications" : "Notifications"}
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleNotifications}
              value={notificationsEnabled}
            />
          </View>

          <View
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="volume-high-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Son" : "Sound"}
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSound}
              value={soundEnabled}
            />
          </View>

          <View
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="play-circle-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Lecture Audio Automatique"
                  : "Auto-Play Audio"}
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleAutoPlayAudio}
              value={autoPlayAudio}
            />
          </View>

          <View
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <MaterialCommunityIcons
                name="text-recognition"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Afficher la Prononciation"
                  : "Show Pronunciation"}
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleShowPronunciation}
              value={showPronunciation}
            />
          </View>

          <View
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="cloud-offline-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Mode Hors Ligne" : "Offline Mode"}
              </Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleOfflineMode}
              value={offlineMode}
            />
          </View>
        </View>

        {/* Language Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text, borderBottomColor: colors.border },
            ]}
          >
            {appLanguage === "fr" ? "Langue" : "Language"}
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
            onPress={toggleAppLanguage}
          >
            <View style={styles.settingInfo}>
              <MaterialIcons
                name="language"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Langue de l'Application"
                  : "App Language"}
              </Text>
            </View>
            <View style={styles.settingValue}>
              <Text
                style={[styles.settingValueText, { color: colors.inactive }]}
              >
                {appLanguage === "fr" ? "Français" : "English"}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.inactive}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Account Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text, borderBottomColor: colors.border },
            ]}
          >
            {appLanguage === "fr" ? "Compte" : "Account"}
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="person-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Profil" : "Profile"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="cloud-download-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Sauvegarde & Restauration"
                  : "Backup & Restore"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="sync-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Synchronisation" : "Sync"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>
        </View>

        {/* About Section */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.text, borderBottomColor: colors.border },
            ]}
          >
            {appLanguage === "fr" ? "À Propos" : "About"}
          </Text>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "À Propos de l'Application"
                  : "About App"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="star-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Noter l'Application" : "Rate App"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="help-circle-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr" ? "Aide & Support" : "Help & Support"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Conditions d'Utilisation"
                  : "Terms of Service"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.settingItem, { borderBottomColor: colors.border }]}
          >
            <View style={styles.settingInfo}>
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color={colors.primary}
                style={styles.settingIcon}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Politique de Confidentialité"
                  : "Privacy Policy"}
              </Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={colors.inactive}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.dangerButton, { backgroundColor: colors.primary }]}
          onPress={handleClearData}
        >
          <Text style={styles.dangerButtonText}>
            {appLanguage === "fr"
              ? "Effacer les Données de l'Application"
              : "Clear App Data"}
          </Text>
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={[styles.versionText, { color: colors.inactive }]}>
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>

      {/* Color Selection Modal */}
      <Modal
        visible={showColorModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowColorModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Choisir une Couleur"
                  : "Choose a Color"}
              </Text>
              <TouchableOpacity onPress={() => setShowColorModal(false)}>
                <Ionicons name="close" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
            <FlatList
              data={colorOptions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.colorOption,
                    { borderBottomColor: colors.border },
                  ]}
                  onPress={() => selectColor(item.id)}
                >
                  <View style={styles.colorOptionContent}>
                    <View
                      style={[
                        styles.colorSwatch,
                        { backgroundColor: item.color },
                      ]}
                    />
                    <Text style={[styles.colorName, { color: colors.text }]}>
                      {item.name}
                    </Text>
                  </View>
                  {accentColor === item.id && (
                    <Ionicons
                      name="checkmark"
                      size={24}
                      color={colors.primary}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Language Selection Modal */}
      <Modal
        visible={showLanguageModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                {appLanguage === "fr"
                  ? "Choisir une Langue"
                  : "Choose a Language"}
              </Text>
              <TouchableOpacity onPress={() => setShowLanguageModal(false)}>
                <Ionicons name="close" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[
                styles.languageOption,
                { borderBottomColor: colors.border },
              ]}
              onPress={() => selectLanguage("fr")}
            >
              <Text style={[styles.languageName, { color: colors.text }]}>
                Français
              </Text>
              {appLanguage === "fr" && (
                <Ionicons name="checkmark" size={24} color={colors.primary} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageOption,
                { borderBottomColor: colors.border },
              ]}
              onPress={() => selectLanguage("en")}
            >
              <Text style={[styles.languageName, { color: colors.text }]}>
                English
              </Text>
              {appLanguage === "en" && (
                <Ionicons name="checkmark" size={24} color={colors.primary} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    paddingTop: StatusBar.currentHeight || 15,
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  section: {
    margin: 10,
    marginBottom: 5,
    borderRadius: 12,
    overflow: "hidden",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
  },
  settingInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingIcon: {
    marginRight: 15,
  },
  settingText: {
    fontSize: 16,
  },
  settingValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingValueText: {
    marginRight: 5,
  },
  colorPreview: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  dangerButton: {
    margin: 10,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  dangerButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  versionContainer: {
    alignItems: "center",
    padding: 20,
  },
  versionText: {
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    borderRadius: 12,
    overflow: "hidden",
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  colorOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
  },
  colorOptionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorSwatch: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 15,
  },
  colorName: {
    fontSize: 16,
  },
  languageOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
  },
  languageName: {
    fontSize: 16,
  },
});