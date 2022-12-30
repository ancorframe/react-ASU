import { Box } from "components/Box"
import { Card, Descriptoin, FullName, Img, Rank } from './Teachers.styled';


export const CardTeacher = ({ to , src, fullname, rank }) => {
  return (
    <>
      <Card to={to}>
        <Img src={src} />
        <Descriptoin>
          <Box p={[7,null]} px={[null,9]} py={[null,8]}>
            <FullName>{fullname}</FullName>
            <Rank>{rank}</Rank>
          </Box>
        </Descriptoin>
      </Card>
    </>
  );
};