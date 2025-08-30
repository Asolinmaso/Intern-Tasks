import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const StudentForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    if (email.trim().toLowerCase().endsWith('@iiitbh.ac.in')) {
      setMessage(' A password reset link has been sent to your institute email.');
    } else {
      setMessage(' Invalid email. Please enter your institute email ID.');
    }
  };

  return (
    <div className="container-2 d-flex flex-column align-items-center justify-content-center">
      <div className="login-form p-4 flex-grow-1">
        <h5 className="d-flex flex-column align-items-center justify-content-center">Reset Password</h5>
        <p className="d-flex flex-column align-items-center justify-content-center text-muted">
          Enter your registered IIIT Bhagalpur email address
        </p>

        {message && (
          <div className="alert alert-info text-center py-2" role="alert">
            {message}
          </div>
        )}

        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Institute Email ID</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="e.g., student@iiitbh.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold mb-3">
            Send Reset Link
          </button>
        </form>

        <div className="text-center">
          <small>
            Back to login?{' '}
            <Link to="/studentlogin" className="fw-bold text-decoration-none">Click here</Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default StudentForgotPassword;
