import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useLiterature() {
  return useQuery({
    queryKey: ['literature'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/literature`, {
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
export function useLiteratureDetail(id) {
  return useQuery({
    queryKey: ['literature', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/literature/${id}`, {
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

export function useUpdateLiterature(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(
        `/api/admin/literature/${id}`,
        credential,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['literature'] });
    },
    retry: false,
  });
}

export function useCreateLiterature() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post(`/api/admin/literature`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['literature'] });
    },
    retry: false,
  });
}

export function useDeleteLiterature(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/admin/literature/${id}`, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['literature'] });
    },
    retry: false,
  });
}
