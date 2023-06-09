import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useUpdateHome(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: credential => {
      return axios.put(`/api/admin/home/${id}`, credential, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['homeAdmin'] });
    },
    retry: false,
  });
}

export function useHome() {
  // const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['homeAdmin'],
    queryFn: async ({ signal }) => {
      // return axios.get('/api/home');
      const response = await axios.get('/api/admin/home', {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    onSuccess: data => {
      // console.log(data);
      //   queryClient.setQueryData({ queryKey: ['home'] });
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, // disable this query from automatically running
  });
}
