import db from './initialize-firestore.js';

export const getDoc = (collection, document) => 
  db.collection(collection).doc(document).get()
  .then(doc => doc.data());

export const getCollection = collection =>
  db.collection(collection).orderBy('dates.endedAt', 'desc').get()
  .then(querySnapshot => {
    let list = [];
    querySnapshot.forEach(doc => {list.push(doc.data())});
    return list;
  });

export const getCustomCollection = (collection, propertyName, propertyValue) => 
  db.collection(collection).where(propertyName, '==', propertyValue)
  .orderBy('dates.endedAt', 'desc').get()
  .then(querySnapshot => {
    let list = [];
    querySnapshot.forEach(doc => {list.push(doc.data())});
    return list;
  });