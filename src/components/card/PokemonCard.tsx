import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { toggleFavourite } from "@/features/favourite-pokemon/favouritePokemonSlice";
import { useTheme } from "@react-navigation/native";
import { Image, View, Text, TouchableOpacity } from "react-native";

const PokemonCard = ({ item }) => {
  const { colors, fonts } = useTheme();
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(
    (state: RootState) => state.favouritesPokemon.favourites,
  );
  const isSelected = favourites.some((p) => p.id === item.id);

  return (
    <View style={{ marginHorizontal: 50, marginTop: 100 }}>
      <View
        style={{
          height: 250,
          width: "100%",
          position: "absolute",
          borderWidth: 0.5,
          borderColor: colors.border,
          borderRadius: 20,
          top: 300,
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...fonts.bold,
            color: colors.text,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            marginVertical: 15,
            ...fonts.regular,
            color: colors.text,
          }}
        >
          {item.rarity}
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 60,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...fonts.bold,
              color: colors.text,
            }}
          >
            $ {item?.cardmarket.prices.averageSellPrice}
          </Text>
          <Text
            style={{
              ...fonts.bold,
              color: colors.text,
            }}
          >
            {item?.set.total} left
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 350,
          width: "80%",
          alignSelf: "center",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: colors.border,
        }}
      >
        <Image
          source={{ uri: item.images.large }}
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
        />
      </View>
      <TouchableOpacity
        onPress={() => dispatch(toggleFavourite(item))}
        style={{
          height: 60,
          backgroundColor: item.isSelected
            ? colors.notification
            : colors.primary,
          marginHorizontal: 50,
          marginTop: 165,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontFamily: "RobotoMono-Regular",
            color: "#fff",
          }}
        >
          {isSelected ? "Liked" : "Like"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PokemonCard;
