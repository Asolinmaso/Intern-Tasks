import React, { useState } from "react";
import { Container, Card, ListGroup, Button, Row, Col, InputGroup, FormControl, Badge } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilePdf, FaDownload, FaEye, FaSearch } from "react-icons/fa";

function EmployeeDocuments() {
  const [search, setSearch] = useState("");
  const [documents] = useState([
    { id: 1, name: "Offer Letter", fileUrl: "/docs/offer-letter.pdf", type: "PDF", issuedOn: "2023-06-12" },
    { id: 2, name: "Experience Certificate", fileUrl: "/docs/experience-certificate.pdf", type: "PDF", issuedOn: "2024-01-20" },
    { id: 3, name: "Salary Certificate", fileUrl: "/docs/salary-certificate.pdf", type: "PDF", issuedOn: "2024-07-15" },
  ]);

  const filteredDocs = documents.filter(doc => doc.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0 rounded-3">
            <Card.Header as="h4" className="text-center bg-primary text-white py-3 rounded-top">
              📄 My Documents / Letters
            </Card.Header>

            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <FormControl
                  placeholder="Search documents..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>

              <ListGroup variant="flush">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => (
                    <ListGroup.Item
                      key={doc.id}
                      className="d-flex justify-content-between align-items-center py-3"
                    >
                      <div className="d-flex align-items-center">
                        <FaFilePdf className="text-danger me-2 fs-4" />
                        <div>
                          <strong>{doc.name}</strong>
                          <div className="text-muted small">Issued on: {doc.issuedOn}</div>
                        </div>
                      </div>

                      <div>
                        <Badge bg="info" pill className="me-3">{doc.type}</Badge>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                          href={doc.fileUrl}
                          target="_blank"
                        >
                          <FaEye className="me-1" /> View
                        </Button>
                        <Button
                          variant="success"
                          size="sm"
                          href={doc.fileUrl}
                          download
                        >
                          <FaDownload className="me-1" /> Download
                        </Button>
                      </div>
                    </ListGroup.Item>
                  ))
                ) : (
                  <p className="text-center text-muted mt-3">No documents found.</p>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EmployeeDocuments;
