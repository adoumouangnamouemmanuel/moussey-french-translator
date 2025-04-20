import { mousseyToFrenchDictionary } from "../data/dictionary/moussey_french";
import { mousseyToFrenchDictionary as frenchToMousseyDictionary } from "../data/dictionary/french_moussey";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Types for dictionary entries
export interface DictionaryEntry {
  id: string;
  moussey: string;
  french: string;
  pronunciation?: string;
  partsOfSpeech?: string[];
  definitions?: {
    definition: string;
    example?: string;
    exampleTranslation?: string;
  }[];
  relatedWords?: string[];
}

// Convert Moussey to French dictionary to our format
export const convertMousseyToFrenchEntries = (): DictionaryEntry[] => {
  return mousseyToFrenchDictionary.map((entry, index) => ({
    id: `m2f_${index}`,
    moussey: entry.word,
    french: entry.definitions.map((def) => def.definition).join(", "),
    pronunciation: entry.phonetic,
    partsOfSpeech: entry.partsOfSpeech,
    definitions: entry.definitions,
    relatedWords: entry.relatedWords,
  }));
};

// Convert French to Moussey dictionary to our format
export const convertFrenchToMousseyEntries = (): DictionaryEntry[] => {
  return frenchToMousseyDictionary.map((entry, index) => ({
    id: `f2m_${index}`,
    french: entry.word,
    moussey: entry.translations.map((t) => t.word).join(", "),
    definitions: entry.translations.map((t) => ({
      definition: t.word,
      example: t.example,
      exampleTranslation: t.exampleTranslation,
    })),
  }));
};

// Get all dictionary entries
export const getAllDictionaryEntries = (): DictionaryEntry[] => {
  const mousseyToFrench = convertMousseyToFrenchEntries();
  const frenchToMoussey = convertFrenchToMousseyEntries();
  return [...mousseyToFrench, ...frenchToMoussey];
};

// Search dictionary entries
export const searchDictionary = (
  query: string,
  language: "moussey" | "french" | "both" = "both",
  partOfSpeech?: string
): DictionaryEntry[] => {
  const allEntries = getAllDictionaryEntries();
  const lowerQuery = query.toLowerCase();

  return allEntries.filter((entry) => {
    // Filter by part of speech if specified
    if (partOfSpeech && partOfSpeech !== "all") {
      if (!entry.partsOfSpeech || !entry.partsOfSpeech.includes(partOfSpeech)) {
        return false;
      }
    }

    // Filter by language and query
    if (language === "moussey" || language === "both") {
      if (entry.moussey.toLowerCase().includes(lowerQuery)) {
        return true;
      }
    }

    if (language === "french" || language === "both") {
      if (entry.french.toLowerCase().includes(lowerQuery)) {
        return true;
      }
    }

    return false;
  });
};

// Get entry by ID
export const getEntryById = (id: string): DictionaryEntry | undefined => {
  const allEntries = getAllDictionaryEntries();
  return allEntries.find((entry) => entry.id === id);
};

// Get all parts of speech
export const getPartsOfSpeech = (fromFrench: boolean): string[] => {
  const entries = fromFrench
    ? convertFrenchToMousseyEntries()
    : convertMousseyToFrenchEntries();
  const partsSet = new Set<string>();

  entries.forEach((entry) => {
    if (entry.partsOfSpeech) {
      entry.partsOfSpeech.forEach((part) => partsSet.add(part));
    }
  });

  return Array.from(partsSet).sort();
};

// Favorites management
export const FAVORITES_STORAGE_KEY = "dictionary_favorites";

export const getFavorites = async (): Promise<string[]> => {
  try {
    const favoritesJson = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  } catch (error) {
    console.error("Failed to get favorites", error);
    return [];
  }
};

export const toggleFavorite = async (id: string): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    const isFavorite = favorites.includes(id);

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((favId) => favId !== id);
    } else {
      newFavorites = [...favorites, id];
    }

    await AsyncStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(newFavorites)
    );
    return !isFavorite;
  } catch (error) {
    console.error("Failed to toggle favorite", error);
    return false;
  }
};

