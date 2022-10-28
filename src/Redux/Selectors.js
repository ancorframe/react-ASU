import { useSelector } from 'react-redux';

export const useContacts = () => {
  const contacts = useSelector(state => state.contacts.list);
  return { contacts };
};

export const useFilter = () => {
  const filter = useSelector(state => state.filter.value);
  return { filter };
};
