import { Box } from "components/Box"
import { Card, Descriptoin, FullName, Img, Rank } from './Teachers.styled';


export const CardTeacher = ({ to , src, fullname, rank }) => {
  return (
    <>
      <Card to={to}>
        <Img src={src} />
        <Descriptoin>
          <Box p="20px 24px" >
            <FullName>{fullname}</FullName>
            <Rank>{rank}</Rank>
          </Box>
        </Descriptoin>
      </Card>
    </>
  );
};