"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeType = "light" | "dark";
type AccentColorType = "red" | "blue" | "green" | "purple" | "orange";

type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  accentColor: AccentColorType;
  toggleTheme: () => void;
  setTheme: (theme: ThemeType) => void;
  setAccentColor: (color: AccentColorType) => void;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    accent: string;
    inactive: string;
    headerBackground: string[];
  };
};

const accentColors = {
  red: {
    primary: "#E50914",
    secondary: "#B20710",
    headerBackground: ["#E50914", "#B20710"],
  },
  blue: {
    primary: "#1877F2",
    secondary: "#0A3D7D",
    headerBackground: ["#1877F2", "#0A3D7D"],
  },
  green: {
    primary: "#4CAF50",
    secondary: "#2E7D32",
    headerBackground: ["#4CAF50", "#2E7D32"],
  },
  purple: {
    primary: "#9C27B0",
    secondary: "#6A1B9A",
    headerBackground: ["#9C27B0", "#6A1B9A"],
  },
  orange: {
    primary: "#FF9800",
    secondary: "#EF6C00",
    headerBackground: ["#FF9800", "#EF6C00"],
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const deviceTheme = useColorScheme();
  const [theme, setThemeState] = useState<ThemeType>("dark");
  const [accentColor, setAccentColorState] = useState<AccentColorType>("red");

  // Load saved theme and accent color on app start
  useEffect(() => {
    const loadThemeSettings = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        const savedAccentColor = await AsyncStorage.getItem("accentColor");

        if (savedTheme) {
          setThemeState(savedTheme as ThemeType);
        } else {
          // Use device theme as default if no saved theme
          setThemeState(deviceTheme === "dark" ? "dark" : "light");
        }

        if (savedAccentColor) {
          setAccentColorState(savedAccentColor as AccentColorType);
        }
      } catch (error) {
        console.error("Failed to load theme settings", error);
      }
    };

    loadThemeSettings();
  }, [deviceTheme]);

  // Save theme when it changes
  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem("theme", theme);
      } catch (error) {
        console.error("Failed to save theme", error);
      }
    };

    saveTheme();
  }, [theme]);

  // Save accent color when it changes
  useEffect(() => {
    const saveAccentColor = async () => {
      try {
        await AsyncStorage.setItem("accentColor", accentColor);
      } catch (error) {
        console.error("Failed to save accent color", error);
      }
    };

    saveAccentColor();
  }, [accentColor]);

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const setAccentColor = (color: AccentColorType) => {
    setAccentColorState(color);
  };

  const isDark = theme === "dark";
  const currentAccentColors = accentColors[accentColor];

  // Define colors based on theme and accent color
  const colors = {
    primary: currentAccentColors.primary,
    secondary: currentAccentColors.secondary,
    background: isDark ? "#000000" : "#FFFFFF",
    card: isDark ? "#1A1A1A" : "#F5F5F5",
    text: isDark ? "#FFFFFF" : "#000000",
    border: isDark ? "#333333" : "#E0E0E0",
    notification: currentAccentColors.primary,
    accent: currentAccentColors.primary,
    inactive: isDark ? "#999999" : "#757575",
    headerBackground: currentAccentColors.headerBackground,
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        accentColor,
        toggleTheme,
        setTheme,
        setAccentColor,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};