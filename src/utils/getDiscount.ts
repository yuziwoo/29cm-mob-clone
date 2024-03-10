export const getDiscount = (
  originalPrice: number | undefined,
  priceAfterDiscount: number | undefined
) => {
  if (
    originalPrice === undefined ||
    priceAfterDiscount === undefined ||
    originalPrice < priceAfterDiscount
  )
    return 0;

  const discountAmount = originalPrice - priceAfterDiscount;
  return Math.floor(discountAmount / (originalPrice / 100));
};
