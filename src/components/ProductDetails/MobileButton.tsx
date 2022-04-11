import type { NextPage } from 'next';
import addToCart from '../../helpers/addToCart';
import { ItemProps } from '../../__mocks__/base';
import { Button } from '../DefaultDesignComponents/Buttons';
import { SmallParagraph } from '../DefaultDesignComponents/Typography';
import Price from '../DefaultDesignComponents/Typography/Price';
import { MobileButtonContainer } from './styles';

interface PriceDataProps {
  discount: number;
  price: number;
  priceMember: number;
  priceNonMember: number;
}

interface MobileButtonProps {
  priceData: PriceDataProps;
  product: ItemProps;
}

const MobileButton: NextPage<MobileButtonProps> = ({ priceData, product }) => {
  const { discount, price, priceMember, priceNonMember } = priceData;
  return (
    <MobileButtonContainer>
      <div className="mobile-price-info">
        <SmallParagraph filled color="chenin" size="mini">
          {discount}% OFF
        </SmallParagraph>
        <SmallParagraph
          decoration="line-through"
          size="xSmall"
          type="grayLight"
        >
          {price.toFixed(2)}
        </SmallParagraph>
        <Price value={priceMember} size="small" />
        <SmallParagraph size="mini" weight="bold" type="gray">
          PREÇO NÃO SÓCIO R$ {priceNonMember.toFixed(2)}
        </SmallParagraph>
      </div>
      <Button
        filled
        color="success"
        size="mobile"
        onClick={() => addToCart(product)}
      >
        Adicionar
      </Button>
    </MobileButtonContainer>
  );
};

export default MobileButton;
