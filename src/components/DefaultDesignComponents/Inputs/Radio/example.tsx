import type { NextPage } from 'next';
import { useState } from 'react';
import { RadioButton, RadioButtonLabel, Radio } from '.';

// COMPONENTE EXEMPLO PARA O RADIO BUTTON LOGIC

const RadioExample: NextPage = () => {
  const [select, setSelect] = useState('betterPriceOnly');
  const handleSelectChange = event => {
    const { value } = event.target;
    setSelect(value);
  };
  return (
    <div>
      <Radio>
        <RadioButton
          type="radio"
          name="radio"
          value="betterPriceOnly"
          checked={select === 'betterPriceOnly'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Auto accept better price only</div>
      </Radio>
      <Radio>
        <RadioButton
          type="radio"
          name="radio"
          value="anyPriceChange"
          checked={select === 'anyPriceChange'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Auto accept any price change</div>
      </Radio>
      <Radio>
        <RadioButton
          type="radio"
          name="radio"
          value="neverAutoAccept"
          checked={select === 'neverAutoAccept'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Never auto accept a price change</div>
      </Radio>
    </div>
  );
};

export default RadioExample;
