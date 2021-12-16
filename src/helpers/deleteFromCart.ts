import Router from 'next/router';

const deleteFromCart = product => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const newList = cartItems.items.filter(item => !(item.id === product.id));
  localStorage.cartItems = JSON.stringify({
    totalPrice: cartItems.totalPrice - product.priceNonMember,
    totalItems: cartItems.totalItems - product.count,
    items: newList
  });
  Router.reload();
};

export default deleteFromCart;
