export const ROUTE_PATH = {
  root: '/',
  man: '/man',
  woman: '/woman',
  life: '/life',
  best: '/best',
  alert: '/alert',
  cart: '/cart',
  login: '/login',
  join: '/join',
  category: '/category',
  categoryDetail: '/categoryDetail',
  like: '/like',
  productDetail: '/product/:id',
  brandDetail: '/brand/:id',
  showcaseDetail: '/showcase/:id',

  search: '/search',
  searchDetail: '/search/:keyword',

  my: '/my',
  myEditInfo: '/my/edit/info',
} as const;

export const CATEGORY_PARAMS = {
  group: 'group',
  categoryLarge: 'categoryLarge',
  categoryMedium: 'categoryMedium',
} as const;
