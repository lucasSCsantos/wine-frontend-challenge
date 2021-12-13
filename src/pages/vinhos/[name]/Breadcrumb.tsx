import type { NextPage } from 'next';
import { SmallParagraph } from '../../../components/DefaultDesignComponents/Typography';
import { BreadCrumbContainer } from './styles';

interface BreadCrumbProps {
  country: string;
  region: string;
}

const BreadCrumb: NextPage<BreadCrumbProps> = ({ country, region }) => (
  <BreadCrumbContainer>
    <SmallParagraph weight="bold" size="xSmall" type="tannat">
      Vinhos
    </SmallParagraph>
    <SmallParagraph weight="bold" size="small" type="grayLight">
      {'>'}
    </SmallParagraph>
    <SmallParagraph weight="bold" size="xSmall" type="tannat">
      {country}
    </SmallParagraph>
    <SmallParagraph weight="bold" size="small" type="grayLight">
      {'>'}
    </SmallParagraph>
    <SmallParagraph weight="regular" size="xSmall" type="grayLight">
      {region}
    </SmallParagraph>
  </BreadCrumbContainer>
);

export default BreadCrumb;
