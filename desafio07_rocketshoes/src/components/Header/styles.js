import styled from 'styled-components/native';

import logo from '../../assets/logo.png';
import color from '../../theme/color';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const CartContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 2px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${color.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
