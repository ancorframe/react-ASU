import { useSelector } from 'react-redux';

export const useFilter = () => {
  const filter = useSelector(state => state.filter.value);
  return { filter };
};
