import { base } from '../../../../__mocks__/base';
import { SmallParagraph } from '../../../DefaultDesignComponents/Typography';
import Product from './Product';
import { Container } from './styles';

function Products() {
  const api = base;
  return (
    <Container>
      <SmallParagraph size="medium">
        {api.totalItems}
        {`${' produtos encontrados'}`}
      </SmallParagraph>
      {api.items.map(item => (
        <Product item={item} />
      ))}
    </Container>
  );
}

export default Products;
