import { atom } from 'recoil';
import { theme } from '../styles/theme';

export const headerStateRecoil = atom({
  key: 'headerState',
  default: {
    color: theme.color.WHITE,
    viewLogo: true,
    viewBackButton: false,
    viewShadow: true,
    viewCategory: true,
    viewIcons: true,
  },
});

export const headerStateDefault = {
  color: theme.color.WHITE,
  viewLogo: true,
  viewBackButton: false,
  viewShadow: true,
  viewCategory: true,
  viewIcons: true,
};

export const headerStateOnlyBackButton = {
  color: theme.color.BLACK,
  viewLogo: false,
  viewBackButton: true,
  viewShadow: false,
  viewCategory: false,
  viewIcons: false,
};
