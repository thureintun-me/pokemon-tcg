import { AppTheme } from "@/types/AppTheme.type";
import { Platform } from "react-native";

// Pokémon blue, yellow, red inspired palette
const POKEMON_BLUE = "rgb(55, 105, 230)";
const POKEMON_YELLOW = "rgb(255, 213, 0)";
const POKEMON_RED = "rgb(255, 66, 66)";
const BACKGROUND_LIGHT = "rgb(245, 245, 245)";
const CARD_LIGHT = "rgb(255, 255, 255)";
const TEXT_LIGHT = "rgb(34, 34, 34)";
const BORDER_LIGHT = "rgb(222, 222, 222)";

const BACKGROUND_DARK = "rgb(18, 18, 18)";
const CARD_DARK = "rgb(28, 28, 30)";
const TEXT_DARK = "rgb(235, 235, 235)";
const BORDER_DARK = "rgb(60, 60, 60)";

export const AppLightTheme: AppTheme = {
  dark: false,
  colors: {
    primary: POKEMON_BLUE,
    background: BACKGROUND_LIGHT,
    card: CARD_LIGHT,
    text: TEXT_LIGHT,
    border: BORDER_LIGHT,
    notification: POKEMON_YELLOW,
    error: POKEMON_RED,
  },
  fonts: Platform.select({
    default: {
      regular: {
        fontFamily: "Roboto-Regular",
        fontWeight: "normal",
        fontSize: 13,
      },
      medium: {
        fontFamily: "Roboto-Medium",
        fontWeight: "normal",
        fontSize: 16,
      },
      bold: {
        fontFamily: "Roboto-Bold",
        fontWeight: "600",
        fontSize: 23,
        letterSpacing: 0.8,
      },
      heavy: {
        fontFamily: "Roboto-Black",
        fontWeight: "700",
        fontSize: 26,
      },
    },
  }),
};

export const AppDarkTheme: AppTheme = {
  dark: true,
  colors: {
    primary: POKEMON_BLUE,
    background: BACKGROUND_DARK,
    card: CARD_DARK,
    text: TEXT_DARK,
    border: BORDER_DARK,
    notification: POKEMON_YELLOW,
    error: POKEMON_RED,
  },
  fonts: Platform.select({
    default: {
      regular: {
        fontFamily: "Roboto-Regular",
        fontWeight: "normal",
        fontSize: 13,
      },
      medium: {
        fontFamily: "Roboto-Medium",
        fontWeight: "normal",
        fontSize: 16,
      },
      bold: {
        fontFamily: "Roboto-Bold",
        fontWeight: "600",
        fontSize: 23,
        letterSpacing: 0.8,
      },
      heavy: {
        fontFamily: "Roboto-Black",
        fontWeight: "700",
        fontSize: 26,
      },
    },
  }),
};
