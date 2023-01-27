import { Text, View, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
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
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
      <CategoryCard imgUri="https://links.papareact.com/gn7" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
