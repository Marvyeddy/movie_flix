import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MovieCard({
  title,
  popularity,
  poster_path,
  release_date,
  vote_count,
  id,
}: Movie) {
  return (
    <Link
      href={{ pathname: "/movies/[id]", params: { id: String(id) } }}
      asChild
    >
      <TouchableOpacity className="w-[30%]">
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
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({});
