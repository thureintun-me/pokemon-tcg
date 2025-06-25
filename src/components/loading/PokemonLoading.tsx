import { useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const POKEMON_BALL_IMAGE = require("assets/poke-ball.png");
const IMAGE_SIZE = width * 0.2;

const PokemonLoading = () => {
  const { colors, fonts } = useTheme();
  const rotation = useSharedValue(0);

  const themeStyle = {
    backgroundColor: colors.background,
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 3000,
        easing: Easing.linear,
      }),
      -1, // infinite repeat
    );
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={POKEMON_BALL_IMAGE}
        style={[styles.image, themeStyle, animatedStyle]}
        resizeMode={"contain"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

export default PokemonLoading;
