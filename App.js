import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
