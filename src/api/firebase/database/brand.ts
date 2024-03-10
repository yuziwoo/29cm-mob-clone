/**
 * firebase realtimeDB에서 브랜드 정보를 가져옵니다.
 */

import { get, ref } from 'firebase/database';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

export const getBrandData = async () => {
  const brandData = await get(ref(firebaseDB, `${queryAPI.queryKey.brands}`))
    .then((snapshot) => {
      const data = snapshot.val() || null;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  return brandData;
};
