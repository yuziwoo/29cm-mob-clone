const staleTime = {
  PRODUCT: 1000 * 60 * 60, // 60분
  CART: 1000 * 60 * 10 // 10분
};

const queryKey = {
  cart: 'carts',
};

export const queryAPI = {
  staleTime,
  queryKey,
} as const;
