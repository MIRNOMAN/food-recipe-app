import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Onboard1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top / Center content */}
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/splash/Ellipse10.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>All your favorites</Text>
        <Text style={styles.subtitle}>Get all your food from one place...</Text>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/(onboarding)/onboard2")}
        >
          <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(onboarding)/onboard2")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "space-between", // top and bottom separation
  },
  topContainer: {
    flex: 1,
    justifyContent: "center", // center vertically
    alignItems: "center",     // center horizontally
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: 20,
    backgroundColor: "#ccc", // placeholder bg
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#888",
    marginTop: 8,
    textAlign: "center",
  },
  bottomContainer: {
    marginBottom: 30,
  },
  nextButton: {
    backgroundColor: "#f97316",
    paddingVertical: 15,
    borderRadius: 15,
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  skipText: {
    color: "#888",
    marginTop: 10,
    textAlign: "center",
  },
});
