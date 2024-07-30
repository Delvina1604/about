import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Testimonial from './Testimonial';
import './CreateAccount.css';

function CreateAccount() {
  const [accountType, setAccountType] = useState('candidate');

  return (
    <div className="create-account-container">
      <div className="form-container">
        <h1>Create Account</h1>
        <div className="account-type">
          <button 
            className={accountType === 'candidate' ? 'active' : ''}
            onClick={() => setAccountType('candidate')}
          >
            Candidate
          </button>
          <button 
            className={accountType === 'employer' ? 'active' : ''}
            onClick={() => setAccountType('employer')}
          >
            Employer
          </button>
        </div>
        <LoginForm />
      </div>
      <Testimonial />
    </div>
  );
}

export default CreateAccount;
