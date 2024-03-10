import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

/**
 * firebase [https://console.firebase.google.com]
 * Authentication 로그인 기능 구현
 * Realtime Database 전체 상품 리스트, 어드민 유저 리스트, 유저 uid에 맞는 장바구니, 좋아요 데이터 저장
 */

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTO_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const firebaseDB = getDatabase(app);
export const firebaseAuth = getAuth(app);
