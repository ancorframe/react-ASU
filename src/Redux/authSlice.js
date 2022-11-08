import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
    },
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    updateUser: (state, action) => {
      return { ...state, user: { ...action.payload } };
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateUser, updateToken, updateStatus } = authSlice.actions;

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
