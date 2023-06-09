import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';


export function useConferenceDetail(id) {
  return useQuery({
    queryKey: ['conference', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/conference/${id}`, {
        signal,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    // enabled: false, // disable this query from automatically running
  });
}

export function useInfiniteConference() {
  return useInfiniteQuery({
    queryKey: ['conferenceInfinite'],
    queryFn: async ({ signal, pageParam = 1 }) => {
      const response = await axios.get(`/api/conference`, {
        signal,
        params: {
          page: pageParam,
        },
      });
      return response.data;
    },
    getNextPageParam: lastPage =>
      lastPage.totalPage < lastPage.nextPage ? undefined : lastPage.nextPage,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, // disable this query from automatically running
  });
}
