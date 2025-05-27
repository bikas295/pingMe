import { useQuery } from '@tanstack/react-query';

type Request = {
  phone: string;
  text: string;
  timestamp: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useRequests = () =>
  useQuery<Request[]>({
    queryKey: ['requests'],
    queryFn: async () => {
      const res = await fetch(`${apiUrl}/api/requests`);
      //const res = await fetch('http://localhost:3001/api/requests');
      if (!res.ok) throw new Error('Failed to fetch requests');
      return res.json();
    },
  }); 