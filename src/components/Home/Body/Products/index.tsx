import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../../store';
import { ProductsState } from '../../../../store/products/types';
import { BaseProps } from '../../../../__mocks__/base';
import { SmallParagraph } from '../../../DefaultDesignComponents/Typography';
import Product from './Product';
import { Container, ProductsContainer } from './styles';

function Products() {
  const [actualPage, setActualPage] = useState(0);
  const router = useRouter();
  const { data }: ProductsState = useSelector(
    store => (store as ApplicationState).products
  );
  const { totalItems, items, totalPages } = data as BaseProps;

  useEffect(() => {
    setActualPage(+router.query.page - 1);
  }, []);

  const handlePageClick = ({ selected }) => {
    const { query } = router;
    if (query.filter) {
      router.push({
        pathname: '/[page]/[filter]',
        query: { page: `${selected + 1}`, filter: query.filter }
      });
    } else {
      router.push(`${selected + 1}`);
    }
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
        forcePage={actualPage}
        previousLabel="<< Anterior"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="next-item"
        nextClassName="previous-item"
        breakLabel="..."
        breakClassName="break"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </Container>
  );
}

export default Products;
