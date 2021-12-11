import type { NextPage } from 'next';
import Price from '../components/DefaultDesignComponents/Typography/Price';

const Home: NextPage = () => (
  <div>
    <Price value={30.74} size="xxxSmall" />
  </div>
);

export default Home;
