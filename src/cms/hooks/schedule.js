import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useSchedule() {
  return useQuery({
    queryKey: ['scheduleAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/schedule`, {
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
export function useScheduleDetail(id) {
  return useQuery({
    queryKey: ['scheduleAdmin', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/schedule/${id}`, {
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

export function useUpdateSchedule(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(
        `/api/admin/schedule/${id}`,
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
      queryClient.invalidateQueries({ queryKey: ['scheduleAdmin', id] });
    },
    retry: false,
  });
}

export function useCreateSchedule() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post(`/api/admin/schedule`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['scheduleAdmin'] });
    },
    retry: false,
  });
}

export function useDeleteSchedule(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/admin/schedule/${id}`, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['scheduleAdmin'] });
    },
    retry: false,
  });
}
