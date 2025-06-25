import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Heart, House, User } from "lucide-react-native";
import { AppTabsParamList } from "../types";
import HomeStackNavigator from "../stacks/HomeStack";
import FavouriteStackNavigator from "../stacks/FavouriteStack";
import AccountStackNavigator from "../stacks/AccountStack";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

const Tab = createBottomTabNavigator<AppTabsParamList>();
const AppBottomTabNavigator = () => {
  const favourites = useAppSelector(
    (state: RootState) => state.favouritesPokemon.favourites,
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeTab") {
            return <House color={color} size={size} />;
          } else if (route.name === "FavouriteTab") {
            return <Heart color={color} size={size} />;
          } else {
            return <User color={color} size={size} />;
          }
        },
        tabBarBadge:
          route.name === "FavouriteTab" && favourites.length > 0
            ? favourites.length
            : undefined,
        tabBarActiveTintColor: "#4E2A84",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },

        tabBarLabelStyle: {
          fontSize: 14, // Font size of tab labels
          fontFamily: "Roboto-Medium", // Font family of tab labels
          fontWeight: "normal", // Optional: makes the label bold
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: "Home",
        }}
      />
      <Tab.Screen
        options={{
          title: "Likes",
        }}
        name="FavouriteTab"
        component={FavouriteStackNavigator}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountStackNavigator}
        options={{
          title: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabNavigator;
