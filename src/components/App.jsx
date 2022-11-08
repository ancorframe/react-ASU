import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Box } from './Box';
import { Layout } from './Layout';
import { NotFoundPage } from 'Pages/NotFoundPage';
import { useGetCurrentMutation } from 'API/authApi';
import { useDispatch } from 'react-redux';
import { updateUser, updateStatus } from 'Redux/authSlice';
import { useToken } from '../Redux/Selectors';

const Register = lazy(() =>
  import('../Pages/RegisterPage').then(module => ({
    default: module.RegisterPage,
  }))
);
const LoginPage = lazy(() =>
  import('../Pages/LoginPage').then(module => ({
    default: module.LoginPage,
  }))
);
const Contacts = lazy(() =>
  import('../Pages/ContactsPage').then(module => ({
    default: module.ContactsPage,
  }))
);

export const App = () => {
  const dispatch = useDispatch();
  const [getCurrent] = useGetCurrentMutation();
  const { token } = useToken();

  useEffect(() => {
    if (token) {
      getCurrent()
        .unwrap()
        .then(response => {
          dispatch(updateUser(response));
          dispatch(updateStatus(true));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [dispatch, getCurrent, token]);

  return (
    <>
      <Box px={3}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="login" />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </>
  );
};
