import React from 'react';
import { SafeAreaView, View } from 'react-native';

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
