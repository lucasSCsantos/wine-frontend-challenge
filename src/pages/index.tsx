import type { NextPage } from 'next';
import { Button } from '../components/Buttons';

const Home: NextPage = function () {
  return (
    <div>
      <Button size="large" hover shadow fill disabled>
        Loco
      </Button>
    </div>
  );
};

export default Home;
