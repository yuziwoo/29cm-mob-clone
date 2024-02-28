import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { addLikeItem, getLikeItems, removeLikeItem } from '../../api/firebase/database/like';

export const useLikeList = () => {
  /**
   * firebase DB에서 유저의 좋아요한 상품 리스트를 가져옵니다.
   */

  const [user] = useRecoilState(userState);
  const uid = user?.uid || '';
  const queryClient = useQueryClient();
  const queryKey = [queryAPI.queryKey.like, uid];

  const likeQuery = useQuery({
    queryKey,
    queryFn: async () => {
      const result = await getLikeItems(uid);
      return result;
    },
    enabled: !!uid,
    staleTime: queryAPI.staleTime.LIKE,
  });

  const addItem = useMutation({
    mutationFn: (productId: string) => {
      return addLikeItem({ userId: uid, productId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const removeItem = useMutation({
    mutationFn: (productId: string) => {
      return removeLikeItem({ userId: uid, productId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return { likeQuery, addItem, removeItem };
};
