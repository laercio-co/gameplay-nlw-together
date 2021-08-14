import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type ContentHeaderProps = {
  title: string;
  subtitle: string;
};

export function ContentHeader(props: ContentHeaderProps) {
  const { title, subtitle } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
