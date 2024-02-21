import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { sessionStorageKey } from '../../../constants/sessionStorage';
import { firebaseAuth } from '../firebase';
import { getIsMobile } from '../../../utils/getIsMobile';
import { EmailFormProps } from '../../firebase';
import { UserProfileUpdateProps } from '../../../types/auth';

const provider = {
  google: new GoogleAuthProvider(),
};

/**
 * user === { displayName, email, photoURL, providerID }
 */

export const removeSessionStorageUser = () => {
  sessionStorage.removeItem(sessionStorageKey.USER);
};

export const authLogout = async () => {
  return signOut(firebaseAuth);
};

export const authLoginGoogle = async () => {
  const isMobile = getIsMobile();

  if (isMobile) return signInWithRedirect(firebaseAuth, provider.google);
  return signInWithPopup(firebaseAuth, provider.google);
};

export const authLoginEmail = async ({ email, password }: EmailFormProps) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const createEmailUser = async ({ email, password }: EmailFormProps) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const deleteEmailUser = async () => {
  const user = firebaseAuth.currentUser;
  if (user) return deleteUser(user);
  return (user: User | null) => {
    window.alert('존재하지 않는 계정 정보입니다.');
  };
};

export const updateUserProfile = async ({ displayName, photoURL }: UserProfileUpdateProps) => {
  const user = firebaseAuth.currentUser;
  if (user) return updateProfile(user, { displayName, photoURL });
  return (user: User | null, { displayName, photoURL }: UserProfileUpdateProps) => {
    window.alert('프로필 정보를 업데이트 할 수 없습니다.');
  };
};
