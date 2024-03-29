import { get, ref, runTransaction } from 'firebase/database';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

/**
 * firebase realtimeDB 데이터를 활용했습니다.
 * 전체 상품 리스트를 가져옵니다. 고도화 후엔 상품 리스트 전달 API도 고도화될 예정입니다.
 */

export const getProducts = async () => {
  const products = await get(ref(firebaseDB, `${queryAPI.queryKey.product}`))
    .then((snapshot) => {
      const productList = snapshot.val() || {};
      return productList;
    })
    .catch((error) => {
      console.log(error);
    });

  return products;
};

export const addProductLike = async ({ productId }: { productId: string }) => {
  const product = await ref(firebaseDB, `${queryAPI.queryKey.product}/${productId}`);
  return runTransaction(product, (productObject) => {
    if (typeof productObject?.likes === 'number') productObject.likes++;
    return productObject;
  });
};

export const subtractProductLike = async ({ productId }: { productId: string }) => {
  const product = await ref(firebaseDB, `${queryAPI.queryKey.product}/${productId}`);
  return runTransaction(product, (productObject) => {
    if (typeof productObject?.likes === 'number') productObject.likes--;
    return productObject;
  });
};
