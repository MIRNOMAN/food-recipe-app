import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function OTP() {
  return (
    <View className="flex-1 bg-[#0D0D28] justify-center p-6">
      <Text className="text-white text-3xl font-bold mb-6">Verification</Text>

      <View className="flex-row justify-between mb-8">
        {[1,2,3,4].map((i) => (
          <TextInput
            key={i}
            maxLength={1}
            keyboardType="numeric"
            className="bg-white w-16 h-16 text-center text-xl rounded-xl"
          />
        ))}
      </View>

      <TouchableOpacity className="bg-orange-500 p-4 rounded-xl">
        <Text className="text-center text-white font-bold">VERIFY</Text>
      </TouchableOpacity>
    </View>
  );
}
