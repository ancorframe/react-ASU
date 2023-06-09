import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useUpdateHistory(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(`/api/admin/history/${id}`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['historyAdmin'] });
    },
    retry: false,
  });
}

export function useHistory() {
  return useQuery({
    queryKey: ['historyAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/history`, {
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
