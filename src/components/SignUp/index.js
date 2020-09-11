import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

 
import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';
 
const SignUpPage = () => (
  <div>
    <SignUpForm />

  </div>
);
 
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne, username)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })     
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';
   
      return (
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign Up</h5>
            <form class="form-signin" onSubmit={this.onSubmit}>
            <div class="form-label-group">
                <input class="form-control"
                  id="username"
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Full Name"
                  required autofocus
                />
                <label for="username">Username</label>
              </div>

              <div class="form-label-group">
                <input class="form-control"
                  id="inputEmail"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Email Address"
                  required autofocus
                />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input class="form-control"
                  id="inputPasswordOne"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                  required
                />
                <label for="inputPasswordOne">Password</label>
              </div>
              
              <div class="form-label-group">
                <input class="form-control"
                  id="inputPasswordTwo"
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
                <label for="inputPasswordOne">Confirm Password</label>
              </div>

              
              <button disabled={isInvalid} class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign Up</button>
              <hr class="my-4"/>
             
              <div className=" text-center">
              <SignInLink />
              </div>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignInLink = () => (
  <p>
    Already a member? <Link to={ROUTES.SIGN_IN}>Sign In</Link>
  </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
  )(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm, SignUpLink };