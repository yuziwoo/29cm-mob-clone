import { atom } from 'recoil';
import { UserInfo } from '../types/auth';

/**
 * firebase의 Auth 유저 정보는 페이지를 새로고침 했을 때마다 호출하게 됩니다.
 * 이로인해 발생하는 깜빡임 현상을 방지하기위해 recoil state로 전체 상태를 관리하고, sessionStorage를 사용합니다.
 */

export const userState = atom<UserInfo | null>({
  key: 'userState',
  default: null,
});
