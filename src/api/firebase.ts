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
  GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTO_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, (user) => {
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

// 로그아웃
export const fetchLogout = async () => {
  signOut(auth)
    .then(() => {
      console.log('로그아웃 하였습니다.');
    })
    .catch((error) => {
      console.error(error);
    });
};

// 구글 로그인
export const fetchGoogleLogin = async () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      // const user = result.user;
    })
    .catch((error) => {
      console.error(error);
    });
};

// 깃허브 로그인
export const fetchGithubLogin = async () => {
  signInWithPopup(auth, githubProvider)
    .then((result) => {
      // const credential = GithubAuthProvider.credentialFromResult(result);
      // const token = credential?.accessToken;
      // const user = result.user;
    })
    .catch((error) => {
      console.error(error);
    });
};

// 이메일 로그인
export type EmailFormProps = { email: string; password: string };

export const fetchEmailLogin = async ({ email, password }: EmailFormProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
    })
    .catch((error) => console.error(error));
};

export const createEmailUser = async ({ email, password }: EmailFormProps) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
    })
    .catch((error) => console.error(error));
};

export const deleteEmailUser = async () => {
  const user = auth.currentUser;
  if (user) {
    deleteUser(user)
      .then(() => {})
      .catch((error) => console.error(error));
  }
};
