/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsStackParamList } from './types/index';
import Profile from '../../screens/settings/profile';
import Favorites from '../../screens/settings/favorites';
import Notifications from '../../screens/settings/notification';
import Settings from '../../screens/settings';

const Stack = createNativeStackNavigator<SettingsStackParamList>();
export const BackIcon = require('../../../assets/images/back.png');

export default function SettingsNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#695D98',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#fff',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={BackIcon} style={styles.icon} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Settings" component={Settings} />
      {/* @ts-ignore */}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
