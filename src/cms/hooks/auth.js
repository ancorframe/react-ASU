import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useSignUp() {
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post('/api/auth/user/register', credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {},
    refetchOnWindowFocus: false,
  });
}

export function useSignIn() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post('/api/auth/user/login', credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      queryClient.setQueriesData(['user'], data);
    },
    onError: () => {},
    refetchOnWindowFocus: false,
  });
}

export function useGetUser() {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(['user']);
  return useQuery({
    queryKey: ['user'],
    queryFn: async ({ signal }) => {
      const response = await axios.get('/api/auth/user/current', {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    onSuccess: data => {
      queryClient.setQueriesData(['user'], data);
      // queryClient.invalidateQueries(['user']);
    },
    onError: () => {
      queryClient.setQueriesData(['user'], null);
      // setCurrentUser(null);
    },
    // refetchInterval: 14 * 60 * 1000,
    // refetchIntervalInBackground: true,
    // refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 0,
    enabled: !(!!user), // disable this query from automatically running
  });
}

export function useLogOut() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await axios.post('/api/auth/user/logout', {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: () => {
      // queryClient.invalidateQueries(['user']);
      queryClient.setQueriesData(['user'], null);
    },
    onError: () => {},
    refetchOnWindowFocus: false,
    // enabled: false, // disable this query from automatically running
  });
}

export function useRefreshToken() {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(['user']);
  // console.log(user);
  return useQuery({
    queryKey: ['token'],
    queryFn: async ({ signal }) => {
      const response = await axios.get('/api/auth/user/refresh-token', {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    onSuccess: () => {},
    onError: () => {
      // setCurrentUser(null);
      queryClient.setQueriesData(['user'], null);
    },
    refetchInterval: 14 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!user, // disable this query from automatically running
  });
}
