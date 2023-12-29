import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopNavigator from '../shop';

const Stack = createNativeStackNavigator();

export default function MainNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Shop" component={ShopNavigator} />
      {/* <Stack.Screen name="Settings" component={SettingsNavigator} /> */}
    </Stack.Navigator>
  );
}
