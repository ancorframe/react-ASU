import {  useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useDiscipline(filter) {
  return useQuery({
    queryKey: ['discipline'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/disciplines`, {
        signal,
        params: {
          ...filter,
        },
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, // disable this query from automatically running
  });
}

export function useDisciplineFilter() {
  // const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['disciplineFilter'],
    queryFn: async ({ signal }) => {
      const response = await axios.get('/api/disciplines/filter', {
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
