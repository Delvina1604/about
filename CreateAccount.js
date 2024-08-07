// import React from 'react';
// import { Link } from 'react-router-dom';
// import './CreateAccount.css';

// const CreateAccount = ({ onClose }) => {
//   return (
//     <div className="create-account-container">
//       <div className="create-account-popup">
//         <button className="close-button" onClick={onClose}>X</button>
//         <h2>Create an Account</h2>
//         <form>
//           <label>
//             First Name*
//             <input type="text" name="firstName" required />
//           </label>
//           <label>
//             Last Name*
//             <input type="text" name="lastName" required />
//           </label>
//           <label>
//             +91 Mobile*
//             <input type="text" name="mobile" required />
//           </label>
//           <label>
//             Email*
//             <input type="email" name="email" required />
//           </label>
//           <label>
//             Password*
//             <input type="password" name="password" required />
//           </label>
//           <label>
//             Got a Referral Code? (Optional)
//             <input type="text" name="referral" />
//           </label>
//           <label>
//             <input type="checkbox" name="whatsapp" />
//             Get updates on WhatsApp
//           </label>
//           <button type="submit">Create an Account</button>
//         </form>
//         <p>By creating this account, you agree to our <a href="#">Privacy Policy</a></p>
//         <p>Have an account? <Link to="/signin">Sign In</Link></p>
//       </div>
//     </div>
//   );
// };

// export default CreateAccount;
import React from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = ({ onClose }) => {
  return (
    <div className="create-account-container">
      <div className="create-account-popup">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Create an Account</h2>
        <form>
          <label>
            First Name*
            <input type="text" name="firstName" required />
          </label>
          {/* <label>
            Last Name*
            <input type="text" name="lastName" required />
          </label> */}
          {/* <label>
            +91 Mobile*
            <input type="text" name="mobile" required />
          </label> */}
          <label>
            Email*
            <input type="email" name="email" required />
          </label>
          <label>
            Password*
            <input type="password" name="password" required />
          </label>
          {/* <label>
            Got a Referral Code? (Optional)
            <input type="text" name="referral" />
          </label> */}
          <label>
            <input type="checkbox" name="whatsapp" />
            Get updates on WhatsApp
          </label>
          <button type="submit">Create an Account</button>
        </form>
        <p>By creating this account, you agree to our <a href="#">Privacy Policy</a></p>
        <p>Have an account? <Link to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default CreateAccount;
