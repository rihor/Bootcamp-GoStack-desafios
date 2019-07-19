import styled from 'styled-components/native';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

import color from '../../theme/color';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  padding: 20px;
  width: 100%;
`;

export const ProductContainer = styled.View`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  flex-grow: 1;
  elevation: 2;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin: 4px 0 2px;
`;
export const Price = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const AddButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  margin-top: 10px;
  align-items: center;
  position: relative;
  height: 52px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  text-align: center;
  color: #fff;
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
