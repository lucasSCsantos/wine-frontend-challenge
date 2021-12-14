import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import priceFilter from '../../../../data/price-filter';
import { setFilter } from '../../../../store/filters/actions';
import Radio from '../../../DefaultDesignComponents/Inputs/Radio';
import {
  Heading,
  Paragraph
} from '../../../DefaultDesignComponents/Typography';
import { Container, FilterContainer } from './styles';

function Filters() {
  const [selected, setSelected] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const { value } = event.target;
    router.push(`/1/${value}`);
    setSelected(value);
    dispatch(setFilter(value));
  };

  return (
    <Container>
      <Heading level={4} size="xLarge" align="start">
        Refine sua busca
      </Heading>
      <Paragraph size="large" weight="bold" align="start">
        Pro preço
      </Paragraph>
      <FilterContainer>
        {priceFilter.map(({ value, text, id }) => (
          <Radio
            key={id}
            value={value}
            checked={selected === value}
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
