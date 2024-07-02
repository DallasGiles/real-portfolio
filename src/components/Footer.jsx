// src/components/Footer.jsx
import React from 'react';
import Navigation from './Navigation';


const Footer = () => {
  return (
    <footer>
      <p>© 2024 Dallas Giles</p>
      <div>
        <a href="https://github.com/DallasGiles" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;