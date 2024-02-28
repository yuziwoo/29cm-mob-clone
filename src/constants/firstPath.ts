import { ROUTE_PATH } from './path';

/**
 * ROUTE_PATH의 첫번째 패스를 반환한 상수 객체입니다.
 * Header, Footer에서 패스에 따라 다른 UI를 보여주기 위해 사용합니다.
 */

const path: Record<string, string> = {};

for (const [pathName, routePath] of Object.entries(ROUTE_PATH)) {
  path[pathName] = routePath.split('/')[1];
}

export const FIRST_PATH = { ...path } as const;
