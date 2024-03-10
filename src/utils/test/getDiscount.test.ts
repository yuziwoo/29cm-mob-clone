import { getDiscount } from '../getDiscount';

describe('getDiscount는 소수점을 내림한 할인율을 반환한다.', () => {
  // given
  const cases = [
    { input: { price: 10000, priceAfterDiscount: 9000 }, expected: 10 },
    { input: { price: 10000, priceAfterDiscount: 9001 }, expected: 9 },
  ];

  it.each(cases)('getDiscount는 소수점을 내림한 할인율을 반환한다.', ({ input, expected }) => {
    const result = getDiscount(input.price, input.priceAfterDiscount);

    expect(result).toBe(expected);
  });
});
