import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentTable = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const students = Array.from({ length: 25 }, (_, i) => ({
    roll: `20XX00${i + 1}`,
    name: `Student ${i + 1}`,
    course: "B.Tech",
    batch: "2020-24",
    feeStatus: i % 2 === 0 ? "No due" : "Due",
    registration: "Provisional",
    verification: i % 3 === 0 ? "Verified" : "Pending",
  }));

  const totalPages = Math.ceil(students.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const currentStudents = students.slice(start, end);

  const onPrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const onNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="my-3">
      <Table striped bordered hover responsive className="text-center">
        <thead className="table-warning">
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Fee Status</th>
            <th>Registration</th>
            <th>Verification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.batch}</td>
              <td>{student.feeStatus}</td>
              <td>{student.registration}</td>
              <td>{student.verification}</td>
              <td>
                <Link to={`/student/${student.roll}`} className="btn btn-link">
                  Open
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination Footer */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-top">
        <div>
          <Button variant="outline-warning" onClick={onPrevPage} disabled={page === 1}>
            Prev. Page
          </Button>
          <Button
            variant="outline-warning"
            className="ms-2"
            onClick={onNextPage}
            disabled={page === totalPages}
          >
            Next Page &gt;&gt;
          </Button>
        </div>
        <div>
          <small>
            Page {page} of {totalPages}
          </small>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
