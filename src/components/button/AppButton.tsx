import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import React from "react";

type AppButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const AppButton: React.FC<AppButtonProps> = ({ title, onPress }) => {
  const { colors, fonts } = useTheme();

  console.log("COl", colors);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <Text style={{ ...fonts.medium, color: colors.text }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
