import { NextPage } from 'next';
import { BaseProps } from '../../../../__mocks__/base';
import { Button } from '../../../DefaultDesignComponents/Buttons';
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
    <div className="product-card">
      <Image src={item.image} />
      <Paragraph size="small" weight="bold">
        {item.name}
      </Paragraph>
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
        <Paragraph size="xxxSmall" type="text" weight="bold">
          SÓCIO WINE
        </Paragraph>
        <Price value={item.priceMember} size="xxSmall" />
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
