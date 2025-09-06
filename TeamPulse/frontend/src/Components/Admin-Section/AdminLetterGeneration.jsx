import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Table,
} from "react-bootstrap";
import jsPDF from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDownload, FaPrint, FaUserEdit, FaEnvelope } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";

function AdminLetterGeneration() {
  const defaultTemplate = `Date: {Date}\n\nTo,\n{EmployeeName}\n{Designation}\n{Department}\n\nSubject: {LetterType}`;

  const [templateName, setTemplateName] = useState("Default Template");
  const [templateEditor, setTemplateEditor] = useState(defaultTemplate);
  const [letterType, setLetterType] = useState("Offer Letter");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");
  const [letterPreview, setLetterPreview] = useState("");
  const [search, setSearch] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [manualName, setManualName] = useState(""); // manual entry

  const [employees, setEmployees] = useState([
    { id: "E001", name: "Anjali Rao", dept: "HR" },
    { id: "E002", name: "Rahul Sharma", dept: "Engineering" },
    { id: "E003", name: "Priya Menon", dept: "Sales" },
    { id: "E004", name: "Kavya Singh", dept: "Engineering" },
  ]);

  const [selectedEmployees, setSelectedEmployees] = useState([]);

  // Preview for selected employee
  const handleGeneratePreview = (employee) => {
    setSelectedEmployee(employee);
    const filled = templateEditor
      .replace("{EmployeeName}", employee.name)
      .replace("{Designation}", designation || "________")
      .replace("{Department}", employee.dept)
      .replace("{LetterType}", letterType)
      .replace("{Date}", new Date().toLocaleDateString());
    setLetterPreview(filled);
  };

  // Apply for manual entry
  const handleApplyPreviewSingle = () => {
    const newEmployee = {
      id: `E${(employees.length + 1).toString().padStart(3, "0")}`,
      name: manualName.trim() || "Unnamed",
      dept: "General",
    };

    const exists = employees.some((emp) => emp.name === newEmployee.name);
    if (!exists) setEmployees([...employees, newEmployee]);

    const filled = templateEditor
      .replace("{EmployeeName}", newEmployee.name)
      .replace("{Designation}", designation || "________")
      .replace("{Department}", newEmployee.dept)
      .replace("{LetterType}", letterType)
      .replace("{Date}", new Date().toLocaleDateString());

    setSelectedEmployee(newEmployee);
    setLetterPreview(filled);
  };

  // Download from preview
  const handleDownloadDoc = () => {
    if (!letterPreview) return;
    const doc = new jsPDF();
    doc.text(letterPreview, 20, 30);
    doc.save("Letter.pdf");
  };

  // Download directly from employee row
  const handleDownloadForEmployee = (emp) => {
    const filled = templateEditor
      .replace("{EmployeeName}", emp.name)
      .replace("{Designation}", designation || "________")
      .replace("{Department}", emp.dept)
      .replace("{LetterType}", letterType)
      .replace("{Date}", new Date().toLocaleDateString());

    const doc = new jsPDF();
    doc.text(filled, 20, 30);
    doc.save(`${emp.name}_Letter.pdf`);
  };

  // Print preview
  const handlePrintLetter = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`<pre>${letterPreview}</pre>`);
    printWindow.document.close();
    printWindow.print();
  };

  // Bulk Print
  const handleBulkPrint = () => {
    if (selectedEmployees.length === 0)
      return alert("Select at least one employee!");
    selectedEmployees.forEach((emp) => {
      const filled = templateEditor
        .replace("{EmployeeName}", emp.name)
        .replace("{Designation}", designation || "________")
        .replace("{Department}", emp.dept)
        .replace("{LetterType}", letterType)
        .replace("{Date}", new Date().toLocaleDateString());
      const printWindow = window.open("", "_blank");
      printWindow.document.write(`<pre>${filled}</pre>`);
      printWindow.document.close();
      printWindow.print();
    });
  };

  // Bulk Email (dummy)
  const handleBulkEmail = () => {
    if (selectedEmployees.length === 0)
      return alert("Select at least one employee!");
    alert(
      `Emails sent to: ${selectedEmployees.map((e) => e.name).join(", ")}`
    );
  };

  const toggleSelectEmployee = (emp) => {
    if (selectedEmployees.includes(emp)) {
      setSelectedEmployees(selectedEmployees.filter((e) => e !== emp));
    } else {
      setSelectedEmployees([...selectedEmployees, emp]);
    }
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.dept.toLowerCase().includes(search.toLowerCase()) ||
      emp.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="d-flex"
      style={{ marginLeft: "250px", background: "#f4f7ff" }}
    >
      <AdminSidebar />
      <Container fluid className="p-4">
        <h3 className="mb-4 text-primary fw-bold">
          Letter Generation — Admin
        </h3>

        <Row>
          {/* LEFT SECTION */}
          <Col md={7}>
            {/* TEMPLATE MANAGEMENT */}
            <Card className="mb-4 shadow-sm rounded-4 border-0">
              <Card.Header className="bg-info text-white fw-bold">
                Template Management
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Template Name</Form.Label>
                  <Form.Control
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Upload Template (plain text)</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                      const fileReader = new FileReader();
                      fileReader.onload = (ev) =>
                        setTemplateEditor(ev.target.result);
                      fileReader.readAsText(e.target.files[0]);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Template Editor</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={templateEditor}
                    onChange={(e) => setTemplateEditor(e.target.value)}
                    className="border-info"
                  />
                </Form.Group>

                {/* Manual Name Input */}
                <Form.Group className="mb-3">
                  <Form.Label>Employee Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter employee name"
                    value={manualName}
                    onChange={(e) => setManualName(e.target.value)}
                  />
                </Form.Group>

                <Button
                  size="sm"
                  variant="primary"
                  className="d-flex align-items-center gap-2"
                  onClick={handleApplyPreviewSingle}
                >
                  <FaUserEdit /> Apply & Preview
                </Button>
              </Card.Body>
            </Card>

            {/* LETTER PREVIEW */}
            <Card className="shadow-sm rounded-4 border-0">
              <Card.Header className="bg-info text-white fw-bold">
                Letter Preview
              </Card.Header>
              <Card.Body>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={letterPreview}
                  onChange={(e) => setLetterPreview(e.target.value)}
                  placeholder="Select an employee to generate preview"
                  style={{
                    fontFamily: "monospace",
                    backgroundColor: "#fefefe",
                  }}
                />
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT SECTION */}
          <Col md={5}>
            {/* EMPLOYEE SELECTION */}
            <Card className="mb-4 shadow-sm rounded-4 border-0">
              <Card.Header className="bg-info text-white fw-bold">
                Employee Selection
              </Card.Header>
              <Card.Body>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Search by ID, name or department"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </InputGroup>
                <Table striped bordered hover responsive className="rounded">
                  <thead className="table-primary">
                    <tr>
                      <th>Select</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Dept</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((emp) => (
                      <tr key={emp.id}>
                        <td>
                          <Form.Check
                            type="checkbox"
                            checked={selectedEmployees.includes(emp)}
                            onChange={() => toggleSelectEmployee(emp)}
                          />
                        </td>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.dept}</td>
                        <td className="d-flex gap-2">
                          <Button
                            size="sm"
                            variant="outline-primary"
                            onClick={() => handleGeneratePreview(emp)}
                          >
                            Select & Preview
                          </Button>
                        
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="d-flex gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="info"
                    onClick={handleBulkPrint}
                    className="d-flex align-items-center gap-2"
                  >
                    <FaPrint /> Bulk Print
                  </Button>
                  <Button
                    size="sm"
                    variant="warning"
                    onClick={handleBulkEmail}
                    className="d-flex align-items-center gap-2"
                  >
                    <FaEnvelope /> Bulk Send Email
                  </Button>
                </div>
              </Card.Body>
            </Card>

           
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminLetterGeneration;
