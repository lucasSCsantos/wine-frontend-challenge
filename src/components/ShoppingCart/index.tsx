import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Button } from '../DefaultDesignComponents/Buttons';
import {
  Paragraph,
  SmallParagraph
} from '../DefaultDesignComponents/Typography';
import Price from '../DefaultDesignComponents/Typography/Price';
import CartProduct from './CartProducts';
import { Container } from './styles';

export type CartItemProps = {
  name: string;
  priceNonMember: number;
  id: number;
  image: string;
  country: string;
  count: number;
};

interface CartItemsProps {
  totalPrice: number;
  totalItems: number;
  items: CartItemProps[];
}

function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItemsProps>({
    totalPrice: 0,
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
    document.body.classList.remove('no-scroll');
  };

  return (
    <Container>
      <div className="content">
        <div className="title">
          <BsArrowLeft size="20" onClick={closeShoppingCart} />
          <Paragraph size="large">WineBox ({cartItems?.totalItems})</Paragraph>
        </div>
        {cartItems.items.length !== 0 ? (
          cartItems?.items?.map(item => (
            <CartProduct key={item.id} item={item} />
          ))
        ) : (
          <Paragraph weight="bold" size="xxLarge" lineHeight="20px">
            Você ainda não adicionou items ao carrinho
          </Paragraph>
        )}
        <div className="checkout">
          <div className="checkout-price">
            <SmallParagraph size="large" align="start" type="gray">
              Total
            </SmallParagraph>
            <Price value={cartItems.totalPrice} size="xLarge" />
          </div>
          <Button color="success" filled size="xLarge">
            Finalizar pedido
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default ShoppingCart;
