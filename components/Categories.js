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
  console.log(categories);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {/* category card */}
      {categories?.map(item => (
        <CategoryCard
          key={item._id}
          imgUrl={urlFor(item.image.asset).url()}
          title={item.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
