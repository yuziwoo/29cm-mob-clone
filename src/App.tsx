import { Outlet } from 'react-router-dom';
import Header from './components/common/Header/Header';
import styled from 'styled-components';
import { theme } from './styles/theme';

const Content = styled.main`
  overflow: hidden;
  width: 100%;
  max-width: ${theme.size.MAX_WIDTH};
  margin: auto;
`;

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden', width: '100%' }}>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default App;
