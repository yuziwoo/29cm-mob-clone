import { useQuery } from '@tanstack/react-query';
import { BrandProps } from '../../types/brand';
import { queryAPI } from '../../constants/query';
import { getBrandData } from '../../api/firebase/database/brand';

export const useBrand = () => {
  /**
   * firebase realtimeDB에서 브랜드 정보를 가져옵니다.
   */

  const queryKey = [queryAPI.queryKey.brands];

  const brandQuery = useQuery<BrandProps[]>({
    queryKey,
    queryFn: async () => {
      const result = await getBrandData();
      return result;
    },
    staleTime: queryAPI.staleTime.BRAND,
  });

  return { brandQuery };
};
