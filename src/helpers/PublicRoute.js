import { useGetUser } from 'cms/hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const RestrictedRoute = ({ redirectPath = '/admin/home' }) => {
  const { data } = useGetUser();
  return (
    <>
      {data && <Navigate to={redirectPath} replace />}
      {!data && <Outlet />}
    </>
  );
};
