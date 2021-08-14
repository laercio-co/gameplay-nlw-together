import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from '../../global/styles/theme';

type GuildProps = {
  id: string;
  name: string;
  icon: string | boolean;
  owner: boolean;
};

type AppointmentDataProps = {
  id: string;
  guild: GuildProps;
  categoryId: string;
  date: string;
  description: string;
};

type AppointmentProps = RectButtonProps & {
  data: AppointmentDataProps;
};

export function Appointment(props: AppointmentProps) {
  const {
    data: {
      categoryId,
      date,
      guild: { name, owner },
    },
    ...rest
  } = props;
  const { primary, on } = theme.colors;
  const [category] = categories.filter((item) => item.id === categoryId);

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}
