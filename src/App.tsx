import { Outlet } from 'react-router-dom';
import * as S from './App.styled';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import { useAuth } from './hooks/user/useAuth';
import { useEffect } from 'react';

function App() {
  const { initializeAuth } = useAuth();

  useEffect(() => {
    initializeAuth();
    // eslint-disable-next-line
  }, [])

  return (
    <S.App className="App">
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer />
    </S.App>
  );
}

export default App;
