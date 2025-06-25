import { NavigationContainer } from "@react-navigation/native";
import UnAuthorizeStack from "./stacks/UnAuthorizeStack";
import { usePokemonTheme } from "@/hooks";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import HomeStackNavigator from "./stacks/HomeStack";
import AppBottomTabNavigator from "./tabs/AppBottomTabNavigator";

const ApplicationNavigator = () => {
  const theme = usePokemonTheme();
  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <NavigationContainer theme={theme}>
      {user ? <AppBottomTabNavigator /> : <UnAuthorizeStack />}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
