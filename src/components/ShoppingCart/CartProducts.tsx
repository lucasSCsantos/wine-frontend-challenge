import { NextPage } from 'next';
import React from 'react';
import addToCart from '../../helpers/addToCart';
import deleteFromCart from '../../helpers/deleteFromCart';
import { SmallParagraph } from '../DefaultDesignComponents/Typography';
import { CartProductContainer } from './styles';
import removeOfCart from '../../helpers/removeOfCart';

interface CartItemProps {
  name: string;
  priceNonMember: number;
  id: number;
  image: string;
  country: string;
  count: number;
}

interface CartProductProps {
  item: CartItemProps;
}

const CartProduct: NextPage<CartProductProps> = ({ item }) => (
  <CartProductContainer key={item.id}>
    <button type="button" onClick={() => deleteFromCart(item)}>
      x
    </button>
    <img src={item.image} alt={item.name} />
    <div className="cart-item-details">
      <SmallParagraph size="small" align="start">
        {item.name}
      </SmallParagraph>
      <SmallParagraph size="xxSmall" align="start" type="grayLight">
        {item.country}
      </SmallParagraph>
      <div className="cart-item-count">
        <button type="button" onClick={() => removeOfCart(item)}>
          -
        </button>
        {item.count}
        <button type="button" onClick={() => addToCart(item)}>
          +
        </button>
      </div>
    </div>
  </CartProductContainer>
);

export default CartProduct;
