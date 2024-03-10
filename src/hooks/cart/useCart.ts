import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { queryAPI } from '../../constants/query';
import { Cart } from '../../api/firebase/database/cart';
import { useCallback, useEffect } from 'react';
import {
  UpdateItemOptionsProps,
  AddSeveralOptionsItemProps,
  RemoveDuplicateItemsProps,
} from '../../types/cart';
import {
  AddItemProps,
  CartItemKey,
  CartItemProps,
  IsItemInCartProps,
  UpdateItemQuantityProps,
} from '../../types/cart';
import { isEqualObject } from '../../utils/isEqualObject';
import { useRouter } from '../useRouter';
import { ROUTE_PATH } from '../../constants/path';
import { useLocation } from 'react-router-dom';

export const useCart = () => {
  /**
   * firebase DB에서 유저의 장바구니 정보를 가져옵니다.
   */

  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();
  const { pathname } = useLocation();
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

  const validateUserLogin = useCallback(() => {
    if (user === null) {
      navigate(ROUTE_PATH.login, {
        state: { path: pathname },
      });
      return false;
    }
    return true;
  }, [user, navigate, pathname]);

  /**
   * 카트에 이미 중복되는 아이템이 있는 경우 true를 리턴합니다.
   */
  const isItemInCart = async ({ productId, selectOption }: IsItemInCartProps) => {
    await queryClient.invalidateQueries({ queryKey });
    const cartData = cartQuery.data ? cartQuery.data : {};
    const sameProductItem = Object.values(cartData).filter((item) => item.productId === productId);

    let isDuplicate = false;
    sameProductItem.forEach(({ options }) => {
      if (isEqualObject(selectOption, options)) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  };

  /**
   * 하나의 상품을 여러 옵션 추가할 때 장바구니에 겹치는 아이템이 있는지 검증하고, 겹치치 않은 아이템만 리턴해줍니다.
   * @params
   * productId: number, selectOptions: {count: number, option: Record<string, string>}[]
   */
  const removeDuplicateItems = async ({ productId, selectOptions }: RemoveDuplicateItemsProps) => {
    await queryClient.invalidateQueries({ queryKey });
    const cartData = cartQuery.data ? cartQuery.data : {};
    const sameProductItem = Object.values(cartData).filter(
      (item) => item.productId === productId
    ) || [{ options: { 옵션: false } }];

    const newItems = selectOptions.filter(({ option }) => {
      let isDuplicate = false;
      sameProductItem.forEach(({ options }) => {
        if (isEqualObject(option, options)) {
          isDuplicate = true;
        }
      });
      return !isDuplicate;
    });

    return newItems;
  };

  /**
   * 장바구니에 하나의 아이템만 추가할 때 사용합니다.
   */
  const addItem = useMutation({
    mutationFn: async ({ productId, selectOption, count = 1 }: AddItemProps) => {
      if (!validateUserLogin()) throw new Error('로그인 후 이용 가능합니다.');
      const hasItemInCart = await isItemInCart({ productId, selectOption });
      if (hasItemInCart) throw new Error('이미 장바구니에 추가된 아이템입니다.');
      return cart.addItem({ productId, selectOption, count });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      window.alert('장바구니에 추가되었습니다.');
    },
    onError: (e) => {
      window.alert(e.message);
    },
  });

  // 하나의 상품인데 여러 옵션을 장바구니에 추가할때 사용하는 함수
  const addSeveralOptionsItem = useMutation({
    mutationFn: async ({ productId, selectOptions }: AddSeveralOptionsItemProps) => {
      if (!validateUserLogin()) throw new Error('로그인 후 이용 가능합니다.');
      const newSelectOptions = await removeDuplicateItems({ productId, selectOptions });
      if (newSelectOptions.length === 0) {
        throw new Error('모두 이미 추가된 상품입니다.');
      }
      return cart.addSeveralOptionsItem({ productId, selectOptions: newSelectOptions });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      window.alert('장바구니에 추가되었습니다. (중복된 상품 제외)');
    },
    onError: (e) => {
      window.alert(e.message);
    },
  });

  const updateItemQuantity = useMutation({
    mutationFn: async ({ itemKey, count }: UpdateItemQuantityProps) => {
      return cart.updateItemQuantity({ itemKey, count });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
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

  return {
    cartQuery,
    addItem,
    addSeveralOptionsItem,
    updateItemQuantity,
    updateItemOptions,
    removeItem,
  };
};

export default useCart;
