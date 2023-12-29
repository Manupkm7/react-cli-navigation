import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../../screens/shop/categories';
import Products from '../../screens/shop/products';
import Product from '../../screens/shop/product';
import {ShopStackParamList} from './types/index';

const Stack = createNativeStackNavigator<ShopStackParamList>();

export default function ShopNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
