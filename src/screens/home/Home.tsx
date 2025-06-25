import { PokemonLoading } from "@/components";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Header from "./components/Header";
import { useTheme } from "@react-navigation/native";
import useFetchPokemon from "./hooks/useFetchPokemon";
import PokemonCard from "../../components/card/PokemonCard";

const Home = () => {
  const { colors, fonts } = useTheme();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    useFetchPokemon();
  const pokemons = data?.pages?.flatMap((page) => page.pokemons);

  const getMorePokemon = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  console.log("Pokemons", pokemons);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Header />
      <FlatList
        data={pokemons}
        style={{
          flex: 1,
          paddingTop: 30,
          paddingBottom: 120,
        }}
        onEndReached={getMorePokemon}
        onEndReachedThreshold={0.8} //
        // ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item, index }) => (
          <PokemonCard key={item.id} item={item} />
        )}
        ListFooterComponent={() =>
          isFetchingNextPage ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <PokemonLoading />
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
};

export default Home;
