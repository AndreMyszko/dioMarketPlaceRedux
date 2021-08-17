import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from './styles';

export default function FloatingCart() {
  const navigation = useNavigation();
  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={24} color="#FFF" />
        <CartButtonText>2 itens</CartButtonText>

        <CartPricing>
          <CartTotalPrice>R$ 200,00</CartTotalPrice>
        </CartPricing>
      </CartButton>
    </Container>
  );
}
