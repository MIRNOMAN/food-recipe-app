import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import CategoriesList from "@/components/CategoriesList";
import RestaurantCard from "@/components/RestaurantCard";


type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  // add other fields you need
};



export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);

  // Fetch meals from TheMealDB
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=all"
        );
        const data = await response.json();
        if (data.meals) setMeals(data.meals);
      } catch (error) {
        console.error("Failed to fetch meals:", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <ScrollView
      className="flex-1 bg-[#f7f7f7] px-5"
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View className="flex-row justify-between mt-6">
        {/* Menu */}
        <View className="flex-row justify-end gap-5 bg-gray-100">
          <TouchableOpacity className="bg-[#181C2E] w-14 h-14 rounded-full items-center justify-center ">
            <AntDesign name="align-left" size={20} color="white" />
          </TouchableOpacity>

          <View>
            <Text className="text-gray-500 text-xs">DELIVER TO</Text>
            <TouchableOpacity className="flex-row items-center mt-1">
              <Text className="text-[15px] font-semibold mr-1">
                Halal Lab office
              </Text>
              <Ionicons name="chevron-down" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Notification */}
        <TouchableOpacity className="bg-[#181C2E] w-14 h-14 rounded-xl items-center justify-center shadow relative">
          <Feather name="bell" size={20} color="white" />
          <View className="absolute -top-1 -right-1 bg-red-500 w-7 h-7 rounded-full items-center justify-center">
            <Text className="bg-[#FC6E2A] text-white text-[13px]">2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* GREETING */}
      <Text className="mt-7 text-lg">
        Hey Halal, <Text className="font-bold">Good Afternoon!</Text>
      </Text>

      {/* SEARCH BAR */}
      <View className="mt-4 bg-gray-200 h-12 rounded-xl flex-row items-center px-4">
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          placeholder="Search dishes, restaurants"
          className="ml-2 flex-1 text-[14px]"
        />
      </View>

      {/* CATEGORIES HEADER */}
      <View className="mt-7 flex-row justify-between items-center">
        <Text className="text-lg font-bold">All Categories</Text>
        <Text className="text-gray-400">See All</Text>
      </View>

      {/* CATEGORY LIST */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4"
      >
        <CategoriesList />
      </ScrollView>

      {/* OPEN RESTAURANTS HEADER */}
      <View className="mt-8 flex-row justify-between items-center">
        <Text className="text-lg font-bold">Open Restaurants</Text>
        <Text className="text-gray-400">See All</Text>
      </View>

      {/* MEAL / RESTAURANT CARDS */}
      <View className="mt-5">
        {meals.map((meal) => (
          <RestaurantCard key={meal?.idMeal } meal={meal} />
        ))}
      </View>

      <View className="h-10" />
    </ScrollView>
  );
}
