import type { NextPage } from 'next';
import { ReactNode } from 'react';
import { RadioButton, RadioFill, RadioRoot } from './styles';

// COMPONENTE EXEMPLO PARA O RADIO BUTTON LOGIC
interface RadioProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: any) => void | Function;
  children: ReactNode;
}

const Radio: NextPage<RadioProps> = ({
  name,
  value,
  checked,
  onChange,
  children
}) => (
  <div>
    <RadioRoot>
      <label htmlFor={name}>
        <RadioButton
          type="radio"
          onChange={onChange}
          name={name}
          value={value}
          checked={checked}
          aria-checked={checked}
        />
        <RadioFill />
        {children}
      </label>
    </RadioRoot>
  </div>
);

export default Radio;
