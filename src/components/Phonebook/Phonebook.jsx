import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Title } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <>
      <Title>Phonebook </Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};
