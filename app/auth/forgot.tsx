import { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Toast from "react-native-toast-message"; 

type RootStackParamList = {
  otp: undefined;
};

export default function Forgot() {
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () => {
      setCardHeight(560);
    });

    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      setCardHeight(undefined);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleSendCode = () => {
    if (!email) {
      // Show error if email is empty
      Toast.show({
        type: "error",
        text1: "Email Required",
        text2: "Please enter your email address",
        position: "top",
      });
      return;
    }

    // ✅ Show success toast
    Toast.show({
      type: "success",
      text1: "Code Sent",
      text2: "Check your email for the OTP code",
      position: "top",
    });

   
    setTimeout(() => navigation.navigate("otp"), 1500);
  };

  return (
    <View className="flex-1 relative bg-[#0D0D28]">
      {/* Top Left Image */}
      <Image
        source={require("../../assets/splash/Ellipse1005.png")}
        className="absolute w-[250px] h-[250px] -top-24 left-0"
        resizeMode="contain"
      />

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="absolute top-0 left-0 mt-16 ml-4 w-12 h-12 bg-white rounded-full justify-center items-center shadow"
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Top Section */}
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-4xl font-senBold text-center">
          Forgot Password
        </Text>
        <Text className="text-gray-300 font-sen text-center text-lg mt-2">
          Please enter your email to reset your password
        </Text>
      </View>

      {/* Card Section */}
      <View
        style={{ height: cardHeight }}
        className="bg-white rounded-t-3xl px-6 pt-10 pb-8"
      >
        {/* Email */}
        <Text className="text-gray-500 font-sen text-sm mb-3">EMAIL</Text>

        <TextInput
          autoFocus
          placeholder="example@gmail.com"
          placeholderTextColor="#9CA3AF"
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
          value={email}
          onChangeText={setEmail}
        />

        {/* Send Code Button */}
        <TouchableOpacity
          onPress={handleSendCode}
          className="bg-orange-500 py-4 rounded-xl mb-8"
        >
          <Text className="text-white text-center uppercase font-senBold text-base">
            Send Code
          </Text>
        </TouchableOpacity>
      </View>

    
    </View>
  );
}
