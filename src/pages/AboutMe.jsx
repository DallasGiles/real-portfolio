// src/pages/AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className='coloumn-left'>
      <h2 className="about-name">Dallas Giles</h2>
      <p className='about-text'>Full stack web developer</p>
      <p className='about-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam omnis natus deserunt pariatur necessitatibus explicabo qui cum provident ducimus perspiciatis. Velit ea sunt excepturi, omnis mollitia labore cum quis voluptate vitae, a nihil, ut laboriosam!</p>
    </div>
    <div className='coloumn-right'>
    <section className="contact">
      <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>What's Your</span>
            <span>Name?</span>
          </div>
          <div class="app-contact">CONTACT INFO : <a href="mailto:dallascgiles@gmail.com?subject=&body">dallascgiles@gmail.com</a></div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
    </div>
    </section>
  );
};

export default AboutMe;