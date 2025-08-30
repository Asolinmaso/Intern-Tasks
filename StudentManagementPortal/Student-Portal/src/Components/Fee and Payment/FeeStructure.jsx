import React, { useState } from 'react';
import { Card, Table, Button, Form, Row, Col, Modal } from "react-bootstrap";

const FeeStructure = () => {
  const [selectedYear, setSelectedYear] = useState('3rd Year');
  const [selectedSemester, setSelectedSemester] = useState('6th Semester');

  const [feeDetails, setFeeDetails] = useState({
    tuition: 90000,
    otherInstituteFee: 11250,
    admissionFee: null,
    otherFee: null,
    total: 101250,
  });

  const [showModal, setShowModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const handleSearch = () => {
    if (selectedYear === '1st Year') {
      setFeeDetails({
        tuition: 85000,
        otherInstituteFee: 10000,
        admissionFee: 5000,
        otherFee: 2000,
        total: 102000,
      });
    } else {
      setFeeDetails({
        tuition: 90000,
        otherInstituteFee: 11250,
        admissionFee: null,
        otherFee: null,
        total: 101250,
      });
    }
  };

  const formatCurrency = (amount) =>
    amount !== null ? `₹ ${amount.toLocaleString('en-IN')}.00` : 'N/A';

  const handlePayNow = () => {
    alert(`Payment of ₹ ${feeDetails.total.toLocaleString('en-IN')}.00 initiated.`);
   
  };

  const handleReceiptClick = () => {
    setShowModal(true);
  };

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (uploadedFile) {
      alert(`Receipt "${uploadedFile.name}" uploaded successfully.`);
      setShowModal(false);
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <Card className="p-4 my-3 shadow-sm">
      <h5 className="fw-bold mb-3">Fee Structure</h5>

      
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select value={selectedYear} onChange={handleYearChange} style={{ backgroundColor: 'skyblue' }}>
            <option>3rd Year</option>
            <option>2nd Year</option>
            <option>1st Year</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={selectedSemester} onChange={handleSemesterChange} style={{ backgroundColor: 'skyblue' }}>
            <option>6th Semester</option>
            <option>5th Semester</option>
            <option>4th Semester</option>
            <option>3rd Semester</option>
            <option>2nd Semester</option>
            <option>1st Semester</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Button variant="warning" className="w-100" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>

      
      <div className="border border-dark rounded overflow-hidden mb-3">
        <Table bordered hover className="mb-0">
          <tbody>
            <tr><td><strong>Tuition Fee</strong></td><td>{formatCurrency(feeDetails.tuition)}</td></tr>
            <tr><td><strong>Other Institute Fee</strong></td><td>{formatCurrency(feeDetails.otherInstituteFee)}</td></tr>
            <tr><td><strong>Admission Related Fee</strong></td><td>{formatCurrency(feeDetails.admissionFee)}</td></tr>
            <tr><td><strong>Other Fee</strong></td><td>{formatCurrency(feeDetails.otherFee)}</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>{formatCurrency(feeDetails.total)}</strong></td></tr>
          </tbody>
        </Table>
      </div>

      
      <div className="d-flex justify-content-end gap-2">
        <Button variant="warning" onClick={handlePayNow}>Pay Now</Button>
        <Button variant="outline-warning" onClick={handleReceiptClick}>Receipt Upload</Button>
      </div>

     
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile">
            <Form.Label>Select receipt file (PDF/JPG/PNG)</Form.Label>
            <Form.Control type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default FeeStructure;
