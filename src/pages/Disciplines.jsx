import { Box } from "components/Box";
import { Footer } from "components/Footer/Footer";
import { PageDescription } from "components/Templates/PageDescription/PageDescription";
import { PageTitle } from "components/Templates/PageTitle/PageTitle"


export const Disciplines = () => {
    return (
      <>
        <Box as="main" m="0 auto"mt="80px" maxWidth="1248px" >
          <Box mb="12px">
            <PageTitle>Перелік_дисциплін</PageTitle>
          </Box>
          <PageDescription>
            Кафедра АСУ готує фахівців освітньо-кваліфікаційного рівнів
            “бакалавр” та “магістр” за спеціальностями 122 “Комп’ютерні науки”,
            124 “Системний аналіз”, 126 “Інформаційні системи та технології”
          </PageDescription>
          <Box maxWidth="960px" p="48px" m="0 auto" mb="128px"></Box>
        </Box>
        <Footer />
      </>
    );
}