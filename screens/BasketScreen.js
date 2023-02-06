import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import BasketRow from "../components/BasketRow";
import { useDispatch, useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  totalAmount,
  selectRestaurant,
} from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketScreen = () => {
  const { items, totalAmount } = useSelector(state => state.basket);
  const { restaurant } = useSelector(state => state.restaurant);
  const navigation = useNavigation();

  return (
    <SafeAreaView className=" h-full justify-between">
      <View className="relative py-8 px-4 items-center bg-white">
        <Text className="font-extrabold text-lg">Basket</Text>
        <Text className="text-gray-400">{restaurant.title}</Text>
        <TouchableOpacity
          className="bg-[#00ccbb] rounded-full p-2 absolute right-3 top-[50%] -translate-y-[50%]"
          onPress={() => navigation.goBack()}
        >
          <XMarkIcon size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View className="bg-white my-6 p-4 flex-row items-center space-x-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <Text className="flex-1">Deliver in 50 - 75 minutes</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1">
        {items.map(item => (
          <BasketRow
            key={item.id}
            id={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.totalPrice}
            imgUrl={item.imgUrl}
          />
        ))}
      </ScrollView>
      <View className="p-4  bg-white mt-5 space-y-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-400">Subtotal</Text>
          <Text className="text-gray-400">
            <Currency quantity={totalAmount} currency="NGN" />
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-gray-400">Delivery Fee</Text>
          <Text className="text-gray-400">
            <Currency quantity={500} currency="NGN" />
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="font-extrabold">
            <Currency quantity={totalAmount + 500} currency="NGN" />
          </Text>
        </View>
        <TouchableOpacity
          className="bg-[#00CCBB] rounded-lg p-4"
          onPress={() => navigation.navigate("Processing")}
        >
          <Text className="text-white text-center text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
