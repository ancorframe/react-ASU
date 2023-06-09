
import { useDisciplines } from 'cms/hooks/disciplines';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const DisciplinesLayout = () => {
  const { data } = useDisciplines();

  return (
    <>
      <Box display="flex">
        <Box as="aside" width="300px" bg="antiquewhite" minHeight="92vh">
          {data && (
            <ul>
              {data.disciplines.map(({ id, data }) => (
                <Box as="li" p="20px" key={id}>
                  <Link to={`${id}`}>{data.disciplines}</Link>
                </Box>
              ))}
            </ul>
          )}
          <Link to={`create`}>create disciplines</Link>
        </Box>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
