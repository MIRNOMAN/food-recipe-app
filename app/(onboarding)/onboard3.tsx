import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Onboard3() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-6 justify-between">
      <View className="items-center mt-20">
        <View className="w-60 h-60 bg-gray-300 rounded-xl" />
        <Text className="text-2xl font-bold mt-6 text-center">
          All your favorites
        </Text>
        <Text className="text-gray-500 text-center mt-2">
          Get all your food from one place...
        </Text>
      </View>

      <View className="mb-10">
        <TouchableOpacity
          className="bg-orange-500 py-3 rounded-xl"
          onPress={() => router.push("/(onboarding)/onboard2")}
        >
          <Text className="text-center text-white font-bold">NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(onboarding)/onboard2")}>
          <Text className="text-center mt-4 text-gray-500">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
