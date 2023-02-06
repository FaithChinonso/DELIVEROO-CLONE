import { View, Text, Platform, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurants } from "../features/restaurantSlice";

export default function FeaturedRow({ id, title, description }) {
  const dispatch = useDispatch();
  const { restaurants } = useSelector(state => state.restaurant);
  const [res, setRes] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[
          _type == 'featured' && _id == $id
        ] {
          ...,restaurants[] ->{
            ...,dishes[]->,
            type->{
              name
            }
          }
        }[0]
    `,
        { id }
      )
      .then(data => setRes(data?.restaurants));
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>

        <ArrowRightIcon color="#A34100" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {res?.map(res => (
          <RestaurantCard
            key={res._id}
            id={res._id}
            imgUrl={res.image}
            title={res.name}
            rating={res.rating}
            genre={res.type?.name}
            address={res.address}
            short_description={res.short_description}
            dishes={res.dishes}
            long={res.Long}
            lat={res.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
