import AsyncStorage from "@react-native-async-storage/async-storage";

// History item type
export interface HistoryItem {
  id: string;
  word?: string;
  phrase?: string;
  translation: string;
  type: "dictionary" | "translator";
  timestamp: string;
  date: Date; // For sorting
}

// Storage key
export const HISTORY_STORAGE_KEY = "app_history";

// Format timestamp for display
export const formatTimestamp = (date: Date): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date >= today) {
    return `Aujourd'hui, ${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  } else if (date >= yesterday) {
    return `Hier, ${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  } else {
    const days = Math.floor(
      (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (days < 7) {
      return `Il y a ${days} jours`;
    } else {
      return date.toLocaleDateString();
    }
  }
};

// Add item to history
export const addToHistory = async (
  item: Omit<HistoryItem, "id" | "timestamp" | "date">
) => {
  try {
    // Load existing history
    const historyData = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
    const existingHistory: HistoryItem[] = historyData
      ? JSON.parse(historyData)
      : [];

    // Create new history item
    const now = new Date();
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      ...item,
      timestamp: formatTimestamp(now),
      date: now,
    };

    // Add to beginning of array and limit to 100 items
    const updatedHistory = [newItem, ...existingHistory].slice(0, 100);

    // Save to AsyncStorage
    await AsyncStorage.setItem(
      HISTORY_STORAGE_KEY,
      JSON.stringify(updatedHistory)
    );

    return true;
  } catch (error) {
    console.error("Error adding to history:", error);
    return false;
  }
};

// Get history items
export const getHistoryItems = async (): Promise<HistoryItem[]> => {
  try {
    const historyData = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
    if (historyData) {
      const parsedHistory = JSON.parse(historyData) as HistoryItem[];
      // Convert string dates back to Date objects for sorting
      const historyWithDates = parsedHistory.map((item) => ({
        ...item,
        date: new Date(item.date),
      }));
      // Sort by date, newest first
      historyWithDates.sort((a, b) => b.date.getTime() - a.date.getTime());
      return historyWithDates;
    }
    return [];
  } catch (error) {
    console.error("Error getting history items:", error);
    return [];
  }
};

// Clear history
export const clearHistory = async (): Promise<boolean> => {
  try {
    await AsyncStorage.removeItem(HISTORY_STORAGE_KEY);
    return true;
  } catch (error) {
    console.error("Error clearing history:", error);
    return false;
  }
};

// Delete history item
export const deleteHistoryItem = async (id: string): Promise<boolean> => {
  try {
    const historyData = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
    if (historyData) {
      const history = JSON.parse(historyData) as HistoryItem[];
      const updatedHistory = history.filter((item) => item.id !== id);
      await AsyncStorage.setItem(
        HISTORY_STORAGE_KEY,
        JSON.stringify(updatedHistory)
      );
    }
    return true;
  } catch (error) {
    console.error("Error deleting history item:", error);
    return false;
  }
};

// Delete multiple history items
export const deleteHistoryItems = async (ids: string[]): Promise<boolean> => {
  try {
    const historyData = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
    if (historyData) {
      const history = JSON.parse(historyData) as HistoryItem[];
      const updatedHistory = history.filter((item) => !ids.includes(item.id));
      await AsyncStorage.setItem(
        HISTORY_STORAGE_KEY,
        JSON.stringify(updatedHistory)
      );
    }
    return true;
  } catch (error) {
    console.error("Error deleting history items:", error);
    return false;
  }
};
