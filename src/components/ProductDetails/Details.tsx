import type { NextPage } from 'next';
import { Rating } from 'react-simple-star-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { DetailsContainer, Flag } from './styles';
import { SmallParagraph } from '../DefaultDesignComponents/Typography';

interface DetailsDataProps {
  flag: string;
  type: string;
  country: string;
  classification: string;
  size: string;
  rating: number;
  avaliations: number;
  volume: string;
}

interface DetailsProps {
  detailsData: DetailsDataProps;
}

const Details: NextPage<DetailsProps> = ({ detailsData }) => {
  const {
    flag,
    type,
    size,
    country,
    classification,
    avaliations,
    rating,
    volume
  } = detailsData;
  return (
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
        {size || volume}
      </SmallParagraph>
      <Rating
        onClick={() => {}}
        ratingValue={rating}
        readonly
        emptyColor="#333333"
        fullIcon={<AiFillStar size={20} />}
        emptyIcon={<AiOutlineStar size={20} />}
      />
      <SmallParagraph weight="regular" size="xSmall" type="gray" align="start">
        ({avaliations || 1})
      </SmallParagraph>
    </DetailsContainer>
  );
};

export default Details;
