import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import usericon from './usericon.png';
import logo from './logo.png';
import './index.css';


import * as ROUTES from '../constants/routes';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <img className="logo" src={logo} alt="cover"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to={ROUTES.LANDING}>Home</Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to={ROUTES.ABOUTUS}>About Us</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={ROUTES.PLANS}>Lessons</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={ROUTES.TESTIMONIALS}>Testimonials</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown" alt="text" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tools
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to={ROUTES.LIVECHARTS}>Live Charts</Link>
        <Link className="dropdown-item" to={ROUTES.ECONOMICCALENDAR}>Economic Calendar</Link>
        <Link className="dropdown-item" to={ROUTES.CALCULATOR}>Pips Calculator</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img className="icon" src={usericon} alt="#" />
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to={ROUTES.ACCOUNT}>My Profile</Link>
        <hr/>
        <a className="dropdown-item" ><SignOutButton /></a>
        </div>
      </li>
    </ul>
  </div>
</nav>

);
 
const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <img className="logo" src={logo} alt="cover"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to={ROUTES.LANDING}>Home</Link>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to={ROUTES.ABOUTUS}>About Us</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={ROUTES.PLANS}>Lessons</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to={ROUTES.TESTIMONIALS}>Testimonials</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Tools
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to={ROUTES.LIVECHARTS}>Live Charts</Link>
        <Link className="dropdown-item" to={ROUTES.ECONOMICCALENDAR}>Economic Calendar</Link>
        <Link className="dropdown-item" to={ROUTES.CALCULATOR}>Pips Calculator</Link>
        </div>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={ROUTES.SIGN_IN}>Log In</Link>
          </li>
      </ul>
  </div>
</nav>
);
 
export default Navigation;