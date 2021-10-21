import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Diario, Texto } from "../pages";
import { DiarioStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator<DiarioStackParamList>();

export default function AnimalRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Diario" component={Diario} />
      <Stack.Screen name="Texto" component={Texto} />
    </Stack.Navigator>
  );
}
