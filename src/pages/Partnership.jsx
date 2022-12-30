import { Footer } from 'components/Footer/Footer';
import {
  Card,
  Img,
  ImgContainer,
  TextContainer,
} from 'components/Partnership/Partnership.styled';
import img from '../image/partnertest/Rectangle1.png';
import img2 from '../image/partnertest/Rectangle2.png';

import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { ListWrap } from 'components/Templates/ListWrap/ListWrap';
import { LoadMore } from 'components/common/LoadMore/LoadMore';

const data = [
  { id: 1, img: img, title: 'Співпраця з навчальними закладами' },
  { id: 2, img: img2, title: 'ІТ-компанії' },
];

export const Partnership = () => {
  return (
    <>
      <main>
        <SectionTitle>
          <Wrap>
            <Title variant="h1" textAlign={[null, 'center']} mb={[3, 6]}>
              Партнерство
            </Title>
            <TitleDescription textAlign={[null, 'center']}>
              Кафедра АСУ співпрацює з багатьма навчальними закладами як в
              Україні так і за кордоном. Також існують можливості проходження
              практики у провідних ІТ-компанії з подальшим можливим
              працевлаштуванням.
            </TitleDescription>
          </Wrap>
        </SectionTitle>
        <SectionContent>
          <Wrap>
            <ListWrap gridTemplateColumns="repeat(auto-fit, minmax(min(100%, 466px), 1fr))">
              {data.map(({ id, img, title }) => {
                return (
                  <Card key={id}>
                    <ImgContainer>
                      <Img src={img} />

                      <TextContainer>
                        <Title variant="h4" px={9} py={8}>
                          {title}
                        </Title>
                      </TextContainer>
                    </ImgContainer>
                    <LoadMore to={`${id}`}>Читати_більше</LoadMore>
                  </Card>
                );
              })}
            </ListWrap>
          </Wrap>
        </SectionContent>
      </main>
      <Footer />
    </>
  );
};
