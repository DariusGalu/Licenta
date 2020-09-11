import React, { useEffect } from 'react';
import '../Plans/index.css'; 
import bifa from '../Landing/iconblue/iconbifa.png';
import { AuthUserContext } from '../Session';


const Plans = () => (
<div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <PlansAuth /> : <PlansNonAuth />
      }
    </AuthUserContext.Consumer>

  </div>
);

const PlansAuth = () => ( 
    <main>
      <section className="program-benefits">
       <div class="elementor">
                    <div class="elem">
                        <div className="plan1">
                            <div>
                            <div className="positiontext">
                            <h4 className="posit">Standard Plan</h4>
                            </div>
                            <div className="idei">
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Step By Step Learning Videos</span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Email Support Service 24/7</span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Trading Community Chat</span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Weekly Chart Breakdown</span>
                            </div>
                            <button className="updatebutton">          
                                <a href={"https://firebasestorage.googleapis.com/v0/b/academie-90dfd.appspot.com/o/StandardPlan.zip?alt=media&token=3b015bcf-7408-4004-bd70-bfeec6334e08"}>
                                 Select</a></button>                            </div>
                        </div>
                        <div className="plan2">
                            <div>
                            <div className="positiontext">
                            <h4 className="posit">Pro Plan</h4>
                            </div>
                            <div className="idei">
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Step By Step Learning Videos</span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Email Support Service 24/7</span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Trading Community Chat</span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Weekly Chart Breakdown</span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">Homework Submissions </span><hr />
                            <img className="icon-list-icon" src={bifa} alt="#"/>
                            <span className="spantext">1 Video Call</span>
                            </div>
                            <button className="updatebutton1">          
                                <a href={"https://firebasestorage.googleapis.com/v0/b/academie-90dfd.appspot.com/o/ProPlan.zip?alt=media&token=e951942f-d5f2-4d24-8773-c06403bc4a29"}>
                                 Select</a></button>                            </div>
                        </div>
                        <div className="plan3">
                            <div>
                            <div className="positiontext">
                                <h4 className="posit">Pro +</h4>
                                </div>
                                <div className="idei">
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">7 1-1 Video training calls</span><hr />
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">Step By Step Learning Videos</span><hr />
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">Trading Community Chat</span><hr />
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">Weekly Chart Breakdown</span><hr />
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">Homework Submissions </span><hr />
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">Email Support Service 24/7</span>
                                </div>
                                <button className="updatebutton1">          
                                <a href={"https://firebasestorage.googleapis.com/v0/b/academie-90dfd.appspot.com/o/Pro%2B.zip?alt=media&token=925de012-84da-49b1-b1aa-2bf6f7a22470"}>
                                 Select</a></button>                            </div>
                        </div>
                        <div className="plan4">
                            <div>
                            <div className="positiontext">
                                <h4 className="posit"> Group Access</h4>
                                </div>
                                <div className="idei">
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">Community Group Chat</span><hr />
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">Email Support Service 24/7</span><hr />
                                <img className="icon-list-icon" src={bifa} alt="#"/>
                                <span className="spantext">My Trade Analysis Each Day </span><hr />
                                </div>
                                <button className="updatebutton">          
                                <a href={"https://firebasestorage.googleapis.com/v0/b/academie-90dfd.appspot.com/o/GroupLink.zip?alt=media&token=1c5891d8-d672-4a42-b1ee-076995567a7f"}>
                                 Select</a></button>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>
     </main>
);

const PlansNonAuth = () => ( 
  <main>
    <section className="program-benefits">
     <div class="elementor">
                  <div class="elem">
                      <div className="plan1">
                          <div>
                          <div className="positiontext">
                          <h4 className="posit">Standard Plan</h4>
                          </div>
                          <div className="idei">
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Step By Step Learning Videos</span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Email Support Service 24/7</span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Trading Community Chat</span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Weekly Chart Breakdown</span>
                          </div>
                          </div>
                      </div>
                      <div className="plan2">
                          <div>
                          <div className="positiontext">
                          <h4 className="posit">Pro Plan</h4>
                          </div>
                          <div className="idei">
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Step By Step Learning Videos</span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Email Support Service 24/7</span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Trading Community Chat</span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Weekly Chart Breakdown</span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">Homework Submissions </span><hr />
                          <img className="icon-list-icon" src={bifa} alt="#"/>
                          <span className="spantext">1 Video Call</span>
                          </div>
                          </div>
                      </div>
                      <div className="plan3">
                          <div>
                          <div className="positiontext">
                              <h4 className="posit">Pro +</h4>
                              </div>
                              <div className="idei">
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">7 1-1 Video training calls</span><hr />
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">Step By Step Learning Videos</span><hr />
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">Trading Community Chat</span><hr />
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">Weekly Chart Breakdown</span><hr />
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">Homework Submissions </span><hr />
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">Email Support Service 24/7</span>
                              </div>
                             </div>
                      </div>
                      <div className="plan4">
                          <div>
                          <div className="positiontext">
                              <h4 className="posit"> Group Access</h4>
                              </div>
                              <div className="idei">
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">Community Group Chat</span><hr />
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">Email Support Service 24/7</span><hr />
                              <img className="icon-list-icon" src={bifa} alt="#"/>
                              <span className="spantext">My Trade Analysis Each Day </span><hr />
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </section>
   </main>
);



export default Plans;

{/* <form >
        <button>
          <a href={"https://firebasestorage.googleapis.com/v0/b/academie-90dfd.appspot.com/o/resurse%20site.zip?alt=media&token=7e387663-3a23-4a0c-b955-85aa1da9ba06"}>
          Download
        </a>
        </button>     
      </form> */}

      //const db = app.firestore()
  // var storage = app.storage();
  // var gsReference = storage.refFromURL('gs://academie-90dfd.appspot.com/Profile.jpg')

  // gsReference.getDownloadURL().then(function(url) {
  //   // `url` is the download URL for 'images/stars.jpg'
  
  //   // This can be downloaded directly:
  //   var xhr = new XMLHttpRequest();
  //   xhr.responseType = 'blob';
  //   xhr.onload = function(event) {
  //     var blob = xhr.response;
  //   };
  //   xhr.open('GET', url);
  //   xhr.send();
  
  // });
