import { View, Text, Image } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 5000);
  }, []);
  return (
    <View className="bg-primary items-center justify-center flex-1">
      <Image source={require("../assets/Borcelle.png")} className="h-80 w-80" />
    </View>
  );
};

export default WelcomeScreen;
