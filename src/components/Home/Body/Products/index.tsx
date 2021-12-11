import { base } from '../../../../__mocks__/base';
import { SmallParagraph } from '../../../DefaultDesignComponents/Typography';
import Product from './Product';
import { Container, ProductsContainer } from './styles';

function Products() {
  const api = base;
  return (
    <Container>
      <SmallParagraph size="medium">
        {api.totalItems}
        {`${' produtos encontrados'}`}
      </SmallParagraph>
      <ProductsContainer>
        {api.items.map(item => (
          <Product item={item} />
        ))}
      </ProductsContainer>
      {/* Component de paginação */}
    </Container>
  );
}

export default Products;
