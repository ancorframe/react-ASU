
import { useSchedule } from 'cms/hooks/schedule';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const ScheduleLayout = () => {
  const { data } = useSchedule();

  return (
    <>
      <Box display="flex">
        <Box as="aside" width="300px" bg="antiquewhite" minHeight="92vh">
          {data && (
            <ul>
              {data.schedules.map(({ id, data }) => (
                <Box as="li" p="20px" key={id}>
                  <Link to={`${id}`}>{'erferf'}</Link>
                </Box>
              ))}
            </ul>
          )}
          <Link to={`create`}>create schedule</Link>
        </Box>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
