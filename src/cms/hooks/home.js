import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useUpdateHome(id) {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['user']);
  return useMutation({
    mutationFn: credential => {
      return axios.put(`/api/admin/home/${id}`, credential, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['homeAdmin'] });
    },
    retry: false,
    enabled: !!user,
  });
}

export function useHome() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['user']);
  return useQuery({
    queryKey: ['homeAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get('/api/admin/home', {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    onSuccess: data => {},
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    enabled: !!user,
  });
}
