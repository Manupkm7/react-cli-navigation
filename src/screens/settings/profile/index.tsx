import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { PropsSettings } from '../../../navigation/settings/types';

export default function Profile({ navigation }: PropsSettings): JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>Manu Alto Capo Profile</Text>
      <Button
        onPress={() => navigation.navigate('Favorites')}
        color="#695D98"
        title="navigate Favorites"
      />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        color="#695D88"
        title="navigate Notifications"
      />
    </View>
  );
}
