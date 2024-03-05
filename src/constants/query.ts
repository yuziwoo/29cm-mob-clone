const staleTime = {
  SHOWCASE: 1000 * 60 * 60 * 24, // 24시간
  BRAND: 1000 * 60 * 60 * 24, // 24시간
  PRODUCT: 1000 * 60 * 60, // 60분
  CART: 1000 * 60 * 30, // 30분
  LIKE: 1000 * 60 * 30, // 30분
};

const queryKey = {
  cart: 'carts',
  admin: 'admins',
  like: 'likes',
  product: 'products',
  brands: 'brands',
  showcase: 'showcase',
};

export const queryAPI = {
  staleTime,
  queryKey,
} as const;
