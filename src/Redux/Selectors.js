import { useSelector } from 'react-redux';

export const useFilter = () => {
  const filter = useSelector(state => state.filter.value);
  return { filter };
};

export const useUser = () => {
  const user = useSelector(state => state.auth.user);
  return { user };
};

export const useToken = () => {
  const token = useSelector(state => state.auth.token);
  return { token };
};

export const useStatus = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return { isLoggedIn };
};
