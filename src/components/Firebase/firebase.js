import app from 'firebase/app';
import 'firebase/auth';
import "firebase/analytics";
import "firebase/firestore";
import 'firebase/database';
import 'firebase/storage';




const firebaseConfig = {
    apiKey: "AIzaSyBDx4RXqX6xBLpn1sB2wih_kAQZyksWUmQ",
    authDomain: "academie-90dfd.firebaseapp.com",
    databaseURL: "https://academie-90dfd.firebaseio.com",
    projectId: "academie-90dfd",
    storageBucket: "academie-90dfd.appspot.com",
    messagingSenderId: "644868121841",
    appId: "1:644868121841:web:784a45140d5ed0f07ff550",
    measurementId: "G-KQVMHGXL3H"
  };

  class Firebase {
    
    constructor() {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
      this.db = app.database();

    }

     // *** Auth API ***
 
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);
 
    users = () => this.db.ref('users');
  }
   
  export default Firebase;