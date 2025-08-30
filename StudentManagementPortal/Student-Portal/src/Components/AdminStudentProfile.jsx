import React, { useRef } from 'react';
import Header from './Student-Admin Section/Header';
import SpecificSearch from './StudentProfile-Admin View/SpecificSearch';
import { Container, Row, Col } from 'react-bootstrap';
import ContactInfo from './StudentProfile-Admin View/ContactInfo';
import PaymentSummary from './StudentProfile-Admin View/PaymentSummary';
import Bonafide from './Bonafied/Bonafied';

const AdminStudentProfile = () => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Registration Slip</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            @media print {
              body {
                -webkit-print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <>
      <Container fluid className='mt-4'>
        <Header />
        <Row>
          <Col md={8}>
            {/* Only this part will be printed */}
            <div ref={printRef}>
              <Bonafide />
            </div>
          </Col>

          <Col>
            <SpecificSearch />
            <ContactInfo />
            <br />
            <button className="btn btn-warning" onClick={handlePrint}>
              Print Registration Slip
            </button>
          </Col>
        </Row>
      </Container>
      <PaymentSummary />
    </>
  );
};

export default AdminStudentProfile;
