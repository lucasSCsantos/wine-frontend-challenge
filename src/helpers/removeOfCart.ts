import Router from 'next/router';

const removeOfCart = item => {
  if (localStorage.getItem('cartItems')) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const [actualItem] = cartItems.items.filter(({ id }) => id === item.id);
    const index = cartItems.items.indexOf(actualItem);

    if (actualItem && actualItem.count > 1) {
      const newItem = { ...actualItem, count: actualItem.count - 1 };
      localStorage.cartItems = JSON.stringify({
        totalItems: cartItems.totalItems - 1,
        items: [
          ...cartItems.items.slice(0, index),
          newItem,
          ...cartItems.items.slice(index + 1)
        ]
      });
    } else {
      localStorage.cartItems = JSON.stringify({
        totalItems: cartItems.totalItems - 1,
        items: [
          ...cartItems.items.splice(0, index),
          ...cartItems.items.splice(index + 1)
        ]
      });
    }
    Router.reload();
  }
};

export default removeOfCart;
