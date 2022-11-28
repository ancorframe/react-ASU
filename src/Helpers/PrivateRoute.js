import { Navigate } from 'react-router-dom';
import { useStatus } from 'redux/Selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useStatus();
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
