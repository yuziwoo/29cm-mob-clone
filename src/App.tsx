import { Outlet } from 'react-router-dom';
import * as S from './App.styled';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import { useUserInfo } from './hooks/user/useUserInfo';

function App() {
  useUserInfo();

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
