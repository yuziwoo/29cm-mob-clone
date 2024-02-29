export type CartItemKey = string;

export type CartItemProps = {
  productId: string;
  options: Record<string, string[]>;
  count: number;
};

export type CartList = Record<string, CartItemProps>;

export type UpdateItemQuantityProps = {
  itemKey: CartItemKey;
  count: Pick<CartItemProps, 'count'>;
};

export type AddItemProps = Pick<CartItemProps, 'productId' | 'count'> & {
  selectOption: Record<string, string>;
};

export type UpdateItemOptionsProps = {
  itemKey: CartItemKey;
  selectOption: Record<string, string>;
};

export type IsItemInCartProps = Pick<CartItemProps, 'productId'> & {
  selectOption: Record<string, string>;
};
