import { useQuery } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { ShowcaseProps } from '../../types/showcase';
import { getShowcaseData } from '../../api/firebase/database/showcase';

export const useShowcase = () => {
  /**
   * firebase realtimeDB에서 쇼케이스 정보를 가져옵니다.
   */

  const queryKey = [queryAPI.queryKey.brands];

  const showcaseQuery = useQuery<ShowcaseProps[]>({
    queryKey,
    queryFn: async () => {
      const result = await getShowcaseData();
      return result;
    },
    staleTime: queryAPI.staleTime.SHOWCASE,
  });

  return { showcaseQuery };
};
