import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useEntrants(degree) {
  return useQuery({
    queryKey: ['entrantsAdmin', degree],
    queryFn: async ({signal}) => {
      const response = await axios.get(`/api/admin/entrants/${degree}`, {
        withCredentials: true,
        signal
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, // disable this query from automatically running
  });
}

export function useUpdateEntrants(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.put(
        `/api/admin/entrants/${id}`,
        credential,
        {
          withCredentials: true,
        }
      );
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['entrantsAdmin'] });
    },
    retry: false,
  });
}
