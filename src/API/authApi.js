import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth', 'Contacts'],
  endpoints: builder => ({
    signup: builder.mutation({
      query(body) {
        return {
          url: `users/signup`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    login: builder.mutation({
      query(body) {
        return {
          url: `users/login`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query(body) {
        return {
          url: `users/logout`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Auth'],
    }),
    getCurrent: builder.mutation({
      async queryFn(_, { getState }, _extraOptions, fetchBaseQuery) {
        const token = getState().auth.token;
        if (token) {
          const result = await fetchBaseQuery(`users/current`);
          return result;
        }

        return null;
      },
      providesTags: ['Auth'],
    }),
  
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetCurrentMutation,
} = authApi;
