// StudentDashboard.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentDashboard.css';
import Header from './Components/Student-Section/Header';
import ProfileCard from './Components/Student-Section/ProfileCard';
import StatusCards from './Components/Student-Section/StatusCards';
import ActionCards from './Components/Student-Section/ActionCards';


function StudentDashboard() {

  
  return (
    <div className="container-fluid py-3" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="bg-white rounded shadow p-4">
        <Header />
        <div className="row g-4">
          <div className="col-md-4">
            <ProfileCard studentEmail="student@iitb.com" />

          </div>
          <div className="col-md-8">
            <StatusCards />
            <ActionCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
