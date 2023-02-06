import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../features/basketSlice";

const BasketRow = ({ quantity, imgUrl, title, price, totalPrice, id }) => {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(removeFromBasket(id));
  };
  return (
    <View className="flex-row space-x-2 px-4 py-6 border-b border-gray-100 items-center bg-white">
      <Text className="text-primary text-xs">{quantity}x</Text>
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-12 w-12 rounded-full bg-gray-800"
      />
      <Text className="flex-1">{title}</Text>
      <Text className="text-gray-400">
        <Currency quantity={totalPrice} currency="NGN" />
      </Text>
      <TouchableOpacity onPress={removeItemHandler}>
        <Text className="text-primary">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketRow;
