import styled from 'styled-components/native';
import { darken } from 'polished';
import color from '../../theme/color';

export const Container = styled.View`
  background: ${color.dark};
  flex: 1;
  justify-content: center;
`;

export const ProductContainer = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
  height: 400px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 16px;
  height: 70px;
`;

export const Price = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
  flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${color.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, color.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
