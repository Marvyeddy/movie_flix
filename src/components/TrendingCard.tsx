import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type TrendingProps = {
  movie: TrendingMovie;
  index: number;
};

export default function TrendingCard({ movie, index }: TrendingProps) {
  return (
    <Link
      href={{
        pathname: `/movies/[id]`,
        params: { id: String(movie.movie_id) },
      }}
      asChild
    >
      <TouchableOpacity className="w-32">
        <Image
          source={{
            uri: movie.poster_url,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold mt-2" numberOfLines={1}>
          {movie.title}
        </Text>

        {/* <View>
          <Text className="text-[#9CA4AB] font-bold text-xs">
            {movie.}
          </Text>
        </View> */}
      </TouchableOpacity>
    </Link>
  );
}
