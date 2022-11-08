import Typography from '@mui/material/Typography';
import { ContactItem } from './ContactItem';
import { useFilter } from 'Redux/Selectors';
import { filterByName } from 'Helpers';
import { Box } from 'components/Box';
import { useGetContactQuery } from 'API/contactsApi';

export const ContactList = () => {
  const { data } = useGetContactQuery();
  const { filter } = useFilter();
  const filterContacts = filterByName(data ? data : [], filter);

  if (filterContacts.length === 0) {
    return (
      <Typography component="h1" variant="h5" textAlign="center">
        No contacts with this name(
      </Typography>
    );
  }
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={3}
    >
      {filterContacts.map(item => {
        return (
          <li key={item.id}>
            <ContactItem contact={item} />
          </li>
        );
      })}
    </Box>
  );
};

