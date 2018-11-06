import db from './initialize-firestore.js';

export const getDoc = (collection, document) => 
  db.collection(collection).doc(document).get()
  .then(doc => doc.data());

export const getCollection = collection => {
  if (collection.indexOf('skills') > -1) {
    return db.collection(collection).get()
    .then(querySnapshot => {
      let list = [];
      querySnapshot.forEach(doc => {list.push(doc.data())});
      return list;
    });
  } 
  else {
    return db.collection(collection).orderBy('dates.startedAt', 'desc').get()
    .then(querySnapshot => {
      let list = [];
      querySnapshot.forEach(doc => {list.push(doc.data())});
      return list;
    });
  }
}

export const getCustomCollection = (collection, propertyName, propertyValue) => 
  db.collection(collection).where(propertyName, '==', propertyValue)
  .get().then(querySnapshot => {
    let list = [];
    querySnapshot.forEach(doc => {list.push(doc.data())});
    list.sort((a,b) => {
      if (!a.dates.endedAt || b.dates.endedAt < a.dates.endedAt) {
        return -1
      }
      else if (!b.dates.endedAt || b.dates.endedAt > a.dates.endedAt) {
        return 1
      }
      else if (!a.dates.endedAt && !b.dates.endedAt) {
        return b.dates.startedAt > a.dates.startedAt? 1 : -1;
      }
      else {
        return b.dates.endedAt - a.dates.endedAt
      }
    });
    return list;
  });