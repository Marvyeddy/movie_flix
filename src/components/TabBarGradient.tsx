import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TextProps, View, ViewProps } from "react-native";
import { SvgProps } from "react-native-svg";

type TabBarProps = {
  icon: React.FC<SvgProps>; // Icon component, not just props
  title: string;
  focused: boolean;
  color?: string;
} & ViewProps &
  TextProps;

export default function TabBarGradient({
  icon: Icon,
  title,
  focused,
  color,
}: TabBarProps) {
  if (focused) {
    return (
      <View className="flex-1 flex-row items-center min-h-[49px] min-w-[112px] rounded-[70px] overflow-hidden justify-center gap-[5px] px-3">
        <LinearGradient
          colors={["#D6C7FF", "#AB8BFF"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        <Icon color={color} />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            color: "#151312",
          }}
        >
          {title}
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Icon color={color} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
