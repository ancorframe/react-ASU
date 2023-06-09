import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useSupport() {
  return useQuery({
    queryKey: ['support'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/support`, {
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
