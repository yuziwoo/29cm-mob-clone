import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Page = styled.section`
  padding-bottom: 150px;
`;

const ButtonWrap = styled.div`
  padding: 4rem 0;
`;

const BrandIntroWrap = styled.div`
  padding: 0 ${theme.padding.DEFAULT} 4rem;
`;

export const PageStyle = {
  Page,
  ButtonWrap,
  BrandIntroWrap,
};
