import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { base } from '../../../../__mocks__/base';
import { SmallParagraph } from '../../../DefaultDesignComponents/Typography';
import Product from './Product';
import { Container, ProductsContainer } from './styles';

function Products() {
  const api = base;
  const router = useRouter();
  const handlePageClick = ({ selected }) => {
    router.push(`${selected + 1}`);
  };
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
      <ReactPaginate
        nextLabel="Próxima >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={7}
        previousLabel="<< Anterior"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="next-item"
        nextClassName="previous-item"
        breakLabel="..."
        breakClassName="break"
        containerClassName="pagination"
        activeClassName="active"
      />
    </Container>
  );
}

export default Products;
