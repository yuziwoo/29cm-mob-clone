import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import {
  addOrUpdateCartItems,
  getCartItems,
  removeCartItems,
} from '../../api/firebase/database/cart';

export const useCart = () => {
  /**
   * firebase DB에서 유저의 장바구니 정보를 가져옵니다.
   */

  const [user] = useRecoilState(userState);
  const uid = user?.uid || '';
  const queryClient = useQueryClient();
  const queryKey = [queryAPI.queryKey.cart, uid];

  const cartQuery = useQuery({
    queryKey,
    queryFn: async () => {
      const result = await getCartItems(uid);
      return result;
    },
    enabled: !!uid,
    staleTime: queryAPI.staleTime.CART,
  });

  const addOrUpdate = useMutation({
    mutationFn: (productId: string) => {
      return addOrUpdateCartItems({ userId: uid, productId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const removeItem = useMutation({
    mutationFn: (productId: string) => {
      return removeCartItems({ userId: uid, productId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return { cartQuery, addOrUpdate, removeItem };
};

export default useCart;
