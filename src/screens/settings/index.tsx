import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { PropsSettings } from '../../navigation/settings/types';
// import {PropsSettings} from '../../navigation/settings/types';

export default function Settings({ navigation }: PropsSettings): JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={styles.textStyle}>
        Manu Alto Capo esta pantalla es de settings
      </Text>
      <Button
        color="#695D98"
        title="navigate Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />
      <Button
        color="#695D88"
        title="navigate Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button
        color="#695D88"
        title="navigate Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
