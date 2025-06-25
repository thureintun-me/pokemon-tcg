import { ChevronRight } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

interface AppInfoMenuProps {
  title: string;
  value: string;
  onPress: () => void;
}

const AppInfoMenu: React.FC<AppInfoMenuProps> = ({ title, value, onPress }) => {
  const { colors, fonts } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ ...fonts.medium, color: colors.text }}>{title}</Text>
      <Text style={{ ...fonts.medium, color: colors.text }}>{value}</Text>
    </TouchableOpacity>
  );
};

export default AppInfoMenu;
