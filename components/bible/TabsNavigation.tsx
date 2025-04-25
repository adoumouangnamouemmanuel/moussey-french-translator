import { useEffect } from "react"
import { Animated, TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native"
import * as Haptics from "expo-haptics"

interface TabsNavigationProps {
  colors: any
  activeTab: string
  setActiveTab: (tab: string) => void
  tabIndicatorPosition: Animated.Value
}

export const TabsNavigation = ({ colors, activeTab, setActiveTab, tabIndicatorPosition }: TabsNavigationProps) => {
  const { width: screenWidth } = Dimensions.get("window")

  // Update tab indicator position when active tab changes
  useEffect(() => {
    const position = activeTab === "books" ? 0 : activeTab === "recent" ? 1 : 2
    Animated.spring(tabIndicatorPosition, {
      toValue: position,
      useNativeDriver: true,
      friction: 8,
      tension: 50,
    }).start()
  }, [activeTab, tabIndicatorPosition])

  return (
    <View style={[styles.tabsContainer, { backgroundColor: colors.card }]}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          setActiveTab("books")
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }}
      >
        <Text
          style={[
            styles.tabText,
            {
              color: activeTab === "books" ? colors.primary : colors.inactive,
              fontFamily: "MontserratBold",
            },
          ]}
        >
          Livres
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          setActiveTab("recent")
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }}
      >
        <Text
          style={[
            styles.tabText,
            {
              color: activeTab === "recent" ? colors.primary : colors.inactive,
              fontFamily: "MontserratBold",
            },
          ]}
        >
          Récents
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          setActiveTab("bookmarks")
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        }}
      >
        <Text
          style={[
            styles.tabText,
            {
              color: activeTab === "bookmarks" ? colors.primary : colors.inactive,
              fontFamily: "MontserratBold",
            },
          ]}
        >
          Signets
        </Text>
      </TouchableOpacity>

      {/* Animated Tab Indicator */}
      <Animated.View
        style={[
          styles.tabIndicator,
          {
            backgroundColor: colors.primary,
            transform: [
              {
                translateX: tabIndicatorPosition.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [0, screenWidth / 3, (screenWidth / 3) * 2],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    paddingVertical: 5,
    position: "relative",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
    zIndex: 1,
  },
  tabIndicator: {
    position: "absolute",
    bottom: 0,
    height: 3,
    width: "33.33%",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
  },
})