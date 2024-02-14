import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTO_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
    /**
     * user = {
     *   displayName: 이름
     *   email: 이메일 주소
     *   photoUrl: 이미지 URL
     *   providerId: google.com | firebase | github.com ...
     * }
     */
  });
};

// 구글
export const fetchGoogleLogin = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      // const user = result.user;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const fetchGoogleLogout = async () => {
  signOut(auth)
    .then(() => {
      console.log('로그아웃 하였습니다.');
    })
    .catch((error) => {
      console.log(error);
    });
};
