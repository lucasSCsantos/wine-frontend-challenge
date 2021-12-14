import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../../store';
import { ProductsState } from '../../../../store/products/types';
import { BaseProps } from '../../../../__mocks__/base';
import { SmallParagraph } from '../../../DefaultDesignComponents/Typography';
import Product from './Product';
import { Container, ProductsContainer } from './styles';

function Products() {
  const { data }: ProductsState = useSelector(
    store => (store as ApplicationState).products
  );
  const { totalItems, items, totalPages } = data as BaseProps;
  const router = useRouter();
  const handlePageClick = ({ selected }) => {
    router.push(`${selected + 1}`);
  };
  return (
    <Container>
      <SmallParagraph size="medium">
        <span>{totalItems}</span>
        {`${' produtos encontrados'}`}
      </SmallParagraph>
      <hr />
      <ProductsContainer>
        {items.map(item => (
          <Product item={item} key={item.id} />
        ))}
      </ProductsContainer>
      <ReactPaginate
        nextLabel="Próxima >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={totalPages}
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
