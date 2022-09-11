import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCL8sOLFcXWQ9kFjmFWRfaHYl_l30wtNpQ',
  authDomain: 'chat-app-b5afb.firebaseapp.com',
  projectId: 'chat-app-b5afb',
  storageBucket: 'chat-app-b5afb.appspot.com',
  messagingSenderId: '1036205683998',
  appId: '1:1036205683998:web:b839568ba59b429ff4c50f',
  measurementId: 'G-K4M1HK5TFJ',
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);

