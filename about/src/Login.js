import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Del5 from '../src/Assets/eye.gif';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <p>Doesn't have an account yet? <Link to="signup">Sign Up</Link></p>
                <form>
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter 6 characters or more" />
                    <div className="options">
                        <div className="remember-me">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit">LOGIN</button>
                    <div className="or-login">
                        <p>or login with</p>
                        <button className="google">Google</button>
                        <button className="facebook">Facebook</button>
                    </div>
                </form>
            </div>
            <div className="login-image">
                <img src={Del5} alt="Login illustration" />
            </div>
        </div>
    );
};

export default Login;
