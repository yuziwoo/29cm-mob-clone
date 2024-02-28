import { get, ref, remove, set } from 'firebase/database';
import { CartList } from '../../../types/cart';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

/**
 * firebase realtimeDB 데이터를 활용했습니다.
 * 사용자의 uid를 이용하여 장바구니 아이템 리스트를 가져옵니다.
 */

export const getCartItems = async (userId: string): Promise<CartList> => {
  const items = await get(ref(firebaseDB, `${queryAPI.queryKey.cart}/${userId}`))
    .then((snapshot) => {
      const itemList = snapshot.val() || {};
      return itemList;
    })
    .catch((error) => {
      console.log(error);
    });

  return items;
};

interface AddOrUpdateCartItemsProps {
  userId: string;
  productId: string;
  count?: number;
}

export const addOrUpdateCartItems = async ({
  userId,
  productId,
  count = 1,
}: AddOrUpdateCartItemsProps) => {
  return set(ref(firebaseDB, `${queryAPI.queryKey.cart}/${userId}/${productId}`), count);
};

export const removeCartItems = async ({
  userId,
  productId,
}: {
  userId: string;
  productId: string;
}) => {
  return remove(ref(firebaseDB, `${queryAPI.queryKey.cart}/${userId}/${productId}`));
};
