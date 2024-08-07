// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Buy The Best Eyewear From EyePlus</h2>
        <p>
          EyePlus is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach. From an ever-growing number of offline stores across major cities in the country to innovative integration of technology while purchasing online, Lenskart caters to every customer with several deals and offers.
        </p>
        <p>
          A one-stop online solution for purchasing eyewear and its accessories, Lenskart delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colours. If you want to try out contact lenses, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store.
        </p>
      </div>
      <div className="footer-middle">
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Store Locator</li>
            <li>Buying Guide</li>
            <li>Frame Size</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>We Are Hiring</li>
            <li>Refer And Earn</li>
            <li>About us</li>
            <li>EyePlus Coupons</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>FAQ's</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-section footer-links">
          <p><a href="#">T & C</a></p>
          <p><a href="#">Privacy</a></p>
          <p><a href="#">Disclaimer</a></p>
        </div>
        <div className="footer-section footer-apps">
          <p>Download EyePlus App to buy Eyeglasses, Sunglasses and Contact Lenses</p>
          <div className="app-links">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play Store" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="https://static.lenskart.com/media/desktop/img/app-store.svg" />
            </a>
          </div>
        </div>
        <div className="footer-section footer-social">
          <p>Version 1.0.0 | Follow Us</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import React from 'react';
// import './Footer.css';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h3>Services</h3>
//           <a href="#">Store Locator</a>
//           <a href="#">Buying Guide</a>
//           <a href="#">Frame Size</a>
//         </div>
//         <div className="footer-section about">
//           <h3>About Us</h3>
//           <a href="#">We Are Hiring</a>
//           <a href="#">Refer And Earn</a>
//           <a href="#">About us</a>
//           <a href="#">Lenskart Coupons</a>
//         </div>
//         <div className="footer-section help">
//           <h3>Help</h3>
//           <a href="#">FAQ's</a>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; 2024 EyePlus. All rights reserved.</p>
//         <div className="footer-socials">
//           <a href="#"><i className="fab fa-facebook-f"></i></a>
//           <a href="#"><i className="fab fa-twitter"></i></a>
//           <a href="#"><i className="fab fa-instagram"></i></a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
