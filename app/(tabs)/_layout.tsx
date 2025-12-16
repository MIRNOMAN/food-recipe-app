// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e5e5e5',
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#FC6E2A',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "home" : "home-outline"} 
              size={size} 
              color={color} 
            />
          ),
        }} 
      />
      
      <Tabs.Screen 
        name="categories" 
        options={{ 
          title: "Categories",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "grid" : "grid-outline"} 
              size={size} 
              color={color} 
            />
          ),
        }} 
      />
      
      <Tabs.Screen 
        name="saved" 
        options={{ 
          title: "Saved",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "bookmark" : "bookmark-outline"} 
              size={size} 
              color={color} 
            />
          ),
        }} 
      />
      
      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
              name={focused ? "person" : "person-outline"} 
              size={size} 
              color={color} 
            />
          ),
        }} 
      />
      
 
    </Tabs>
  );
}