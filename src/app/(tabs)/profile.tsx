import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 bg-primary items-center justify-center px-6">
      <View className="items-center mb-8">
        <View className="w-28 h-28 rounded-full bg-[#AB8BFF] mb-4 items-center justify-center">
          <Text className="text-4xl text-white font-bold">JD</Text>
        </View>
        <Text className="text-white text-2xl font-bold mb-1">John Doe</Text>
        <Text className="text-[#A8B5DB] text-base">johndoe@email.com</Text>
      </View>
      <View className="w-full bg-[#221F3D] rounded-lg p-6 mb-4">
        <Text className="text-[#A8B5DB] text-sm mb-2">Favorite Genre</Text>
        <Text className="text-white text-lg font-semibold">Action, Sci-Fi</Text>
      </View>
      <View className="w-full bg-[#221F3D] rounded-lg p-6 mb-4">
        <Text className="text-[#A8B5DB] text-sm mb-2">Watched Movies</Text>
        <Text className="text-white text-lg font-semibold">124</Text>
      </View>
      <View className="w-full bg-[#221F3D] rounded-lg p-6">
        <Text className="text-[#A8B5DB] text-sm mb-2">Member Since</Text>
        <Text className="text-white text-lg font-semibold">Jan 2023</Text>
      </View>
    </View>
  );
}
