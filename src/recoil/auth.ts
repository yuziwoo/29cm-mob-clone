import { atom } from 'recoil';
import { UserInfo } from '../types/auth';

export const userState = atom<UserInfo | null>({
  key: 'userState',
  default: null,
});
