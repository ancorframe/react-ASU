import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useResearch() {
  return useQuery({
    queryKey: ['research'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/research`, {
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });
}
