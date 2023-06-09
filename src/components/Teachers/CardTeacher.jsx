import { Box } from "components/Box"
import { Card, Description, FullName, Img, Rank } from './Teachers.styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const CardTeacher = ({ to, data }) => {
  if (!data) {
    return (
      <>
        <Card>
          <Skeleton height={'100%'} width={'100%'} />
          <Description>
            <Box p={[7, null]} px={[null, 9]} py={[null, 8]}>
              <FullName>
                <Skeleton />
              </FullName>
              <Rank>
                <Skeleton />
              </Rank>
            </Box>
          </Description>
        </Card>
      </>
    );
  }
  return (
    <>
      <Card to={to}>
        <Img src={data.image} alt="image" />
        <Description>
          <Box p={[7, null]} px={[null, 9]} py={[null, 8]}>
            <FullName>{data.fullName}</FullName>
            <Rank>{data.degree}</Rank>
          </Box>
        </Description>
      </Card>
    </>
  );
};