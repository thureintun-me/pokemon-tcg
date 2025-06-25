import { createStackNavigator } from "@react-navigation/stack";
import { FavouriteStackParamsList, options } from "../types";
import { FavouritePokemon } from "@/screens";

const Stack = createStackNavigator<FavouriteStackParamsList>();
const FavouriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ ...options }}>
      <Stack.Screen
        name="Likes"
        component={FavouritePokemon}
        options={{
          headerShown: true,
          title: "Your Favourites Pokemon",
        }}
      />
    </Stack.Navigator>
  );
};

export default FavouriteStackNavigator;
