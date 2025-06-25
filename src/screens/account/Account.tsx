import { AccountStackScreenProps } from "@/navigation/types";
import { useTheme } from "@react-navigation/native";
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileCard from "./components/ProfileCard";
import AccountMenu from "./components/AccountMenu";
import AppInfoMenu from "./components/AppInfoMenu";
import { PokemonButton } from "@/components";
import { supabase } from "@/lib/supabase";
import { useAppDispatch } from "@/app/hooks";
import { setUser, signOut } from "@/features/auth/authSlice";
import { clearFavourites } from "@/features/favourite-pokemon/favouritePokemonSlice";

const Account = ({ navigation, route }: AccountStackScreenProps<"Account">) => {
  const { colors, fonts } = useTheme();
  const dispatch = useAppDispatch();

  const goToTheme = () => {
    navigation.navigate("Theme");
  };

  const goToPhone = () => {
    const phone = "+95977777777";
    Linking.openURL(`tel:${phone}`);
  };

  const goToEmail = () => {
    const mail = "thureintun.me@gmail.com";
    Linking.openURL(`mailto:${mail}`);
  };

  const hadnleSignOut = () => {
    supabase.auth.signOut();
    dispatch(clearFavourites());
    dispatch(signOut());
  };
  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <ProfileCard />

      <ScrollView
        contentContainerStyle={{
          gap: 20,
        }}
        style={{
          marginTop: 30,
        }}
      >
        <AccountMenu title={"Theme"} onPress={goToTheme} />
        <AppInfoMenu title={"Version"} value={"1.0.0"} onPress={() => {}} />
        <AppInfoMenu
          title={"Call Us"}
          value={"09077777777"}
          onPress={goToPhone}
        />
        <AppInfoMenu
          title={"Mail Us"}
          value={"thureintun.me@gmail.com"}
          onPress={goToEmail}
        />
      </ScrollView>

      <View
        style={{
          marginVertical: 30,
          marginHorizontal: 100,
        }}
      >
        <PokemonButton title={"Logout"} onPress={hadnleSignOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 30,
  },
});

export default Account;
