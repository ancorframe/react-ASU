import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useTeachers() {
  return useQuery({
    queryKey: ['teachers'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/teachers`, {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });
}
export function useTeachersDetail(id) {
  return useQuery({
    queryKey: ['teachers', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/teachers/${id}`, {
        withCredentials: true,
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });
}
