import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

export default function NowPlaying() {
  const { data } = useSWR('/api/now-playing', fetcher);
  if (!data) return null;

  return null;
}
