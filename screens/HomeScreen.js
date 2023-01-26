import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-red-300 flex-1">
      <Text>Text</Text>
      <View></View>
    </SafeAreaView>
  );
};

export default HomeScreen;
