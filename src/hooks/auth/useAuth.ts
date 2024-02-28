import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import {
  authLoginEmail,
  authLoginGoogle,
  authLogout,
  createEmailUser,
  deleteEmailUser,
  handleAuthStateChanged,
  updateUserProfile,
} from '../../api/firebase/auth/auth';
import { LoginFormProps, UserInfo, UserProfileUpdateProps } from '../../types/auth';
import { sessionStorageKey } from '../../constants/sessionStorage';
import { getAuth } from 'firebase/auth';
import { getAdminUsers } from '../../api/firebase/database/admin';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from '../useRouter';
import { ROUTE_PATH } from '../../constants/path';

export const useAuth = () => {
  /**
   * firebase를 이용한 Auth 기능을 사용할 수 있게 도와주는 hook입니다.
   * 어플리케이션의 가장 최상단에서 앱을 실행할때 딱 한번 initializeAuth 함수를 실행해줘야합니다.
   */

  const [user, setUser] = useRecoilState(userState);
  const { navigate } = useRouter();

  const sessionStorageUser = {
    removeData() {
      sessionStorage.removeItem(sessionStorageKey.USER);
    },
    getData() {
      const result = sessionStorage.getItem(sessionStorageKey.USER);
      return result ? JSON.parse(result) : null;
    },
    setData(userData: UserInfo) {
      sessionStorage.setItem(sessionStorageKey.USER, JSON.stringify(userData));
    },
  } as const;

  const setUserState = () => {
    handleAuthStateChanged(async (user) => {
      if (user) {
        const admins = await getAdminUsers();
        const { displayName, email, photoURL, providerId, uid } = user;
        const userData: UserInfo = {
          uid,
          displayName,
          email,
          photoURL,
          providerId,
          isAdmin: admins.includes(uid),
        };

        setUser(userData);
        sessionStorageUser.setData(userData);
        return;
      }
      setUser(null);
      sessionStorageUser.removeData();
    });
  };

  const setTempData = () => {
    const temp = sessionStorageUser.getData();
    if (temp && user === null) {
      setUser(temp);

      setTimeout(() => {
        const auth = getAuth();
        if (auth.currentUser) {
          return;
        }
        setUser(null);
        window.location.reload();
      }, 3000);
    }
  };

  const initializeAuth = () => {
    setUserState();
    setTempData();
  };

  const loginGoogle = useMutation({
    mutationFn: () => {
      return authLoginGoogle();
    },
  });

  const loginEmail = useMutation({
    mutationFn: ({ email, password }: LoginFormProps) => {
      return authLoginEmail({ email, password });
    },
  });

  const logout = useMutation({
    mutationFn: () => {
      return authLogout();
    },
    onSuccess: () => {
      navigate(ROUTE_PATH.root);
    },
  });

  const createAccount = useMutation({
    mutationFn: ({ email, password }: LoginFormProps) => {
      return createEmailUser({ email, password });
    },
  });

  const deleteAccount = useMutation({
    mutationFn: () => {
      return deleteEmailUser(user?.isAdmin);
    },
    onSuccess: () => {
      navigate(ROUTE_PATH.root);
    },
  });

  const updateProfile = useMutation({
    mutationFn: ({ displayName, photoURL }: UserProfileUpdateProps) => {
      return updateUserProfile({ displayName, photoURL });
    },
    onSuccess: (data, variables) => {
      setUser({ ...(user as UserInfo), ...variables });
      window.alert('프로필이 업데이트되었습니다.');
      navigate(-1);
    },
  });

  return {
    initializeAuth,
    loginGoogle,
    loginEmail,
    logout,
    createAccount,
    deleteAccount,
    updateProfile,
    user,
    setUser,
  };
};
