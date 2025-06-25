import { NavigatorScreenParams } from "@react-navigation/native";
import {
  StackNavigationOptions,
  StackScreenProps,
} from "@react-navigation/stack";

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<AppTabsParamList>;
  Unauthorized: NavigatorScreenParams<UnAuthorizeStackParamsList>;
};

export type HomeStackParamsList = {
  Home: undefined;
};

export type UnAuthorizeStackParamsList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type AppTabsParamList = {
  HomeTab: undefined;
  FavouriteTab: undefined;
  AccountTab: undefined;
};

export type AccountStackParamsList = {
  Account: undefined;
  Theme: undefined;
};

export type FavouriteStackParamsList = {
  Likes: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamsList> =
  StackScreenProps<HomeStackParamsList, T>;

export type AccountStackScreenProps<T extends keyof AccountStackParamsList> =
  StackScreenProps<AccountStackParamsList, T>;

export type UnAuthorizeStackScreenProps<
  T extends keyof UnAuthorizeStackParamsList,
> = StackScreenProps<UnAuthorizeStackParamsList, T>;

export type NavigationProp = StackScreenProps<RootStackParamList>;

export const options: StackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: "center",
};
