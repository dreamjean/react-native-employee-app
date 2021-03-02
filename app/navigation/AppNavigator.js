import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { DestinationDetailsScreen, HomeScreen } from "../screens";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen
      name="DestinationDetails"
      component={DestinationDetailsScreen}
    />
  </Tab.Navigator>
);

export default AppNavigator;
