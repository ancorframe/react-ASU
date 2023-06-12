import { usePartnershipList } from 'cms/hooks/partnership';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const PartnershipDetailLayout = () => {
  const { id } = useParams();
  const { data } = usePartnershipList(id);

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
          <Link to="create">add new PartnershipDetail</Link>
          <br />
          <Link to="detail">preview</Link>
        </Box>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
