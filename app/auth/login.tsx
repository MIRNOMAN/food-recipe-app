import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { NavigationProp } from "@react-navigation/native";
import { useSignIn } from "@clerk/clerk-expo";

type RootStackParamList = {
  home: undefined;
};

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });

        Toast.show({
          type: "success",
          text1: "Login Successful",
          text2: "Welcome back!",
          position: "top",
        });

        setTimeout(() => navigation.navigate("home"), 1000);
      }
    } catch (err: any) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2: err.errors?.[0]?.message || "Invalid credentials",
        position: "top",
      });
    }
  };

  return (
    <View className="flex-1 relative bg-[#0D0D28]">
      {/* Top Image */}
      <Image
        source={require("../../assets/splash/Ellipse1005.png")}
        className="absolute w-[250px] h-[250px] -top-24 left-0"
        resizeMode="contain"
      />

      {/* Header */}
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-4xl font-senBold text-center">
          Log In
        </Text>
        <Text className="text-gray-300 font-sen text-center mt-2">
          Please sign in to your existing account
        </Text>
      </View>

      {/* Card */}
      <View className="bg-white rounded-t-3xl h-[600px] px-6 pt-10 pb-10">
        {/* Email */}
        <Text className="text-gray-500 font-sen text-sm mb-3">EMAIL</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="example@gmail.com"
          placeholderTextColor="#9CA3AF"
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
        />

        {/* Password */}
        <Text className="text-gray-500 font-sen text-sm mb-4">PASSWORD</Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-5">
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            className="flex-1"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <View className="flex-row justify-between items-center mb-8">
          <View className="flex-row items-center">
            <View className="w-5 h-5 border border-gray-400 rounded mr-2" />
            <Text className="text-gray-500 text-md font-sen">
              Remember me
            </Text>
          </View>

          <Link
            href="/auth/forgot"
            className="text-orange-500 font-sen text-md font-semibold"
          >
            Forgot Password
          </Link>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-orange-500 py-4 rounded-xl mb-8"
        >
          <Text className="text-white text-center font-senBold text-base">
            LOG IN
          </Text>
        </TouchableOpacity>

        {/* Signup */}
        <Text className="text-center font-sen text-gray-500 mb-6">
          Don’t have an account?
          <Link href="/auth/signup" className="text-orange-500 font-bold">
            {" "}
            SIGN UP
          </Link>
        </Text>
      </View>
    </View>
  );
}
