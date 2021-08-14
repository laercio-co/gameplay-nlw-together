import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategoryList } from '../../components/CategoryList';
import { ContentHeader } from '../../components/ContentHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function HomeScreen() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      categoryId: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Avengers',
        icon: null,
        owner: false,
      },
      categoryId: '2',
      date: '27/06 às 21:00h',
      description: 'Sem perder uma partida',
    },
  ];

  function handleSelect(categoryId: string) {
    categoryId === selectedCategoryId
      ? setSelectedCategoryId('')
      : setSelectedCategoryId(categoryId);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategoryList
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={handleSelect}
      />

      <View style={styles.content}>
        <ContentHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
