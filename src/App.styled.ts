import styled from 'styled-components';
import { theme } from './styles/theme';

const App = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: ${theme.size.MAX_WIDTH};
  margin: auto;
  min-height: 100vh;

  @media screen and (min-width: 550px) {
    box-shadow: 0px 2.8px 2.2px rgba(0, 0, 0, 0.02), 0px 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0px 12.5px 10px rgba(0, 0, 0, 0.035), 0px 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0px 41.8px 33.4px rgba(0, 0, 0, 0.05), 0px 100px 80px rgba(0, 0, 0, 0.07);
  }
`;

const Content = styled.main`
  width: 100%;
  position: relative;
`;

export const AppStyle = {
  App,
  Content,
};
