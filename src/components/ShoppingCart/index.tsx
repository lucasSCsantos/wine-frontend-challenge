import { useEffect, useState } from 'react';
// import { item } from '../../__mocks__/base';
import { Container, CartProduct } from './styles';

// interface ShoppingCartProps {
//   children: ReactNode;
// }

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('cartItems'));
    setCartItems(list);
  }, []);
  return (
    <Container>
      <div className="content">
        {cartItems &&
          cartItems.map(item => (
            <CartProduct key={item.id}>
              <img src={item.image} alt={item.name} />
            </CartProduct>
          ))}
      </div>
    </Container>
  );
}

export default ShoppingCart;
