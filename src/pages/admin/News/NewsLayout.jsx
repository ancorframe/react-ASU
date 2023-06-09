import { useNews } from 'cms/hooks/news';
import { Box } from 'components/Box';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const NewsLayout = () => {
  const { data } = useNews();

  return (
    <>
      <Box display="flex">
        <Box as="aside" width="300px" bg="antiquewhite" minHeight="92vh">
          {data && (
            <ul>
              {data.news.map(({ id, data }) => (
                <Box as="li" p="20px" key={id}>
                  <Link to={`/admin/news/${id}`}>{data.title}</Link>
                </Box>
              ))}
            </ul>
          )}
          <Link to={`/admin/news/create`}>create news</Link>
        </Box>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
