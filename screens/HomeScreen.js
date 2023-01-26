import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white pt-5" style={styles.droidSafeArea}>
      {/* header */}
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
            {Platform.OS === "android" ? (
              ""
            ) : (
              <ChevronDownIcon size={20} color="#00CCBB" />
            )}
          </Text>
        </View>
        {Platform.OS === "android" ? (
          ""
        ) : (
          <UserIcon size={35} color="#00CCBB" />
        )}
      </View>
      {/* search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3">
          {Platform.OS === "android" ? (
            ""
          ) : (
            <MagnifyingGlassIcon color="gray" size={20} />
          )}

          <TextInput
            placeholder="Restaurants and cuisine"
            keyboardType="default"
          />
        </View>
        {Platform.OS === "android" ? (
          ""
        ) : (
          <AdjustmentsHorizontalIcon color="#00CCBB" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
