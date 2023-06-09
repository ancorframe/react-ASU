import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useInfiniteLiterature(filter) {
  return useInfiniteQuery({
    queryKey: ['literatureInfinite'],
    queryFn: async ({ signal, pageParam = 1 }) => {
      const response = await axios.get(`/api/literature`, {
        signal,
        params: {
          page: pageParam,
          ...filter,
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

export function useLiteratureFilter() {
  // const queryClient = useQueryClient();
  return useQuery({
    queryKey: ['literatureFilter'],
    queryFn: async ({ signal }) => {
      const response = await axios.get('/api/literature/filter', {
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
