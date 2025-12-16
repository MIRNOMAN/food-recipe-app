/* eslint-disable react-hooks/exhaustive-deps */
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState, useRef } from "react";
import {
  Animated,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PopupModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current; // Starts 50px below

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);

      // Start animation
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 15000); // 15 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View className="flex-1 justify-center items-center bg-black/40">
        <ImageBackground
          source={require("../assets/backround/BG.png")}
          className="w-11/12 h-96 rounded-xl overflow-hidden justify-end"
        >
          {/* Semi-transparent overlay */}
          <View className="absolute inset-0 opacity-40 rounded-xl" />

          {/* Close button */}
          <TouchableOpacity
            className="absolute top-3 right-3 p-2 z-10"
            onPress={() => setIsModalVisible(false)}
          >
            <Ionicons name="close" size={28} color="white" />
          </TouchableOpacity>

          {/* Animated Modal content */}
          <Animated.View
            style={{
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            }}
            className="p-5 z-10"
          >
              <Text className="text-4xl text-center pb-5 font-senBold text-white mb-3">
              Hurry Offers!
            </Text>
              
            
            <Text className="text-4xl text-center font-bold pb-5 text-white mb-3">#1243CD2</Text>
            <Text className="text-white text-xl text-center pb-5 font-bold mb-5">
              Use the coupon to get 25% discount
            </Text>

            <TouchableOpacity
              className="bg-[#FC6E2A] p-4 rounded-xl mb-10  w-full"
              onPress={() => setIsModalVisible(false)}
            >
              <Text className="text-white text-center font-senBold">GOT IT</Text>
            </TouchableOpacity>
          </Animated.View>
        </ImageBackground>
      </View>
    </Modal>
  );
}
