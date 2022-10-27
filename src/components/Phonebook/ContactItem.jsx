import PropTypes from 'prop-types';
import { remove } from './ContactsSlice';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelate = e => {
    dispatch(remove(e.target.id));
  };

  return (
    <>
      <span>
        {item.name} {item.number}   
      </span>
      <button type="button" id={item.id} onClick={handleDelate}>
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  item: PropTypes.object.isRequired,
};
