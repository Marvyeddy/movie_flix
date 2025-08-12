import { Logo } from "@/src/assets/icons/icon";
import AppSafeArea from "@/src/components/AppSafeArea";
import MovieCard from "@/src/components/MovieCard";
import SearchBar from "@/src/components/SearchBar";
import TrendingCard from "@/src/components/TrendingCard";
import useFetch from "@/src/hooks/useFetch";
import { fetchMovies } from "@/src/services/api";
import { getTrendingMovies } from "@/src/services/appwrite";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

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

        {MoviesLoading || trendingLoading ? (
          <ActivityIndicator
            size={40}
            color={"#0000ff"}
            className="mt-10 self-center"
          />
        ) : MoviesError || trendingError ? (
          <Text className="text-white font-bold text-[20px] mt-14 self-center">
            Error : {MoviesError?.message || trendingError?.message}
          </Text>
        ) : (
          <>
            <SearchBar
              onPress={() => router.push("/(tabs)/search")}
              style={{
                marginTop: 24,
              }}
            />

            {trendingMovies && (
              <View className="mt-10">
                <Text className="text-white text-[18px] font-bold mb-3">
                  Trending Movies
                </Text>
              </View>
            )}

            <FlatList
              data={
                trendingMovies
                  ? [...trendingMovies].sort((a, b) => b.count - a.count) // sort by highest count first
                  : []
              }
              keyExtractor={(item) => String(item.movie_id)}
              renderItem={({ item, index }) => (
                <View className="ml-[7px]">
                  <TrendingCard movie={item} index={index} />
                  <View className="absolute bottom-5 -left-3.5">
                    <MaskedView
                      maskElement={
                        <Text
                          style={[
                            styles.gradient,
                            { backgroundColor: "transparent" },
                          ]}
                        >
                          {index + 1}
                        </Text>
                      }
                    >
                      <LinearGradient
                        colors={["#FAF9F7", "#9B9EA7"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        <Text style={[styles.gradient, { opacity: 0 }]}>
                          {index + 1}
                        </Text>
                      </LinearGradient>
                    </MaskedView>
                  </View>
                </View>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 20 }}
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

const styles = StyleSheet.create({
  gradient: {
    fontSize: 44,
    fontWeight: 900,
    zIndex: 100,
  },
});
