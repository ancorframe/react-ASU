import Typography from '@mui/material/Typography';
import { ContactItem } from './ContactItem';
import { useFilter } from 'Redux/Selectors';
import { filterByName } from 'Helpers/filterByName';
import { Box } from 'components/Box';
import { useGetContactQuery } from 'API/contactsApi';
import { SpinnerLoader } from 'components/SpinnerLoader/SpinnerLoader';

export const ContactList = () => {
  const { data, isLoading, isSuccess } = useGetContactQuery();
  const { filter } = useFilter();
  const filterContacts = filterByName(data ? data : [], filter);

  if (isLoading) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <SpinnerLoader />
      </Box>
    );
  }

  if (isSuccess && data.length === 0) {
    return (
      <Typography component="h1" variant="h5" textAlign="center">
        No contacts (
      </Typography>
    );
  }

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
