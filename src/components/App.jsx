import { Routes, Route} from 'react-router-dom';

import { lazy, useEffect } from 'react';

import { Box } from './Box';
import { Layout } from './Layout';
import { NotFoundPage } from 'pages/NotFoundPage';
// import { useGetCurrentMutation } from 'API/authApi';
// import { useDispatch } from 'react-redux';
// import { updateUser, updateStatus } from 'Redux/authSlice';
// import { useToken } from '../Redux/Selectors';
// import { PrivateRoute } from 'Helpers/PrivateRoute';

// import { RestrictedRoute } from 'Helpers/PublicRoute';

// import { SpinnerLoader } from './SpinnerLoader/SpinnerLoader';
// import { Home } from 'pages/Home';

const Home = lazy(() =>
  import('../pages/Home').then(module => ({
    default: module.Home,
  }))
);
const Introduction = lazy(() =>
  import('../pages/Introduction').then(module => ({
    default: module.Introduction,
  }))
);
const Literature = lazy(() =>
  import('../pages/Literature').then(module => ({
    default: module.Literature,
  }))
);

// const SingUpPage = lazy(() =>
//   import('../Pages/SingUpPage').then(module => ({
//     default: module.SingUpPage,
//   }))
// );
// const LoginPage = lazy(() =>
//   import('../Pages/LoginPage').then(module => ({
//     default: module.LoginPage,
//   }))
// );
// const ContactsPage = lazy(() =>
//   import('../Pages/ContactsPage').then(module => ({
//     default: module.ContactsPage,
//   }))
// );

export const App = () => {
  // const dispatch = useDispatch();
  // const [getCurrent, { isLoading }] = useGetCurrentMutation();
  // const { token } = useToken();

  // useEffect(() => {
  //   if (token) {
  //     getCurrent()
  //       .unwrap()
  //       .then(response => {
  //         dispatch(updateUser(response));
  //         dispatch(updateStatus(true));
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }, [dispatch, getCurrent, token]);

  return (
    <>
      {/* {!isLoading ? ( */}
      <Box>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Introduction" element={<Introduction />} />
            <Route path="Literature" element={<Literature />} />
            {/* <Route
                path="register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<SingUpPage />}
                  />
                }
              /> */}
            {/* <Route
                path="home"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Home/>}
                  />
                }
              /> */}
            {/* <Route
                path="contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              /> */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      {/* ) : ( */}
      {/* <Box
          as="main"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <SpinnerLoader/>
        </Box> */}
      {/* )} */}
    </>
  );
};
