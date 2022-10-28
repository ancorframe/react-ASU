import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from 'Redux/ContactsSlice';

export const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleDelate = e => {
    dispatch(remove(e.target.id));
  };

  return (
    <>
      <span>
        {contacts.name} {contacts.number}
      </span>
      <button type="button" id={contacts.id} onClick={handleDelate}>
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.object.isRequired,
};
