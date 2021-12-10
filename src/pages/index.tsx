import type { NextPage } from 'next';
import { useState } from 'react';
import {
  Fill,
  Input,
  Item,
  RadioButton,
  RadioButtonLabel,
  Root
} from '../components/DefaultDesignComponents/Inputs';
// import {
//   RadioButton,
//   RadioButtonLabel,
//   Radio
// } from '../components/DefaultDesignComponents/Inputs/Radio';

// COMPONENTE EXEMPLO PARA O RADIO BUTTON LOGIC

const Home: NextPage = () => {
  const [select, setSelect] = useState('');
  const handleSelectChange = event => {
    const { value } = event.target;
    setSelect(value);
  };
  return (
    <div>
      <Root>
        <label>
          laboral
          <Input
            type="radio"
            onChange={event => handleSelectChange(event)}
            name="radio"
            value="neverAutoAccept"
            checked={select === 'neverAutoAccept'}
            // aria-checked={select === 'neverAutoAccept'}
          />
          <Fill />
        </label>
      </Root>
      <Root>
        <label>
          lafrrront
          <Input
            type="radio"
            onChange={event => handleSelectChange(event)}
            name="radio"
            value="lafront"
            checked={select === 'lafront'}
            // aria-checked={select === 'lafront'}
          />
          <Fill />
        </label>
      </Root>
    </div>
  );
};

export default Home;
