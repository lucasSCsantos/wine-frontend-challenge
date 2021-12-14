import { base } from '../../../../__mocks__/base';
import { SmallParagraph } from '../../../DefaultDesignComponents/Typography';
import Product from './Product';
import { Container, ProductsContainer } from './styles';

function Products() {
  const api = base;
  return (
    <Container>
      <SmallParagraph size="medium">
        <span>{api.totalItems}</span>
        {`${' produtos encontrados'}`}
      </SmallParagraph>
      <hr />
      <ProductsContainer>
        {api.items.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </ProductsContainer>
      {/* Component de paginação */}
    </Container>
  );
}

export default Products;
