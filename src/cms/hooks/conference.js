import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useConference() {
  return useQuery({
    queryKey: ['conferenceAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/conference`, {
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
export function useConferenceDetail(id) {
  return useQuery({
    queryKey: ['conferenceAdmin', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/conference/${id}`, {
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

export function useUpdateConference(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(`/api/admin/conference/${id}`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['conferenceAdmin', id] });
    },
    retry: false,
  });
}

export function useCreateConference() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post(`/api/admin/conference`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['conferenceAdmin'] });
    },
    retry: false,
  });
}

export function useDeleteConference(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/admin/conference/${id}`, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['conferenceAdmin'] });
    },
    retry: false,
  });
}
