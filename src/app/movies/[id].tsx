import { Chart, Star } from "@/src/assets/icons/icon";
import MovieInfo from "@/src/components/MovieInfo";
import useFetch from "@/src/hooks/useFetch";
import { fetchMovieDetails } from "@/src/services/appwrite";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

type MovieParams = {
  id: string;
};

export default function MovieDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams<MovieParams>();

  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  return (
    <View className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            style={{
              width: "100%",
              height: 447,
              resizeMode: "stretch",
            }}
          />
        </View>

        <View className="mx-5">
          <View className="mt-[17px]">
            <Text className="text-white text-[20px] font-bold">
              {movie?.title}
            </Text>

            <View className="flex-row items-center gap-[10px] mt-2">
              <Text className="text-['#A8B5DB'] text-sm">
                {movie?.release_date?.split("-")[0]} {" ."}
              </Text>
              <Text className="text-['#A8B5DB'] text-sm">
                {movie?.runtime}M {" ."}
              </Text>
            </View>

            <View className="flex-row gap-[10px] items-center mt-[16px] mb-[30px]">
              <View className="bg-['#221F3D'] rounded-lg px-[10px] py-2 flex-row items-center gap-2">
                <Star />
                <Text className="text-['#A8B5DB'] text-sm">
                  {Math.round(movie?.vote_average ?? 0)} / 10 (
                  {movie?.vote_count} votes)
                </Text>
              </View>

              <View className="bg-['#221F3D'] rounded-lg px-[10px] py-2 flex-row items-center gap-2">
                <Chart />
                <Text className="text-['#A8B5DB'] text-sm">
                  {Math.round(movie?.popularity ?? 0)}
                </Text>
              </View>
            </View>

            <MovieInfo label="Overview" text={movie?.overview ?? undefined} />

            <MovieInfo
              label="Genres"
              text={movie?.genres?.map((g) => g.name).join(" - ") || "N/A"}
            />

            <View className="flex-row gap-[32px] items-center">
              <MovieInfo
                label="Budget"
                text={
                  typeof movie?.budget === "number"
                    ? `$${(movie.budget / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 2 })} Million`
                    : "N/A"
                }
              />

              <MovieInfo
                label="Revenue"
                text={
                  typeof movie?.revenue === "number"
                    ? `$${(movie.revenue / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 2 })} Million`
                    : "N/A"
                }
              />
            </View>

            <MovieInfo
              label="Companies"
              text={
                movie?.production_companies?.map((g) => g.name).join(" - ") ||
                "N/A"
              }
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        className="w-[90%] mx-auto mb-[36px]"
        onPress={() => router.push("/")}
      >
        <LinearGradient
          colors={["#D6C7FF", "#AB8BFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 4,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <View className="flex-row items-center mx-auto gap-1">
            <Text className="font-semibold">Visit Homepage</Text>
            <ArrowRight size={16} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
