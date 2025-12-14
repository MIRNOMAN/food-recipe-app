import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Forgot() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0D0D28] p-6 justify-center">

      <Text className="text-white text-3xl font-bold mb-6">Forgot Password</Text>

      <TextInput
        placeholder="Enter your email"
        className="bg-white p-3 rounded-xl mb-6"
      />

      <TouchableOpacity
        className="bg-orange-500 p-3 rounded-xl"
        onPress={() => router.push("/auth/otp")}
      >
        <Text className="text-center text-white font-bold">SEND OTP</Text>
      </TouchableOpacity>

    </View>
  );
}
