import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from './recoil/auth';
import { getAdminUserList, onAuthStateChange } from './api/firebase';
import { useEffect } from 'react';
import * as S from './App.styled';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

function App() {
  const setUser = useRecoilState(userState)[1];

  useEffect(() => {
    onAuthStateChange(async (user) => {
      if (user) {
        const admins = await getAdminUserList();
        const { displayName, email, photoURL, providerId, uid } = user;
        setUser({ displayName, email, photoURL, providerId, isAdmin: admins.includes(uid) });
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
