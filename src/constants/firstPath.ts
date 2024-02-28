import { ROUTE_PATH } from './path';

const path: Record<string, string> = {};

for (const [pathName, routePath] of Object.entries(ROUTE_PATH)) {
  path[pathName] = routePath.split('/')[1];
}

export const FIRST_PATH = { ...path } as const;
