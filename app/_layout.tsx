import "@/global.css";
import { Sen_400Regular, Sen_700Bold } from "@expo-google-fonts/sen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React from "react";
import { Text as RNText, TextStyle } from "react-native";
import "react-native-gesture-handler"; 
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
