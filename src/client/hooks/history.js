import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export function useHistory() {
  return useQuery({
    queryKey: ['history'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/history`, {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
}
