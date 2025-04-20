// Create or update the AppContext to handle favorites

import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITES_STORAGE_KEY } from "../utils/dictionary";

interface AppContextType {
  points: number;
  addPoints: (amount: number) => void;
  favorites: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

const AppContext = createContext<AppContextType>({
  points: 0,
  addPoints: () => {},
  favorites: [],
  isFavorite: () => false,
  toggleFavorite: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [points, setPoints] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Load points from storage
    const loadPoints = async () => {
      try {
        const storedPoints = await AsyncStorage.getItem("points");
        if (storedPoints) {
          setPoints(parseInt(storedPoints, 10));
        }
      } catch (error) {
        console.error("Failed to load points", error);
      }
    };

    // Load favorites from storage
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(
          FAVORITES_STORAGE_KEY
        );
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Failed to load favorites", error);
      }
    };

    loadPoints();
    loadFavorites();
  }, []);

  const addPoints = (amount: number) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    AsyncStorage.setItem("points", newPoints.toString()).catch((error) => {
      console.error("Failed to save points", error);
    });
  };

  const isFavorite = (id: string) => {
    return favorites.includes(id);
  };

  const toggleFavorite = (id: string) => {
    let newFavorites: string[];

    if (isFavorite(id)) {
      newFavorites = favorites.filter((favId) => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }

    setFavorites(newFavorites);
    AsyncStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(newFavorites)
    ).catch((error) => {
      console.error("Failed to save favorites", error);
    });
  };

  return (
    <AppContext.Provider
      value={{ points, addPoints, favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
};
