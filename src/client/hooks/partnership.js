import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function usePartnership() {
  return useQuery({
    queryKey: ['partnership'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/partnership`, {
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
export function usePartnershipById(id) {
  return useQuery({
    queryKey: ['partnership', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/partnership/${id}`, {
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
