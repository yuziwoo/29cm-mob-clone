import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useEffect } from 'react';
import { getAdminUserList, onAuthStateChange } from '../../api/firebase';
import { sessionStorageKey } from '../../constants/sessionStorage';

export const useUserInfo = () => {
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

  // 세션스토리지에 로그인 정보가 기록되어 있는 경우 임시 데이터를 넣어 화면이 깜빡이지 않는다.
  useEffect(() => {
    const sessionStorageData = sessionStorage.getItem(sessionStorageKey.USER);
    if (sessionStorageData && user === null) {
      setUser(JSON.parse(sessionStorageData));
    }
    // eslint-disable-next-line
  }, []);
};
