import { Box } from 'components/Box';
import { ContactForm } from 'components/Contacts/AddContactForm';
import { ContactList } from 'components/Contacts/ContactList';
import { Filter } from 'components/Contacts/Filter';

export const ContactsPage = () => {
  return (
    <Box
      as="main"
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gridGap={6}
    >
      <ContactForm />
      <Box gridArea="1 / 2 / 2 / 3">
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};
