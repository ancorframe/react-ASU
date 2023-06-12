import { CardTeacher } from 'components/Teachers/CardTeacher';
import { Item, List } from 'components/Teachers/Teachers.styled';
import { SectionContent } from 'components/Templates/SectionContent/SectionContent';
import { SectionTitle } from 'components/Templates/SectionTitle/SectionTitle';
import { Title } from 'components/Templates/Title/Title';
import { Wrap } from 'components/Templates/Wrap/Wrap';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';
import { Footer } from 'components/Footer/Footer';
import { AnimatePresence } from 'framer-motion';
import { MotionWrap } from 'components/MotionWrap/MotionWrap';
import { ErrorRequest } from 'components/ErrorRequest';
import { useTeachers } from 'cms/hooks/teachers';

export const Teachers = () => {
  const { data, isLoading, isError } = useTeachers();
  return (
    <>
      <MotionWrap>
        <main>
          <SectionTitle>
            <Wrap>
              <Title variant="h1" textAlign={[null, 'center']}>
                Викладацький_склад
              </Title>
              <TitleDescription textAlign={[null, 'center']}>
                Історія кафедри автоматизованих систем управління
              </TitleDescription>
            </Wrap>
          </SectionTitle>
          <SectionContent>
            <Wrap>
              <AnimatePresence mode="wait">
                {!!data && (
                  <List key={89849834803948}>
                    {data.teachers.map(({ id, data }) => (
                      <Item key={id}>
                        <CardTeacher to={`${id}`} data={data} />
                      </Item>
                    ))}
                  </List>
                )}
                {isLoading && (
                  <List key={898498348030938043948}>
                    {Array(9)
                      .fill()
                      .map((item, index) => {
                        return (
                          <Item key={index}>
                            <CardTeacher />
                          </Item>
                        );
                      })}
                  </List>
                )}
                {isError && (
                  <MotionWrap key={88348030938043948}>
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
