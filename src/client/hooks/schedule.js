import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useSchedule(searchParam) {
  return useQuery({
    queryKey: ['schedule'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/schedule`, {
        signal,
        params: searchParam,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    enabled: false,
  });
}

export function useScheduleFilter() {
  return useQuery({
    queryKey: ['scheduleFilter'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/schedule/filter`, {
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  });
}

