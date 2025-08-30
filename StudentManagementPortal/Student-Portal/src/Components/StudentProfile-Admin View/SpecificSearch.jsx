import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Alert } from 'react-bootstrap';

const SpecificSearch = () => {
  const [formData, setFormData] = useState({
    rollNumber: '',
    name: '',
    fatherName: ''
  });

  const [submittedData, setSubmittedData] = useState(null); // For demo display
  const [showAlert, setShowAlert] = useState(false); // For confirmation alert

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform validation here if needed
    if (!formData.rollNumber && !formData.name && !formData.fatherName) {
      alert("Please enter at least one search field.");
      return;
    }

    // This is where you’d perform the search logic
    console.log('Search Triggered with:', formData);

    // Demo feedback
    setSubmittedData(formData);
    setShowAlert(true);

    // Optionally clear form
    // setFormData({ rollNumber: '', name: '', fatherName: '' });
  };

  return ( 
    <Card className='p-4 shadow-sm my-3'>
      <h4 className="mb-3">Specific Search</h4>

      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Col md={4}>
            <Form.Control 
              type='number' 
              placeholder='Enter Roll Number' 
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Form.Control 
              type='text' 
              placeholder='Name (Auto)' 
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <Form.Control 
              type='text' 
              placeholder='Father’s Name' 
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Button variant="warning" type="submit">
          Apply
        </Button>
         </Form>

      {showAlert && submittedData && (
        <Alert variant="success" className="mt-4">
          <strong>Search Applied:</strong><br />
          Roll Number: {submittedData.rollNumber || 'N/A'}<br />
          Name: {submittedData.name || 'N/A'}<br />
          Father’s Name: {submittedData.fatherName || 'N/A'}
        </Alert>
      )}
    </Card>
  );
};

export default SpecificSearch;
