import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useNews(filter) {
  return useQuery({
    queryKey: ['news'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/news`, {
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

export function useNewsDetail(id) {
  return useQuery({
    queryKey: ['news', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/news/${id}`, {
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

export function useInfiniteNews() {
  return useInfiniteQuery({
    queryKey: ['newsInfinite'],
    queryFn: async ({ signal, pageParam = 1 }) => {
      const response = await axios.get(`/api/news`, {
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
