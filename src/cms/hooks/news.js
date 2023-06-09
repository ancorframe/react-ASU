import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useNews() {
  return useQuery({
    queryKey: ['newsAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/news`, {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, // disable this query from automatically running
  });
}
export function useNewsDetail(id) {
  return useQuery({
    queryKey: ['newsAdmin', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/news/${id}`, {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    // enabled: false, // disable this query from automatically running
  });
}

export function useUpdateNews(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(`/api/admin/news/${id}`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['newsAdmin', id] });
    },
    retry: false,
  });
}

export function useCreateNews() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post(`/api/admin/news`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['newsAdmin'] });
    },
    retry: false,
  });
}

export function useDeleteNews(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/admin/news/${id}`, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['newsAdmin'] });
    },
    retry: false,
  });
}
