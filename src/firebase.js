import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import {key} from "./secret";
firebase.initializeApp(key);
export const auth = firebase.auth();
const firestore = firebase.firestore(); //we will not export whole firestore so that we can only provide those information which we want to  provide
export const database = {
   users:firestore.collection('users'),
  posts:firestore.collection('posts'),
  comments:firestore.collection('comments'),
  getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
};
//   export default firebase
// ..we will not pass whole of firebase we will only those components which are needed  and only which we want to provide
export const storage = firebase.storage();
