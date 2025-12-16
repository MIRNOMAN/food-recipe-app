import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-4">Recipe ID: {id}</Text>

      {/* later: fetch recipe by id */}
    </ScrollView>
  );
}
