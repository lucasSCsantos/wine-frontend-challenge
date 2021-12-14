import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Body from '../components/Home/Body';
import getByPage from '../services/getByPage';
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
