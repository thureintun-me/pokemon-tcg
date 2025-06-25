import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { PokemonCard } from "@/components";
import { useTheme } from "@react-navigation/native";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const Favourite = () => {
  const { colors, fonts } = useTheme();
  const favourites = useAppSelector(
    (state: RootState) => state.favouritesPokemon.favourites,
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
        data={favourites}
        renderItem={({ item, index }) => (
          <PokemonCard key={item.id} item={item} />
        )}
        ListEmptyComponent={
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ ...fonts.medium, color: colors.text }}>
              You don't have any pokemons yet!
            </Text>
          </View>
        }
        style={{
          flex: 1,
          paddingVertical: 20,
        }}
      />
    </SafeAreaView>
  );
};

export default Favourite;
