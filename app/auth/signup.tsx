import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Signup() {
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
          Sign Up
        </Text>
        <Text className="text-gray-300 font-sen text-center text-lg mt-2">
          Create a new account to get started
        </Text>
      </View>

      {/* Card Section */}
      <View className="bg-white rounded-t-3xl h-[600px] px-6 pt-10 pb-8">
        {/* Email */}
        <Text className="text-gray-500 font-sen text-sm mb-3">NAME</Text>
        <TextInput
          placeholder="John Doe"
          placeholderTextColor="#9CA3AF"
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
        />
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

        {/* Login Button */}
        <TouchableOpacity className="bg-orange-500 py-4 rounded-xl mb-8">
          <Text className="text-white text-center font-senBold text-base">
            SIGN UP
          </Text>
        </TouchableOpacity>

        {/* Signup */}
        <Text className="text-center font-sen text-gray-500 mb-6">
          Already have an account?
          <Link href="/auth/login" className="text-orange-500 font-bold">
            {" "}
            LOG IN
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
