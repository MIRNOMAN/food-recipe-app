import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Onboard3() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-5 justify-between">
      {/* Top / Center content */}
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../assets/onboard/image_2.png")}
          className="  "
        />
        <Text className="text-3xl  font-senBold mt-5 text-center ">
          Order from choosen chef
        </Text>
        <Text className="text-lg font-sen p-4 text-gray-500 mt-2 text-center">
          Get all your loved foods in one once place, you just place the orer we
          do the rest
        </Text>

        <View className="flex-row justify-center gap-4 mt-10">
          <View className="w-4 h-4 bg-[#FFE1CE]  rounded-full" />
          <View className="w-4 h-4 bg-[#FF7622] rounded-full" />
          <View className="w-4 h-4 bg-[#FFE1CE] rounded-full" />
        </View>
      </View>

      {/* Bottom Buttons */}
      <View className="mb-20">
        <TouchableOpacity
          className="bg-orange-500 py-4 rounded-xl"
          onPress={() => router.push("/(onboarding)/onboard4")}
        >
          <Text className="text-white font-bold text-center">NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text className="text-gray-500 mt-3 text-center">Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
