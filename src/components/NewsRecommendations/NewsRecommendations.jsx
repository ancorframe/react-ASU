import { Item, Section, Title, Wrap } from './NewsRecommendations.styled';
import { Card } from 'components/common/Card/Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export const NewsRecommendations = ({
  data,
  title = 'Рекомендовані новини:',
}) => {
  if (!data) {
    return (
      <Section>
        <Title>
          <Skeleton height={'100%'} width={'100%'} />
        </Title>
        <Wrap>
          {Array(3)
            .fill()
            .map((item, index) => {
              return (
                <Item key={index}>
                  <Card />
                </Item>
              );
            })}
        </Wrap>
      </Section>
    );
  }
  return (
    <Section>
      <Title>{title}</Title>
      <Wrap>
        {data.map(data => (
          <Item key={data.id}>
            <Card news={data} />
          </Item>
        ))}
      </Wrap>
    </Section>
  );
};
