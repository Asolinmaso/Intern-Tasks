import React, { useState } from 'react';
import { Accordion, Container, Form, Row, Col, Card } from 'react-bootstrap';

const HelpSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    { question: 'How to reset password?', answer: 'Go to settings and click reset password.' },
    { question: 'How to check my grades?', answer: 'Go to Dashboard > Grades.' },
    { question: 'How to Pay Fees?', answer: 'Check your Student Profile' },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmailClick = () => {
    window.open('mailto:akshayarathinam9@gmail.com');
  };

  const handlePhoneClick = () => {
    window.open('tel:+919884585959');
  };

  return (
    <Container
      fluid
      className="mt-0 p-5"
      style={{
        backgroundImage: 'url("/public/Background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <Card className="p-4 shadow-lg" style={{ maxWidth: '800px', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
        <h2 className="text-center text-primary mb-4">📘 Help & Support</h2>

        <Form.Control
          type="text"
          placeholder="🔍 Search FAQ..."
          className="mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Accordion defaultActiveKey="0">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <p className="text-muted">No matching FAQs found.</p>
          )}
        </Accordion>

        <Row className="mt-5">
          <Col md={6}>
            <h5>
              📩 Email:{' '}
              <span
                style={{ color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={handleEmailClick}
              >
                akshayarathinam9@gmail.com
              </span>
            </h5>
          </Col>
          <Col md={6}>
            <h5>
              📞 Phone:{' '}
              <span
                style={{ color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}
                onClick={handlePhoneClick}
              >
                +91 9884585959
              </span>
            </h5>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <h6 className="text-secondary">🕒 Available: Mon - Fri | 9:00 AM - 6:00 PM</h6>
        </div>
      </Card>
    </Container>
  );
};

export default HelpSupport;

