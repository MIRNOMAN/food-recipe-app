import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
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
        <Text className="text-white text-4xl font-senBold  text-center">
          Log In
        </Text>
        <Text className="text-gray-300 font-sen text-center mt-2">
          Please sign in to your existing account
        </Text>
      </View>

      {/* Card Section */}
      <View className="bg-white rounded-t-3xl h-[600px] px-6 pt-10 pb-10">
        {/* Email */}
        <Text className="text-gray-500 font-sen text-sm mb-3">EMAIL</Text>
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor="#9CA3AF"
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
        />

        {/* Password */}
        <Text className="text-gray-500 font-sen text-sm mb-4">PASSWORD</Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-5">
          <TextInput
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            className="flex-1"
          />
          <Ionicons name="eye-outline" size={20} color="#9CA3AF" />
        </View>

        {/* Remember & Forgot */}
        <View className="flex-row justify-between items-center mb-8">
          <View className="flex-row items-center">
            <View className="w-5 h-5 border border-gray-400 rounded mr-2" />
            <Text className="text-gray-500 text-md font-sen">Remember me</Text>
          </View>

          <Link
            href="/auth/forgot"
            className="text-orange-500 font-sen text-md font-semibold"
          >
            Forgot Password
          </Link>
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-orange-500 py-4 rounded-xl mb-8">
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

        {/* Divider */}
        <Text className="text-center text-gray-400 mb-6">Or</Text>

        {/* Social Icons */}
        <View className="flex-row justify-center gap-8">
          <View className="w-14 h-14 rounded-full bg-blue-600 justify-center items-center">
            <Ionicons name="logo-facebook" size={22} color="white" />
          </View>

          <View className="w-14 h-14 rounded-full bg-sky-500 justify-center items-center">
            <Ionicons name="logo-twitter" size={22} color="white" />
          </View>

          <View className="w-14 h-14 rounded-full bg-black justify-center items-center">
            <Ionicons name="logo-apple" size={22} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
