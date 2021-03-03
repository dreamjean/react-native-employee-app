import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { colors } from "../constants";
import { HomeScreen, NewPersonalEditScreen, ProfileScreen } from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTintColor: colors.white,
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "My Sweet Home",
      }}
    />
    <Stack.Screen
      name="NewPersonalEdit"
      component={NewPersonalEditScreen}
      options={{
        title: "New Personal Edit",
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
