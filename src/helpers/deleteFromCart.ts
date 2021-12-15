const deleteFromCart = product => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const newList = cartItems.items.filter(item => !(item.id === product.id));
  localStorage.cartItems = JSON.stringify({
    totalItems: cartItems.totalItems - product.count,
    items: newList
  });
};

export default deleteFromCart;
