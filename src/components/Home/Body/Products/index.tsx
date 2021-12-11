import { base } from '../../../../__mocks__/base';
import { Button } from '../../../DefaultDesignComponents/Buttons';
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
        <>
          <Product item={item} />
          <Button fill color="success" size="large">
            Adicionar
          </Button>
        </>
      ))}
    </Container>
  );
}

export default Products;
