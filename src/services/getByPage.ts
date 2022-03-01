const getByPage = async (page: string | string[]) => {
  const data = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9`
  );
  const result = await data.json();
  return result;
};

export default getByPage;
