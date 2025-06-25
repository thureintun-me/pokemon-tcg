import { AccountStackScreenProps } from "@/navigation/types";
import { ThemeType } from "@/types/AppTheme.type";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ThemeItem from "./components/ThemeItem";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { setTheme } from "@/features/theme/themeSlice";

const ThemeScreen = ({
  navigation: route,
}: AccountStackScreenProps<"Theme">) => {
  const { colors, fonts } = useTheme();
  const selectedThemeType = useAppSelector(
    (state: RootState) => state.theme.theme,
  );
  const dispatch = useAppDispatch();

  const handleThemeChange = (newTheme: ThemeType) => {
    dispatch(setTheme(newTheme));
  };

  const isLight = selectedThemeType === "light";
  const isDark = selectedThemeType === "dark";
  const isSystem = selectedThemeType === "default";

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <View style={{ gap: 30, marginTop: 30 }}>
        <ThemeItem
          value={"light"}
          title={"Light Theme"}
          onPress={handleThemeChange}
          isActive={isLight}
        />
        <ThemeItem
          value={"dark"}
          title={"Dark Theme"}
          onPress={handleThemeChange}
          isActive={isDark}
        />
        <ThemeItem
          value={"default"}
          title={"System Theme"}
          onPress={handleThemeChange}
          isActive={isSystem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
});
export default ThemeScreen;
