import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  UserCredential,
  signInWithRedirect,
  updateProfile,
} from 'firebase/auth';
import { getIsMobile } from '../utils/getIsMobile';
import { get, getDatabase, ref } from 'firebase/database';
import { AdminList } from '../types/auth';
import { sessionStorageKey } from '../constants/sessionStorage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTO_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, async (user) => {
    callback(user);
    /**
     * user = {
     *   displayName: 이름
     *   email: 이메일 주소
     *   photoURL: 이미지 URL
     *   providerId: google.com | firebase | github.com ...
     * }
     */
  });
};

const removeSessionStorage = () => {
  sessionStorage.removeItem(sessionStorageKey.USER);
};

// 로그아웃
export const fetchLogout = async () => {
  signOut(auth)
    .then(() => {
      removeSessionStorage();
      console.log('로그아웃 하였습니다.');
    })
    .catch((error) => {
      console.error(error);
    });
};

// 구글 로그인
export const fetchGoogleLogin = async (callback: (result: UserCredential) => void) => {
  const isMobile = getIsMobile();

  if (isMobile) {
    signInWithRedirect(auth, googleProvider)
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.error(error);
      });
    return;
  }
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      callback(result);
      /**
       * const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
       */
    })
    .catch((error) => {
      console.error(error);
    });
};

// 이메일 로그인
export type EmailFormProps = { email: string; password: string };

export const fetchEmailLogin = async (
  { email, password }: EmailFormProps,
  callback: (userCredential?: UserCredential) => void
) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      callback(userCredential);
    })
    .catch((error) => {
      console.log(error);
      window.alert('잘못된 이메일 또는 패스워드 입력입니다.');
    });
};

export const createEmailUser = async (
  { email, password }: EmailFormProps,
  callback: (userCredential?: UserCredential) => void
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      callback(userCredential);
    })
    .catch((error) => console.error(error));
};

export const fetchDeleteUser = async (callback?: () => void) => {
  const user = auth.currentUser;
  if (user) {
    deleteUser(user)
      .then(() => {
        removeSessionStorage();
        if (callback) {
          callback();
        }
      })
      .catch((error) => console.error(error));
  }
};

interface FetchUpdateUserProfileProps {
  displayName?: string;
  photoURL?: string;
  callback?: () => void;
}

export const fetchUpdateUserProfile = async ({
  displayName,
  photoURL,
  callback,
}: FetchUpdateUserProfileProps) => {
  const user = auth.currentUser;
  if (user) {
    updateProfile(user, {
      displayName,
      photoURL,
    }).then(() => {
      if (callback) {
        callback();
      }
    });
  }
};

// Realtime Database
const databse = getDatabase(app);

export const getAdminUserList = async (): Promise<AdminList> => {
  const admins = await get(ref(databse, 'admins'))
    .then((snapshot) => {
      return snapshot.val();
    })
    .catch((error) => {
      console.log(error);
    });
  return admins;
};
