import React, { useState } from 'react';
import { Card, Table, Button, Form, Row, Col } from "react-bootstrap";
import { CiFileOn } from "react-icons/ci";

const allPaymentsData = [
  {
    date: '08/02/22',
    amount: 101250,
    type: 'BSCC',
    transactionId: 'UITX 1003343434',
    status: 'Pending',
    receipt: '6-SEM-01.pdf',
    year: '2024-2025',
  },
  {
    date: '08/02/22',
    amount: 101250,
    type: 'BSCC',
    transactionId: 'UITX 1003343434',
    status: 'Verified',
    receipt: '',
    year: '2024-2025',
  },
  {
    date: '08/02/22',
    amount: 101250,
    type: 'Self',
    transactionId: 'UPT 1003343434',
    status: 'Verified',
    receipt: '',
    year: '2023-2024',
  },
];

const PastPayments = () => {
  const [year, setYear] = useState('2025-2026');
  const [paymentType, setPaymentType] = useState('All Payments');
  const [filteredData, setFilteredData] = useState([]);

  const handleYearChange = (e) => setYear(e.target.value);
  const handlePaymentTypeChange = (e) => setPaymentType(e.target.value);

  const handleSearch = () => {
    let filtered = allPaymentsData;

    if (year !== '2025-2026') {
      filtered = filtered.filter((item) => item.year === year);
    }

    if (paymentType === 'Due Payments') {
      filtered = filtered.filter((item) => item.status === 'Pending');
    }

    setFilteredData(filtered);
  };

  return (
    <Card className='p-3 mb-3 shadow-sm'>
      <h5 className='fw-bold'>Past Payments</h5>

      
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select value={year} onChange={handleYearChange} style={{ backgroundColor: 'skyblue' }}>
            <option>2025-2026</option>
            <option>2024-2025</option>
            <option>2023-2024</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={paymentType} onChange={handlePaymentTypeChange} style={{ backgroundColor: 'skyblue' }}>
            <option>All Payments</option>
            <option>Due Payments</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Button variant='warning' className='w-100' onClick={handleSearch}>Search</Button>
        </Col>
      </Row>


      <div className="border border-dark rounded overflow-hidden">
        <Table bordered hover responsive className="mb-0">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Transaction ID</th>
              <th>Verification Status</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#cceeff' }}>
            {filteredData.length > 0 ? (
              filteredData.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.date}</td>
                  <td>{payment.amount.toLocaleString('en-IN')}</td>
                  <td>{payment.type}</td>
                  <td>{payment.transactionId}</td>
                  <td>
                    {payment.status === 'Verified' ? '✅ Verified' : '⏳ Pending'}
                  </td>
                  <td>
                    {payment.receipt ? (
                      <>
                        <CiFileOn className="me-2" />
                        {payment.receipt}
                      </>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No records found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default PastPayments;
