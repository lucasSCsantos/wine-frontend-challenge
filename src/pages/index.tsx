import type { NextPage } from "next";
import { Heading } from "../components/Typography";

const Home: NextPage = function () {
  return (
    <div>
      <Heading level={1} type="tannat" size="giant">
        Wine
      </Heading>
    </div>
  );
};

export default Home;
