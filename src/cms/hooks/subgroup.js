import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useSubgroup() {
  return useQuery({
    queryKey: ['subgroupAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/subgroup`, {
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

export function useUpdateSubgroup(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.patch(`/api/admin/subgroup/${id}`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['subgroupAdmin'] });
    },
    retry: false,
  });
}
