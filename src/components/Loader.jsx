import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import { Article } from 'components/Templates/Article/Article';
import { Title } from 'components/Templates/Title/Title';

export const Loader = () => {
  return (
    <>
      <Title variant="h2" pb={[2, 6]} mb={8}>
        <Skeleton />
      </Title>
      {Array(10)
        .fill()
        .map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Article>
                <Skeleton />
              </Article>
            </React.Fragment>
          );
        })}
      <Article />
      <Title variant="h2" pb={[2, 6]} mb={8}>
        <Skeleton />
      </Title>
      {Array(10)
        .fill()
        .map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Article>
                <Skeleton />
              </Article>
            </React.Fragment>
          );
        })}
    </>
  );
};
