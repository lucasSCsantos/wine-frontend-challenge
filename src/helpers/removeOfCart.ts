const removeOfCart = item => {
  // const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  // let index;
  // const condition = cartItems.some(item => {
  //   if (item.id === product.id && item.count === product.count) {
  //     index = cartItems.indexOf(item);
  //     return true;
  //   }
  //   return false;
  // });
  // if (condition) {
  //   localStorage.cartItems = JSON.stringify([
  //     ...cartItems.slice(0, index),
  //     ...cartItems.slice(index + 1)
  //   ]);
  // }

  if (localStorage.getItem('cartItems')) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const [actualItem] = cartItems.filter(({ id }) => id === item.id);
    const index = cartItems.indexOf(actualItem);

    if (actualItem && actualItem.count > 1) {
      const newItem = { ...actualItem, count: actualItem.count - 1 };
      localStorage.cartItems = JSON.stringify([
        ...cartItems.splice(0, index),
        newItem,
        ...cartItems.splice(index + 1)
      ]);
    } else {
      localStorage.cartItems = JSON.stringify([
        ...cartItems.splice(0, index),
        ...cartItems.splice(index + 1)
      ]);
    }
  }
};

export default removeOfCart;
