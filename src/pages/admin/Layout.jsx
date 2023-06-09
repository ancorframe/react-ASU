import {
  useGetUser, useLogOut,
  useRefreshToken
} from 'cms/hooks/auth';
import { Box } from 'components/Box'
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';



const links = [
  { name: 'home', to: 'home' },
  { name: 'entrants', to: 'entrants' },
  { name: 'news', to: 'news' },
  { name: 'support', to: 'support' },
  { name: 'history', to: 'history' },
  { name: 'teachers', to: 'teachers' },
  { name: 'partnership', to: 'partnership' },
  { name: 'conference', to: 'conference' },
  { name: 'disciplines', to: 'disciplines' },
  { name: 'literature', to: 'literature' },
  { name: 'research', to: 'research' },
  { name: 'schedule', to: 'schedule' },
];

export const Layout = () => {
  const { data: user } = useGetUser();
  useRefreshToken();
  
  const logout = useLogOut();
  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <>
      <header>
        <Box
          display="flex"
          justifyContent="space-between"
          height=" 80px"
          alignItems="center"
        >
          <p>logo</p>
          <nav>
            {!user && (
              <>
                <Link to="login">login</Link>
                <br />
                <Link to="register">register</Link>
              </>
            )}
            {user && (
              <Box display="flex" gridGap="20px">
                <Box as="ul" display="flex" gridGap="20px">
                  {links.map(({ name, to }, index) => (
                    <li key={index}>
                      <Link to={to}>{name}</Link>
                    </li>
                  ))}
                </Box>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </Box>
            )}
          </nav>
        </Box>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
