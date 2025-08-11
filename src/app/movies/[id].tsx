import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

type MovieParams = {
  id: string;
};

export default function MovieDetail() {
  const { id } = useLocalSearchParams<MovieParams>();

  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Text className="text-white text-xl">Movie ID: {id}</Text>
    </View>
  );
}
