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

// Context
import { AppProvider } from "./context/AppContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#008080",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { paddingBottom: 5 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="LearnTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Learn",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="graduation-cap" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="PracticeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Practice",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="rocket-launch" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="StatsTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Stats",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="graph-trend" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#008080",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Dictionary" component={DictionaryScreen} />
      <Stack.Screen name="Translator" component={TranslatorScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Phrases" component={PhrasesScreen} />
      <Stack.Screen name="IrregularVerbs" component={IrregularVerbsScreen} />
      <Stack.Screen name="PhrasalVerbs" component={PhrasalVerbsScreen} />
      <Stack.Screen name="AudioPlayer" component={AudioPlayerScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Lists" component={ListsScreen} />
      <Stack.Screen name="WordDetail" component={WordDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer>
          <AppNavigator />
          <StatusBar style="light" />
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}