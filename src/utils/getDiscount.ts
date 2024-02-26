export const getDiscount = (originalPrice: number, priceAfterDiscount: number) => {
  if (originalPrice < priceAfterDiscount) return 0;

  const discountAmount = originalPrice - priceAfterDiscount;
  return Math.floor(discountAmount / (originalPrice / 100));
};
