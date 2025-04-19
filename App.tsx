import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  Foundation,
} from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DictionaryScreen from "./screens/DictionaryScreen";
import TranslatorScreen from "./screens/TranslatorScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import HistoryScreen from "./screens/HistoryScreen";
import PhrasesScreen from "./screens/PhrasesScreen";
import IrregularVerbsScreen from "./screens/IrregularVerbsScreen";
import PhrasalVerbsScreen from "./screens/PhrasalVerbsScreen";
import AudioPlayerScreen from "./screens/AudioPlayerScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ListsScreen from "./screens/ListsScreen";
import WordDetailScreen from "./screens/WordDetailScreen";
import StatisticsScreen from "./screens/StatisticsScreen";
import PracticeScreen from "./screens/PracticeScreen";
import LearningScreen from "./screens/LearningScreen";
import BibleScreen from "./screens/BibleScreen";
import HistoiresMousseyScreen from "./screens/HistoireMousseyScreen";

// Context
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavigationContent() {
  const { colors, isDark } = useTheme();

  function HomeTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.inactive,
          tabBarStyle: {
            paddingBottom: 5,
            backgroundColor: colors.background,
            borderTopColor: colors.border,
          },
          headerShown: false,
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="LearnTab"
          component={LearningScreen}
          options={{
            tabBarLabel: "Apprendre",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="graduation-cap" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="PracticeTab"
          component={PracticeScreen}
          options={{
            tabBarLabel: "Pratiquer",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="rocket-launch" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="StatsTab"
          component={StatisticsScreen}
          options={{
            tabBarLabel: "Stats",
            tabBarIcon: ({ color, size }) => (
              <Foundation name="graph-trend" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="BibleTab"
          component={BibleScreen}
          options={{
            tabBarLabel: "Bible",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="bible" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dictionary"
          component={DictionaryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Translator"
          component={TranslatorScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Phrases"
          component={PhrasesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IrregularVerbs"
          component={IrregularVerbsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistoiresMoussey"
          component={HistoiresMousseyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PhrasalVerbs"
          component={PhrasalVerbsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AudioPlayer"
          component={AudioPlayerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lists"
          component={ListsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WordDetail"
          component={WordDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style={isDark ? "light" : "dark"} />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppProvider>
          <NavigationContent />
        </AppProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}