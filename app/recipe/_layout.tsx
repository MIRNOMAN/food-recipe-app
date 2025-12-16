// app/recipe/_layout.tsx
import { Stack } from "expo-router";

export default function RecipeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Recipe Details",
        headerBackTitle: "Back",
      }}
    />
  );
}
