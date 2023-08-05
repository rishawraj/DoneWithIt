import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Image" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
