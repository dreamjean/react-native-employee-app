import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import {
  HomeScreen,
  PersonalDetailsEditScreen,
  ProfileScreen,
} from "../screens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen
      name="PersonalDetailsEdit"
      component={PersonalDetailsEditScreen}
    />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
