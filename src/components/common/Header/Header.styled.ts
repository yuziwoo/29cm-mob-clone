import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const Header = styled.header<{ $backgroundTransparent?: boolean }>`
  width: 100%;
  max-width: ${theme.size.MAX_WIDTH};
  position: fixed;
  z-index: ${theme.zIndex.HEADER};
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  overflow: hidden;
  padding: ${theme.padding.BODY};
  background: ${({ $backgroundTransparent }) =>
    $backgroundTransparent ? 'transparent' : theme.color.WHITE};
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);

  & section {
    position: relative;
  }
`;

const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const RelatedHeight = styled.div<{ $height: undefined | number }>`
  height: ${({ $height }) => ($height !== undefined ? `${$height}px` : '100vh')};
`;

export const ComponentStyle = {
  Header,
  MainHeader,
  RelatedHeight,
};
