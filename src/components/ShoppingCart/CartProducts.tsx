import { NextPage } from 'next';
import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import addToCart from '../../helpers/addToCart';
import deleteFromCart from '../../helpers/deleteFromCart';
import { SmallParagraph } from '../DefaultDesignComponents/Typography';
import { CartProductContainer } from './styles';
import removeOfCart from '../../helpers/removeOfCart';
import Price from '../DefaultDesignComponents/Typography/Price';

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
  <CartProductContainer data-testid={`${item.id}-cart-product`}>
    <TiDeleteOutline onClick={() => deleteFromCart(item)} data-testid={`${item.id}-remove-all`}/>
    <Price value={item.count * item.priceNonMember} size="xSmall" />
    <img src={item.image} alt={item.name} />
    <div className="cart-item-details">
      <SmallParagraph size="small" align="start">
        {item.name}
      </SmallParagraph>
      <SmallParagraph size="xxSmall" align="start" type="grayLight">
        {item.country}
      </SmallParagraph>
      <div className="cart-item-count">
        <button type="button" onClick={() => removeOfCart(item)} data-testid={`${item.id}-remove-one`}>
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
