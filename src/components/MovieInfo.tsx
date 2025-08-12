import React from "react";
import { StyleSheet, Text, View } from "react-native";

type movieProps = {
  label: string;
  text?: string | undefined;
};

export default function MovieInfo({ label, text }: movieProps) {
  return (
    <View className="mb-6">
      <Text className="text-[12px] font-normal text-['#A8B5DB']">{label}</Text>
      <Text className="leading-[1.75] text-white mt-[4px]">{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
