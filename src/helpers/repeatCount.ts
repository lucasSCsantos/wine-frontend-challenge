const repeatCount = (arr: [], itemId: string | number) => {
  const count = arr.reduce((acc, { id }) => {
    if (id === itemId) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return count;
};

export default repeatCount;
