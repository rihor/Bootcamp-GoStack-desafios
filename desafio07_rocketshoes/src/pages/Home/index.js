import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import api from '../../services/api';
import {
  Container,
  ProductList,
  ProductContainer,
  ProductImage,
  Title,
  Price,
  AddButton,
  ButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    // dispara uma ACTION para o redux
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        {products.length && (
          <ProductList
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item: product }) => (
              <ProductContainer>
                <ProductImage source={{ uri: product.image }} />
                <Title>{product.title}</Title>
                <Price>{product.price}</Price>
                <AddButton onPress={() => this.handleAddProduct(product.id)}>
                  <ProductAmount>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <ProductAmountText>
                      {amount[product.id] || 0}
                    </ProductAmountText>
                  </ProductAmount>
                  <ButtonText>ADICIONAR AO CARRINHO</ButtonText>
                </AddButton>
              </ProductContainer>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
