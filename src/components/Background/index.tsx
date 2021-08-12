import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type BackgroundProps = {
  children: ReactNode;
};

export function Background(Props: BackgroundProps) {
  const { secondary80, secondary100 } = theme.colors;
  const { children } = Props;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
