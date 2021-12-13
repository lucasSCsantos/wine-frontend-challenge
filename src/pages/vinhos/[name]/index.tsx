// import { useRouter } from 'next/router';
import {
  Heading,
  SmallParagraph
} from '../../../components/DefaultDesignComponents/Typography';
import { item } from '../../../__mocks__/base';
// import { ReactNode } from 'react';

import { Container, Image, InfoContainer } from './styles';

// interface WinePageProps {
//   children: ReactNode;
// }

function WinePage() {
  // const router = useRouter();
  // const { id, name } = router.query;
  const { image, name } = item;
  return (
    <Container>
      <div className="content">
        <Heading level={4} size="large" weight="regular">
          {'<'} Voltar
        </Heading>
        <InfoContainer>
          <Image src={image} />
          <div className="info">
            <SmallParagraph weight="bold" size="xSmall">
              Vinhos {'>'} Estados Unidos {'>'} California
            </SmallParagraph>
            <Heading level={3} size="xxLarge" weight="bold" lineHeight={32}>
              {name}
            </Heading>
          </div>
        </InfoContainer>
      </div>
    </Container>
  );
}

export default WinePage;
