import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { END } from 'redux-saga';
import Body from '../../components/Home/Body';
import { SagaStore, storeWrapper } from '../../store';
import { loadRequest } from '../../store/products/actions';
import { BaseProps } from '../../__mocks__/base';

export const getStaticPaths = async () => ({
  paths: [{ params: { page: '1', filter: '0-40' } }],
  fallback: 'blocking'
});

export const getStaticProps: GetStaticProps = storeWrapper.getStaticProps(
  store => async context => {
    const { page, filter } = context.params;
    const requestData = {
      query: filter.includes('query') ? (filter as string).split('=')[1] : null,
      filter: filter.includes('filter')
        ? (filter as string).split('=')[1]
        : null,
      page
    };
    store.dispatch(loadRequest(requestData));
    store.dispatch(END);
    await (store as SagaStore).sagaTask.toPromise();
    return null;
  }
);

interface HomeProps {
  response: BaseProps;
}

const Home: NextPage<HomeProps> = () => (
  <div>
    <Body />
  </div>
);
export default Home;
