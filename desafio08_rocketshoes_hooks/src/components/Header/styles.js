import styled from 'styled-components/native';

import color from '../../theme/color';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  background: ${color.dark};
  flex-direction: row;
  justify-content: space-between;

  padding: 20px;
`;

export const LogoButton = styled.TouchableOpacity``;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity``;

export const AmountText = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -10px;
  min-width: 18px;
  min-height: 18px;
  background: ${color.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
