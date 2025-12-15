import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message"; 

type RootStackParamList = {
  reset: undefined;
};

export default function Reset() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = () => {
    // Here you can also validate passwords before showing toast
    Toast.show({
      type: "success",
      text1: "Password Reset Successful!",
      text2: "You can now log in with your new password.",
      position: "top",
    });

    // Navigate back to login after reset (optional)
    setTimeout(() => navigation.navigate("reset"), 1500); 
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
          New Password
        </Text>
        <Text className="text-gray-300 font-sen text-center text-lg mt-2">
          Create a new password to get started
        </Text>
      </View>

      {/* Card Section */}
      <View className="bg-white rounded-t-3xl h-[600px] px-6 pt-10 pb-8">
        <Text className="text-gray-500 font-sen text-center text-lg mt-2 mb-8">
          Type your new password below
        </Text>

        {/* New Password */}
        <Text className="text-gray-500 font-sen text-sm mb-4">
          NEW PASSWORD
        </Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-5">
          <TextInput
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

        {/* Confirm Password */}
        <Text className="text-gray-500 font-sen text-sm mb-4">
          Re-Type Password
        </Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-5">
          <TextInput
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showConfirmPassword}
            className="flex-1"
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Reset Button */}
        <TouchableOpacity
          onPress={handleReset} 
          className="bg-orange-500 py-4 rounded-xl mb-8"
        >
          <Text className="text-white text-center font-senBold text-base">
            RESET PASSWORD
          </Text>
        </TouchableOpacity>
      </View>

  
    
    </View>
  );
}
