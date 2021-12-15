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
    const [actualItem] = cartItems.items.filter(({ id }) => id === item.id);

    if (actualItem) {
      const newItem = { ...actualItem, count: actualItem.count + 1 };
      const index = cartItems.items.indexOf(actualItem);
      localStorage.cartItems = JSON.stringify({
        totalItems: cartItems.totalItems + 1,
        items: [
          ...cartItems.items.slice(0, index),
          newItem,
          ...cartItems.items.slice(index + 1)
        ]
      });
    } else {
      localStorage.cartItems = JSON.stringify({
        totalItems: cartItems.totalItems + 1,
        items: [...cartItems.items, itemToAdd]
      });
    }
  } else {
    localStorage.cartItems = JSON.stringify({
      totalItems: 1,
      items: [itemToAdd]
    });
  }
};
