import type React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../context/AppContext";

type FeatureCardProps = {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const FeatureCard = ({ title, icon, onPress }: FeatureCardProps) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
    <View style={styles.cardContent}>
      {icon}
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { points } = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.pointsContainer}>
          <Ionicons name="star" size={24} color="#FFD700" />
          <Text style={styles.pointsText}>{points}</Text>
        </View>
        <Text style={styles.headerTitle}>Lists</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Current word display */}
      <View style={styles.wordContainer}>
        <Text style={styles.word}>clasp</Text>
        <Text style={styles.pronunciation}>/klæsp/</Text>
        <Text style={styles.translation}>fermoir</Text>
        <Text style={styles.partOfSpeech}>(noun) fermoir</Text>
        <Text style={styles.partOfSpeech}>(verb) serrer les mains</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.grid}>
          <FeatureCard
            title="Dictionary"
            icon={<FontAwesome5 name="book" size={32} color="white" />}
            onPress={() => navigation.navigate("Dictionary")}
          />
          <FeatureCard
            title="Translator"
            icon={
              <MaterialCommunityIcons
                name="translate"
                size={32}
                color="white"
              />
            }
            onPress={() => navigation.navigate("Translator")}
          />
          <FeatureCard
            title="Favorites"
            icon={<Ionicons name="star" size={32} color="white" />}
            onPress={() => navigation.navigate("Favorites")}
          />
          <FeatureCard
            title="History"
            icon={<Ionicons name="time" size={32} color="white" />}
            onPress={() => navigation.navigate("History")}
          />
          <FeatureCard
            title="Phrases"
            icon={
              <MaterialCommunityIcons name="puzzle" size={32} color="white" />
            }
            onPress={() => navigation.navigate("Phrases")}
          />
          <FeatureCard
            title="Irregular Verbs"
            icon={<Feather name="clock" size={32} color="white" />}
            onPress={() => navigation.navigate("IrregularVerbs")}
          />
          <FeatureCard
            title="Phrasal Verbs"
            icon={<Feather name="clock" size={32} color="white" />}
            onPress={() => navigation.navigate("PhrasalVerbs")}
          />
          <FeatureCard
            title="Audio Player"
            icon={<Ionicons name="headset" size={32} color="white" />}
            onPress={() => navigation.navigate("AudioPlayer")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#008080",
    padding: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pointsText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "bold",
  },
  wordContainer: {
    backgroundColor: "#008080",
    padding: 15,
    paddingBottom: 20,
  },
  word: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  pronunciation: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  translation: {
    color: "white",
    fontSize: 18,
  },
  partOfSpeech: {
    color: "white",
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  card: {
    width: "50%",
    padding: 5,
  },
  cardContent: {
    backgroundColor: "#008080",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
  },
  cardTitle: {
    color: "white",
    marginTop: 10,
    fontWeight: "500",
    textAlign: "center",
  },
});