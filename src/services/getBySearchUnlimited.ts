const getBySearchUnlimited = async (query: string | string[]) => {
  const data = await fetch(
    `https://wine-back-test.herokuapp.com/products?name=${query}`
  );
  const result = await data.json();
  return result;
};

export default getBySearchUnlimited;
