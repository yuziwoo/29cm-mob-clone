import { ProductProps, SelectedOption } from './product';

export type CartItemKey = string;

export type CartItemProps = {
  productId: string;
  options: Record<string, string>;
  count: number;
};

export type CartList = Record<string, CartItemProps>;

export type UpdateItemQuantityProps = {
  itemKey: CartItemKey;
  count: number;
};

export type SelectedProductOption = Record<string, string>;

export type AddItemProps = Pick<CartItemProps, 'productId' | 'count'> & {
  selectOption: SelectedProductOption;
};

export type AddSeveralOptionsItemProps = Pick<CartItemProps, 'productId'> & {
  selectOptions: SelectedOption[];
};

export type UpdateItemOptionsProps = {
  itemKey: CartItemKey;
  selectOption: SelectedProductOption;
};

export type IsItemInCartProps = Pick<CartItemProps, 'productId'> & {
  selectOption: SelectedProductOption;
};

export type RemoveDuplicateItemsProps = Pick<CartItemProps, 'productId'> & {
  selectOptions: SelectedOption[];
};

export type CartListProps = {
  productId: string;
  product: ProductProps | null;
  itemKey: string;
  count: number;
  options: SelectedProductOption;
};
