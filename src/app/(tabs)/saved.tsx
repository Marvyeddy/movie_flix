import React from "react";
import { Text, View } from "react-native";

export default function Saved() {
  return (
    <View className="flex-1 bg-primary items-center justify-center px-6">
      <View className="items-center mb-8">
        <View className="w-28 h-28 rounded-full bg-[#AB8BFF] mb-4 items-center justify-center">
          <Text className="text-4xl text-white font-bold">💾</Text>
        </View>
        <Text className="text-white text-2xl font-bold mb-1">Saved Movies</Text>
        <Text className="text-[#A8B5DB] text-base text-center">
          Your favorite movies will appear here.
        </Text>
      </View>
      <View className="w-full bg-[#221F3D] rounded-lg p-6 mb-4 items-center">
        <Text className="text-[#A8B5DB] text-sm mb-2">No saved movies yet</Text>
        <Text className="text-white text-lg font-semibold text-center">
          Start saving movies to easily find them later!
        </Text>
      </View>
    </View>
  );
}
