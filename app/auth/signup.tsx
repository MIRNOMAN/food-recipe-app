import { useSignUp } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

type RootStackParamList = {
  login: undefined;
  signup: undefined;
};

type SignupNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signup"
>;

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation<SignupNavigationProp>();
  const { signUp, isLoaded } = useSignUp();

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Toast.show({
        type: "error",
        text1: "All fields are required",
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Passwords do not match",
      });
      return;
    }

    try {
      if (!isLoaded) return;

      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      Toast.show({
        type: "success",
        text1: "Account created!",
        text2: "Check your email to verify your account 👋",
      });

      navigation.navigate("login");
    } catch (err: any) {
      Toast.show({
        type: "error",
        text1: "Signup failed",
        text2: err.errors ? err.errors[0].longMessage : err.message,
      });
    }
  };

  return (
    <View className="flex-1 relative bg-[#0D0D28]">
      {/* Top Left Image */}
      <Image
        source={require("../../assets/splash/Ellipse1005.png")}
        className="absolute w-[250px] h-[250px] -top-24 left-0"
        resizeMode="contain"
      />

      {/* Top Section */}
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-4xl font-senBold text-center">
          Sign Up
        </Text>
        <Text className="text-gray-300 font-sen text-center text-lg mt-2">
          Create a new account to get started
        </Text>
      </View>

      {/* Card */}
      <View className="bg-white rounded-t-3xl h-[650px] px-6 pt-10 pb-8">
        {/* Name */}
        <Text className="text-gray-500 font-sen text-sm mb-3">NAME</Text>
        <TextInput
          placeholder="John Doe"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
        />

        {/* Email */}
        <Text className="text-gray-500 font-sen text-sm mb-3">EMAIL</Text>
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
        />

        {/* Password */}
        <Text className="text-gray-500 font-sen text-sm mb-3">PASSWORD</Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-7">
          <TextInput
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            className="flex-1"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text className="text-gray-500 font-sen text-sm mb-3">
          CONFIRM PASSWORD
        </Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-7">
          <TextInput
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            className="flex-1"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          className="bg-orange-500 py-4 rounded-xl mb-8"
          onPress={handleSignup}
        >
          <Text className="text-white text-center font-senBold text-base">
            SIGN UP
          </Text>
        </TouchableOpacity>

        {/* Login */}
        <Text className="text-center font-sen text-gray-500 mb-6">
          Already have an account?
          <Text
            onPress={() => navigation.navigate("login")}
            className="text-orange-500 font-bold"
          >
            {" "}
            LOG IN
          </Text>
        </Text>
      </View>
    </View>
  );
}
