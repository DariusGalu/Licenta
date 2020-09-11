import React, { useState, useEffect } from 'react';
import '../Account/index.css';
import app from 'firebase/app';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';

import PasswordChangeForm from '../PasswordChange';

 
function AccountPage (){
  const [currentUser, setCurrentUser] = useState();
  useEffect (() =>{
      var app = require('firebase/app');
      require('firebase/auth');
      require('firebase/database');   
      app.auth().onAuthStateChanged((email) => {
          setCurrentUser(email)
      })
  }, [])

  const db = app.firestore()

  const [fileUrl, setFileUrl] = React.useState(null)
  const [users, setUsers] = React.useState([])


  const onFileChange = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    const username = e.target.username.value;
    if(!username){
      return
    }
    db.collection("users").doc(username).set({
      name: username,
      avatar: fileUrl,
    })
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = await db.collection('users').get()
      setUsers(usersCollection.docs.map(doc => {
        return doc.data()
      }))
    }
    fetchUsers()
  }, [])

  return(
  <div className="footerr">
  <div class="wrapper">
  <div class="left">
      <h4>
      {users.map((user) => {
  return (
    <div>
    <img width="100" height="100" src={user.avatar} />
    <p>{user.name}</p>
    </div>
    );
})}       
      </h4>
      <form onSubmit={onSubmit}>
        <input className="choosefiles" type="file" onChange={onFileChange}/>
        <input className="form-controll" type="text" name="username" placeholder="Username"/>
        <button className="update">Update</button>
      </form>
  </div>
  <div class="right">
      <div class="info">
          <h3>My Profile</h3>
          <div class="info_data">
               <div class="data">
                  <h4>Email</h4>
                  {currentUser && <p>{currentUser.email}</p>}
               </div>
               
          </div>
      </div>
    
    <div class="projects">
          <h3>Tools</h3>
          <div class="projects_data">
          <div className=" text-center">
              <PasswordChangeForm />
              </div>  
               
          </div>
      </div>
  </div>
</div>
  </div>
  
  );
} 
export default AccountPage;

