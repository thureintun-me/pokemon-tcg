import { createStackNavigator } from "@react-navigation/stack";
import { AccountStackParamsList, options } from "../types";
import { Account, ThemeChange } from "@/screens";

const Stack = createStackNavigator<AccountStackParamsList>();
const AccountStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          title: "Account",
        }}
      />
      <Stack.Screen
        name="Theme"
        component={ThemeChange}
        options={{
          title: "Theme",
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
