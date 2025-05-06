"use client";

import { useRef, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

type WordList = {
  id: string;
  title: string;
};

type ListSelectorProps = {
  lists: WordList[];
  selectedList: WordList;
  showDropdown: boolean;
  colors: any;
  onToggleDropdown: () => void;
  onSelectList: (list: WordList) => void;
};

const ListSelector = ({
  lists,
  selectedList,
  showDropdown,
  colors,
  onToggleDropdown,
  onSelectList,
}: ListSelectorProps) => {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const dropdownAnim = useRef(new Animated.Value(0)).current;

  // Run animations on mount
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        delay: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Animate dropdown
  useEffect(() => {
    Animated.timing(dropdownAnim, {
      toValue: showDropdown ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [showDropdown]);

  const handleToggleDropdown = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onToggleDropdown();
  };

  const handleSelectList = (list: WordList) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onSelectList(list);
  };

  const dropdownHeight = dropdownAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, lists.length * 50],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Text style={[styles.label, { color: colors.text }]}>
        Pratiquer avec cette liste
      </Text>

      <TouchableOpacity
        style={[
          styles.selector,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
        onPress={handleToggleDropdown}
        activeOpacity={0.9}
      >
        <Text style={[styles.selectorText, { color: colors.text }]}>
          {selectedList.title}
        </Text>
        <Ionicons
          name={showDropdown ? "chevron-up" : "chevron-down"}
          size={20}
          color={colors.text}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.dropdown,
          {
            height: dropdownHeight,
            backgroundColor: colors.card,
            borderColor: colors.border,
          },
        ]}
      >
        {lists.map((list) => (
          <TouchableOpacity
            key={list.id}
            style={[styles.dropdownItem, { borderBottomColor: colors.border }]}
            onPress={() => handleSelectList(list)}
          >
            <Text style={[styles.dropdownText, { color: colors.text }]}>
              {list.title}
            </Text>
            {selectedList.id === list.id && (
              <Ionicons name="checkmark" size={20} color={colors.primary} />
            )}
          </TouchableOpacity>
        ))}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    position: "relative",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  selector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  selectorText: {
    fontSize: 16,
  },
  dropdown: {
    borderRadius: 8,
    marginTop: 5,
    overflow: "hidden",
    borderWidth: 1,
  },
  dropdownItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
  },
  dropdownText: {
    fontSize: 16,
  },
});

export default ListSelector;