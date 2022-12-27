// import { Box } from 'components/Box';
import { Article } from 'components/Templates/Article/Article';
import { Title } from 'components/Templates/Title/Title';
import { TitleDescription } from 'components/Templates/TitleDescription/TitleDescription';

export const TestPage = () => {
  return (
    <>
      <Title
        variant="h1"
        m={[0, 3, 5]}
        textAlign={[null, null, 'center']}
        pb={[0, 2, 4]}
        borderBottom={'normal'}
      >
        Title
      </Title>
      <TitleDescription textAlign={[null, null, 'center']}>
        Набір літератури та ресурсів. Тут є все, що тобі пригодиться у навчанні
        😉
      </TitleDescription>
      <Article mb={[0, 3, 5]}>
        На бакалавраті за спеціальностю 122 “Комп’ютерні науки” проводиться
        набір на освітньо-професійну програму: “Комп’ютерні науки
        (Обчислювальний інтелект смарт-систем)”; Computer Science (Computational
        Intelligence of Smart Systems). Ліцензований обсяг бакалаврату 122
        “Комп’ютерні науки (Обчислювальний інтелект смарт-систем)” – 200 місць(У
        2021 р. на кафедру АСУ на навчання на бакалавраті за
        освітньо-професійною програмою “Комп’ютерні науки” зараховано 230
        студентів). Кваліфікація: Бакалавр із комп’ютерних наук. Форма навчання:
        денна.
      </Article>
      
    </>
  );
};
