import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { PlusIcon, MinusIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  filterItems,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishCard = ({ id, title, short_description, price, imgUrl }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.basket);
  const [item, setItem] = useState({});
  // const item = useSelector(state =>
  //   state.basket.items.filter(item => item.id === id)
  // );

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, title, short_description, price, imgUrl }));
  };
  const removeItemFromBasket = () => {
    if (item.quantity === 0) return;
    dispatch(removeFromBasket(id));
  };
  useEffect(() => {
    const it = items.find(item => item.id === id);
    setItem(it);
  }, [id, items]);

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
            className="h-20 w-20 rounded-full bg-gray-800"
          />
        </View>
      </TouchableOpacity>
      {isPressed ? (
        <View className="flex-row space-x-2 items-center bg-white p-4 justify-end">
          <TouchableOpacity
            className="bg-primary rounded-full p-2"
            onPress={addItemToBasket}
          >
            <PlusIcon size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text className="text-xs">{item?.quantity || 0}</Text>
          <TouchableOpacity
            disabled={item?.quantity === 0}
            className={`${
              item?.quantity ? "bg-primary" : "bg-gray-400"
            } rounded-full p-2`}
            onPress={removeItemFromBasket}
          >
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
