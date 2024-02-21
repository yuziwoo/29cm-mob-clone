import { get, ref } from 'firebase/database';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

export const getAdminUsers = async () => {
  const admins = await get(ref(firebaseDB, queryAPI.queryKey.admin))
    .then((snapshot) => snapshot.val())
    .catch((error) => console.log(error));

  return admins;
};
