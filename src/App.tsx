import { Outlet } from 'react-router-dom';
import { AppStyle as S } from './App.styled';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import { useAuth } from './hooks/auth/useAuth';
import { useEffect } from 'react';
import { useFirstPath } from './hooks/useFirstPath';

function App() {
  const { initializeAuth } = useAuth();

  // Header, Footer의 UI가 firstPath에 따라 다르게 보여집니다.
  const { firstPath } = useFirstPath();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <S.App className="App">
      <Header firstPath={firstPath} />
      <S.Content>
        <Outlet />
      </S.Content>
      <Footer firstPath={firstPath} />
    </S.App>
  );
}

export default App;
