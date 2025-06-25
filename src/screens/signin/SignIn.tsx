import { UnAuthorizeStackScreenProps } from "@/navigation/types";
import { useTheme } from "@react-navigation/native";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  PokemonButton,
  PokemonErrorMessage,
  PokemonLoading,
  PokemonNameInput,
  PokemonPasswordInput,
} from "@/components";
import { validateEmailOrPhone } from "@/utils/validator";
import { useAppDispatch } from "@/app/hooks";
import { setUser } from "@/features/auth/authSlice";

type FormData = {
  emailOrPhone: string;
  password: string;
};

const SignIn = ({
  navigation,
  route,
}: UnAuthorizeStackScreenProps<"SignIn">) => {
  const { colors, fonts } = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const onSubmit = async (data: FormData) => {
    console.log("Form Data:", data);
    setLoading(true);
    const { error, data: supabaseData } =
      await supabase.auth.signInWithPassword({
        email: data.emailOrPhone,
        password: data.password,
      });

    if (error) Alert.alert(error.message);

    console.log("Data", supabaseData);

    setLoading(false);
    dispatch(setUser(supabaseData.session!));

    // if (!error) resetToHome();
  };

  if (loading) {
    return <PokemonLoading />;
  }

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <View style={styles.titleContainer}>
        {/* <AppTitle /> */}
        <Image
          source={require("../../../assets/pokemon.png")}
          style={{ width: 150, height: 150 }}
        />
        <Text
          style={{
            marginTop: 20,
            ...fonts.medium,
            color: colors.text,
          }}
        >
          Welcome to the Pokémon TCG Market
        </Text>
      </View>

      <View style={{ ...styles.formContainer }}>
        <View style={{ gap: 20 }}>
          <Controller
            name="emailOrPhone"
            control={control}
            defaultValue=""
            rules={{
              required: "Email  is required",
              validate: validateEmailOrPhone,
            }}
            render={({ field: { onChange, value } }) => (
              <>
                <PokemonNameInput
                  placeholder="email"
                  value={value}
                  onChangeText={onChange}
                />
                {errors.emailOrPhone && (
                  <PokemonErrorMessage message={errors.emailOrPhone.message} />
                )}
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field: { onChange, value } }) => (
              <>
                <PokemonPasswordInput
                  placeholder="password"
                  value={value}
                  onChangeText={onChange}
                />
                {errors.password && (
                  <PokemonErrorMessage message={errors.password.message} />
                )}
              </>
            )}
          />
          <PokemonButton title={"Login"} onPress={handleSubmit(onSubmit)} />
        </View>

        <View style={{ ...styles.signUpContainer }}>
          <Text style={{ ...fonts.regular, color: colors.text }}>
            Haven't Signed Up Yet ?
          </Text>

          <TouchableOpacity onPress={goToSignUp}>
            <Text
              style={{ ...fonts.regular, marginTop: 5, color: colors.primary }}
            >
              Sign Up Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  titleContainer: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  formContainer: {
    flex: 1,
    marginVertical: 60,
    marginHorizontal: 60,
  },
  signUpContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default SignIn;
