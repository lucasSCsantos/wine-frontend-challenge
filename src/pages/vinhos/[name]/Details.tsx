import type { NextPage } from 'next';
import { Rating } from 'react-simple-star-rating';
import { SmallParagraph } from '../../../components/DefaultDesignComponents/Typography';
import { Flag, DetailsContainer } from './styles';

interface DetailsProps {
  flag: string;
  type: string;
  country: string;
  classification: string;
  size: string;
  rating: number;
  avaliations: number;
}

const Details: NextPage<DetailsProps> = ({
  flag,
  type,
  country,
  classification,
  size,
  rating,
  avaliations
}) => (
  <DetailsContainer>
    <Flag src={flag} />
    <SmallParagraph weight="regular" size="xSmall" type="gray" align="start">
      {country}
    </SmallParagraph>
    <SmallParagraph weight="regular" size="xSmall" type="gray" align="start">
      {type}
    </SmallParagraph>
    <SmallParagraph weight="regular" size="xSmall" type="gray" align="start">
      {classification}
    </SmallParagraph>
    <SmallParagraph weight="regular" size="xSmall" type="gray" align="start">
      {size}
    </SmallParagraph>
    <Rating
      onClick={() => {}}
      ratingValue={rating}
      size={20}
      readonly
      emptyColor="#f1f1f1"
      // fullIcon={star}
    />
    <SmallParagraph weight="regular" size="xSmall" type="gray" align="start">
      ({avaliations})
    </SmallParagraph>
  </DetailsContainer>
);

export default Details;
