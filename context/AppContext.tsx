"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

type AppContextType = {
  points: number
  addPoints: (amount: number) => void
  favorites: string[]
  toggleFavorite: (wordId: string) => void
  isFavorite: (wordId: string) => boolean
  history: string[]
  addToHistory: (wordId: string) => void
  clearHistory: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [points, setPoints] = useState(1100)
  const [favorites, setFavorites] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])

  // Load data from AsyncStorage on app start
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedPoints = await AsyncStorage.getItem("points")
        const storedFavorites = await AsyncStorage.getItem("favorites")
        const storedHistory = await AsyncStorage.getItem("history")

        if (storedPoints) setPoints(Number.parseInt(storedPoints))
        if (storedFavorites) setFavorites(JSON.parse(storedFavorites))
        if (storedHistory) setHistory(JSON.parse(storedHistory))
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error)
      }
    }

    loadData()
  }, [])

  // Save data to AsyncStorage whenever it changes
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("points", points.toString())
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites))
        await AsyncStorage.setItem("history", JSON.stringify(history))
      } catch (error) {
        console.error("Error saving data to AsyncStorage:", error)
      }
    }

    saveData()
  }, [points, favorites, history])

  const addPoints = (amount: number) => {
    setPoints((current) => current + amount)
  }

  const toggleFavorite = (wordId: string) => {
    setFavorites((current) => (current.includes(wordId) ? current.filter((id) => id !== wordId) : [...current, wordId]))
  }

  const isFavorite = (wordId: string) => {
    return favorites.includes(wordId)
  }

  const addToHistory = (wordId: string) => {
    setHistory((current) => {
      // Remove if already exists to avoid duplicates
      const filtered = current.filter((id) => id !== wordId)
      // Add to the beginning of the array
      return [wordId, ...filtered]
    })
  }

  const clearHistory = () => {
    setHistory([])
  }

  const value = {
    points,
    addPoints,
    favorites,
    toggleFavorite,
    isFavorite,
    history,
    addToHistory,
    clearHistory,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}