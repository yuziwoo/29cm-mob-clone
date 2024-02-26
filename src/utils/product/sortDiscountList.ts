import { DiscountDetail } from '../../types/product';

export const sortDiscountList = (discountList: DiscountDetail[]) => {
  return discountList.sort((a: DiscountDetail, b: DiscountDetail) => b.discount - a.discount);
};
