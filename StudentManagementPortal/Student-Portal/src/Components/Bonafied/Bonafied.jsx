import React from "react";
import "./Bonafied.css"; 

const Bonafide = () => {
  const studentInfo = {
    name: "Prem Kumar",
    roll: "200XXXX",
    program: "B.Tech",
    branch: "CSE",
    semester: "VI",
    batch: "2020-24",
    type: "Regular",
    backlog: 0,
  };

  const courses = [
    { code: "CS304", name: "Compiler Design", l: 3, t: 0, p: 0, c: 3, type: "Compulsory" },
    { code: "CS305", name: "Computer Networks", l: 3, t: 0, p: 0, c: 3, type: "Compulsory" },
    { code: "CS306", name: "Computer Graphics", l: 2, t: 0, p: 2, c: 4, type: "Compulsory" },
    { code: "CS307", name: "Machine Learning", l: 3, t: 0, p: 0, c: 3, type: "Compulsory" },
    { code: "ME306", name: "Environmental Sciences & Green Tech", l: 3, t: 0, p: 0, c: 3, type: "Compulsory" },
    { code: "CS312", name: "Compiler Design LAB", l: 0, t: 0, p: 2, c: 2, type: "Compulsory" },
    { code: "CS313", name: "Computer Networks LAB", l: 0, t: 0, p: 2, c: 2, type: "Compulsory" },
    { code: "CS314", name: "Machine Learning LAB", l: 0, t: 0, p: 2, c: 2, type: "Compulsory" },
    { code: "N/A", name: "Elective-I", l: 3, t: 0, p: 0, c: 3, type: "Elective" },
  ];

  const fees = [
    { type: "Tuition Fee", amount: "₹ 90,000.00" },
    { type: "Other Institute Fee", amount: "₹ 11,250.00" },
    { type: "Admission/Convocation Fee", amount: "N/A" },
    { type: "Fine", amount: "0.00" },
  ];

  return (
    <div className="course-registration border p-4 bg-white shadow rounded">
      <header className="text-center mb-3">
        <h5>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY BHAGALPUR</h5>
        <p>(An Institute of National Importance under Act of Parliament)</p>
        <h6>Course Registration (Student Copy): 2023-24 (Autumn)</h6>
      </header>

      <div className="student-info mb-3 d-flex justify-content-between">
        <div>
          <p><strong>Name:</strong> {studentInfo.name}</p>
          <p><strong>Program:</strong> {studentInfo.program}</p>
          <p><strong>Branch:</strong> {studentInfo.branch}</p>
          <p><strong>Type:</strong> {studentInfo.type}</p>
        </div>
        <div>
          <p><strong>Roll:</strong> {studentInfo.roll}</p>
          <p><strong>Batch:</strong> {studentInfo.batch}</p>
          <p><strong>Semester:</strong> {studentInfo.semester}</p>
          <p><strong>Active Backlog:</strong> {studentInfo.backlog}</p>
        </div>
        <img src="src/assets/7070fce3-5742-4554-b5a2-2071a4c61fdb.jpg" alt="student" height="100" />
      </div>

      <table className="table table-bordered text-center small">
        <thead className="table-light">
          <tr>
            <th>S.N</th>
            <th>Code</th>
            <th>Course Name</th>
            <th>L</th>
            <th>T</th>
            <th>P</th>
            <th>C</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{course.code}</td>
              <td>{course.name}</td>
              <td>{course.l}</td>
              <td>{course.t}</td>
              <td>{course.p}</td>
              <td>{course.c}</td>
              <td>{course.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-end"><strong>Total Credits:</strong> 24</p>

      <h6 className="mt-4">Fee Details</h6>
      <table className="table table-bordered small">
        <thead className="table-light">
          <tr>
            <th>S.N</th>
            <th>For</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{fee.type}</td>
              <td>{fee.amount}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}><strong>Total</strong></td>
            <td><strong>₹ 1,01,250.00</strong></td>
          </tr>
        </tbody>
      </table>

      <div className="d-flex justify-content-between mt-4 small">
        <p><strong>Registration Status:</strong> Complete ✓</p>
        <p><strong>Payment Status:</strong> Verified ✓</p>
      </div>

      <div className="d-flex justify-content-between mt-5">
        <p>Signature of Faculty Advisor</p>
        <p>Signature of F/I Academic UG/PG</p>
      </div>
    </div>
  );
};

export default Bonafide;
