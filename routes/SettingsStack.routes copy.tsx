import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Settings, Perfil} from '../pages'

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
  );
}