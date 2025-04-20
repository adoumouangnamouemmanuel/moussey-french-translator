"use client";

import type React from "react";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  type ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  type DictionaryEntry,
  getFavorites,
  getFavoriteEntries,
} from "../utils/dictionary";

interface FavoritesContextType {
  favorites: string[];
  favoriteEntries: DictionaryEntry[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => Promise<void>;
  loadFavorites: () => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  favoriteEntries: [],
  isFavorite: () => false,
  toggleFavorite: async () => {},
  loadFavorites: async () => {},
});

export const useFavorites = () => useContext(FavoritesContext);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteEntries, setFavoriteEntries] = useState<DictionaryEntry[]>([]);

  const loadFavorites = async () => {
    try {
      const favIds = await getFavorites();
      setFavorites(favIds);

      const entries = await getFavoriteEntries();
      setFavoriteEntries(entries);
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const isFavorite = (id: string): boolean => {
    return favorites.includes(id);
  };

  const toggleFavorite = async (id: string) => {
    try {
      const FAVORITES_STORAGE_KEY = "dictionary_favorites";
      const newFavorites = isFavorite(id)
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id];

      setFavorites(newFavorites);
      await AsyncStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(newFavorites)
      );
      await loadFavorites(); // Reload favorite entries
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        favoriteEntries,
        isFavorite,
        toggleFavorite,
        loadFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};