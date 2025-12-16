import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Recipe ID: {id}</Text>
    </View>
  );
}
