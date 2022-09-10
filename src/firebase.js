import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCGh8xXz78giPGi-0n2FZv8s8CPdwL6xzo',
  authDomain: 'chat-app-2df6b.firebaseapp.com',
  databaseURL: 'https://chat-app-2df6b-default-rtdb.firebaseio.com',
  projectId: 'chat-app-2df6b',
  storageBucket: 'chat-app-2df6b.appspot.com',
  messagingSenderId: '435439881461',
  appId: '1:435439881461:web:d7b5c1c87a3190775a49bc',
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
