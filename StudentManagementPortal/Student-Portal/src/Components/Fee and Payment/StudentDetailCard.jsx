import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const StudentDetailCard = () => {
  return (
    <Card className="p-4 my-3 shadow-sm">
      <Row>
        {/* Left: Personal Details */}
        <Col md={6}>
          <p><strong>Name:</strong> Prem Kumar</p>
          <p><strong>Roll:</strong> 2000XXXXXX</p>
          <p><strong>Course:</strong> B.Tech</p>
          <p><strong>Batch:</strong> 2020–24</p>
          <p><strong>Branch:</strong> CSE</p>
        </Col>

        {/* Right: Payment Status */}
        <Col md={6} className="border-start ps-4">
          <p className="fw-bold">Payment Status</p>
          <p><strong>Current Semester:</strong> 6th (2023 Spring)</p>
          <p><strong>Current Semester Due:</strong> ₹ 0.00</p>
          <p><strong>Past Due:</strong> ₹ 0.00</p>
          <p><strong>Past Over Due:</strong> ₹ 14,500.00</p>
        </Col>
      </Row>
    </Card>
  );
};

export default StudentDetailCard;
