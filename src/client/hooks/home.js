import {  useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useHome() {
  // const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['home'],
    queryFn: async ({ signal }) => {
      // return axios.get('/api/home');
      const response = await axios.get('/api/home', {
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
