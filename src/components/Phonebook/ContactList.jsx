import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

export const ContactList = ({ list }) => {
  return (
    <ul>
      {list &&
        list.map(item => {
          return (
            <li key={item.id}>
              <ContactItem item={item} />
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.array.isRequired,
};
