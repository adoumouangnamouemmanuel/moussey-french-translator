"use client";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type MoreOptionsTabProps = {
  colors: any;
};

const MoreOptionsTab = ({ colors }: MoreOptionsTabProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";

  return (
    <View style={styles.tabContentContainer}>
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text style={[styles.tabTitle, { color: textColor }]}>
          Plus d'options
        </Text>
      </View>
      <View style={styles.moreOptionsContainer}>
        <TouchableOpacity
          style={[styles.moreOption, { backgroundColor: cardColor }]}
        >
          <Ionicons
            name="download-outline"
            size={24}
            color={primaryColor}
            style={styles.moreOptionIcon}
          />
          <View style={styles.moreOptionContent}>
            <Text style={[styles.moreOptionTitle, { color: textColor }]}>
              Télécharger le dictionnaire
            </Text>
            <Text
              style={[styles.moreOptionDescription, { color: inactiveColor }]}
            >
              Utiliser le dictionnaire hors ligne
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={inactiveColor} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.moreOption, { backgroundColor: cardColor }]}
        >
          <Ionicons
            name="settings-outline"
            size={24}
            color={primaryColor}
            style={styles.moreOptionIcon}
          />
          <View style={styles.moreOptionContent}>
            <Text style={[styles.moreOptionTitle, { color: textColor }]}>
              Paramètres
            </Text>
            <Text
              style={[styles.moreOptionDescription, { color: inactiveColor }]}
            >
              Personnaliser votre dictionnaire
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={inactiveColor} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.moreOption, { backgroundColor: cardColor }]}
        >
          <Ionicons
            name="help-circle-outline"
            size={24}
            color={primaryColor}
            style={styles.moreOptionIcon}
          />
          <View style={styles.moreOptionContent}>
            <Text style={[styles.moreOptionTitle, { color: textColor }]}>
              Aide & Commentaires
            </Text>
            <Text
              style={[styles.moreOptionDescription, { color: inactiveColor }]}
            >
              Obtenir de l'aide ou envoyer des commentaires
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={inactiveColor} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.moreOption, { backgroundColor: cardColor }]}
        >
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={primaryColor}
            style={styles.moreOptionIcon}
          />
          <View style={styles.moreOptionContent}>
            <Text style={[styles.moreOptionTitle, { color: textColor }]}>
              À propos
            </Text>
            <Text
              style={[styles.moreOptionDescription, { color: inactiveColor }]}
            >
              Version et informations sur l'application
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={inactiveColor} />
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
  moreOptionsContainer: {
    padding: 15,
  },
  moreOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  moreOptionIcon: {
    marginRight: 15,
  },
  moreOptionContent: {
    flex: 1,
  },
  moreOptionTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  moreOptionDescription: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default MoreOptionsTab;
