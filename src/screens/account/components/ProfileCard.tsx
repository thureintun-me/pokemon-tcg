import { View, Text, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import { User } from "lucide-react-native";
import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";

const ProfileCard = () => {
  const { colors, fonts } = useTheme();

  const user = useAppSelector((state: RootState) => state.auth.user);

  return (
    <View
      style={{
        marginVertical: 50,
        flexDirection: "row",
        // justifyContent:'center',
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderWidth: 1,
          borderRadius: 70,
          borderColor: colors.border,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../../assets/pokemon.png")}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
      <View
        style={{
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: colors.text, ...fonts.regular }}>
          {user?.user?.user_metadata.username}
        </Text>
        <Text style={{ color: colors.text, ...fonts.regular }}>
          {user?.user?.email}
        </Text>
      </View>
    </View>
  );
};

export default ProfileCard;
