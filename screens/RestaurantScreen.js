import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import DishCard from "../components/DishCard";

function RestaurantScreen() {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={styles.droidSafeArea}>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-800 p-5"
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white px-4 py-4">
        <View className=" ">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-start space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating} </Text> . {genre}
              </Text>
            </View>
            <View className="flex-row items-start space-x-1 w-[200px]">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-gray-500 text-xs"> Nearby . {address}</Text>
            </View>
          </View>
        </View>
        <Text className="text-gray-500 mt-2 pb-4 ">{short_description}</Text>
        <TouchableOpacity className="flex-row items-center space-x-2 py-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-bold px-4 py-4">Menu</Text>
      <View>
        {dishes?.map(item => (
          <DishCard
            key={item?._id}
            title={item?.name}
            short_description={item?.short_description}
            imgUrl={item?.image}
            price={item?.price}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default RestaurantScreen;
const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
