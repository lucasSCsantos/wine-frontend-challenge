import { useEffect, useState } from 'react';
import repeatCount from '../../helpers/repeatCount';
import { Container, CartProduct } from './styles';

// interface ShoppingCartProps {
//   children: ReactNode;
// }

function ShoppingCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [list, setList] = useState(false);
  const [total, setTotal] = useState(0);
  // const [att, setAtt] = useState(0);

  const correctCart = () => {
    const newList = cartItems.filter(item => {
      if (repeatCount(cartItems, item.id) > 1 && item.count === 1) {
        item.count = repeatCount(cartItems, item.id);
        return item;
      }
      if (repeatCount(cartItems, item.id) === 1) {
        return item;
      }
      return null;
    });
    const totalPrice = newList.reduce(
      (acc, curr) => acc + curr.price * curr.count,
      0
    );
    setTotal(totalPrice);
    setList(newList);
  };

  useEffect(() => {
    if (cartItems) {
      correctCart();
    }
  }, [cartItems, correctCart]);

  return (
    <Container>
      <div className="content">
        {list &&
          list.map(item => (
            <CartProduct key={item.id}>
              <img src={item.image} alt={item.name} />
            </CartProduct>
          ))}
      </div>
    </Container>
  );
}

export default ShoppingCart;
