/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Splash2() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/(onboarding)/onboard1");
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      {/* Top Left Image */}
      <Image
        source={require("../../assets/splash/Ellipse10.png")}
        style={styles.image1}
        resizeMode="contain"
      />

      {/* Center Logo */}
      <Image
        source={require("../../assets/logo/Logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Bottom Right Image */}
      <Image
        source={require("../../assets/splash/Ellipse1006.png")}
        style={styles.image2}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image1: {
    position: "absolute",
    top: -80,
    left: 0,
    width: 280,
    height: 280,
  },

  image2: {
    position: "absolute",
    bottom: 0,
    right: -20,
    width: 250,
    height: 250,
  },

  logo: {
    width: 160,
    height: 160,
  },
});
