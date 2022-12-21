import { AppBar } from 'components/AppBar/AppBar';
// import { Box } from '';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <>
        <AppBar />
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </>
    </>
  );
};
