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
    const [actualItem] = cartItems.filter(({ id }) => id === item.id);

    if (actualItem) {
      const newItem = { ...actualItem, count: actualItem.count + 1 };
      const index = cartItems.indexOf(actualItem);
      localStorage.cartItems = JSON.stringify([
        ...cartItems.splice(0, index),
        newItem,
        ...cartItems.splice(index + 1)
      ]);
    } else {
      localStorage.cartItems = JSON.stringify([...cartItems, itemToAdd]);
    }
  } else {
    localStorage.cartItems = JSON.stringify([itemToAdd]);
  }
};
