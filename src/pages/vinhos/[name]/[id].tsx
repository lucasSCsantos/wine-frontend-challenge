import type { NextPage } from 'next';
import ProductDetails from '../../../components/ProductDetails';
import getBySearchUnlimited from '../../../services/getBySearchUnlimited';
import { ItemProps } from '../../../__mocks__/base';

export async function getServerSideProps(context) {
  const { name, id } = context.params;
  const newId = id.split('=')[1];
  const data = await getBySearchUnlimited(name);
  const [product] = data.items.filter(item => item.id === +newId);
  return {
    props: {
      product
    }
  };
}

interface ProductPageProps {
  product: ItemProps;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => (
  <div>
    <ProductDetails product={product} />
  </div>
);

export default ProductPage;
