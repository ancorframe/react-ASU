import { AditionalInfo } from "components/AditionalInfo/AditionalInfo";
import { Box } from "components/Box"
import { Footer } from "components/Footer/Footer";
import { PageTitle } from "components/Templates/PageTitle/PageTitle"


export const Support = () => {
    return (
      <>
        <Box as="main" mt="80px">
          <Box mb="40px">
            <PageTitle>Навчально-методичне_забезпечення</PageTitle>
          </Box>
          <Box maxWidth="960px" p="48px" m='0 auto'>
            <AditionalInfo />
          </Box>
            </Box>
            <Footer/>
      </>
    );
}