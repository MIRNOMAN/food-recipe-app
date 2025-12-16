import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";


type Tcategory = {
idCategory: string,
strCategory: string,
strCategoryThumb: string,
strCategoryDescription : string
};

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setCategories(data.categories);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <View className="flex-row justify-center mt-4">
        <Text>Loading categories...</Text>
      </View>
    );
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
      {categories.map((item : Tcategory) => (
        <TouchableOpacity
          key={item.idCategory}
          className="bg-white w-36 h-auto rounded-2xl p-5 mr-4 shadow"
        >
          <Image
            source={{ uri: item.strCategoryThumb }}
            className="h-16 rounded-md w-full  mb-3"
            resizeMode="cover"
          />
          <Text className="font-senBold text-center">{item.strCategory}</Text>
         
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
