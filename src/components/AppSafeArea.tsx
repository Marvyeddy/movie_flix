import React, { ReactNode } from "react";
import { Dimensions, Image } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

const { height: screenHeight } = Dimensions.get("window");

type SafeAreaprops = {
  children: ReactNode;
} & SafeAreaViewProps;

export default function AppSafeArea({ children, style }: SafeAreaprops) {
  return (
    <SafeAreaView className="flex-1 bg-primary" style={style}>
      <Image
        source={require("@/src/assets/images/image-bg.png")}
        className="absolute w-full z-0"
      />

      {children}
    </SafeAreaView>
  );
}
