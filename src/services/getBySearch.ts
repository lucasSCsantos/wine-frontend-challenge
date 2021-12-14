export default async (page: string | string[], query: string | string[]) => {
  const data = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9&name=${query}`
  );
  const result = await data.json();
  return result;
};
