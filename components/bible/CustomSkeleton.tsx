"use client";

import React from "react";
import { StyleSheet } from "react-native";
import { Animated } from "react-native";

interface CustomSkeletonProps {
  width: number | string;
  height: number | string;
  colorMode?: "light" | "dark";
  radius?: number;
  show?: boolean;
}

export const CustomSkeleton = ({
  width,
  height,
  colorMode = "light",
  radius = 4,
  show = true,
}: CustomSkeletonProps) => {
  const [fadeAnim] = React.useState(new Animated.Value(0.3));

  React.useEffect(() => {
    if (show) {
      // Create a looping animation for the skeleton
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0.6,
            duration: 800,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      // Reset animation when not showing
      fadeAnim.setValue(0);
    }

    return () => {
      fadeAnim.stopAnimation();
    };
  }, [show]);

  if (!show) return null;

  const backgroundColor = colorMode === "dark" ? "#3a3a3c" : "#e1e1e1";

  return (
    <Animated.View
      style={[
        styles.skeleton,
        {
          width: typeof width === "number" ? width : parseFloat(width),
          height: typeof height === "number" ? height : parseFloat(height),
          borderRadius: radius,
          backgroundColor,
          opacity: fadeAnim,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  skeleton: {
    marginVertical: 5,
  },
});

export default CustomSkeleton;