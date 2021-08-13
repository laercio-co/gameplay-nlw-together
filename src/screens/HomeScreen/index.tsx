import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Profile } from '../../components/Profile';
import { styles } from './styles';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Profile />
      </View>
    </SafeAreaView>
  );
}
