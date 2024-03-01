import { DatabaseReference, get, push, ref, remove, set } from 'firebase/database';
import {
  CartList,
  CartItemKey,
  UpdateItemQuantityProps,
  AddItemProps,
  UpdateItemOptionsProps,
  AddSeveralOptionsItemProps,
} from '../../../types/cart';
import { firebaseDB } from '../firebase';
import { queryAPI } from '../../../constants/query';

/**
 * firebase realtimeDB 데이터를 활용했습니다.
 * 사용자의 uid를 이용하여 장바구니 아이템 리스트를 가져옵니다.
 */

interface CartInterface {
  getCartItems: () => Promise<CartList> | null;
  updateItemQuantity: ({ itemKey, count }: UpdateItemQuantityProps) => Promise<void>;
  addItem: ({ productId, selectOption, count }: AddItemProps) => Promise<DatabaseReference>;
  addSeveralOptionsItem: ({
    productId,
    selectOptions,
  }: AddSeveralOptionsItemProps) => Promise<DatabaseReference[]>;
  updateItemOptions: ({ itemKey, selectOption }: UpdateItemOptionsProps) => Promise<void>;
  removeItem: ({ itemKey }: { itemKey: CartItemKey }) => Promise<void>;
}

export class Cart implements CartInterface {
  constructor(private userId: string) {}

  isValidateUid() {
    return this.userId.length > 0;
  }

  setUid(userId: string) {
    this.userId = userId;
    return this.userId;
  }

  async getCartItems() {
    if (!this.isValidateUid) throw new Error('로그인 후 이용 가능합니다.');
    const items = await get(ref(firebaseDB, `${queryAPI.queryKey.cart}/${this.userId}`))
      .then((snapshot) => {
        const itemList = snapshot.val() || null;
        return itemList;
      })
      .catch((error) => {
        console.log(error);
      });

    return items;
  }

  async updateItemQuantity({ itemKey, count }: UpdateItemQuantityProps) {
    if (!this.isValidateUid) throw new Error('로그인 후 이용 가능합니다.');
    return set(ref(firebaseDB, `${queryAPI.queryKey.cart}/${this.userId}/${itemKey}/count`), count);
  }

  async addItem({ productId, selectOption, count = 1 }: AddItemProps) {
    if (!this.isValidateUid) throw new Error('로그인 후 이용 가능합니다.');
    return push(ref(firebaseDB, `${queryAPI.queryKey.cart}/${this.userId}/`), {
      productId,
      options: selectOption,
      count,
    });
  }

  async addSeveralOptionsItem({ productId, selectOptions }: AddSeveralOptionsItemProps) {
    if (!this.isValidateUid) throw new Error('로그인 후 이용 가능합니다.');
    const promiseArray = selectOptions.map(({ option, count }) => {
      return new Promise<DatabaseReference>((resolve) => {
        const newRef = push(ref(firebaseDB, `${queryAPI.queryKey.cart}/${this.userId}/`), {
          productId,
          options: option,
          count,
        });
        resolve(newRef);
      });
    });
    return Promise.all(promiseArray);
  }

  async updateItemOptions({ itemKey, selectOption }: UpdateItemOptionsProps) {
    if (!this.isValidateUid) throw new Error('로그인 후 이용 가능합니다.');
    return set(
      ref(firebaseDB, `${queryAPI.queryKey.cart}/${this.userId}/${itemKey}/options`),
      selectOption
    );
  }

  async removeItem({ itemKey }: { itemKey: CartItemKey }) {
    if (!this.isValidateUid) throw new Error('로그인 후 이용 가능합니다.');
    return remove(ref(firebaseDB, `${queryAPI.queryKey.cart}/${this.userId}/${itemKey}`));
  }
}
