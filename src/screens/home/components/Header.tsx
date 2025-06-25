import { useTheme } from "@react-navigation/native";
import { Image, Text, View } from "react-native";

const POKEMON_IMAGE = require("assets/pokemon.png");
const Header = () => {
  const { colors, fonts } = useTheme();
  return (
    <View
      style={{
        height: 200,
        backgroundColor: colors.card,
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", marginTop: 80 }}>
        <Text style={{ ...fonts.bold, color: colors.text }}>
          Pokémon TCG Market
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: 100,
          backgroundColor: colors.primary,
          alignSelf: "center",
          marginTop: 150,
        }}
      >
        <Image source={POKEMON_IMAGE} style={{ width: 100, height: 100 }} />
      </View>
    </View>
  );
};

export default Header;
