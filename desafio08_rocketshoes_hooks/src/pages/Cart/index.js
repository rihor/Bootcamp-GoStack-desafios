import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  EmptyCartContainer,
  EmptyText,
  CartItems,
  ProductContainer,
  Image,
  InfoContainer,
  AboutProduct,
  AboutWrapper,
  ProductTitle,
  ProductPrice,
  DeleteButton,
  OrderDetails,
  ProductAmount,
  AmountButton,
  ProductAmountText,
  ProductSubTotal,
  Checkout,
  CheckoutWrapper,
  CheckoutHeader,
  CheckoutTotal,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length <= 0 ? (
        <EmptyCartContainer>
          <Icon name="remove-shopping-cart" size={64} color="#ddd" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyCartContainer>
      ) : (
        <>
          <CartItems
            data={cart}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <ProductContainer>
                <Image source={{ uri: item.image }} />
                <InfoContainer>
                  <AboutProduct>
                    <AboutWrapper>
                      <ProductTitle>{item.title}</ProductTitle>
                      <ProductPrice>{item.priceFormatted}</ProductPrice>
                    </AboutWrapper>
                    <DeleteButton
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }
                    >
                      <Icon name="delete-forever" size={22} color="#999" />
                    </DeleteButton>
                  </AboutProduct>
                  <OrderDetails>
                    <ProductAmount>
                      <AmountButton onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={24}
                          color="#7159c1"
                        />
                      </AmountButton>
                      <ProductAmountText>{item.amount}</ProductAmountText>
                      <AmountButton onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={24}
                          color="#7159c1"
                        />
                      </AmountButton>
                    </ProductAmount>

                    <ProductSubTotal>{item.subtotal}</ProductSubTotal>
                  </OrderDetails>
                </InfoContainer>
              </ProductContainer>
            )}
          />
          <Checkout>
            <CheckoutWrapper>
              <CheckoutHeader>Total</CheckoutHeader>
              <CheckoutTotal>{total}</CheckoutTotal>
            </CheckoutWrapper>
            <CheckoutButton>
              <CheckoutButtonText>Checkout</CheckoutButtonText>
            </CheckoutButton>
          </Checkout>
        </>
      )}
    </Container>
  );
}
