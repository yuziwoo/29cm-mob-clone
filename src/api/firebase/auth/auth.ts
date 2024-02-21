import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { firebaseAuth } from '../firebase';
import { getIsMobile } from '../../../utils/getIsMobile';
import { UserProfileUpdateProps, LoginFormProps } from '../../../types/auth';

const provider = {
  google: new GoogleAuthProvider(),
};

// 계정 상태 변경시 실행되는 함수
export const handleAuthStateChanged = (callback: (user: User | null) => void) => {
  onAuthStateChanged(firebaseAuth, async (user) => {
    // user === { displayName, email, photoURL, providerID }
    callback(user);
  });
};

// 로그인
export const authLoginGoogle = async () => {
  const isMobile = getIsMobile();

  if (isMobile) return signInWithRedirect(firebaseAuth, provider.google);
  return signInWithPopup(firebaseAuth, provider.google);
};

export const authLoginEmail = async ({ email, password }: LoginFormProps) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

// 로그아웃
export const authLogout = async () => {
  return signOut(firebaseAuth);
};

// 계정 생성
export const createEmailUser = async ({ email, password }: LoginFormProps) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

// 계정 삭제
export const deleteEmailUser = async (isAdmin: boolean | undefined) => {
  const user = firebaseAuth.currentUser;

  if (isAdmin) return window.alert('어드민 계정은 삭제할 수 없습니다.');

  if (user)
    return deleteUser(user).then(() =>
      window.alert('정상적으로 삭제되었습니다. 이용해주셔서 감사합니다.')
    );

  return window.alert('존재하지 않는 계정 정보입니다.');
};

// 계정 업데이트
export const updateUserProfile = async ({ displayName, photoURL }: UserProfileUpdateProps) => {
  const user = firebaseAuth.currentUser;
  if (user) return updateProfile(user, { displayName, photoURL });
  return window.alert('프로필 정보를 업데이트 할 수 없습니다.');
};
