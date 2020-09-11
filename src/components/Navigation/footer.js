import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';
import '../Navigation/footer.css';
import logo from '../Navigation/logo.png';
import facebook from '../Navigation/iconfooter/facebookwhite.png';
import ig from '../Navigation/iconfooter/instagramwhite.png';
import yt from '../Navigation/iconfooter/internetwhite.png';
import location from '../Navigation/iconfooter/marker.png';
import mail from '../Navigation/iconfooter/mail.png';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';


const Footer = () =>{
    return(
      <footer class="footer-distributed">
  
              <div class="footer-left">
            <img src={logo} />
                  <h3>About<span>Academie</span></h3>
                  <p class="footer-company-name">© 2020 Academia de Tranzactionare</p>
              </div>
  
              <div class="footer-center">
              <p>Legal</p>
              <div class="footer-links">
              <a className="scris1"><Link className="footer-links" to={ROUTES.TERMS}>Terms and Conditions</Link></a></div>
              </div>

              <div class="footer-right">
                  <p class="footer-company-about">
                    <span>Contact Us</span>
                    <h4 className="scris"><img className="iconite" src={location}/> Bucharest, Romania</h4>
                    <a href="#"><img className="mail" src={mail}></img></a>
                    <a href="mailto:academiadetranzactionare2019@gmail.com">academiadetranzactionare</a>                 
                      </p>
         
                      
                  <div class="footer-icons">
                      <a href="https://www.facebook.com/mentoringFOREX/?modal=admin_todo_tour"><img className="icons" src={facebook}></img></a>
                      <a href="https://www.instagram.com/academia_de_tranzactionare/"><img className="icons" src={ig}></img> </a>
                      <a href="https://www.youtube.com/channel/UCNePx9DXCDInY7JTmFhGSJQ?view_as=subscriber"><img className="icons" src={yt}></img></a>
                  </div>
              </div>
          </footer>
    )
  }

export default Footer;