import React from 'react'
import logo from '../../assets/university-of-virginia-2-logo-png-transparent.png'; 
import { useNavigate } from 'react-router-dom';


const Header = () => {
 const navigate = useNavigate();
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
          <small className="text-muted">IIIT Bhagalpur</small>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
          <a href="/helpandsupport" className="text-decoration-none text-dark fw-semibold">
          Help & Support
        </a>
        <button className="btn btn-warning text-white">Log out</button>
      </div>
    </div>
  )
}

export default Header