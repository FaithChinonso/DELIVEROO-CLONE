import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import client from "../sanity";
import { useLayoutEffect, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { addRestaurants } from "../features/restaurantSlice";
const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { restaurants } = useSelector(state => state.restaurant);
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    client
      .fetch(
        `*[
      _type == 'featured'
    ] {
      ...,restaurants[] ->{
        ...,dishes[]->{}
      }
    }`
      )
      .then(data => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white pt-5" style={styles.droidSafeArea}>
      <View className="flex-row pb-3  items-center space-x-2 mx-4 ">
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#A34100" />
          </Text>
        </View>
        <UserIcon size={35} color="#A34100" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3 rounded-2xl">
          <MagnifyingGlassIcon color="gray" size={20} />

          <TextInput
            placeholder="Search for a vendor or product"
            keyboardType="default"
          />
        </View>
      </View>

      <ScrollView className="flex-1 bg-gray-100">
        <Categories />
        {featuredCategories.map(category => (
          <FeaturedRow
            key={category._id}
            title={category.name}
            description={category.short_description}
            id={category._id}
          />
        ))}
      </ScrollView>
      <TouchableOpacity className="bg-primary p-4 rounded-3xl">
        <Text className="text-white text-center text-lg font-bold">
          Show All Restaurants
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
