import { Logo } from "@/src/assets/icons/icon";
import AppSafeArea from "@/src/components/AppSafeArea";
import MovieCard from "@/src/components/MovieCard";
import SearchBar from "@/src/components/SearchBar";
import useFetch from "@/src/hooks/useFetch";
import { fetchMovies } from "@/src/services/api";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

export default function Search() {
  const router = useRouter();
  const [text, setText] = useState("");

  const {
    data: Movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: text }), false);

  useEffect(() => {
    const newMovies = setTimeout(async () => {
      if (text.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(newMovies);
  }, [text]);

  return (
    <AppSafeArea>
      <View style={{ paddingHorizontal: 12 }}>
        <View className="mt-[10px] self-center">
          <Logo />
        </View>
        <SearchBar
          style={{ marginTop: 24 }}
          value={text}
          onChangeText={(value: string) => setText(value)}
        />

        {loading && (
          <ActivityIndicator
            size={40}
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        )}

        {error && (
          <Text className="text-white font-bold text-[20px] mt-14 self-center">
            Error : {error?.message}
          </Text>
        )}

        {!loading &&
          !error &&
          text.trim() &&
          Array.isArray(Movies) &&
          Movies.length > 0 && (
            <View className="mt-6 py-4">
              <Text className="text-white text-[20px] font-bold">
                Search results for : {""}
                <Text className="text-['#D1C0FF]">{text}</Text>
              </Text>
            </View>
          )}

        {Movies && Array.isArray(Movies) && (
          <FlatList
            data={Movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MovieCard {...item} />}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 16, // Add extra space at the bottom so last cards are visible
              marginVertical: 16,
            }}
            contentContainerStyle={{ gap: 20, paddingBottom: 300 }}
            ListEmptyComponent={
              !loading && !error ? (
                <View className="mt-10" px-5>
                  <Text className="text-white text-center">
                    {text.trim() ? "No movies found" : "Search for a movie"}
                  </Text>
                </View>
              ) : null
            }
          />
        )}
      </View>
    </AppSafeArea>
  );
}
