import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <ScrollView
      className="flex-1 bg-[#f7f7f7] px-5"
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View className="flex-row justify-between mt-6">
        {/* Menu */}
        <TouchableOpacity className="bg-white w-11 h-11 rounded-xl items-center justify-center shadow">
          <Ionicons name="menu" size={24} />
        </TouchableOpacity>

        {/* Notification */}
        <TouchableOpacity className="bg-white w-11 h-11 rounded-xl items-center justify-center shadow relative">
          <Ionicons name="notifications-outline" size={24} />
          <View className="absolute -top-1 -right-1 bg-red-500 w-4 h-4 rounded-full items-center justify-center">
            <Text className="text-white text-[10px]">2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* LOCATION */}
      <View className="mt-6">
        <Text className="text-gray-500 text-xs">DELIVER TO</Text>
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-[15px] font-semibold">Halal Lab office</Text>
          <Ionicons name="chevron-down" size={18} />
        </TouchableOpacity>
      </View>

      {/* GREETING */}
      <Text className="mt-3 text-lg">
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
        {[
          { name: "Pizza", price: 70 },
          { name: "Burger", price: 50 },
          { name: "Pasta", price: 60 },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            className="bg-white w-36 h-28 rounded-2xl p-4 mr-4 shadow"
          >
            <View className="bg-gray-400 h-12 rounded-lg mb-3" />

            <Text className="font-semibold">{item.name}</Text>
            <Text className="text-gray-400 text-xs">
              Starting ${item.price}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* OPEN RESTAURANTS */}
      <View className="mt-8 flex-row justify-between items-center">
        <Text className="text-lg font-bold">Open Restaurants</Text>
        <Text className="text-gray-400">See All</Text>
      </View>

      {/* RESTAURANT CARD */}
      <View className="mt-5 bg-white rounded-2xl p-4 shadow">
        <View className="bg-gray-300 h-40 rounded-xl mb-4" />

        <Text className="text-[17px] font-bold">Rose Garden Restaurant</Text>
        <Text className="text-gray-500 mt-1">
          Burger - Chicken - Riche - Wings
        </Text>

        <View className="flex-row items-center mt-3">
          <Ionicons name="star" size={18} color="orange" />
          <Text className="ml-1">4.7</Text>

          <Text className="ml-4">Free</Text>

          <Ionicons name="time-outline" size={18} className="ml-6" />
          <Text className="ml-1">20 min</Text>
        </View>
      </View>

      <View className="h-10" />
    </ScrollView>
  );
}
