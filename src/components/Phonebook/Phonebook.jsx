import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Title } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './ContactsSlice';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);
  const filter = useSelector(state => state.filter.value);

  const formSubmit = data => {
    const id = nanoid();
    const obj = { ...data, id };
    dispatch(add(obj));
  };

  const filterByName = () => {
    return contacts.filter(i => {
      return i.name.toLowerCase().includes(filter);
    });
  };

  const onDelete = id => {
    console.log(id.target.id);
    dispatch(remove(id.target.id));
  };

  return (
    <>
      <Title>Phonebook </Title>
      <ContactForm onSubmit={formSubmit} contacts={contacts} />
      <Title>Contacts</Title>
      <Filter />
      <ContactList
        list={filter ? filterByName() : contacts}
        onClick={onDelete}
      />
    </>
  );
};

