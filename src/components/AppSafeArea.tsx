import React, { ReactNode } from "react";
import { Dimensions, Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Logo } from "../assets/icons/icon";

const { height: screenHeight } = Dimensions.get("window");

export default function AppSafeArea({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image
        source={require("@/src/assets/images/image-bg.png")}
        className="absolute w-full z-0"
      />
      <ScrollView
        className=" px-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <View className="mt-[10px] self-center">
          <Logo />
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
