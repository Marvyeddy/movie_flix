import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { Search } from "../assets/icons/icon";

type SearchBarProps = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function SearchBar({ onPress, style }: SearchBarProps) {
  return (
    <View
      className="flex-row items-center gap-[10px] py-[8px] px-[14px] rounded-[30px] bg-['#0F0D23']"
      style={style}
    >
      <Search />
      <TextInput
        onPress={onPress}
        placeholder="Search through 300+ movies online"
        placeholderTextColor={"#A8B5DB"}
        className="flex-1 text-['#A8B5DB]"
        value=""
        onChange={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
