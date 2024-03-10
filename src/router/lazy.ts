import { lazy } from 'react';

export const LazyMainPage = lazy(() => import('../pages/MainPage/MainPage'));
export const LazyManPage = lazy(() => import('../pages/ManPage/ManPage'));
export const LazyWomanPage = lazy(() => import('../pages/WomanPage/WomanPage'));
export const LazyLifePage = lazy(() => import('../pages/LifePage/LifePage'));
export const LazyBestPage = lazy(() => import('../pages/BestPage/BestPage'));

export const LazyAlertPage = lazy(() => import('../pages/AlertPage/AlertPage'));
export const LazyCartPage = lazy(() => import('../pages/CartPage/CartPage'));
export const LazyProductDetailPage = lazy(
  () => import('../pages/ProductDetailPage/ProductDetailPage')
);
export const LazyBrandDetailPage = lazy(() => import('../pages/BrandDetailPage/BrandDetailPage'));
export const LazyShowcaseDetailPage = lazy(
  () => import('../pages/ShowcaseDetailPage/ShowcaseDetailPage')
);
export const LazyLoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
export const LazyJoinPage = lazy(() => import('../pages/JoinPage/JoinPage'));
export const LazyLikePage = lazy(() => import('../pages/LikePage/LikePage'));

// 카테고리 페이지
export const LazyCategoryPage = lazy(() => import('../pages/CategoryPage/CategoryPage'));
export const LazyCategoryDetailPage = lazy(
  () => import('../pages/CategoryDetailPage/CategoryDetailPage')
);

// 검색 페이지
export const LazySearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
export const LazySearchDetailPage = lazy(
  () => import('../pages/SearchDetailPage/SearchDetailPage')
);

// 마이페이지
export const LazyMyPage = lazy(() => import('../pages/MyPage/MyPage'));
export const LazyMyEditInfoPage = lazy(() => import('../pages/MyEditInfoPage/MyEditInfoPage'));
