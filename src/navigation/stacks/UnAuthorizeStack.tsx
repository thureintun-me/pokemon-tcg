import { SignIn, SignUp } from "@/screens";
import { createStackNavigator } from "@react-navigation/stack";
import { UnAuthorizeStackParamsList } from "../types";

const Stack = createStackNavigator<UnAuthorizeStackParamsList>();
const UnAuthorizeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default UnAuthorizeStack;
