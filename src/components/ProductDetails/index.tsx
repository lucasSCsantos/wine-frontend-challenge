import Link from 'next/link';
import { useState } from 'react';
import { NextPage } from 'next';
import { Button } from '../DefaultDesignComponents/Buttons';
import {
  Heading,
  Paragraph,
  SmallParagraph
} from '../DefaultDesignComponents/Typography';
import Price from '../DefaultDesignComponents/Typography/Price';
import { ItemProps } from '../../__mocks__/base';
import BreadCrumb from './Breadcrumb';
import Details from './Details';
import MobileButton from './MobileButton';
import {
  Container,
  Image,
  InfoContainer,
  SmallImage,
  AddButton
} from './styles';
import addToCart from '../../helpers/addToCart';

interface ProductPageProps {
  product: ItemProps;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const [addCount, setAddCount] = useState(1);
  const {
    image,
    name,
    country,
    type,
    classification,
    size,
    rating,
    priceMember,
    priceNonMember,
    sommelierComment,
    avaliations,
    region,
    price,
    discount,
    volume,
    flag
  } = product;
  return (
    <Container>
      <div className="content">
        <Link href="/">
          <Heading level={4} size="large" weight="regular" align="start">
            {'<'} Voltar
          </Heading>
        </Link>
        <InfoContainer>
          <Image src={image} />
          <div className="info">
            <div className="info-title">
              <BreadCrumb country={country} region={region} />
              <Heading
                level={3}
                size="xxLarge"
                weight="bold"
                lineHeight={32}
                align="start"
              >
                {name}
              </Heading>
              <Details
                detailsData={{
                  flag,
                  type,
                  size,
                  country,
                  classification,
                  rating,
                  avaliations,
                  volume
                }}
              />
              <SmallImage src={image} />
            </div>
            <div className="info-price">
              <Price size="xLarge" value={priceMember} />
              <SmallParagraph
                size="small"
                type="grayLight"
                weight="bold"
                align="start"
              >
                NÃO SÓCIO {priceNonMember.toFixed(2)}/UN
              </SmallParagraph>
            </div>
            <div className="info-comment">
              <Heading level={6} size="small" weight="bold" align="start">
                Comentário do Sommelier
              </Heading>
              <Paragraph
                size="small"
                type="grayLight"
                weight="regular"
                lineHeight={21}
                align="start"
              >
                {sommelierComment}
              </Paragraph>
            </div>
            <AddButton>
              <div className="count-button">
                <Button
                  size="mini"
                  color="white"
                  circle
                  onClick={() => {
                    if (addCount > 1) setAddCount(addCount - 1);
                  }}
                >
                  -
                </Button>
                {addCount}
                <Button
                  size="mini"
                  color="white"
                  circle
                  onClick={() => setAddCount(addCount + 1)}
                >
                  +
                </Button>
              </div>
              <Button
                size="product"
                filled
                color="success"
                weight="bold"
                onClick={() =>
                  Array.from({ length: addCount }, (_v, k) => k).map(() => {
                    addToCart(product);
                    return null;
                  })
                }
              >
                Adicionar
              </Button>
            </AddButton>
          </div>
          <MobileButton
            product={product}
            priceData={{ discount, price, priceMember, priceNonMember }}
          />
        </InfoContainer>
      </div>
    </Container>
  );
};

export default ProductPage;
