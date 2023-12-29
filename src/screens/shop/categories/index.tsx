import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './styles';
import {PropsCategories} from '../../../navigation/shop/types';

export default function Categories({navigation}: PropsCategories): JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Manu Alto Capo</Text>
      <Button
        onPress={() => navigation.navigate('Products')}
        color="#695D98"
        title="navigate products"
      />
      <Button
        onPress={() => navigation.navigate('Product')}
        color="#695D88"
        title="navigate product"
      />
    </View>
  );
}
