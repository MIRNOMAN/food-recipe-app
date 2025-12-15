import { useSignUp } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,

  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import Modal from 'react-native-modal';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [code, setCode] = useState("");

  const { signUp, isLoaded } = useSignUp();

  // SIGNUP ACTION
  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      return Toast.show({ type: "error", text1: "All fields required" });
    }

    if (password !== confirmPassword) {
      return Toast.show({ type: "error", text1: "Passwords do not match" });
    }

    try {
      if (!isLoaded) {
        Toast.show({ type: "error", text1: "SignUp not ready, try again" });
        return;
      }

      // Create new account
      await signUp.create({
        emailAddress: email,
        password,
        firstName: name.split(" ")[0] || name,
        lastName: name.split(" ")[1] || "",
      });

      // Prepare verification
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      Toast.show({
        type: "success",
        text1: "Verification code sent!",
      });

      // Show OTP modal
      setOtpModalVisible(true);
    } catch (err: any) {
      Toast.show({
        type: "error",
        text1: "Signup failed!",
        text2: err?.errors?.[0]?.longMessage || err?.message,
      });
    }
  };

  // OTP VERIFY ACTION
  const handleVerify = async () => {
    if (!code) {
      return Toast.show({ type: "error", text1: "Enter verification code" });
    }

    try {
      if (!signUp) return;

      await signUp.attemptEmailAddressVerification({ code });

      Toast.show({
        type: "success",
        text1: "Account verified!",
      });

      setOtpModalVisible(false);
      setCode("");
      // Optionally clear fields or navigate
    } catch (err: any) {
      Toast.show({
        type: "error",
        text1: "Verification failed",
        text2: err?.errors?.[0]?.longMessage || "Invalid code",
      });
    }
  };

  return (
    <View className="flex-1 relative bg-[#0D0D28]">
      <Image
        source={require("../../assets/splash/Ellipse1005.png")}
        className="absolute w-[250px] h-[250px] -top-24 left-0"
        resizeMode="contain"
      />

      {/* Top Section */}
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-4xl font-senBold text-center">
          Sign Up
        </Text>
        <Text className="text-gray-300 text-center mt-2">
          Create a new account to get started
        </Text>
      </View>

      {/* Card */}
      <View className="bg-white rounded-t-3xl px-6 pt-10 pb-8">
        {/* Name */}
        <Text className="text-gray-500 mb-3">NAME</Text>
        <TextInput
          placeholder="John Doe"
          placeholderTextColor="#9CA3AF"
          value={name}
          onChangeText={setName}
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
        />

        {/* Email */}
        <Text className="text-gray-500 mb-3">EMAIL</Text>
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor="#9CA3AF"
          value={email}
          onChangeText={setEmail}
          className="bg-gray-100 px-4 py-4 rounded-xl mb-7"
          keyboardType="email-address"
        />

        {/* Password */}
        <Text className="text-gray-500 mb-3">PASSWORD</Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-7">
          <TextInput
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            className="flex-1"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text className="text-gray-500 mb-3">CONFIRM PASSWORD</Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center justify-between mb-7">
          <TextInput
            placeholder="********"
            placeholderTextColor="#9CA3AF"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            className="flex-1"
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#9CA3AF"
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          className="bg-orange-500 py-4 rounded-xl mb-5"
          onPress={handleSignup}
        >
          <Text className="text-white text-center font-bold">SIGN UP</Text>
        </TouchableOpacity>
      </View>

      {/* OTP Modal using react-native-modal */}
      <Modal
        isVisible={otpModalVisible}
        backdropOpacity={0.6}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={() => setOtpModalVisible(false)}
      >
       <View className="flex-1 justify-center items-center">

         <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          className="items-center justify-center"
        >
          <View className="bg-white rounded-2xl flex-1 p-6">
            <Text className="text-xl font-bold text-center mb-4">
              Verify Email
            </Text>

            <Text className="text-gray-700 text-center mb-4">
              A verification code has been sent to:
              {"\n"}
              <Text className="font-bold">{email}</Text>
            </Text>

            <TextInput
              placeholder="Enter 6-digit code"
              placeholderTextColor="#9CA3AF"
              value={code}
              onChangeText={setCode}
              keyboardType="number-pad"
              maxLength={6}
              className="bg-gray-100 px-4 py-4 rounded-xl text-center text-lg tracking-widest mb-5"
            />

            <TouchableOpacity
              onPress={handleVerify}
              className="bg-orange-500 py-3 rounded-xl mb-3"
            >
              <Text className="text-white text-center font-bold">VERIFY</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setOtpModalVisible(false)}
              className="py-2"
            >
              <Text className="text-center text-gray-500 font-semibold">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
       </View>
      </Modal>
    </View>
  );
}
