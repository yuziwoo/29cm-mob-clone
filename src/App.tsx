import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from './recoil/auth';
import { getAdminUserList, onAuthStateChange } from './api/firebase';
import { useEffect } from 'react';
import * as S from './App.styled';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import { sessionStorageKey } from './constants/sessionStorage';

function App() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    onAuthStateChange(async (user) => {
      if (user) {
        const admins = await getAdminUserList();
        const { displayName, email, photoURL, providerId, uid } = user;
        const userData = {
          displayName,
          email,
          photoURL,
          providerId,
          isAdmin: admins.includes(uid),
        };
        setUser(userData);
        sessionStorage.setItem(sessionStorageKey.USER, JSON.stringify(userData));
        return;
      }
      setUser(null);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const sessionStorageData = sessionStorage.getItem(sessionStorageKey.USER);
    if (sessionStorageData && user === null) {
      setUser(JSON.parse(sessionStorageData));
    }
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
