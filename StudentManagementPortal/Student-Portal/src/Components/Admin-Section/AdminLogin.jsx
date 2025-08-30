import React, { useState } from 'react';
import './AdminLogin.css';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();


  const ADMIN_ID = 'admin@iiitb.com';
  const ADMIN_PASS = 'admin123';


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_ID && password === ADMIN_PASS) {
      navigate('/student-dashboard'); 
    } else {
      setError('Invalid email or password'); 
    }
  };

  return (
    <div className="container-1 d-flex flex-column align-items-center justify-content-center">
      <div className="login-form p-4 flex-grow-1">
        <h5 className='d-flex flex-column align-items-center justify-content-center'>Admin Login</h5>
        <p className='d-flex flex-column align-items-center justify-content-center'>Welcome onboard with us!</p>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Admin Email</label>
            <input
              type="email"
              className='form-control'
              placeholder='Enter your username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className='form-label'>Password</label>
            <input
              type="password"
              className='form-control'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='text-end mb-3'>
            <a href="#" className='text-decoration-none small text-muted'>Forgot Password</a>
          </div>

          <button type="submit" className='btn btn-warning w-100 fw-semibold'>
            LogIn as Admin
          </button>
        </form>

        <div>
          <small className='d-flex flex-column align-items-center justify-content-center'>
            Are You a student? <Link to="/studentlogin" className='fw-bold text-decoration-none'>Login as a student</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
