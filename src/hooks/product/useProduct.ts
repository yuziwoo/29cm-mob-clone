import { useMutation, useQuery } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import {
  addProductLike,
  getProducts,
  subtractProductLike,
} from '../../api/firebase/database/product';

export const useProduct = () => {
  const [user] = useRecoilState(userState);
  const uid = user?.uid || '';
  const queryKey = [queryAPI.queryKey.product, uid];

  const productQuery = useQuery({
    queryKey,
    queryFn: async () => {
      const result = await getProducts();
      return result;
    },
    staleTime: queryAPI.staleTime.PRODUCT,
  });

  const addLikes = useMutation({
    mutationFn: async (productId: string) => {
      return addProductLike({ productId });
    },
  });

  const subtractLikes = useMutation({
    mutationFn: async (productId: string) => {
      return subtractProductLike({ productId });
    },
  });

  return { productQuery, addLikes, subtractLikes };
};
