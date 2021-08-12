import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type AvatarProps = {
  urlImage: string;
};

export function Avatar(props: AvatarProps) {
  const { urlImage } = props;
  const { secondary50, secondary60 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary60]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  );
}
