import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-wrapper">
          <h1>Login</h1>
          <p className="login-subtitle">Login to access your account</p>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john.doe@gmail.com" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="................"
                />
                <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    role="button"
                    tabIndex={0}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark">Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot Password</a>
            </div>

            <button type="submit" className="login-btn">Login</button>

            <div className="signup-link">
              Don't have an account? <a href="#">Sign up</a>
            </div>

            <div className="divider">
              <span>Or login with</span>
            </div>

            <div className="social-login">
              <button type="button" className="social-btn"><FaFacebook /></button>
              <button type="button" className="social-btn"><FaGoogle /></button>
              <button type="button" className="social-btn"><FaApple /></button>
            </div>
          </form>
        </div>
      </div>
      <div className="login-right">
        <div className="brand-content">
            <h2>Start Your Journey With Us</h2>
        </div>
        <div className="brand-logos">
             {/* Placeholders for logos if needed */}
        </div>
      </div>
    </div>
  );
};

export default Login;
