
import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './CreateAccount.css';

import axios from 'axios';

const CreateAccount = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    try {
        const response = await axios.post('http://localhost:9001/api/reg', formData);
        console.log('User registered:', response.data);
        alert('Registration successful');
        onClose();
        navigate('/');

    } catch (error) {
        console.error('There was an error registering the user!', error);
        alert('Registration failed');
    }

};

  return (
    <div className="create-account-container">
      <div className="create-account-popup">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name*
            <input type="text" name="username" required value={formData.username} onChange={handleChange} />
          </label>
         
          <label>
            Email*
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Password*
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
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
