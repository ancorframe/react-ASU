import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useTeachers() {
  return useQuery({
    queryKey: ['teachersAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/teachers`, {
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
export function useTeachersDetail(id) {
  return useQuery({
    queryKey: ['teachersAdmin', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/teachers/${id}`, {
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
export function useCreateTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post(`/api/admin/teachers`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['teachersAdmin'] });
    },
    retry: false,
  });
}
export function useUpdateTeacher(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(`/api/admin/teachers/${id}`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['teachersAdmin', id] });
    },
    retry: false,
  });
}

export function useDeleteTeacher(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/admin/teachers/${id}`, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['teachersAdmin'] });
    },
    retry: false,
  });
}
