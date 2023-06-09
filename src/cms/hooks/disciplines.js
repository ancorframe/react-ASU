import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useDisciplines() {
  return useQuery({
    queryKey: ['disciplinesAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/disciplines`, {
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
export function useDisciplinesDetail(id) {
  return useQuery({
    queryKey: ['disciplinesAdmin', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/disciplines/${id}`, {
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

export function useUpdateDisciplines(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(
        `/api/admin/disciplines/${id}`,
        credential,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['disciplinesAdmin'] });
    },
    retry: false,
  });
}

export function useCreateDisciplines() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.post(`/api/admin/disciplines`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['disciplinesAdmin'] });
    },
    retry: false,
  });
}

export function useDeleteDisciplines(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/admin/disciplines/${id}`, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['disciplinesAdmin'] });
    },
    retry: false,
  });
}
