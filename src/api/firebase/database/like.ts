import { get, ref, remove, set } from 'firebase/database';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

/**
 * firebase realtimeDB 데이터를 활용했습니다.
 * 사용자의 uid를 이용하여 좋아요한 아이템 목록을 가져옵니다.
 */

export const getLikeItems = async (userId: string) => {
  const items = await get(ref(firebaseDB, `${queryAPI.queryKey.like}/${userId}`))
    .then((snapshot) => {
      const itemList = snapshot.val() || {};
      return itemList;
    })
    .catch((error) => {
      console.log(error);
    });

  return items;
};

export const addLikeItem = async ({ userId, productId }: { userId: string; productId: string }) => {
  return set(ref(firebaseDB, `${queryAPI.queryKey.like}/${userId}/${productId}`), 0);
};

export const removeLikeItem = async ({
  userId,
  productId,
}: {
  userId: string;
  productId: string;
}) => {
  return remove(ref(firebaseDB, `${queryAPI.queryKey.like}/${userId}/${productId}`));
};
