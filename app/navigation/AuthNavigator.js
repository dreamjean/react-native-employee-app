import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { colors } from '../constants';
import { OnBoardingScreen } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="OnBoarding">
    <Stack.Screen
      name="OnBoarding"
      component={OnBoardingScreen}
      options={{
        title: null,
        headerStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
