"use client";
import { StyleSheet, View, Text } from "react-native";
import EmptyState from "./EmptyState";

type FavoritesTabProps = {
  colors: any;
};

const FavoritesTab = ({ colors }: FavoritesTabProps) => {
  const cardColor = colors?.card || "white";
  const textColor = colors?.text || "#333";

  return (
    <View style={styles.tabContentContainer}>
      <View style={[styles.tabHeader, { backgroundColor: cardColor }]}>
        <Text style={[styles.tabTitle, { color: textColor }]}>Favoris</Text>
      </View>
      <EmptyState
        icon="star"
        title="Pas encore de favoris"
        subtitle="Appuyez sur l'icône en forme d'étoile sur n'importe quel mot pour l'ajouter à vos favoris"
        colors={colors}
      />
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
});

export default FavoritesTab;
