// // // // // SignInSignUpPopup.js
// // // // import React from 'react';
// // // // import './SignInSignUpPopup.css';

// // // // const SignInSignUpPopup = ({ onClose }) => {
// // // //   return (
// // // //     <div className="popup-overlay">
// // // //       <div className="popup-content">
// // // //         <button className="close-button" onClick={onClose}>X</button>
// // // //         <div className="popup-header">
// // // //           <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
// // // //           <h2>Sign In</h2>
// // // //         </div>
// // // //         <form>
// // // //           <label>
// // // //             Mobile / Email:
// // // //             <input type="text" name="email" placeholder="Enter email or mobile number" />
// // // //           </label>
// // // //           <label>
// // // //             Password
// // // //             <input type="password" placeholder="Enter password" />
// // // //             </label>
// // // //           <button type="submit">Sign In</button>
// // // //         </form>
// // // //         <p>New member? <a href="#">Create an Account</a></p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignInSignUpPopup;
// // // // SignInSignUpPopup.js
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import './SignInSignUpPopup.css';

// // // const SignInSignUpPopup = ({ onClose }) => {
// // //   return (
// // //     <div className="popup-overlay">
// // //       <div className="popup-content">
// // //         <button className="close-button" onClick={onClose}>X</button>
// // //         <div className="popup-header">
// // //           <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
// // //           <h2>Sign In</h2>
// // //         </div>
// // //         <form>
// // //           <label>
// // //             Mobile / Email:
// // //             <input type="text" name="email" />
// // //           </label>
// // //           <label>
// // //              Password
// // //            <input type="password" placeholder="Enter password" />
// // //            </label>
// // //           <button type="submit">Sign In</button>
// // //         </form>
// // //         <p>New member? <Link to="/create-account">Create an Account</Link></p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignInSignUpPopup;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import './SignInSignUpPopup.css';

// // const SignInSignUpPopup = ({ onClose }) => {
// //   return (
// //     <div className="popup-overlay">
// //       <div className="popup-content">
// //         <button className="close-button" onClick={onClose}>X</button>
// //         <div className="popup-header">
// //           <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
// //           <h2>Sign In</h2>
// //         </div>
// //         <form>
// //         <label>
// //             Mobile / Email:
// //             <input type="text" name="email" placeholder="Enter email or mobile number" />
// //           </label>
// //           <label>
// //              Password
// //            <input type="password" placeholder="Enter password" />
// //            </label>
// //           <button type="submit">Sign In</button>
// //         </form>
// //         <p>New member? <Link to="/create-account">Create an Account</Link></p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignInSignUpPopup;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './SignInSignUpPopup.css';

// const SignInSignUpPopup = ({ onClose }) => {
//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-button" onClick={onClose}>X</button>
//         <div className="popup-header">
//           <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
//           <h2>Sign In</h2>
//         </div>
//         <form>
//         <label>
//              Mobile / Email:
//              <input type="text" name="email" placeholder="Enter email or mobile number" />
//            </label>
//            <label>
//               Password
//             <input type="password" placeholder="Enter password" />
//            </label>
//           <button type="submit">Sign In</button>
//         </form>
//         <p>New member? <Link to="/create-account">Create an Account</Link></p>
//       </div>
//     </div>
//   );
// };

// export default SignInSignUpPopup;
import React from 'react';
import { Link } from 'react-router-dom';
import './SignInSignUpPopup.css';

const SignInSignUpPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="popup-header">
          <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
          <h2>Sign In</h2>
        </div>
        <form>
        <label>
            Mobile / Email:
             <input type="text" name="email" placeholder="Enter email or mobile number" />
           </label>
           <label>
              Password
            <input type="password" placeholder="Enter password" />
            </label>
          <button type="submit">Sign In</button>
        </form>
        <p>New member? <Link to="/create-account">Create an Account</Link></p>
      </div>
    </div>
  );
};

export default SignInSignUpPopup;
