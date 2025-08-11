import { Logo } from "@/src/assets/icons/icon";
import AppSafeArea from "@/src/components/AppSafeArea";
import MovieCard from "@/src/components/MovieCard";
import SearchBar from "@/src/components/SearchBar";
import useFetch from "@/src/hooks/useFetch";
import { fetchMovies } from "@/src/services/api";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: Movies,
    loading: MoviesLoading,
    error: MoviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <AppSafeArea>
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

        {MoviesLoading ? (
          <ActivityIndicator
            size={40}
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        ) : MoviesError ? (
          <Text className="text-white font-bold text-[20px] mt-14 self-center">
            Error : {MoviesError?.message}
          </Text>
        ) : (
          <>
            <SearchBar
              onPress={() => router.push("/(tabs)/search")}
              style={{
                marginTop: 24,
              }}
            />

            <>
              <Text className="text-[20px] text-white font-bold mt-[16px] mb-[12px]">
                Latest Movies
              </Text>

              {Movies && Array.isArray(Movies) && (
                <FlatList
                  data={Movies}
                  scrollEnabled={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => <MovieCard {...item} />}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 16,
                    marginVertical: 16,
                  }}
                />
              )}
            </>
          </>
        )}
      </ScrollView>
    </AppSafeArea>
  );
}
