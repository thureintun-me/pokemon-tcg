import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { AppDarkTheme, AppLightTheme } from "@/themes/AppTheme";
import { AppTheme, ThemeType } from "@/types/AppTheme.type";
import { Appearance, useColorScheme } from "react-native";

const useAppTheme = () => {
  const colorScheme = Appearance.getColorScheme();
  console.log("colorScheme", colorScheme);
  const selectedThemeType = useAppSelector(
    (state: RootState) => state.theme.theme,
  );

  let selectedTheme: AppTheme;

  if (selectedThemeType === "default") {
    selectedTheme = colorScheme === "light" ? AppLightTheme : AppDarkTheme;
  } else {
    selectedTheme =
      selectedThemeType === "light" ? AppLightTheme : AppDarkTheme;
  }
  return selectedTheme;
};

export default useAppTheme;
