import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Paragraph } from '../DefaultDesignComponents/Typography';
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
        {cartItems.items.length !== 0 ? (
          cartItems?.items?.map(item => (
            <CartProduct key={item.id} item={item} />
          ))
        ) : (
          <div className="empty-cart">
            Você ainda não adicionou items ao carrinho
          </div>
        )}
      </div>
    </Container>
  );
}

export default ShoppingCart;
