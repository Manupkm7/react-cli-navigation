import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export default function Favorites(): JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Manu Alto Capo Favorites</Text>
    </View>
  );
}
