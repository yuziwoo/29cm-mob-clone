import { get, ref } from 'firebase/database';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

/**
 * firebase realtimeDB 데이터를 활용했습니다.
 * 어드민 사용자 리스트를 가져옵니다.
 */

export const getAdminUsers = async () => {
  const admins = await get(ref(firebaseDB, queryAPI.queryKey.admin))
    .then((snapshot) => snapshot.val())
    .catch((error) => console.log(error));

  return admins;
};
