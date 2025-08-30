import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
// import './Components/New-Admission/NewLogin.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    if (email === 'rrejoy7@gmail.com') {
      setMessage('A password reset link has been sent to your email.');
    } else {
      setMessage('Email not recognized. Please try again.');
    }
  };

  return (
    <div className="background-section">
      <Container fluid className="vh-100 d-flex align-items-center">
        <Row className="w-100">
          <Col sm={7} className="d-flex justify-content-center text-white">
            <div className="p-5">
              <h1>Forgot your password?</h1>
              <h4>Don't worry, it happens!</h4>
              <p>
                Enter your registered email address and we’ll send you a link to reset your password.
              </p>
            </div>
          </Col>

          <Col sm={5} className="d-flex align-items-center justify-content-center">
            <div className="login-form p-4 shadow w-100">
              <h3 className="text-center mb-3">Reset Password</h3>
              <p className="text-center text-muted mb-3">Enter your email to receive a reset link</p>

              {message && <p className="text-info text-center">{message}</p>}

              <form onSubmit={handleReset}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Admin Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
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
                  <Link to="/" className="text-decoration-none text-muted">Back to Login</Link>
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ForgotPassword;
