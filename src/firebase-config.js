import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLkxhQe7BjxIsi8hW_zdzoK3rsciUS3lY',
  authDomain: 'openkit-task-seb.firebaseapp.com',
  projectId: 'openkit-task-seb',
  storageBucket: 'openkit-task-seb.appspot.com',
  messagingSenderId: '396780312024',
  appId: '1:396780312024:web:a80bbf20ba82f9fba68ead'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
