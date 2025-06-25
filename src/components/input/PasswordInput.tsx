import { TextInput, TouchableOpacity, View } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";

type PasswordInputProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  const { colors, fonts } = useTheme();
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.primary,
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 10,
      }}
    >
      <TextInput
        style={{
          flex: 1,
          ...fonts.regular,
          color: colors.text,
        }}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!passwordVisibility}
        placeholderTextColor={colors.border}
        placeholder={placeholder}
      />

      <TouchableOpacity onPress={togglePasswordVisibility}>
        {passwordVisibility ? (
          <Eye size={20} color={colors.primary} />
        ) : (
          <EyeOff size={20} color={colors.primary} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
