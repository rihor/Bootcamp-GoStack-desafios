import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 20px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

// Carrinho vazio
export const EmptyCartContainer = styled.View`
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
// fim Carrinho vazio

export const CartItems = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 20 },
})`
  padding: 20px;
`;

export const ProductContainer = styled.View`
  padding: 20px 0;
  padding-top: 20px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  flex: 1;
`;

export const Image = styled.Image`
  width: 92px;
  height: 92px;
  align-self: center;
  margin-right: 12px;
`;

export const InfoContainer = styled.View`
  flex-shrink: 1;
`;

export const AboutProduct = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AboutWrapper = styled.View`
  flex: 1;
  flex-basis: 90%;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 4px 0 2px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #999;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 8px 0 8px;
`;

export const OrderDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const AmountButton = styled.TouchableOpacity``;

export const ProductAmountText = styled.Text`
  font-size: 16px;
  margin: 0 12px;
  width: 20px;
  text-align: center;
`;

export const ProductSubTotal = styled.Text`
  margin-top: auto;
  font-size: 16px;
  font-weight: bold;
`;

export const Checkout = styled.View`
  background: #ddd;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;

export const CheckoutWrapper = styled.View``;

export const CheckoutHeader = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #555;
`;

export const CheckoutTotal = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #333;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  height: 52px;
  padding: 0 20px;
  margin: 0 5px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
`;
