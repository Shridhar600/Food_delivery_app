import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAyQTju1OKrggHYQWXHNBdJTfbiqXMiwVU",
    authDomain: "food-delivery-app-969bc.firebaseapp.com",
    databaseURL: "https://food-delivery-app-969bc-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-969bc",
    storageBucket: "food-delivery-app-969bc.appspot.com",
    messagingSenderId: "753953331183",
    appId: "1:753953331183:web:d1b7e85e74b042a4a5081a",
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};
