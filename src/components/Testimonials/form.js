import React, { useState, useEffect } from 'react';
import app from 'firebase/app';
import '../Testimonials/index.css';


export default function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    // var Firebase = require('firebase/app');
    // require('firebase/auth');
    // require('firebase/database');   
    const createReview = () => {
        const reviewRef = app.database().ref('Review');
        const review = {
            title,
            username: currentUser.email,

        };

        reviewRef.push(review);
    };

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
        <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
            <input value={title} type="text" onChange={handleOnChange} className="form-control" id="input" placeholder="Write it here.."/>
        </div>
            <button onClick={createReview} type="submit" className="btn btn-primary mb-2">Add a Review</button>
        </form>

    );
}