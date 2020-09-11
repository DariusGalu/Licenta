import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import './index.css';
import * as ROUTES from '../constants/routes';
import laptop from './laptop.png';
import Mobile from './Mobile.png';
import step from '../Landing/iconblue/step-by-step.png';
import chat from '../Landing/iconblue/comm-chat.png';
import weeklychart from '../Landing/iconblue/weekly-chart.png';
import homeworksubmission from '../Landing/iconblue/homework-submission.png';
import videoquestions from '../Landing/iconblue/video-questions.png';
import coins from '../Landing/iconblue/coins.png';
import checkmark from '../Landing/iconblue/checkmark.png';
import graph from '../Landing/iconblue/graph.png';
import bifa from '../Landing/iconblue/iconbifa.png'
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Home = () => {

  return(
      <React.Fragment>
          <header>
              <div>
                <h1>Knowledge Is Power <br/>
                <h6>Changing Lives - One Trade At A Time</h6> </h1>               
                <Link style={{textDecoration:'none'}} className="join" to={ROUTES.PLANS}>Join our Community</Link>
                <a style={{textDecoration:'none'}} className="insta" href="https://www.instagram.com/academia_de_tranzactionare/">Join us on Instagram</a>
                <img className="laptop" src={laptop} alt="#"/>
              </div>
          </header>
          {/* <div className="MessengerCustomerChat">
                    <MessengerCustomerChat
                        pageId="<105478804626635>"
                        appId="<2744644939141776>"
                        />
                        <div class="fb-like" data-href="https://developers.facebook.com/apps/2744644939141776/" data-layout="standard" data-action="like" data-show-faces="false" data-share="false"></div>

                </div> */}


          <main>
              <section className="services">
                   <h2 className="Step">Step By Step Guide</h2>

                   <div className="service-container">
                        <div className="service-description">
                            <div>Get access to the course material by heading over to the “Join our Community” tab and choose which plan is best for you. Once you have completed your purchase, you will have access to step by step videos on learning how to trade the forex market in a simple & effective way.</div>
                        </div>
                    <div>
                        <img className="service" src={Mobile} alt="#"/>
                    </div>            
                  </div>

              </section>

              <section className="program-benefits">
                <div className="progr">
                    <div className="description">
                        <h2>Program Benefits<br/>
                        <h3 className="desc">Your gateway to success!</h3>
                        <hr style={{width: 210, backgroundColor:"black", marginBottom: 50}} /></h2>
                    </div>
                </div>

                <div class="elementor">
                    <div class="elem">
                        <div className="element1">
                            <img className="imgsize" src={step} alt="#"/>
                            <div>
                            <h4>Step by Step Guide</h4>
                            <h5>Access to step by step learning videos to 
                                expand your knowledge and develop your trading skills. 
                                These videos are very simple to understand and implement</h5>
                            </div>
                        </div>
                        <div className="element2">
                            <img className="imgsize" src={chat} alt="#"/>
                            <div>
                            <h4 className="position-text">Community Chat</h4>
                            <h5>Connect with other traders world-wide. 
                                Share your charts, trade ideas, and ask questions. </h5>
                            </div>
                        </div>
                        <div className="element3">
                            <img className="imgsize" src={weeklychart} alt="#"/>
                            <div>
                                <h4 className="position-text">Weekly Chart Analysis</h4>
                                <h5>Weekly chart analysis to keep you updated with trading opportunities.</h5>
                            </div>
                        </div>
                        <div className="element4">
                            <img className="imgsize" src={homeworksubmission} alt="#"/>
                            <div>
                                <h4 className="position-text1">Homework Submissions</h4>
                                <h5>With the pro membership, at the end of each video, 
                                    you will answer the questions, mark up your charts, 
                                    and send them for review via email or slack.</h5>
                            </div>
                        </div>
                        <div className="element5">
                            <img className="imgsize" src={videoquestions} alt="#"/>
                            <div>
                                <h4 className="position-text2">1 - 1 Video Questions</h4>
                                <h5>With the Pro + membership you will have 5, 30 min video calls, 
                                    going through trade analysis & asking any questions </h5>
                            </div>
                        </div>
                        <div className="element6">
                            <img className="imgsize" src={videoquestions} alt="#"/>
                            <div>
                                <h4 className="position-text">24/7 Support</h4>
                                <h5>No matter what questions you have.
                                    We will always be there to answer them & guide you</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Checkout">
                    <h1>Check Out Our Reviews!</h1>
                    <Link style={{textDecoration:'none'}} className="clickbutton" to={ROUTES.TESTIMONIALS}>Click Here!</Link>
                </div>
                    <div className="progr">
                        <div className="description">
                            <h2 className="includes">Whats included?</h2>
                        </div>
                        <hr style={{width: 300, backgroundColor:"black"}} />
                    </div>
                    <div class="elem">
                        <div className="element7">
                            <img className="imgsize" src={coins} alt="#"/>
                            <div className="ideeas">
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span">Methods Of Order Distribution</span><hr style={{width: 190}} />
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span">Trading With Clean Charts</span><hr style={{width: 190}}/>
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span">Identify Setups</span>
                            </div>
                        </div>
                        <div className="element8">
                            <img className="imgsize" src={graph} alt="#"/>
                            <div className="ideeas1">
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span1">Entries & Targets</span><hr style={{width: 100}}/>
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span1">Pure Price Action</span><hr style={{width: 100}}/>
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span1">Bank Manipulation</span>
                            </div>
                        </div>
                        <div className="element9">
                            <img className="imgsize" src={checkmark} alt="#"/>
                            <div className="ideeas">
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span">Identifying Market Structure</span><hr style={{width: 190}}/>
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span">Learn High Probability Zones</span><hr style={{width: 190}}/>
                            <img className="elementor-icon-list-icon" src={bifa} alt="#"/>
                            <span className="span">Create A Consistent Plan</span>
                            </div>
                        </div>
                    </div>
              </section>
          </main>


      </React.Fragment>
  )
}


export default Home;