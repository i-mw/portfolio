import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyBLRmf_VN1r7QRXqoN4O1VupvhsXkizWiY",
  databaseURL: "portfolio-v2-9ca05.firebaseapp.com",
  projectId: "portfolio-v2-9ca05",
};

firebase.initializeApp(config);

let db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export default db;