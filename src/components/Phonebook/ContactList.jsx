import { ContactItem } from './ContactItem';
import { useFilter } from 'Redux/Selectors';
import { filterByName } from 'Helpers';
import { useFetchContactsQuery } from 'API/mockApi';

export const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const { filter } = useFilter();

  const filterContacts = filterByName(data ? data : [], filter);

  if (filterContacts.length === 0) {
    return;
  }
  return (
    <ul>
      {filterContacts.map(item => {
        return (
          <li key={item.id}>
            <ContactItem contacts={item} />
          </li>
        );
      })}
    </ul>
  );
};
