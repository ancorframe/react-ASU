import { ContactItem } from './ContactItem';
import { useContacts, useFilter } from 'Redux/Selectors';
import { filterByName } from 'Helpers';

export const ContactList = () => {
  const { contacts } = useContacts();
  const { filter } = useFilter();

  const filterContacts = filterByName(contacts, filter);

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
