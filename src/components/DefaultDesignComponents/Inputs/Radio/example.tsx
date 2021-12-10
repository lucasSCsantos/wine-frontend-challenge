import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { RadioButton, RadioFill, Radio } from '.';

// COMPONENTE EXEMPLO PARA O RADIO BUTTON LOGIC
interface RadioProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: any) => void;
  children: ReactNode;
}

const RadioExample: NextPage = ({
  name,
  value,
  checked,
  onChange,
  children
}: RadioProps) => (
  <div>
    <Radio>
      <label htmlFor={name}>
        {children}
        <RadioButton
          type="radio"
          onChange={onChange}
          name={name}
          value={value}
          checked={checked}
          aria-checked={checked}
        />
        <RadioFill />
      </label>
    </Radio>
  </div>
);

export default RadioExample;
