import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const StudentSearch = () => {
  return (
    <Card className="p-4 my-3 shadow-sm">
      <h5 className="mb-4 fw-bold">Search for Students</h5>
      <hr />
      <h5 className="mb-4">Search By List</h5>

      <Row className="g-3">
        <Col md={3}>
          <Form.Select>
            <option>Select Course</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Select>
            <option>Select Batch</option>
            <option>2020</option>
            <option>2021</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Select>
            <option>Select Branch</option>
            <option>CSE</option>
            <option>ECE</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Button variant="warning" className="w-100">
            Search <FaSearch className="ms-1" />
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
      <h5 className="mb-4">Apply Filters</h5>
        <Col>
          <Form.Select>
            <option>Payment Status</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select>
            <option>Reg. Status</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select>
            <option>Verification</option>
          </Form.Select>
        </Col>
        <Col  md={3}>
          <Button  variant="warning" className="w-100">Apply</Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control placeholder="Enter Roll Number" />
        </Col>
        <Col>
          <Form.Control placeholder="Name (Auto)" />
        </Col>
        <Col>
          <Form.Control placeholder="Father’s Name" />
        </Col>
        <Col>
          <Button variant="warning" className="w-100">Apply</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default StudentSearch;
