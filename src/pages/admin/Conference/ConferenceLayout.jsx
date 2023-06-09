import { useConference } from 'cms/hooks/conference';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const ConferenceLayout = () => {
  const { data } = useConference();

  return (
    <>
      <Box display="flex">
        <Box as="aside" width="300px" bg="antiquewhite" minHeight="92vh">
          {data && (
            <ul>
              {data.conference.map(({ id, data }) => (
                <Box as="li" p="20px" key={id}>
                  <Link to={`${id}`}>{data.title}</Link>
                </Box>
              ))}
            </ul>
          )}
          <Link to={`create`}>create conference</Link>
        </Box>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
