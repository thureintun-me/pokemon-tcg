import {
  PokemonButton,
  PokemonErrorMessage,
  PokemonLoading,
  PokemonNameInput,
  PokemonPasswordInput,
} from "@/components";
import { supabase } from "@/lib/supabase";
import { UnAuthorizeStackScreenProps } from "@/navigation/types";
import { validateEmailOrPhone } from "@/utils/validator";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type FormData = {
  emailOrPhone: string;
  username: string;
  password: string;
};
const SignUp = ({
  navigation,
  route,
}: UnAuthorizeStackScreenProps<"SignUp">) => {
  const { colors, fonts } = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: data.emailOrPhone,
      password: data.password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");

    const { error: updateError } = await supabase.auth.updateUser({
      data: { username: data.username }, // Replace 'username' with the actual field you want to update
    });

    if (updateError) {
      console.log("update error", updateError);
      // Alert.alert(`User created, but updating username failed: ${updateError.message}`);
    } else {
      console.log("update success");
      //Alert.alert('Sign up successful and username updated!');
    }

    setLoading(false);
  };

  if (loading) {
    return <PokemonLoading />;
  }
  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <View style={styles.titleContainer}>
        <Image
          source={require("../../../assets/pokemon.png")}
          style={{ width: 150, height: 150 }}
        />
        <Text
          style={{
            marginTop: 20,
            ...fonts.regular,
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
              required: "Email is required",
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
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is required" }}
            render={({ field: { onChange, value } }) => (
              <>
                <PokemonNameInput
                  placeholder="username"
                  value={value}
                  onChangeText={onChange}
                />
                {errors.username && (
                  <PokemonErrorMessage message={errors.username.message} />
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
                  placeholder={"password"}
                  value={value}
                  onChangeText={onChange}
                />
                {errors.password && (
                  <PokemonErrorMessage message={errors.password.message} />
                )}
              </>
            )}
          />

          <PokemonButton title="Register" onPress={handleSubmit(onSubmit)} />
        </View>
        <View style={{ ...styles.signInContainer }}>
          <Text style={{ ...fonts.regular, color: colors.text }}>
            Already have an account ?
          </Text>

          <TouchableOpacity onPress={goToSignIn}>
            <Text
              style={{ ...fonts.regular, marginTop: 5, color: colors.primary }}
            >
              Login Now
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
  signInContainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default SignUp;
