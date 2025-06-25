import { ChevronRight } from "lucide-react-native";
import { View, Text, TouchableOpacity } from "react-native";

import { useTheme } from "@react-navigation/native";

interface AccountMenuProps {
  title: string;
  onPress: () => void;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ title, onPress }) => {
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
      <ChevronRight color={colors.text} size={20} />
    </TouchableOpacity>
  );
};

export default AccountMenu;
