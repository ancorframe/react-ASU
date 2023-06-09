import { Footer } from 'components/Footer/Footer';
import {
  Card,
  Img,
  ImgContainer,
  Link,
  List,
  TextContainer,
} from 'components/Partnership/Partnership.styled';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { usePartnership } from 'client/hooks/partnership';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { AnimatePresence } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ErrorRequest } from 'components/ErrorRequest';

export const Partnership = () => {
  const { data, isLoading, isError } = usePartnership();

  return (
    <>
      <MotionWrap key={2323232323444}>
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
              <AnimatePresence mode="wait">
                {!!data && (
                  <List key={9898347}>
                    {data.partnership.map(({ id, data }) => {
                      return (
                        <Card key={id}>
                          <ImgContainer>
                            <Img src={data.image} />
                            <TextContainer>
                              <Title variant="h4" px={9} py={8}>
                                {data.title}
                              </Title>
                            </TextContainer>
                          </ImgContainer>
                          <Link to={`${id}`}>Читати_більше</Link>
                        </Card>
                      );
                    })}
                  </List>
                )}
                {isLoading && (
                  <List key={989333844347}>
                    {Array(4)
                      .fill()
                      .map((item, index) => {
                        return (
                          <Card key={index}>
                            <ImgContainer>
                              <Skeleton height={'100%'} width={'100%'} />
                              <TextContainer>
                                <Title variant="h4" px={9} py={8}>
                                  <Skeleton />
                                </Title>
                              </TextContainer>
                            </ImgContainer>
                            <Link>Читати_більше</Link>
                          </Card>
                        );
                      })}
                  </List>
                )}
                {isError && (
                  <MotionWrap key={'error'}>
                    <ErrorRequest />
                  </MotionWrap>
                )}
              </AnimatePresence>
            </Wrap>
          </SectionContent>
        </main>
      </MotionWrap>
      <Footer />
    </>
  );
};
