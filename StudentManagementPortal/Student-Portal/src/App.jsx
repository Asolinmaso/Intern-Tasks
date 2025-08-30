import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLogin from './Components/Admin-Section/AdminLogin';
import StudentDashboard from './StudentDashboard';
import NewLogin from './Components/New-Admission/NewLogin';
import ForgotPassword from './Components/ForgetPassword/ForgetPassword.jsx';

import Subjects from './Components/Subjects/Subjects';
import Bonafied from './Components/Bonafied/Bonafied';
import StudentLogin from './Components/Student-Section/StudentLogin';
import FeePayment from './FeePayment';
import StudentAdmin from './Components/StudentAdmin';
import StudentDoc from './Components/Student-Doc/StudentDoc';
import StudentTable from './Components/Student-Admin Section/StudentTable';
import AdminStudentProfile from './Components/AdminStudentProfile';
import StudentForgotPassword from './Components/ForgetPassword/StudentForgotPassword';
import HelpSupport from './Components/Help&Support/HelpAndSupport.jsx';
import Homepage from './Homepage';

const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/Home" element={<Homepage />} />
        <Route path="/" element={<NewLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/studentlogin" element={<StudentLogin />} />

        <Route path="/student-forgot-password" element={<StudentForgotPassword />} />
        

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/feepayment" element={<FeePayment />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/bonafied" element={<Bonafied />} />
        <Route path="/admin-student-profile" element={<AdminStudentProfile />} />
        <Route path="/student-admin" element={<StudentAdmin />} />
        <Route path="/student-doc" element={<StudentDoc />} />
        <Route path="/admin-login" element={<AdminLogin />} />


        <Route path="/feepayment" element={<FeePayment/>} />
        <Route path="/subjects" element={<Subjects/>} />
        <Route path='/helpandsupport' element ={<HelpSupport/>} />
        
      
    
 
     


      </Routes>
   
    </BrowserRouter>
    
    // <AdminStudentProfile />
    
  );
};

export default App;
