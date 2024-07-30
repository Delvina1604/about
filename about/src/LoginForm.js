import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-form">
      <div className="social-login">
        <button className="linkedin">LinkedIn</button>
        <button className="google">Google</button>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="Full name" />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Email address" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" placeholder="Enter password again" />
      </div>
      <button className="create-account-button">Create Account</button>
      <p className="login-link">Already have an account? <a href="#">Login</a></p>
    </div>
  );
}

export default LoginForm;
