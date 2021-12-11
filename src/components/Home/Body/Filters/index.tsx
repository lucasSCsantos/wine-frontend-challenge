import { useState } from 'react';
import priceFilter from '../../../../data/price-filter';
import Radio from '../../../DefaultDesignComponents/Inputs/Radio';
import {
  Heading,
  Paragraph
} from '../../../DefaultDesignComponents/Typography';
import { Container, FilterContainer } from './styles';

function Filters() {
  const [filter, setFilter] = useState('');
  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };
  return (
    <Container>
      <Heading level={4} size="xLarge">
        Refine sua busca
      </Heading>
      <Paragraph size="large" weight="bold" align="start">
        Pro preço
      </Paragraph>
      <FilterContainer>
        {priceFilter.map(({ value, text }) => (
          <Radio
            value={value}
            checked={filter === value}
            name="radio"
            onChange={event => handleFilterChange(event)}
          >
            {text}
          </Radio>
        ))}
      </FilterContainer>
    </Container>
  );
}

export default Filters;
