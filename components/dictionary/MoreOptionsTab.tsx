import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MoreOptionsTabProps = {
  colors: any;
};

const MoreOptionsTab = ({ colors }: MoreOptionsTabProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";
  const inactiveColor = colors?.inactive || "#999";
  const primaryColor = colors?.primary || "#008080";

  const options: {
    icon:
      | "download-outline"
      | "settings-outline"
      | "help-circle-outline"
      | "information-circle-outline";
    title: string;
    description: string;
  }[] = [
    {
      icon: "download-outline",
      title: "Télécharger le dictionnaire",
      description: "Utiliser le dictionnaire hors ligne",
    },
    {
      icon: "settings-outline",
      title: "Paramètres",
      description: "Personnaliser votre dictionnaire",
    },
    {
      icon: "help-circle-outline",
      title: "Aide & Commentaires",
      description: "Obtenir de l'aide ou envoyer des commentaires",
    },
    {
      icon: "information-circle-outline",
      title: "À propos",
      description: "Version et informations sur l'application",
    },
  ];

  return (
    <View style={styles.tabContentContainer}>
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text style={[styles.tabTitle, { color: textColor }]}>
          Plus d'options
        </Text>
      </View>
      <View style={styles.moreOptionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.moreOption, { backgroundColor: cardColor }]}
          >
            <Ionicons
              name={option.icon}
              size={24}
              color={primaryColor}
              style={styles.moreOptionIcon}
            />
            <View style={styles.moreOptionContent}>
              <Text style={[styles.moreOptionTitle, { color: textColor }]}>
                {option.title}
              </Text>
              <Text
                style={[styles.moreOptionDescription, { color: inactiveColor }]}
              >
                {option.description}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={inactiveColor} />
          </TouchableOpacity>
        ))}
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
