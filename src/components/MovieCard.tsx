import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Star } from "../assets/icons/icon";

export default function MovieCard({
  title,
  poster_path,
  release_date,
  vote_average,
  id,
}: Movie) {
  return (
    <Link
      href={{ pathname: "/movies/[id]", params: { id: String(id) } }}
      asChild
    >
      <TouchableOpacity className="w-[30%] relative">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://source.unsplash.com/random/200x300?movie",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center gap-[2px] mt-[9px] mb-[6px]">
          <Star />
          <Text className="text-white text-xs font-bold">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View>
          <Text className="text-[#9CA4AB] font-bold text-xs">
            {release_date?.split("-")[0]}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({});
