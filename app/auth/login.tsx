import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <View className="flex-1 bg-[#0D0D28] p-6 justify-center">

      <Text className="text-white text-3xl font-bold mb-6">Log In</Text>

      <TextInput
        placeholder="Email"
        className="bg-white p-3 rounded-xl mb-4"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="bg-white p-3 rounded-xl mb-4"
      />

      <TouchableOpacity className="bg-orange-500 p-3 rounded-xl">
        <Text className="text-center text-white font-bold">LOG IN</Text>
      </TouchableOpacity>

      <Link href="/auth/forgot" className="text-orange-400 mt-4 text-center">
        Forgot Password?
      </Link>
    </View>
  );
}
