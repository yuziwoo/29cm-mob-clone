import { Outlet } from 'react-router-dom';
import Header from './components/common/Header/Header';
import styled from 'styled-components';
import { theme } from './styles/theme';
import { useRecoilState } from 'recoil';
import { userState } from './recoil/auth';
import { onAuthStateChange } from './api/firebase';
import { useEffect } from 'react';

const Content = styled.main`
  overflow: hidden;
  width: 100%;
  max-width: ${theme.size.MAX_WIDTH};
  margin: auto;
`;

function App() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    onAuthStateChange((user) => {
      if (user) {
        const { displayName, email, photoURL, providerId } = user;
        setUser({ displayName, email, photoURL, providerId });
        return;
      }
      setUser(null);
    });
    // eslint-disable-next-line
  }, []);

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
