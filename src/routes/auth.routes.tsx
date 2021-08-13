import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../@types/RootStackParams';
import { SignInScreen } from '../screens/SignInScreen';
import { HomeScreen } from '../screens/HomeScreen';

const RootStack = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name={'SignIn'} component={SignInScreen} />
      <RootStack.Screen name={'Home'} component={HomeScreen} />
    </RootStack.Navigator>
  );
}
