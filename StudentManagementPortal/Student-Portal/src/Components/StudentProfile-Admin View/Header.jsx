import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/university-of-vir'; 

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.clear();
    sessionStorage.clear();

    
    navigate('/login'); 
  };

  const handleSupportClick = (e) => {
    e.preventDefault();
    alert('For support, contact: support@iiitbh.ac.in');
  };

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
      <div className="d-flex align-items-center gap-3">
        <img src={logo} alt="IIIT Bhagalpur Logo" width="40" />
        <div>
          <h6 className="mb-0 fw-bold">Student Section</h6>
          <small className="text-muted">IIIT Bhagalpur</small>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a href="#support" onClick={handleSupportClick} className="text-decoration-none text-dark fw-semibold">
          Help & Support
        </a>
        <button className="btn btn-warning text-white" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}

export default Header;
