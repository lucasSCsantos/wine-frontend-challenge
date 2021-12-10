import type { NextPage } from 'next';
import { Button } from '../components/Buttons';

const Home: NextPage = function () {
  return (
    <div>
      <Button size="mini" shadow hover circle>
        +
      </Button>
    </div>
  );
};

export default Home;
