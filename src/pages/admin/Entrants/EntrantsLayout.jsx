import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const links = [
  { to: 'bachelor', name: 'Bachelor' },
  { to: 'magistracy', name: 'Magistracy' },
  { to: 'postgraduate', name: 'Postgraduate' },
];

export const EntrantsLayout = () => {
  return (
    <>
      <Box display="flex">
        <Box as="aside" width="300px" bg="antiquewhite" minHeight="92vh">
          <ul>
            {links.map(({ to, name }, index) => (
              <Box as="li" p="20px" key={index}>
                <Link to={`${to}`}>{name}</Link>
              </Box>
            ))}
          </ul>
        </Box>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
