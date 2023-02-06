import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-24 w-24 rounded-full"
      />
      <View className="absolute bg-[black] h-24 w-24 left-0 rounded-full items-center justify-center z-10">
        <Text className=" text-white font-extrabold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CategoryCard;
