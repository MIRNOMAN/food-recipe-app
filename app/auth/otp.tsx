import { useEffect, useRef, useState } from "react";
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message"; // ✅ Import Toast

// Define your navigator routes here
type RootStackParamList = {
  reset: undefined;
};

export default function OTP() {
  const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // OTP state
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<TextInput[]>([]);

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

  const handleChange = (text: string, index: number) => {
    const numericText = text.replace(/[^0-9]/g, ""); // Only numbers
    if (!numericText) return;

    const newOtp = [...otp];
    newOtp[index] = numericText[0];
    setOtp(newOtp);

    // Focus next input
    if (index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }: any, index: number) => {
    if (nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    // You can add real OTP verification logic here
    const isOtpComplete = otp.every((digit) => digit !== "");

    if (!isOtpComplete) {
      Toast.show({
        type: "error",
        text1: "Incomplete OTP",
        text2: "Please enter all 4 digits",
        position: "top",
      });
      return;
    }

    // ✅ Show success toast
    Toast.show({
      type: "success",
      text1: "OTP Verified",
      text2: "You can now reset your password",
      position: "top",
    });

    // Navigate to Reset screen after a short delay
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
          Verification
        </Text>
        <Text className="text-gray-300 font-sen text-center text-lg mt-2">
          We have sent a code to your email
        </Text>
        <Text className="text-gray-300 font-senBold text-center text-lg mt-2">
          example@gmail.com
        </Text>
      </View>

      {/* Card Section */}
      <View
        style={{ height: cardHeight }}
        className="bg-white rounded-t-3xl px-6 pt-10 pb-8"
      >
        {/* OTP Inputs */}
        <View className="flex-row justify-between mb-8">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                if (ref) inputsRef.current[index] = ref;
              }}
              value={digit}
              maxLength={1}
              keyboardType="number-pad"
              className="w-16 h-16 text-center border-2 border-gray-400 text-xl rounded-xl"
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>

    
        <TouchableOpacity
          onPress={handleVerify} 
          className="bg-orange-500 py-4 rounded-xl mb-8"
        >
          <Text className="text-white text-center uppercase font-senBold text-base">
            Verify
          </Text>
        </TouchableOpacity>
      </View>

    
   
    </View>
  );
}
