import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from './recoil/auth';
import { onAuthStateChange } from './api/firebase';
import { useEffect } from 'react';
import * as S from './App.styled';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

function App() {
  const setUser = useRecoilState(userState)[1];

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
