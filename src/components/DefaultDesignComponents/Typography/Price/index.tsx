import type { NextPage } from 'next';
import theme from '../../../../styles/theme';
import { PriceRoot } from './styles';

const { font } = theme;

interface PriceProps {
  value: number;
  size?: keyof typeof font.size;
}

const Price: NextPage<PriceProps> = ({ value, size }) => (
  <PriceRoot size={size}>
    R$<span className="int">{Math.trunc(value)}</span>
    <span className="float">
      {`${(value - Math.trunc(value)).toFixed(2)}`.substring(1)}
    </span>
  </PriceRoot>
);

export default Price;
