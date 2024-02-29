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

const Logo = styled.div`
  height: 1.9rem;
  min-height: 17px;

  & svg {
    display: block;
    height: 100%;
  }
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  min-width: 28px;
  min-height: 28px;
  & svg {
    width: 87.5%;
    height: 87.5%;
  }
`;

const RelatedHeight = styled.div<{ $height: undefined | number }>`
  height: ${({ $height }) => ($height !== undefined ? `${$height}px` : '100vh')};
`;

export const ComponentStyle = {
  Header,
  MainHeader,
  Logo,
  BackButton,
  RelatedHeight,
};
