// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './SignInSignUpPopup.css';
// import axios from 'axios';

// const SignInSignUpPopup = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let isValid = true;
//     let newErrors = {};

//     Object.keys(formData).forEach(key => {
//       if (formData[key] === '') {
//         newErrors[key] = 'Please fill it';
//         isValid = false;
//       }
//     });

//     setErrors(newErrors);

//     if (isValid) {
//       try {
//         const response = await axios.post('http://localhost:9001/login', formData);
//         console.log('User signed in:', response.data);
//         alert('Sign-in successful');
//         onClose();
//         navigate('/');
//       } catch (error) {
//         console.error('There was an error signing in!', error);
//         alert('Sign-in failed: ' + (error.response?.data || 'An unexpected error occurred'));
//       }
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-button" onClick={onClose}>X</button>
//         <div className="popup-header">
//           <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
//           <h2>Sign In</h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <label>
//             username:
//             <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} />
//             {errors.username && <p className="error">{errors.username}</p>}
//           </label>
//           <label>
//             Password:
//             <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
//             {errors.password && <p className="error">{errors.password}</p>}
//           </label>
//           <button type="submit">Sign In</button>
//         </form>
//         <p>New member? <Link to="/create-account">Create an Account</Link>or <Link to="/adminlogin">Admin</Link></p>
//       </div>
//     </div>
//   );
// };

// export default SignInSignUpPopup;



















import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignInSignUpPopup.css';
import axios from 'axios';

const SignInSignUpPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = {};

    Object.keys(formData).forEach(key => {
      if (formData[key] === '') {
        newErrors[key] = 'Please fill it';
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      try {
        const response = await axios.post('http://localhost:9001/api/login', formData);
        const user = response.data;
        sessionStorage.setItem('user', JSON.stringify(user));
        alert('Sign-in successful');
        onClose();
        navigate('/');
      } catch (error) {
        console.error('There was an error signing in!', error);
        alert('Sign-in failed: ' + (error.response?.data || 'An unexpected error occurred'));
      }
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="popup-header">
          <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
          <h2>Sign In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" placeholder="Enter username" value={formData.username} onChange={handleChange} />
            {errors.username && <p className="error">{errors.username}</p>}
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} />
            {errors.password && <p className="error">{errors.password}</p>}
          </label>
          <button type="submit">Sign In</button>
        </form>
        <p>New member? <Link to="/create-account">Create an Account</Link> or <Link to="/adminlogin">Admin</Link></p>
      </div>
    </div>
  );
};

export default SignInSignUpPopup;
