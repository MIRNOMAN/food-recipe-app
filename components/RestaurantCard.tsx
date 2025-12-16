import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantCard({ meal }: { meal: { idMeal: string; strMeal: string; strMealThumb: string; strCategory?: string } }) {
  return (
    <TouchableOpacity className="bg-white rounded-2xl p-4 shadow mb-5">
      {/* Meal Image */}
      <Image
        source={{ uri: meal.strMealThumb }}
        className="h-40 rounded-xl mb-4"
      />

      {/* Meal Name */}
      <Text className="text-[17px] font-bold">{meal.strMeal}</Text>

      {/* Category */}
      {meal.strCategory && (
        <Text className="text-gray-500 mt-1">{meal.strCategory}</Text>
      )}

      {/* Rating / Dummy */}
      <View className="flex-row items-center mt-3">
        <Ionicons name="star" size={18} color="orange" />
        <Text className="ml-1">4.5</Text>

        <Text className="ml-4">Free</Text>

        <Ionicons name="time-outline" size={18} className="ml-6" />
        <Text className="ml-1">20 min</Text>
      </View>
    </TouchableOpacity>
  );
}
