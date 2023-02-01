import { View, Text, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ imgUri, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUri,
        }}
        className="h-21 w-21 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CategoryCard;
