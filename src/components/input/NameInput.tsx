import { TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";

type NameInputProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  inputType?: "text" | "email" | "password" | "phone";
};
const NameInput: React.FC<NameInputProps> = ({
  placeholder,
  value,
  onChangeText,
  inputType,
}) => {
  const { colors, fonts } = useTheme();
  return (
    <TextInput
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: colors.primary,
        height: 40,
        paddingHorizontal: 16,
        borderRadius: 10,
        ...fonts.regular,
        color: colors.text,
      }}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.border}
      placeholder={placeholder}
      keyboardType={
        inputType === "email"
          ? "email-address"
          : inputType === "phone"
            ? "phone-pad"
            : "default"
      }
    />
  );
};

export default NameInput;
