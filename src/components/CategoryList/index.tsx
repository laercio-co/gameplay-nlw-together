import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

type CategoryListProps = {
  selectedCategoryId: string;
  setSelectedCategoryId: (categoryId: string) => void;
};

export function CategoryList(props: CategoryListProps) {
  const { selectedCategoryId, setSelectedCategoryId } = props;

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(({ id, title, icon }) => (
        <Category
          key={id}
          title={title}
          icon={icon}
          checked={id === selectedCategoryId}
          onPress={() => setSelectedCategoryId(id)}
        />
      ))}
    </ScrollView>
  );
}
