import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBWq5o7azceFMw0BwcjaM9DHbAqrt9TX60',
  authDomain: 'hbogo-clone.firebaseapp.com',
  projectId: 'hbogo-clone',
  storageBucket: 'hbogo-clone.appspot.com',
  messagingSenderId: '112860301825',
  appId: '1:112860301825:web:a708e37b75bd2b6c798e00',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
