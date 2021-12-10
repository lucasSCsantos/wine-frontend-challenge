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
    <>
      <Radio
        value="foo"
        checked={select === 'foo'}
        name="radio"
        onChange={event => handleSelectChange(event)}
      >
        foo
      </Radio>
      <Radio
        value="bar"
        checked={select === 'bar'}
        name="radio"
        onChange={event => handleSelectChange(event)}
      >
        bar
      </Radio>
    </>
  );
};

export default Example;
