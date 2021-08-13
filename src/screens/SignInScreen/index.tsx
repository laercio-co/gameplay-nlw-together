import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import { RootStackParamList } from '../../@types/RootStackParams';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignInScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'SignIn'>) {
  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={IllustrationImg}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}e organize suas {'\n'}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </ScrollView>
  );
}
