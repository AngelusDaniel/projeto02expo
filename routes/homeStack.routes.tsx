import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Details} from '../pages'

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
  );
}