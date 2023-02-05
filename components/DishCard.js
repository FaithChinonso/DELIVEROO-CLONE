import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const DishCard = ({ title, short_description, price, imgUrl }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <TouchableOpacity
        className={`p-4 bg-white border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(prev => !prev)}
      >
        <View className="flex-row space-x-3">
          <View className="flex-1">
            <Text className="text-lg pb-2">{title}</Text>
            <Text className=" text-gray-400 pb-2">{short_description}</Text>
            <Text className=" text-gray-400 pb-2">
              <Currency quantity={price} currency="NGN" />
            </Text>
          </View>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="h-20 w-20 rounded-sm bg-gray-800"
          />
        </View>
      </TouchableOpacity>
      {isPressed ? (
        <View className="flex-row space-x-2 items-center bg-white p-4">
          <TouchableOpacity className="bg-[#00CCBB] rounded-full p-2">
            <PlusIcon size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text className="text-xs">3</Text>
          <TouchableOpacity className="bg-[#00CCBB] rounded-full p-2">
            <MinusIcon size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
    </>
  );
};

export default DishCard;
