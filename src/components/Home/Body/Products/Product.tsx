import { NextPage } from 'next';
import Link from 'next/link';
import addToCart from '../../../../helpers/addToCart';
import { ItemProps } from '../../../../__mocks__/base';
import { Button } from '../../../DefaultDesignComponents/Buttons';
import {
  Paragraph,
  SmallParagraph
} from '../../../DefaultDesignComponents/Typography';
import Price from '../../../DefaultDesignComponents/Typography/Price';
import { Image, ProductContainer } from './styles';

interface ProductProps {
  item?: ItemProps | any;
}

const Product: NextPage<ProductProps> = ({ item }) => (
  <ProductContainer data-testid={`${item.id}-product-card`}>
    <div className="product-card">
      <Link
        href={`/vinhos/${encodeURIComponent(item.name)}/id=${item.id}`}
        replace
      >
        <div className="product-title">
          <Image src={item.image} data-testid={`${item.id}-product-image`}/>
          <Paragraph size="small" weight="bold" data-testid={`${item.id}-product-name`}>
            {item.name}
          </Paragraph>
        </div>
      </Link>
      <div className="price-nom-member">
        <SmallParagraph
          size="xxxSmall"
          type="grayLight"
          decoration="line-through"
        >
          R${item.priceNonMember.toFixed(2)}
        </SmallParagraph>
        <SmallParagraph size="mini" type="gray" filled>
          {item.discount}% OFF
        </SmallParagraph>
      </div>
      <div className="price-member">
        <SmallParagraph
          size="xxxSmall"
          type="text"
          weight="bold"
          className="member"
        >
          SÓCIO WINE
        </SmallParagraph>
        <Price value={item.priceMember} size="xxxSmall" />
      </div>
      <SmallParagraph size="xxSmall" type="grayLight">
        NÃO SÓCIO R${item.priceNonMember.toFixed(2)}
      </SmallParagraph>
    </div>
    <Button filled color="success" size="large" onClick={() => addToCart(item)} data-testid={`${item.id}-product-button`}>
      Adicionar
    </Button>
  </ProductContainer>
);

export default Product;
