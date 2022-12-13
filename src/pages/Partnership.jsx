import { Footer } from 'components/Footer/Footer';
import {
  Card,
  CardText,
  Container,
  Img,
  ImgContainer,
  Link,
  PageDescription,
  Section,
  TextContainer,
  Title,
  Wrap,
} from 'components/Partnership/Partnership.styled';
import img from '../image/partn/Rectangle1.png';
import img2 from '../image/partn/Rectangle2.png';

const data = [
  { id: 1, img: img, title: 'Співпраця з навчальними закладами' },
  { id: 2, img: img2, title: 'ІТ-компанії' },
];

export const Partnership = () => {
  return (
    <>
      <main>
        <Section>
          <Container>
            <Title>Партнерство</Title>
            <PageDescription>
              Кафедра АСУ співпрацює з багатьма навчальними закладами як в
              Україні так і за кордоном. Також існують можливості проходження
              практики у провідних ІТ-компанії з подальшим можливим
              працевлаштуванням.
            </PageDescription>
            <Wrap>
              {data.map(({ id, img, title }) => {
                return (
                  <Card key={id}>
                    <ImgContainer>
                      <Img src={img} />

                      <TextContainer>
                        <CardText>{title}</CardText>
                      </TextContainer>
                    </ImgContainer>
                    <Link to={`${id}`}>Читати_більше</Link>
                  </Card>
                );
              })}
            </Wrap>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};
