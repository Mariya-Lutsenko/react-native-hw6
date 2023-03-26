import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnfTaTMKDhHGED9GcbrkdGAvXvcwahEwU',
  authDomain: 'react-native-hw1.firebaseapp.com',
  projectId: 'react-native-hw1',
  storageBucket: 'react-native-hw1.appspot.com',
  messagingSenderId: '881298988329',
  appId: '1:881298988329:web:32aa98b188fbfa617feb38',
  measurementId: 'G-JLSD8Y1QL8',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
