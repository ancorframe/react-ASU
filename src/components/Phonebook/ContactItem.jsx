import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'API/mockApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactItem = ({ contacts }) => {
  const notify = e =>
    toast.success(e, {
      theme: 'dark',
    });
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = e => {
    deleteContact(e.target.id)
      .unwrap()
      .then(({ name }) => notify(`${name} was deleted`))
      .catch(({ error }) => notify(`${error}`));
  };

  return (
    <>
      <span>
        {contacts.name} {contacts.number}
      </span>
      <button
        type="button"
        id={contacts.id}
        onClick={handleDelete}
        disabled={isLoading}
      >
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.object.isRequired,
};
