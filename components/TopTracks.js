import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', fetcher);
  if (!data) return null;

  return null;
};

export default TopTracks;
