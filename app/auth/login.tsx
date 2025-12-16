/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth, useSignIn } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Login() {
  const router = useRouter();

  const { isSignedIn } = useAuth();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ already logged in → redirect
  useEffect(() => {
    if (isSignedIn) {
      router.replace("/home"); // or "/(tabs)"
    }
  }, [isSignedIn]);

  const handleLogin = async () => {
    if (!isLoaded || loading) return;

    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Missing fields",
        text2: "Email & password required",
      });
      return;
    }

    try {
      setLoading(true);

      const result = await signIn.create({
        identifier: email.trim(),
        password,
      });

      if (result.status === "complete") {
        await setActive({
          session: result.createdSessionId,
        });

        Toast.show({
          type: "success",
          text1: "Login successful",
        });

        router.replace("/home");
      }
    } catch (err: any) {
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2: err?.errors?.[0]?.message || "Invalid credentials",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-[#0D0D28]">
      {/* Top Image */}
      <Image
        source={require("../../assets/splash/Ellipse1005.png")}
        className="absolute w-[250px] h-[250px] -top-24 left-0"
        resizeMode="contain"
      />

      {/* Header */}
      <View className="flex-1 justify-center px-6">
        <Text className="text-white text-4xl font-bold text-center">
          Log In
        </Text>
        <Text className="text-gray-300 text-center mt-2">
          Please sign in to your account
        </Text>
      </View>

      {/* Card */}
      <View className="bg-white rounded-t-3xl px-6 pt-10 pb-12">
        {/* Email */}
        <Text className="text-gray-500 text-sm mb-2">EMAIL</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          placeholderTextColor="#9CA3AF"
          className="bg-gray-100 px-4 py-4 rounded-xl mb-6"
        />

        {/* Password */}
        <Text className="text-gray-500 text-sm mb-2">PASSWORD</Text>
        <View className="bg-gray-100 rounded-xl px-4 py-3 flex-row items-center mb-6">
          <TextInput
            value={password}
            onChangeText={setPassword}
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

        {/* Forgot */}
        <View className="flex-row justify-end mb-8">
          <Link href="/auth/forgot" className="text-orange-500 font-semibold">
            Forgot Password?
          </Link>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className={`py-4 rounded-xl mb-6 ${
            loading ? "bg-orange-300" : "bg-orange-500"
          }`}
        >
          <Text className="text-white text-center font-bold">
            {loading ? "PLEASE WAIT..." : "LOG IN"}
          </Text>
        </TouchableOpacity>

        {/* Signup */}
        <Text className="text-center text-gray-500">
          Don’t have an account?
          <Link href="/auth/signup" className="text-orange-500 font-bold">
            {" "}
            SIGN UP
          </Link>
        </Text>

        {/* Divider */}
        <Text className="text-center text-gray-400 my-4">Or</Text>

        {/* Social Icons */}
        <View className="flex-row justify-center gap-8">
          <View className="w-14 h-14 rounded-full bg-blue-600 justify-center items-center">
            <Ionicons name="logo-facebook" size={22} color="white" />
          </View>

          <View className="w-14 h-14 rounded-full bg-sky-500 justify-center items-center">
            <Ionicons name="logo-twitter" size={22} color="white" />
          </View>

          <View className="w-14 h-14 rounded-full bg-black justify-center items-center">
            <Ionicons name="logo-apple" size={22} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
