import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useEntrants() {
  return useQuery({
    queryKey: ['entrants'],
    queryFn: async ({signal}) => {
        const response = await axios.get(`/api/entrants`, {
          signal
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, // disable this query from automatically running
  });
}
