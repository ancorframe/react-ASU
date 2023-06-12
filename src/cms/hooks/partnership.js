import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function usePartnership() {
  return useQuery({
    queryKey: ['partnershipAdmin'],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/partnership`, {
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
    queryKey: ['partnershipAdmin', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/partnership/${id}`, {
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

export function usePartnershipDetailById(id) {
  return useQuery({
    queryKey: ['partnershipDetailAdmin', id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/partnership/detail/${id}`, {
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


export function usePartnershipList(id) {
  return useQuery({
    queryKey: ['partnershipDetailAdmin',id],
    queryFn: async ({ signal }) => {
      const response = await axios.get(`/api/admin/partnershipList/${id}`, {
        signal,
        withCredentials: true,
      });
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, // disable this query from automatically running
  });
}
export function useCreatePartnership() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: credential => {
      return axios.post(`/api/admin/partnership`, credential, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['partnershipAdmin'] });
    },
    retry: false,
  });
}

export function useCreatePartnershipDetail() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: credential => {
      return axios.post(`/api/admin/partnership/detail`, credential, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['partnershipDetailAdmin'] });
    },
    retry: false,
  });
}

export function useUpdatePartnership(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: credential => {
      return axios.put(`/api/admin/partnership/${id}`, credential, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['partnershipAdmin',id] });
    },
    retry: false,
  });
}

export function useUpdatePartnershipDetail(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: credential => {
      return axios.put(`/api/admin/partnership/detail/${id}`, credential, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['partnershipDetailAdmin',id] });
    },
    retry: false,
  });
}

export function useDeletePartnership(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return axios.delete(`/api/admin/partnership/${id}`, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      //   console.log(data);
      //  QueryClient.persistor.writeQueryData('myData', data);
      // queryClient.invalidateQueries({ queryKey: ['entrants'] });
      queryClient.invalidateQueries({ queryKey: ['partnershipAdmin'] });
    },
    retry: false,
  });
}

export function useDeletePartnershipDetail(id) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return axios.delete(`/api/admin/partnership/detail/${id}`, {
        withCredentials: true,
      });
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['partnershipDetail'] });
    },
    retry: false,
  });
}
