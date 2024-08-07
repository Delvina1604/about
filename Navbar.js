// // src/components/Navbar.js
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import SignInSignUpPopup from './SignInSignUpPopup';

// const Navbar = () => {
//   const [isPopupVisible, setPopupVisible] = useState(false);

//   const handleSignInClick = () => {
//     setPopupVisible(true);
//   };

//   const closePopup = () => {
//     setPopupVisible(false);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-left">
//           <div className="logo">
//             <Link to="/">
//               <img src="https://t4.ftcdn.net/jpg/03/16/43/69/360_F_316436935_eOzPGb9nQPAs5QMMARwvOmGdskgnz2JT.jpg" alt="logo" />
//             </Link>
//           </div>
//           <input type="text" placeholder="What are you looking for?" className="search-bar" />
//         </div>
//         <div className="navbar-right">
//           <div className="contact-info">
//             <FontAwesomeIcon icon={faPhone} className="phone-icon" />
//             <p>1800-202-4444</p>
//           </div>
//           <div className="nav-links">
//             <Link to="/aboutus">About Us</Link>
//             <a href="#" onClick={handleSignInClick}>Sign In & Sign Up</a>
//             <Link to="/products">Products</Link>
//             <Link to="/contact">Feedback</Link>
//             <Link to="/cart">Cart</Link>
//           </div>
//         </div>
//       </nav>
//       {isPopupVisible && <SignInSignUpPopup onClose={closePopup} />}
//     </>
//   );
// };

// export default Navbar;
// src/components/Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SignInSignUpPopup from './SignInSignUpPopup';

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSignInClick = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <Link to="/">
              <img src="https://t4.ftcdn.net/jpg/03/16/43/69/360_F_316436935_eOzPGb9nQPAs5QMMARwvOmGdskgnz2JT.jpg" alt="logo" />
            </Link>
          </div>
          <input type="text" placeholder="What are you looking for?" className="search-bar" />
        </div>
        <div className="navbar-right">
          <div className="contact-info">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <p>1800-202-4444</p>
          </div>
          <div className="nav-links">
            <Link to="/aboutus">About Us</Link>
            <a href="#" onClick={handleSignInClick}>Sign In & Sign Up</a>
            <Link to="/products">Products</Link>
            <Link to="/contact">Feedback</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </nav>
      {isPopupVisible && <SignInSignUpPopup onClose={closePopup} />}
    </>
  );
};

export default Navbar;
