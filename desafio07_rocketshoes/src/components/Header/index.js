import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Logo, CartContainer, ItemCount } from './styles';

function Header({ navigation, cartAmount }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>
      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <ItemCount>{cartAmount || 0}</ItemCount>
      </CartContainer>
    </Container>
  );
}

export default Header;
