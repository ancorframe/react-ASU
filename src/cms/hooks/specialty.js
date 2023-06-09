import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useSpecialty() {
  return useQuery({
    queryKey: ['specialtyAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/specialty`, {
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

export function useUpdateSpecialty(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async credential => {
      const response = await axios.patch(`/api/admin/specialty/${id}`, credential, {
        withCredentials: true,
      });
      return response.data;
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      queryClient.invalidateQueries({ queryKey: ['specialtyAdmin'] });
    },
    retry: false,
  });
}
