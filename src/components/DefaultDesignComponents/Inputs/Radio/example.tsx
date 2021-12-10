import type { NextPage } from 'next';
import { useState } from 'react';
import Radio from '.';

// COMPONENTE EXEMPLO PARA O RADIO BUTTON LOGIC

const Example: NextPage = () => {
  const [select, setSelect] = useState('');
  const handleSelectChange = event => {
    const { value } = event.target;
    setSelect(value);
  };
  return (
    <div>
      <Radio
        onChange={event => handleSelectChange(event)}
        name="radio"
        checked={select === 'foo'}
        value="foo"
      >
        foo
      </Radio>
      <Radio
        onChange={event => handleSelectChange(event)}
        value="bar"
        name="radio"
        checked={select === 'bar'}
      >
        bar
      </Radio>
    </div>
  );
};

export default Example;
