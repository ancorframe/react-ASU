
import { Box } from "components/Box";
import { FooterContainer, FooterDes, Link, ListItem, Title, Wrap } from "./Footer.styled";


export const Footer = () => {
    return (
      <>
        <Box as="footer" p="0px 24px 24px 24px" maxWidth="1440px" m="0 auto">
          <FooterContainer>
            <Box as="ul" display="flex" gridGap="32px" mb="64px">
              <ListItem>
                <Title>Основне</Title>
                <ul>
                  <li>
                    <Link>Вступникам</Link>
                  </li>
                  <li>
                    <Link>Корисна література</Link>
                  </li>
                </ul>
              </ListItem>
              <ListItem>
                <Title>Навчальний_процес</Title>
                <ul>
                  <li>
                    <Link>Методичне забезпечення</Link>
                  </li>
                  <li>
                    <Link>Перелік дисциплін</Link>
                  </li>
                  <li>
                    <Link>Розклад</Link>
                  </li>
                  <li>
                    <Link>ВНС</Link>
                  </li>
                </ul>
              </ListItem>
              <ListItem>
                <Title>Про_кафедру</Title>
                <ul>
                  <li>
                    <Link>Історія кафедри</Link>
                  </li>
                  <li>
                    <Link>Викладачі</Link>
                  </li>
                  <li>
                    <Link>Партнерство</Link>
                  </li>
                  <li>
                    <Link>Новини</Link>
                  </li>
                </ul>
              </ListItem>
              <ListItem>
                <Title>Наукова_діяльність</Title>
                <ul>
                  <li>
                    <Link>Дослідження та здобутки</Link>
                  </li>
                  <li>
                    <Link>Конференції</Link>
                  </li>
                  <li>
                    <Link>Проекти</Link>
                  </li>
                </ul>
              </ListItem>
            </Box>
            <Wrap>
              <p>
                © 2022 Department of automated management systems. All Rigths
                Reserved.
              </p>
              <p>Sokolov Design</p>
            </Wrap>
          </FooterContainer>
        </Box>
      </>
    );
}