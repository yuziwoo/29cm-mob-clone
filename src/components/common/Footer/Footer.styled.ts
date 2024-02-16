import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const SectionFooter = styled.footer`
  width: 100%;
  max-width: ${theme.size.MAX_WIDTH};
  position: fixed;
  z-index: ${theme.zIndex.FOOTER};
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  background: ${theme.color.FOOTER_BG};
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
`;
