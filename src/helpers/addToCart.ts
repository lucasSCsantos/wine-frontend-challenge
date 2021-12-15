export default item => {
  const { image, name, country, priceNonMember, id: itemId } = item;
  const itemToAdd = {
    name,
    priceNonMember,
    id: itemId,
    image,
    country,
    count: 1
  };
  if (localStorage.getItem('cartItems')) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const condition = cartItems.some(({ id }) => id === item.id);
    const count = condition
      ? cartItems.reduce((acc, curr) => {
          if (curr.id === item.id) {
            return acc + 1;
          }
          return acc;
        }, 1)
      : 1;
    itemToAdd.count = count;
    localStorage.cartItems = JSON.stringify([...cartItems, itemToAdd]);
  } else {
    localStorage.cartItems = JSON.stringify([itemToAdd]);
  }
};
