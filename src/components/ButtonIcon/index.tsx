import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon(props: ButtonIconProps) {
  const { title, ...rest } = props;

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
