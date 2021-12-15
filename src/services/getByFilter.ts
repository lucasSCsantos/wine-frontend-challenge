export default async (page: string | string[], filter: string | string[]) => {
  const data = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=${page}&limit=9&filter=${filter}`
  );
  const result = await data.json();
  return result;
};
