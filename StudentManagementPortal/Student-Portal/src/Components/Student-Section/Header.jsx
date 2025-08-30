import React from 'react';
import logo from '../../assets/Clg-Logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
   const handleLogout = () => {
    
    navigate('/');
  };
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
      <div className="d-flex align-items-center gap-3">
        <img
          src={logo}
          alt="IIIT Bhagalpur Logo"
          width="40"
        />
        <div>
          <h6 className="mb-0 fw-bold">Student Section</h6>
          <small className="text-muted">Manvian Institute</small>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a href="#support" className="text-decoration-none text-dark fw-semibold">Help & Support</a>
           <button className="btn btn-warning text-white" onClick={ handleLogout }>Log out</button>
      </div>
    </div>
  );
}

export default Header;
