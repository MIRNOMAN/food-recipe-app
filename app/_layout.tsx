import "@/global.css";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Sen_400Regular, Sen_700Bold } from "@expo-google-fonts/sen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import { Text as RNText, TextStyle } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const RootLayout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    SenRegular: Sen_400Regular,
    SenBold: Sen_700Bold,
  });

  if (!fontsLoaded) return null;

  const Text = RNText as typeof RNText & { defaultProps?: TextStyle };
  Text.defaultProps = {
    ...(Text.defaultProps || {}),
    fontFamily: "SenRegular",
  };

  return (
    <ClerkProvider publishableKey="pk_test_bW9kZWwtd2VldmlsLTQxLmNsZXJrLmFjY291bnRzLmRldiQ">
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          <Toast />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
