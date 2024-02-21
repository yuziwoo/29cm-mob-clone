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
import { UserInfo, UserProfileUpdateProps } from '../../types/auth';
import { sessionStorageKey } from '../../constants/sessionStorage';
import { getAuth } from 'firebase/auth';
import { getAdminUsers } from '../../api/firebase/database/admin';
import { useMutation } from '@tanstack/react-query';
import { EmailFormProps } from '../../api/firebase';

export const useAuth = () => {
  const [user, setUser] = useRecoilState(userState);

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
    mutationFn: ({ email, password }: EmailFormProps) => {
      return authLoginEmail({ email, password });
    },
  });

  const logout = useMutation({
    mutationFn: () => {
      return authLogout();
    },
  });

  const createAccount = useMutation({
    mutationFn: ({ email, password }: EmailFormProps) => {
      return createEmailUser({ email, password });
    },
  });

  const deleteAccount = useMutation({
    mutationFn: () => {
      return deleteEmailUser();
    },
  });

  const updateProfile = useMutation({
    mutationFn: ({ displayName, photoURL }: UserProfileUpdateProps) => {
      return updateUserProfile({ displayName, photoURL });
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
  };
};
