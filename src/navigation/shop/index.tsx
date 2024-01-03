/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../../screens/shop/categories';
import Products from '../../screens/shop/products';
import Product from '../../screens/shop/product';
import { ShopStackParamList } from './types/index';

export const SettingsIcon = require('../../../assets/images/settings.png');

const Stack = createNativeStackNavigator<ShopStackParamList>();

export default function ShopNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#695D98',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsStack')}>
            <Image source={SettingsIcon} style={styles.icon} />
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
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
