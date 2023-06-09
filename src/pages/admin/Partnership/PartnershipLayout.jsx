import { usePartnership } from 'cms/hooks/partnership';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const PartnershipLayout = () => {
  const { data } = usePartnership();
  return (
    <>
      <Box display="flex">
        <Box as="aside" width="300px" bg="antiquewhite" minHeight="92vh">
          {data && (
            <ul>
              {data.partnership.map(({ id, data }) => (
                <Box as="li" p="20px" key={id}>
                  <Link to={`${id}`}>{data.title}</Link>
                </Box>
              ))}
            </ul>
          )}
          <Link to="create">add new Partnership</Link>
        </Box>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
