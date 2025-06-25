import { Theme } from "@react-navigation/native";

export type ThemeType = "default" | "light" | "dark";

export interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  error: string;
}

export interface AppTheme extends Theme {
  colors: ThemeColors;
}
