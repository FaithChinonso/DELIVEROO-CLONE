import { Text, View, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import React, { useEffect, useState } from "react";
import client from "../sanity";
import { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[
          _type == 'category' 
        ] 
    `
      )
      .then(data => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map(item => (
        <CategoryCard key={item._id} imgUrl={item.image} title={item.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
