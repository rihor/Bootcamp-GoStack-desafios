import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  LogoButton,
  LogoImage,
  CartContainer,
  AmountText,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Home')}>
        <LogoImage />
      </LogoButton>

      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={28} />
        <AmountText>{cartSize || 0}</AmountText>
      </CartContainer>
    </Container>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
