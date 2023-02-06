import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const { restaurant } = useSelector(state => state.restaurant);

  return (
    <View className="bg-primary flex-1 ">
      <SafeAreaView className="z-50 mx-4">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="#ffffff" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-lg text-white">Order Help</Text>
        </View>
        <View className="bg-white my-5 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">44-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20 "
            />
          </View>

          <Progress.Bar
            progress={0.3}
            width={200}
            indeterminate={true}
            color="#00ccbb"
          />
          <Text className="mt-3 text-gray-500">
            Your Order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 p-4 bg-gray-300 rounded-full mt-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Charles Okafor</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-primary text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
