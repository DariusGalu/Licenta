import React, { useEffect, useState } from 'react';
import quatup from '../Testimonials/Quotationup.png';
import quatdown from '../Testimonials/Quotationdown.png';
import '../Testimonials/index.css';


export default function ReviewList() {
    var Firebase = require('firebase/app');
    require('firebase/auth');
    require('firebase/database');
  

    const [reviewList, setReviewList] = useState();

  useEffect(()=>{
    const reviewRef = Firebase.database().ref('Review');
    reviewRef.on('value', (snapshot) => {
      const reviews = snapshot.val();
      const reviewList = []
      for (let id in reviews){
        reviewList.push(reviews[id]);
      }
      setReviewList(reviewList);
    });
  }, []);

  const [currentUser, setCurrentUser] = useState();
  useEffect(() =>{
      var app = require('firebase/app');
      require('firebase/auth');
      require('firebase/database');   
      app.auth().onAuthStateChanged((email) => {
          setCurrentUser(email)
      })
  }, [])
  
    return( 
    <div>
        <hr style={{width: 500, marginLeft: 140}}/>
        {reviewList ? reviewList.map((review)=> (
            <h5 className="reviews-style">
            <img className="quatup" src={quatup} />
            {review.title}
            <hr style={{width: 100, marginLeft: 220}}/>
            {currentUser && <p>{currentUser.email}</p>}
            <img className="quatdown" src={quatdown} />
            <hr style={{width: 500, marginLeft: 40}}/>
            </h5>
        )): ''}
    </div>
    );
}