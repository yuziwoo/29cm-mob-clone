import { useQuery } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { ShowcaseProps } from '../../types/showcase';
import { getShowcaseData } from '../../api/firebase/database/showcase';
import { useEffect, useState } from 'react';

export const useShowcase = ({ showcaseIds = [] }: { showcaseIds?: number[] }) => {
  /**
   * firebase realtimeDB에서 쇼케이스 정보를 가져옵니다.
   */

  const [currentShowcase, setCurrentShowcase] = useState<ShowcaseProps[]>([]);

  const queryKey = [queryAPI.queryKey.showcase];

  const showcaseQuery = useQuery<ShowcaseProps[] | null>({
    queryKey,
    queryFn: async () => {
      const result = await getShowcaseData();
      if (Array.isArray(result)) return result;
      return null;
    },
    staleTime: queryAPI.staleTime.SHOWCASE,
  });

  useEffect(() => {
    if (showcaseQuery.data === undefined || showcaseQuery.data === null) return;
    const filteredShowcase = showcaseQuery.data.filter(({ id }) => showcaseIds.includes(id));
    setCurrentShowcase(filteredShowcase);
  }, [showcaseQuery.data, showcaseIds]);

  return { showcaseQuery, currentShowcase };
};
