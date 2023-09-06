import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed using `npm install axios`
import '../App.css';
import { Link } from 'react-router-dom';

function Login() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [name, setName] = useState('');

  const toggleForm = () => {
    setIsSignUpActive((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const response = await axios.get('/api/login', { email, password });
      const { token } = response.data;
      setToken(token);
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('token', token); // Store token in localStorage (not secure)
      // You should implement a more secure way to store tokens, such as using HttpOnly cookies
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
    
      const response = await axios.post('http://localhost:5000/api/signup', { email, password, name });
      const { token } = response.data;
      setToken(token);
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('token', token); // Store token in localStorage (not secure)
      // You should implement a more secure way to store tokens, such as using HttpOnly cookies
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div
      style={{
    
        backgroundSize: '100%',
        backgroundColor: 'black',
        position: 'relative',
        height: '723px',
      }}
    >
      <div
        style={{ width: '100%', }}
        className={`container5 ${isSignUpActive ? 'right-panel-active' : ''}`}
        id="container5"
      >
        <div className="form2-container5 sign-up-container5">
          {/* Signup Form */}
          <form className="form2" action="#">
            <h1>Create Account</h1>
            <div className="social-container5">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input 
             type="text"
             placeholder="Name"
             value={name}
             onChange={(e) => setName(e.target.value)}
             />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="SignUp" onClick={handleSignup}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container5 sign-in-container5">
          {/* Login Form */}
          <form className="form2">
            <h1>Sign in</h1>
            <div className="social-container5">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forgot your password?</a>
            <Link to="/form">
      <button type="button" className="SignUp">
        Sign In
      </button>
    </Link>
          </form>
        </div>
        <div className="overlay-container5">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="SignUp ghost" onClick={toggleForm} id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="SignUp ghost" onClick={toggleForm} id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


