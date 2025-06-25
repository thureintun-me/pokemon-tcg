import { TouchableOpacity } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { NativeStackHeaderLeftProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { NavigationProp } from "@navigation/types";

const HeaderLeft = ({
  canGoBack,
  tintColor,
  label,
  href,
}: NativeStackHeaderLeftProps) => {
  const navigation = useNavigation<NavigationProp>();

  const goBack = () => {
    console.log("goBack");
    navigation.goBack();
  };

  return canGoBack ? (
    <TouchableOpacity onPress={goBack}>
      <ChevronLeft size={24} color={tintColor} />
    </TouchableOpacity>
  ) : (
    <></>
  );
};

export default HeaderLeft;
