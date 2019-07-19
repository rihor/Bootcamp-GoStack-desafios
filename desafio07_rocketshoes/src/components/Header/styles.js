import styled from 'styled-components/native';

import logo from '../../assets/logo.png';
import color from '../../theme/color';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${color.dark};
  height: 80px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity`
  position: relative;
`;

export const ItemCount = styled.Text`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  right: -6px;
  top: -6px;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  background: ${color.primary};
`;
