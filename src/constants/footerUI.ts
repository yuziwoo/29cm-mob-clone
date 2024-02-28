import { FIRST_PATH } from './firstPath';

/**
 * firstpath (pathname의 첫번째 패스)에 따라 footer의 ui를 다르게 보여주기 위한 상수입니다.
 */

const HIDDEN = [FIRST_PATH.login, FIRST_PATH.join];
const PRODUCT = [FIRST_PATH.productDetail];

export const footerUI = {
  HIDDEN,
  PRODUCT,
} as const;
