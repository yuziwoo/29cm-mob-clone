import { useCallback, useEffect, useState } from 'react';
import { useProduct } from '../product/useProduct';
import { useLikeList } from './useLikeList';

export const useLikeWithProduct = ({ productId }: { productId: string }) => {
  /**
   * 상품의 좋아요를 누르면
   * 나의 좋아요 리스트 (useLikeList)와 상품 자체의 좋아요 숫자(useProduct)가 모두 바뀌어야합니다.
   * 이 두가지를 모두 수행하기 위해서 상품 좋아요 기능은 useLikeWithProduct 훅을 사용해주세요.
   */
  const { likeQuery, addItem, removeItem } = useLikeList();
  const { productQuery, addLikes, subtractLikes } = useProduct();

  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (
      productQuery.isSuccess &&
      likeQuery.isSuccess &&
      productQuery.data.hasOwnProperty(productId) &&
      productQuery.data[productId].hasOwnProperty('likes')
    ) {
      setIsReady(true);
      setCount(productQuery.data[productId].likes);
    }
  }, [productQuery.isSuccess, likeQuery.isSuccess, productQuery.data, productId]);

  useEffect(() => {
    if (isReady) {
      setLiked(likeQuery.data.hasOwnProperty(productId));
    }
  }, [likeQuery.data, productId, isReady]);

  const removeLike = useCallback(
    (productId: string) => {
      removeItem.mutate(productId);
      subtractLikes.mutate(productId);
      setCount((prevCount) => --prevCount);
    },
    [removeItem, subtractLikes]
  );

  const fillLike = useCallback(
    (productId: string) => {
      addItem.mutate(productId);
      addLikes.mutate(productId);
      setCount((prevCount) => ++prevCount);
    },
    [addItem, addLikes]
  );

  const toggleLike = useCallback(async () => {
    const likeList = await likeQuery.refetch().then((res) => res.data);
    if (likeList.hasOwnProperty(productId)) {
      removeLike(productId);
      return;
    }
    fillLike(productId);
  }, [likeQuery, productId, fillLike, removeLike]);

  return { count, liked, isReady, toggleLike };
};
