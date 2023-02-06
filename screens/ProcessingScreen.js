import React, { useEffect } from "react";
import { Text, View, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const ProcessingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 5000);
  }, []);

  return (
    <SafeAreaView className=" items-center justify-center flex-1 bg-[rgba(0,0,0,0.5)]">
      <Progress.Circle size={90} indeterminate={true} color="#00CCBB" />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-5 text-primary font-extrabold text-center"
      >
        Waiting for restaurant to accept your order
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default ProcessingScreen;
