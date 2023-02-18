import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyCL8sOLFcXWQ9kFjmFWRfaHYl_l30wtNpQ',
  // authDomain: 'chat-app-b5afb.firebaseapp.com',
  // projectId: 'chat-app-b5afb',
  // storageBucket: 'chat-app-b5afb.appspot.com',
  // messagingSenderId: '1036205683998',
  // appId: '1:1036205683998:web:b839568ba59b429ff4c50f',
  // measurementId: 'G-K4M1HK5TFJ',
  apiKey: 'AIzaSyD0sPLmsOh-uJji9rySfj65K7GMMAUTr3U',
  authDomain: 'chat-app-35cfa.firebaseapp.com',
  projectId: 'chat-app-35cfa',
  storageBucket: 'chat-app-35cfa.appspot.com',
  messagingSenderId: '554624049101',
  appId: '1:554624049101:web:511d2481e07f3a28612e84',
  measurementId: 'G-0BR28367Q0',
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);

