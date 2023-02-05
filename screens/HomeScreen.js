import { useNavigation } from "@react-navigation/native";
import client from "../sanity";
import { useLayoutEffect, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
const HomeScreen = () => {
  const navigation = useNavigation();
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
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />

          <TextInput
            placeholder="Restaurants and cuisine"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
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
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
