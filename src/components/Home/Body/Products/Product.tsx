import { NextPage } from 'next';
import { BaseProps } from '../../../../__mocks__/base';
import {
  Paragraph,
  SmallParagraph
} from '../../../DefaultDesignComponents/Typography';
import Price from '../../../DefaultDesignComponents/Typography/Price';
import { Image, ProductContainer } from './styles';

interface ProductProps {
  item?: BaseProps | any;
}

const Product: NextPage<ProductProps> = ({ item }) => (
  <ProductContainer>
    <Image src={item.image} />
    <Paragraph size="small" weight="bold">
      {item.name}
    </Paragraph>
    <SmallParagraph size="xxxSmall" type="grayLight">
      R${item.priceNonMember.toFixed(2)}
    </SmallParagraph>
    <SmallParagraph size="mini" type="gray">
      {item.discount}% OFF
    </SmallParagraph>
    <Paragraph size="xxxSmall" type="text">
      SÓCIO WINE
    </Paragraph>
    <Price value={item.priceMember} size="xxSmall" />;
    <SmallParagraph size="xxSmall" type="grayLight">
      NÃO SÓCIO R${item.priceNonMember.toFixed(2)}
    </SmallParagraph>
  </ProductContainer>
);

export default Product;
