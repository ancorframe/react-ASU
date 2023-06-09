import { useGetUser } from 'cms/hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ redirectPath = '/admin/login' }) => {
    const { data } = useGetUser();
  return (
    <>
      {!data && <Navigate to={redirectPath} replace />}
      {data && <Outlet />}
    </>
  );
};
