import { NextPage } from 'next';
import Link from 'next/link';
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
  <ProductContainer>
    <div className="product-card">
      <Link href={`vinhos/${encodeURIComponent(item.name)}?id=${item.id}`}>
        <div className="product-title">
          <Image src={item.image} />
          <Paragraph size="small" weight="bold">
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
        <Paragraph size="xxxSmall" type="text" weight="bold" className="member">
          SÓCIO WINE
        </Paragraph>
        <Price value={item.priceMember} size="xxxSmall" />
      </div>
      <SmallParagraph size="xxSmall" type="grayLight">
        NÃO SÓCIO R${item.priceNonMember.toFixed(2)}
      </SmallParagraph>
    </div>
    <Button filled color="success" size="large">
      Adicionar
    </Button>
  </ProductContainer>
);

export default Product;
