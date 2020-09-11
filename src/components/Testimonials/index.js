import React from 'react';
import Form from '../Testimonials/form.js';
import ReviewList from './ReviewList.js';
import '../Testimonials/index.css';
import { AuthUserContext } from '../Session';


const Testimonials = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <TestimonialsAuth /> : <TestimonialsNonAuth />
      }
    </AuthUserContext.Consumer>

  </div>
);


const TestimonialsAuth =() => (
<main>
  <div class="Element">
    <div class="Elem">
      <div className="Elemente">
        <div className="testimonial">
        <ReviewList />
        <div className="add-rev">
          <Form />
        </div>
          
        </div>
      </div>
    </div>
  </div>        
</main>
);

const TestimonialsNonAuth =() => (
  <main>
    <div class="Element">
      <div class="Elem">
        <div className="Elemente">
          <div className="testimonial">
          <ReviewList />
            
          </div>
        </div>
      </div>
    </div>        
  </main>
  );



export default Testimonials;
 
