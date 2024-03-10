import { sortDiscountList } from '../product/sortDiscountList';

describe('sortDiscountList', () => {
  it('할인율이 큰 순서대로 정렬하여 배열을 반환한다.', () => {
    // given
    const discounts = [
      { name: '할인율 작음', discount: 1 },
      { name: '할인율 큼', discount: 20 },
    ];
    const sortedDiscountList = sortDiscountList(discounts);
    const expectedDiscounts = [
      { name: '할인율 큼', discount: 20 },
      { name: '할인율 작음', discount: 1 },
    ];

    // then
    expect(sortedDiscountList).toEqual(expectedDiscounts);
  });
});
