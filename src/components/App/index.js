import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import AboutUs from '../AboutUs';
import Terms from '../Terms/terms';
 
import * as ROUTES from '../constants/routes';
import { withAuthentication } from '../Session';
import Testimonials from '../Testimonials';
import LiveCharts from '../Tools/LiveCharts';
import Calculator from '../Tools/Calculator';
import Calendar from '../Tools/Calendar';
import Plans from '../Plans';
import Footer from '../Navigation/footer';
 
const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.ABOUTUS} component={AboutUs} />
      <Route path={ROUTES.TESTIMONIALS} component={Testimonials} />
      <Route path={ROUTES.LIVECHARTS} component={LiveCharts} />
      <Route path={ROUTES.CALCULATOR} component={Calculator} />
      <Route path={ROUTES.ECONOMICCALENDAR} component={Calendar} />
      <Route path={ROUTES.PLANS} component={Plans} />
      <Route path={ROUTES.TERMS} component={Terms} />
    </div>
    <Footer />
  </Router>
  
 
);
 
export default withAuthentication(App);
