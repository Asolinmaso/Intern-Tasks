import React, { useState } from "react";
import { Table, Button, Card } from "react-bootstrap";

const PaymentSummary = () => {
  const semesters = Array.from({ length: 8 }, (_, i) => `${i + 1}th`);

  // Sample data (can be fetched or passed as props)
  const initialData = semesters.map((sem, index) => ({
    semester: sem,
    sgpa: (7 + Math.random() * 2).toFixed(2),
    tuitionFee: 50000,
    otherFee: 2000,
    fine: index % 3 === 0 ? 500 : 0,
    paid: index < 6 ? 52000 : 20000, // simulate paid up to sem 6
  }));

  const [paymentData, setPaymentData] = useState(initialData);

  // Function to calculate totals
  const calculateSummary = (data) => {
    return data.map((item) => {
      const total = item.tuitionFee + item.otherFee + item.fine;
      const due = Math.max(total - item.paid, 0);
      const overDue = due > 0 && item.semester < "6th" ? due : 0;
      return { ...item, total, due, overDue };
    });
  };

  const updatedData = calculateSummary(paymentData);

  // Report generation placeholder
  const handleGenerateReport = () => {
    alert("Report generation coming soon!");
  };

  return (
    <Card className="p-4 shadow-sm my-4">
      <h5 className="mb-3 text-primary">
        Overall Payment Summary:{" "}
        <span className="fw-bold text-dark">Prem Kumar</span>
        <br />
        <small className="text-muted">Roll: 20XXXXXX | CSE | 2020-24</small>
      </h5>

      <div className="table-responsive">
        <Table striped bordered hover responsive className="text-center">
          <thead className="table-secondary">
            <tr>
              <th>Semester</th>
              <th>SGPA</th>
              <th>Tuition Fee</th>
              <th>Other Fee</th>
              <th>Fine</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Over Due</th>
            </tr>
          </thead>
          <tbody>
            {updatedData.map((row, index) => (
              <tr key={index}>
                <td>{row.semester}</td>
                <td>{row.sgpa}</td>
                <td>₹{row.tuitionFee}</td>
                <td>₹{row.otherFee}</td>
                <td>₹{row.fine}</td>
                <td>₹{row.total}</td>
                <td>₹{row.paid}</td>
                <td className={row.due > 0 ? "text-danger fw-bold" : ""}>
                  ₹{row.due}
                </td>
                <td className={row.overDue > 0 ? "text-danger fw-bold" : ""}>
                  ₹{row.overDue}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="text-end">
        <Button variant="warning" className="mt-3 px-4" onClick={handleGenerateReport}>
          Generate Report
        </Button>
      </div>
    </Card>
  );
};

export default PaymentSummary;
