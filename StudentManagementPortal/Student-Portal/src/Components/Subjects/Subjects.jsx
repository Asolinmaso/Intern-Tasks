import React from "react";
import Header from "../Student-Section/Header";
import { Container, Row, Col } from 'react-bootstrap';
import './Subjects.css';
import { useNavigate } from 'react-router-dom';

function Subjects() {
  const navigate = useNavigate();

  const returnDash = () => {
   
    navigate('/student-dashboard');
  };
  return (
    <div className="container-fluid py-3" >
      <div className="bg-white rounded shadow p-4">
     <Header />
    <div className="p-3 border rounded text-center bg-white shadow-sm profile-landscape">
        <Container>
      <Row>
        <Col sm={6}>
        <ol className="left-details">
            <li>Name: Prem Kumar</li>
            <li>Roll: 200XXXXXX </li>
            <li>Course: B.Tech</li>
            <li>Batch: 2020-24</li>
            <li>Branch: CSE</li>
        </ol>
        </Col>
        <Col sm={6}>
        <ol className="right-details">
          <li><h5>Registration Status  </h5></li>
          <li>Current Semester: 6th (2023 Spring)  </li>
          <li>Fee Payment: Completed </li>
          <li>Active Backlog: 0 </li>
          <li>Current Registration Status: Incomplete </li>
        </ol>
        </Col>
      </Row>
      </Container>
    </div>


    <div className="p-3 border rounded  bg-white shadow-sm">
      <h4>Complete your Registration:</h4>
      <div className="Semester-Details">
        <Container className="mb-3 mt-3  justify-content-center align-items-center">
      <Row className="sem">
        <Col sm={4} >
        <h6>Choose Semester:</h6>
        </Col>
        <Col sm={6}>
        <select>
          <option>7th Semester (2023 - 24 Autumn)</option>
          <option>6th Semester (2023 Spring)</option>
        </select>
        </Col>
      </Row>
      </Container>
      </div>

      <div className="Subjects-Details">
        <Container>
      <Row>
        <Col sm={4}><h6>Electives Subjects:<br /><small>(Choose Priority Wise)</small></h6></Col>
        <Col sm={2}><select><option>A. Choose</option></select></Col>
        <Col sm={2}><select><option>B. Choose</option></select></Col>
        <Col sm={2}><select><option>C. Choose</option></select></Col>
        <Col sm={2}><select><option>D. Choose</option></select></Col>

      </Row>
      </Container>
      </div>


      <div className="Minor-Details">
        <Container>
      <Row>
        <Col sm={4}><h6>Apply for Minor:</h6></Col>
        <Col sm={2}><select><option>A. Choose</option></select></Col>
        <Col sm={2}><select><option>B. Choose</option></select></Col>
        <Col sm={2}><select><option>C. Choose</option></select></Col>
        <Col sm={2}></Col>
      </Row>
      </Container>
      </div>


      <div className="Submit">
        <Container>
      <Row>
        <Col sm={8}>
         <p className="disclaimer">
        *By clicking on submit button you agree that all the information provided by you is True.
        <br />
        If it's found to be false your registration will not be considered.
      </p>
        </Col>
        <Col sm={4}><button className="submit-btn" onClick={returnDash}>Submit Now</button></Col>
      </Row>
      </Container>
      </div>
 
    </div>



    </div>
    </div>
  );
}
export default Subjects;