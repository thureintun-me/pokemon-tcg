import { AppTheme } from "@/types/AppTheme.type";
import { Platform } from "react-native";

// Pokémon blue, yellow, rgb(255, 0, 0) inspired palette
const POKEMON_PURPLE = "#4E2A84"; // Gengar's purple (retained)
const POKEMON_YELLOW = "rgb(255, 213, 0)"; // Pikachu yellow
const POKEMON_RED = "rgb(255, 66, 66)"; // Charizard/alert red
const POKEMON_PINK = "#D66AC0"; // Gengar eye-inspired pinkish highlight

const BACKGROUND_LIGHT = "#F5F5FA"; // Slightly tinted from plain white
const CARD_LIGHT = "#FFFFFF";
const TEXT_LIGHT = "#2C1A3E"; // Deeper purple for Gengar mood
const BORDER_LIGHT = "#DDD6EB"; // Muted purple border

const BACKGROUND_DARK = "#1C102D"; // Gengar night mode
const CARD_DARK = "#301848";
const TEXT_DARK = "#FFFFFF";
const BORDER_DARK = "#4E2A84";

export const AppLightTheme: AppTheme = {
  dark: false,
  colors: {
    primary: POKEMON_PURPLE,
    background: BACKGROUND_LIGHT,
    card: CARD_LIGHT,
    text: TEXT_LIGHT,
    border: BORDER_LIGHT,
    notification: POKEMON_PINK,
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
    primary: POKEMON_PURPLE,
    background: BACKGROUND_DARK,
    card: CARD_DARK,
    text: TEXT_DARK,
    border: BORDER_DARK,
    notification: POKEMON_PINK,
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
