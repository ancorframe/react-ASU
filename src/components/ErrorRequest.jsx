import { Box } from "./Box";
import { Article } from "./Templates/Article/Article";
import { Title } from "./Templates/Title/Title";

export const ErrorRequest = () => {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="60vh"
        flexDirection="column"
        maxWidth="700px"
        m="0 auto"
      >
        <Title variant="h2">
          Вибачте, але сталася помилка при обробці вашого запиту.
        </Title>
        <Article></Article>
        <Article>
          Наразі ми не можемо виконати запит через технічну проблему. Наша
          команда вже повідомлена про це і працює над виправленням проблеми.
          Будь ласка, спробуйте знову пізніше.
        </Article>
        <Article></Article>
        <Article>
          Якщо проблема повторюється, будь ласка, зв'яжіться з нашою службою
          підтримки, використовуючи контактну інформацію, наведену на нашому
          веб-сайті. Ми докладемо всіх зусиль, щоб вирішити цю проблему якомога
          швидше.
        </Article>
        <Article></Article>
        <Title variant="h3">Дякуємо за ваше терпіння та розуміння.</Title>
      </Box>
    );
}