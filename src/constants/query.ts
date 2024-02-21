const staleTime = {
  PRODUCT: 1000 * 60 * 60, // 60분
  CART: 1000 * 60 * 30, // 30분
  LIKE: 1000 * 60 * 30, // 30분
};

const queryKey = {
  cart: 'carts',
  admin: 'admins',
  like: 'likes',
};

export const queryAPI = {
  staleTime,
  queryKey,
} as const;
