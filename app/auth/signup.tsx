import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Signup() {
  return (
    <View className="flex-1 bg-[#0D0D28] p-6 justify-center">
      <Text className="text-white text-3xl font-bold mb-6">Sign Up</Text>

      <TextInput placeholder="Name" className="bg-white p-3 rounded-xl mb-4" />
      <TextInput placeholder="Email" className="bg-white p-3 rounded-xl mb-4" />
      <TextInput
        placeholder="Password"
        className="bg-white p-3 rounded-xl mb-4"
      />

      <TouchableOpacity className="bg-orange-500 p-3 rounded-xl">
        <Text className="text-center text-white font-bold">SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}
