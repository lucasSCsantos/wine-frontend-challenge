import type { NextPage } from 'next';
import { useState } from 'react';
import RadioExample from '../components/DefaultDesignComponents/Inputs/Radio/example';
// COMPONENTE EXEMPLO PARA O RADIO BUTTON LOGIC

const Home: NextPage = () => {
  const [select, setSelect] = useState('');
  const handleSelectChange = event => {
    const { value } = event.target;
    setSelect(value);
  };
  return (
    <div>
      <RadioExample
        name="radio"
        checked={select === 'laboral'}
        value="laboral"
        onChange={event => handleSelectChange(event)}
      >
        laboral
      </RadioExample>
      <RadioExample
        name="radio"
        onChange={event => handleSelectChange(event)}
        value="laffrrrny"
        checked={select === 'laffrrrny'}
      >
        lafrnyy
      </RadioExample>
    </div>
  );
};

export default Home;
