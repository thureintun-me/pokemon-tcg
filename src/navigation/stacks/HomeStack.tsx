import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamsList } from "../types";
import { Home } from "@/screens";
const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
