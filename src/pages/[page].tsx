import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Body from '../components/Home/Body';
import getByFilter from '../services/getByFilter';
import getByPage from '../services/getByPage';
import getBySearch from '../services/getBySearch';
import { BaseProps } from '../__mocks__/base';

export const getStaticPaths = async () => ({
  paths: [
    { params: { page: '1' } },
    { params: { page: '2' } },
    { params: { page: '3' } }
  ],
  fallback: 'blocking'
});

export const getStaticProps: GetStaticProps = async context => {
  const { page } = context.params;
  // Fazer isso aqui funcionar ----------- DESCOMENTE ABAIXO ----------
  // const { filter, query } = redux;
  // let response;
  // if (filter) {
  //   console.log('entrou');
  //   response = await getByFilter(page, filter);
  // }
  // if (query) response = await getBySearch(page, query);
  // if (!filter && !query) response = await getByPage(page);
  // Fazer isso aqui funcionar ------------
  const response = await getByPage(page);
  return {
    props: {
      response
    }
  };
};

interface HomeProps {
  response: BaseProps;
}

const Home: NextPage<HomeProps> = ({ response }) => {
  console.log(response);
  return (
    <div>
      <Body />
    </div>
  );
};

export default Home;
