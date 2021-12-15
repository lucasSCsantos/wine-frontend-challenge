import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import addToCart from '../../helpers/addToCart';
import {
  Paragraph,
  SmallParagraph
} from '../DefaultDesignComponents/Typography';
import { Container, CartProduct } from './styles';

export type CartItemProps = {
  name: string;
  priceNonMember: number;
  id: number;
  image: string;
  country: string;
  count: number;
};

interface CartItemsProps {
  totalItems: number;
  items: CartItemProps[];
}

function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItemsProps>({
    totalItems: 0,
    items: []
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    if (cart) setCartItems(cart);
  }, []);

  const closeShoppingCart = ({ target }) => {
    target.parentNode.parentNode.parentNode.classList.remove(
      'shoppingCartActive'
    );
  };

  return (
    <Container>
      <div className="content">
        <div className="title">
          <BsArrowLeft size="20" onClick={closeShoppingCart} />
          <Paragraph size="large">WineBox ({cartItems?.totalItems})</Paragraph>
        </div>
        {cartItems &&
          cartItems?.items?.map(item => (
            <CartProduct key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <SmallParagraph size="small" align="start">
                  {item.name}
                </SmallParagraph>
                <SmallParagraph size="xxSmall" align="start" type="grayLight">
                  {item.country}
                </SmallParagraph>
                <div className="cart-item-count">
                  <button type="button">-</button>
                  {item.count}
                  <button type="button" onClick={() => addToCart(item)}>
                    +
                  </button>
                </div>
              </div>
            </CartProduct>
          ))}
      </div>
    </Container>
  );
}

export default ShoppingCart;
