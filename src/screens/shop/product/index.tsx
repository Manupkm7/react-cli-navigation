import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function Product(): JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Manu Alto Capo Product</Text>
    </View>
  );
}
