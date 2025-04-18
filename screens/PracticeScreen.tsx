"use client";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

// Practice activities data
const practiceActivities = [
  {
    id: "1",
    title: "Word Filling",
    icon: (
      <MaterialCommunityIcons
        name="format-letter-case"
        size={32}
        color="white"
      />
    ),
  },
  {
    id: "2",
    title: "Listening Test",
    icon: <Ionicons name="headset" size={32} color="white" />,
  },
  {
    id: "3",
    title: "Listening Writing",
    icon: (
      <MaterialCommunityIcons name="pencil-outline" size={32} color="white" />
    ),
  },
  {
    id: "4",
    title: "Speaking Test",
    icon: <Ionicons name="mic" size={32} color="white" />,
  },
  {
    id: "5",
    title: "Dual Game",
    icon: <MaterialCommunityIcons name="grid" size={32} color="white" />,
  },
  {
    id: "6",
    title: "Matching Game",
    icon: <MaterialCommunityIcons name="connection" size={32} color="white" />,
  },
  {
    id: "7",
    title: "True or False",
    icon: (
      <MaterialCommunityIcons
        name="check-circle-outline"
        size={32}
        color="white"
      />
    ),
  },
  {
    id: "8",
    title: "Fall Game",
    icon: (
      <MaterialCommunityIcons name="arrow-down-bold" size={32} color="white" />
    ),
  },
  {
    id: "9",
    title: "Finding Words",
    icon: (
      <MaterialCommunityIcons
        name="crosshairs-question"
        size={32}
        color="white"
      />
    ),
  },
  {
    id: "10",
    title: "Gap Filling",
    icon: (
      <MaterialCommunityIcons name="puzzle-outline" size={32} color="white" />
    ),
  },
  {
    id: "11",
    title: "Flashcard",
    icon: (
      <MaterialCommunityIcons name="cards-outline" size={32} color="white" />
    ),
  },
];

// Word lists data
const wordLists = [
  { id: "1", title: "Default List" },
  { id: "2", title: "Beginner Words" },
  { id: "3", title: "Travel Vocabulary" },
  { id: "4", title: "Food and Dining" },
];

export default function PracticeScreen() {
  const { points } = useAppContext();
  const [showListDropdown, setShowListDropdown] = useState(false);
  const [selectedList, setSelectedList] = useState(wordLists[0]);
  const [showFilterView, setShowFilterView] = useState(false);

  const selectList = (list: (typeof wordLists)[0]) => {
    setSelectedList(list);
    setShowListDropdown(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#008080" barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.pointsContainer}>
          <Ionicons name="cart-outline" size={24} color="white" />
          <View style={styles.starContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.pointsText}>{points}</Text>
          </View>
        </View>
        <Text style={styles.headerTitle}>Practice</Text>
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>

      {/* List selector */}
      <View style={styles.listSelectorContainer}>
        <Text style={styles.listSelectorLabel}>Ask from this list</Text>

        <View style={styles.listSelectorControls}>
          <TouchableOpacity
            style={styles.listSelector}
            onPress={() => setShowListDropdown(!showListDropdown)}
          >
            <Text style={styles.listSelectorText}>{selectedList.title}</Text>
            <Ionicons
              name={showListDropdown ? "chevron-up" : "chevron-down"}
              size={20}
              color="black"
            />
          </TouchableOpacity>

          <View style={styles.listActions}>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => setShowFilterView(!showFilterView)}
            >
              <Ionicons name="filter" size={24} color="#008080" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewButton}>
              <Ionicons name="grid" size={24} color="#008080" />
            </TouchableOpacity>
          </View>
        </View>

        {showListDropdown && (
          <View style={styles.dropdown}>
            {wordLists.map((list) => (
              <TouchableOpacity
                key={list.id}
                style={styles.dropdownItem}
                onPress={() => selectList(list)}
              >
                <Text style={styles.dropdownText}>{list.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Practice activities grid */}
      <FlatList
        data={practiceActivities}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.activityCard}>
            <View style={styles.activityIconContainer}>{item.icon}</View>
            <Text style={styles.activityTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.activitiesGrid}
      />
    </View>
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
    paddingTop: StatusBar.currentHeight || 15,
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
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  pointsText: {
    color: "#FFD700",
    marginLeft: 2,
    fontWeight: "bold",
  },
  listSelectorContainer: {
    backgroundColor: "#008080",
    padding: 15,
    position: "relative",
  },
  listSelectorLabel: {
    color: "white",
    marginBottom: 10,
  },
  listSelectorControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  listSelector: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 5,
  },
  listSelectorText: {
    fontSize: 16,
  },
  listActions: {
    flexDirection: "row",
    marginLeft: 10,
  },
  filterButton: {
    backgroundColor: "white",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  viewButton: {
    backgroundColor: "white",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    position: "absolute",
    top: 75,
    left: 15,
    right: 15,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  dropdownText: {
    fontSize: 16,
  },
  activitiesGrid: {
    padding: 10,
  },
  activityCard: {
    flex: 1,
    backgroundColor: "#008080",
    margin: 5,
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
  },
  activityIconContainer: {
    marginBottom: 10,
  },
  activityTitle: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
});