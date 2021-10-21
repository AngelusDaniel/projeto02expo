import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AnimalStack from "./diario.routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { Camera, File, Map } from "../pages";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.gray },
        headerTintColor: colors.white,
        headerTitle: () => <Text style={styles.title}>Diário</Text>,
        drawerStyle: {
          backgroundColor: colors.brownLight,
        },
        drawerInactiveTintColor: colors.white,
        drawerActiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="AnimalStack"
        component={AnimalStack}
        options={{
          drawerLabel: "Diário",
          drawerIcon: () => (
            <MaterialCommunityIcons name="dog" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen name="Camera" component={Camera} />
      <Drawer.Screen name="File" component={File} />
      <Drawer.Screen name="Map" component={Map} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
