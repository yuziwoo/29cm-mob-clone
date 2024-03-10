import { FIRST_PATH } from './firstPath';

/**
 * firstpath (pathname의 첫번째 패스)에 따라 header의 ui를 다르게 보여주기 위한 상수입니다.
 * path가 3개 이상 나열되면 뒤로가기 버튼을 보여줍니다. ('/my/edit/info/')
 */

const MAIN = ['', FIRST_PATH.man, FIRST_PATH.woman, FIRST_PATH.life];

const BEST = [FIRST_PATH.best];

const HIDDEN: string[] = [];

const ONLY_BACKBUTTON = [FIRST_PATH.cart, FIRST_PATH.login, FIRST_PATH.join];

const BACKBUTTON_AND_ICONS = [
  FIRST_PATH.my,
  FIRST_PATH.like,
  FIRST_PATH.productDetail,
  FIRST_PATH.brandDetail,
  FIRST_PATH.showcaseDetail,
];

const SEARCH = [FIRST_PATH.search, FIRST_PATH.searchDetail];

const SEARCH_MODEL_AND_ICONS = [FIRST_PATH.category];

const ALERT = [FIRST_PATH.alert];

export const headerUI = {
  MAIN,
  BEST,
  HIDDEN,
  ONLY_BACKBUTTON,
  BACKBUTTON_AND_ICONS,
  SEARCH,
  SEARCH_MODEL_AND_ICONS,
  ALERT,
} as const;
