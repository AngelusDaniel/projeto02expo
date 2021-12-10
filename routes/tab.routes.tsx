import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Settings} from '../pages';
import HomeStack from "./homeStack.routes";
import Drawer from './drawer.routes'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Drawer" component={Drawer} />
      </Tab.Navigator>
  );
}