export const isFavorite = async (id: string): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    return favorites.includes(id);
  } catch (error) {
    console.error("Failed to check if favorite", error);
    return false;
  }
};

export const getFavoriteEntries = async (): Promise<DictionaryEntry[]> => {
  try {
    const favorites = await getFavorites();
    const allEntries = getAllDictionaryEntries();
    return allEntries.filter((entry) => favorites.includes(entry.id));
  } catch (error) {
    console.error("Failed to get favorite entries", error);
    return [];
  }
};

// Word of the day
export interface WordOfDayItem {
  mousseyWord: {
    id: string;
    word: string;
    partOfSpeech?: string;
    definitions?: string[];
  };
  frenchWord: {
    id: string;
    word: string;
    partOfSpeech?: string;
    definitions?: string[];
  };
}

export const WORD_OF_DAY_STORAGE_KEY = "word_of_day";
export const WORD_OF_DAY_DATE_KEY = "word_of_day_date";

export const getWordOfDay = async (): Promise<WordOfDayItem[]> => {
  try {
    // Check if we need to generate new words
    const lastDateStr = await AsyncStorage.getItem(WORD_OF_DAY_DATE_KEY);
    const today = new Date().toDateString();

    if (lastDateStr !== today) {
      // Generate new words
      const allEntries = getAllDictionaryEntries();
      const wordOfDayItems: WordOfDayItem[] = [];

      // Get 3 random entries
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * allEntries.length);
        const entry = allEntries[randomIndex];

        const wordOfDayItem: WordOfDayItem = {
          mousseyWord: {
            id: entry.id,
            word: entry.moussey,
            partOfSpeech: entry.partsOfSpeech
              ? entry.partsOfSpeech[0]
              : undefined,
            definitions: entry.definitions
              ? entry.definitions.map((def) => def.definition)
              : undefined,
          },
          frenchWord: {
            id: entry.id,
            word: entry.french,
            partOfSpeech: entry.partsOfSpeech
              ? entry.partsOfSpeech[0]
              : undefined,
            definitions: entry.definitions
              ? entry.definitions.map((def) => def.definition)
              : undefined,
          },
        };

        wordOfDayItems.push(wordOfDayItem);
      }

      // Save new words and date
      await AsyncStorage.setItem(
        WORD_OF_DAY_STORAGE_KEY,
        JSON.stringify(wordOfDayItems)
      );
      await AsyncStorage.setItem(WORD_OF_DAY_DATE_KEY, today);

      return wordOfDayItems;
    } else {
      // Return existing words
      const wordsJson = await AsyncStorage.getItem(WORD_OF_DAY_STORAGE_KEY);
      return wordsJson ? JSON.parse(wordsJson) : [];
    }
  } catch (error) {
    console.error("Failed to get words of day", error);
    return [];
  }
};

// Translation functions
export const translateText = (
  text: string,
  fromLanguage: "moussey" | "french"
): string => {
  // Simple word-by-word translation for now
  const words = text.toLowerCase().split(/\s+/);
  const translatedWords = words.map((word) => {
    const entries = searchDictionary(word, fromLanguage);
    if (entries.length > 0) {
      return fromLanguage === "moussey"
        ? entries[0].french
        : entries[0].moussey;
    }
    return word; // Return original word if no translation found
  });

  return translatedWords.join(" ");
};

// Get Moussey entry by word
export const getMousseyEntry = (word: string): DictionaryEntry | undefined => {
  const entries = convertMousseyToFrenchEntries();
  return entries.find(
    (entry) => entry.moussey.toLowerCase() === word.toLowerCase()
  );
};

// Get French entry by word
export const getFrenchEntry = (word: string): DictionaryEntry | undefined => {
  const entries = convertFrenchToMousseyEntries();
  return entries.find(
    (entry) => entry.french.toLowerCase() === word.toLowerCase()
  );
};

// Save favorite by word and language
export const saveFavorite = async (
  word: string,
  language: "moussey" | "french"
): Promise<void> => {
  try {
    const entry =
      language === "moussey" ? getMousseyEntry(word) : getFrenchEntry(word);
    if (entry) {
      await toggleFavorite(entry.id);
    }
  } catch (error) {
    console.error("Failed to save favorite", error);
  }
};