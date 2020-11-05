import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export default function Github() {
  const { data } = useSWR('/api/github', fetcher);
  if (!data) return null;

  console.log(data);
  return null;
}
