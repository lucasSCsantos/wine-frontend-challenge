import type { NextPage } from 'next';
import { Button } from '../../../components/DefaultDesignComponents/Buttons';
import { SmallParagraph } from '../../../components/DefaultDesignComponents/Typography';
import Price from '../../../components/DefaultDesignComponents/Typography/Price';
import { MobileButtonContainer } from './styles';

interface MobileButtonProps {
  discount: number;
  price: number;
  priceMember: number;
  priceNonMember: number;
}

const MobileButton: NextPage<MobileButtonProps> = ({
  discount,
  price,
  priceMember,
  priceNonMember
}) => (
  <MobileButtonContainer>
    <div className="mobile-price-info">
      <SmallParagraph filled color="chenin" size="mini">
        {discount}% OFF
      </SmallParagraph>
      <SmallParagraph decoration="line-through" size="xSmall" type="grayLight">
        {price.toFixed(2)}
      </SmallParagraph>
      <Price value={priceMember} size="small" />
      <SmallParagraph size="mini" weight="bold" type="gray">
        PREÇO NÃO SÓCIO R${priceNonMember.toFixed(2)}
      </SmallParagraph>
    </div>
    <Button filled color="success" size="mobile">
      Adicionar
    </Button>
  </MobileButtonContainer>
);

export default MobileButton;
