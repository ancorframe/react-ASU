import Button from '@mui/material/Button';
import { useLogoutMutation } from 'API/authApi';
import { Box } from 'components/Box';
import { useUser } from 'Redux/Selectors';
import { useDispatch } from 'react-redux';
import { updateUser, updateStatus, updateToken } from 'Redux/authSlice';

export const UserMenu = () => {
  const { user } = useUser();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout()
      .unwrap()
      .then(() => {
        console.log('logout');
        dispatch(updateToken(null));
        dispatch(updateUser({ name: '', email: '' }));
        dispatch(updateStatus(false));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <Box ml="auto" display="flex"  alignItems= 'center' gridGap={4}>
        <p>{user.name}</p>
        <p>{user.email}</p>

        <Button
          variant="outlined"
          type="button"
          size="small"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </>
  );
};
