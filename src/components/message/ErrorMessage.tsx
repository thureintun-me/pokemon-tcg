import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";

type ErrorMessageProps = {
  message: string | undefined;
};
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const { colors, fonts } = useTheme();
  return (
    <Text style={{ ...fonts.regular, color: colors.notification }}>
      {message}
    </Text>
  );
};

export default ErrorMessage;
