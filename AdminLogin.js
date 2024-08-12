import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '727822tuit034@skct.edu.in' && password === 'Eye+admins24') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="popup-header">
          <img src="https://static1.lenskart.com/media/desktop/img/DesignStudioIcons/DesktopLoginImage.svg" alt="Sign In Illustration" className="popup-image" />
          <h2>Admin Sign In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Sign In</button>
          {error && <p className="error">{error}</p>}
        </form>
        
      </div>
    </div>
  );
};

export default AdminLogin;
