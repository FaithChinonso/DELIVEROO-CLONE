import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const Basket = () => {
  const { items, totalAmount, totalQuantity } = useSelector(
    state => state.basket
  );

  const navigation = useNavigation();

  if (items.length === 0) return;
  return (
    <View className="absolute bottom-10 left-0 z-10 w-full">
      <TouchableOpacity
        className="bg-[#00CCBB] flex-row mx-4 p-4 rounded-lg space-x-2 items-center"
        onPress={() => navigation.navigate("Basket")}
      >
        <Text className="text-white font-extrabold text-lg bg-[#174440] px-2 py-1">
          {totalQuantity}
        </Text>
        <Text className="flex-1 font-extrabold text-white">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={totalAmount} currency="NGN" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
