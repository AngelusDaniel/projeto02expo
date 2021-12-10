import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Screen, Notification} from '../pages'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Screen" component={Screen} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
  );
}