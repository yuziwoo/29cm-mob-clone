import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { Cart } from '../../api/firebase/database/cart';
import { useEffect } from 'react';
import { UpdateItemOptionsProps } from '../../types/cart';
import {
  AddItemProps,
  CartItemKey,
  CartItemProps,
  IsItemInCartProps,
  UpdateItemQuantityProps,
} from '../../types/cart';

export const useCart = () => {
  /**
   * firebase DB에서 유저의 장바구니 정보를 가져옵니다.
   */

  const [user] = useRecoilState(userState);
  const cart = new Cart(user?.uid || '');

  useEffect(() => {
    if (user) cart.setUid(user.uid);
    // eslint-disable-next-line
  }, [user]);

  const queryClient = useQueryClient();
  const queryKey = [queryAPI.queryKey.cart, user?.uid || ''];

  const cartQuery = useQuery<Record<CartItemKey, CartItemProps>>({
    queryKey,
    queryFn: async () => {
      const result = await cart.getCartItems();
      return result;
    },
    enabled: !!user?.uid,
    staleTime: queryAPI.staleTime.CART,
  });

  const isItemInCart = async ({ productId, selectOption }: IsItemInCartProps) => {
    await queryClient.invalidateQueries({ queryKey });
    const cartData = cartQuery.data ? cartQuery.data : {};
    const sameProductItem = Object.values(cartData).find((item) => item.productId === productId);

    if (sameProductItem === undefined) return false;
    if (JSON.stringify(selectOption) === JSON.stringify(sameProductItem.options)) return true;
    return false;
  };

  const addItem = useMutation({
    mutationFn: async ({ productId, selectOption, count = 1 }: AddItemProps) => {
      const hasItemInCart = await isItemInCart({ productId, selectOption });
      if (hasItemInCart) throw new Error('이미 장바구니에 추가된 아이템입니다.');
      return cart.addItem({ productId, selectOption, count });
    },
    onSuccess: () => {
      window.alert('장바구니에 추가되었습니다.');
      queryClient.invalidateQueries({ queryKey });
    },
    onError: (e) => {
      window.alert(e);
    },
  });

  const updateItemQuantity = useMutation({
    mutationFn: async ({ itemKey, count }: UpdateItemQuantityProps) => {
      return cart.updateItemQuantity({ itemKey, count });
    },
  });

  const updateItemOptions = useMutation({
    mutationFn: async ({ itemKey, selectOption }: UpdateItemOptionsProps) => {
      return cart.updateItemOptions({ itemKey, selectOption });
    },
  });

  const removeItem = useMutation({
    mutationFn: ({ itemKey }: { itemKey: CartItemKey }) => {
      return cart.removeItem({ itemKey });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return { cartQuery, addItem, updateItemQuantity, updateItemOptions, removeItem };
};

export default useCart;
