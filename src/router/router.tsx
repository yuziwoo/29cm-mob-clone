import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { ROUTE_PATH } from '../constants/path';
import * as Lazy from './lazy';

import App from '../App';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPageSkeleton from '../pages/MainPage/MainPageSkeleton';
import ManPageSkeleton from '../pages/ManPage/ManPageSkeleton';
import WomanPageSkeleton from '../pages/WomanPage/WomanPageSkeleton';
import LifePageSkeleton from '../pages/LifePage/LifePageSkeleton';
import BestPageSkeleton from '../pages/BestPage/BestPageSkeleton';
import SearchPageSkeleton from '../pages/SearchPage/SearchPageSkeleton';
import AlertPageSkeleton from '../pages/AlertPage/AlertPageSkeleton';
import CartPageSkeleton from '../pages/CartPage/CartPageSkeleton';
import ProductDetailPageSkeleton from '../pages/ProductDetailPage/ProductDetailPageSkeleton';
import BrandDetailPageSkeleton from '../pages/BrandDetailPage/BrandDetailPageSkeleton';
import SearchDetailPageSkeleton from '../pages/SearchDetailPage/SearchDetailPageSkeleton';
import ShowcaseDetailPageSkeleton from '../pages/ShowcaseDetailPage/ShowcaseDetailPageSkeleton';
import LoginPageSkeleton from '../pages/LoginPage/LoginPageSkeleton';
import JoinPageSkeleton from '../pages/JoinPage/JoinPageSkeleton';
import MyPageSkeleton from '../pages/MyPage/MyPageSkeleton';
import MyEditInfoPageSkeleton from '../pages/MyEditInfoPage/MyEditInfoPageSkeleton';
import LikePageSkeleton from '../pages/LikePage/LikePageSkeleton';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.root,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<MainPageSkeleton />}>
            <Lazy.LazyMainPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.man,
        element: (
          <Suspense fallback={<ManPageSkeleton />}>
            <Lazy.LazyManPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.woman,
        element: (
          <Suspense fallback={<WomanPageSkeleton />}>
            <Lazy.LazyWomanPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.life,
        element: (
          <Suspense fallback={<LifePageSkeleton />}>
            <Lazy.LazyLifePage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.like,
        element: (
          <Suspense fallback={<LikePageSkeleton />}>
            <Lazy.LazyLikePage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.best,
        element: (
          <Suspense fallback={<BestPageSkeleton />}>
            <Lazy.LazyBestPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.search,
        element: (
          <Suspense fallback={<SearchPageSkeleton />}>
            <Lazy.LazySearchPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.alert,
        element: (
          <Suspense fallback={<AlertPageSkeleton />}>
            <Lazy.LazyAlertPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.cart,
        element: (
          <Suspense fallback={<CartPageSkeleton />}>
            <Lazy.LazyCartPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.productDetail,
        element: (
          <Suspense fallback={<ProductDetailPageSkeleton />}>
            <Lazy.LazyProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.brandDetail,
        element: (
          <Suspense fallback={<BrandDetailPageSkeleton />}>
            <Lazy.LazyBrandDetailPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.searchDetail,
        element: (
          <Suspense fallback={<SearchDetailPageSkeleton />}>
            <Lazy.LazySearchDetailPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.showcaseDetail,
        element: (
          <Suspense fallback={<ShowcaseDetailPageSkeleton />}>
            <Lazy.LazyShowcaseDetailPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.login,
        element: (
          <Suspense fallback={<LoginPageSkeleton />}>
            <Lazy.LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.join,
        element: (
          <Suspense fallback={<JoinPageSkeleton />}>
            <Lazy.LazyJoinPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.my,
        element: (
          <Suspense fallback={<MyPageSkeleton />}>
            <Lazy.LazyMyPage />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.myEditInfo,
        element: (
          <Suspense fallback={<MyEditInfoPageSkeleton />}>
            <Lazy.LazyMyEditInfoPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
