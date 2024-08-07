// src/components/Footer.jsx
import React from 'react';
import Navigation from './Navigation';


const Footer = () => {
  return (
    <footer>
      <p>© 2024 Dallas Giles</p>
      <div>
        <a href="https://github.com/DallasGiles" target="_blank" rel="noopener noreferrer">
        <img className='img-logo' src='https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png'></img>
        </a>
  
        <a href="https://www.linkedin.com/in/dallas-giles-6a7b762aa/" target="_blank" rel="noopener noreferrer">
          
          <img className='img-logo' src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
