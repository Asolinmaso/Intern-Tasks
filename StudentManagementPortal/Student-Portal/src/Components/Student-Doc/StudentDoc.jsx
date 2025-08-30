import React from "react";
import "./StudentDoc.css"; // Import the plain CSS file
import Header from "../Student-Section/Header";

const StudentDoc = () => {
  const latest = [
    { label: "Academic Calendar/Schedule", icon: "📅" },
    { label: "Request for Results/Certificates", icon: "📄" },
    { label: "Institute Fee structure", icon: "📑" },
    { label: "Student Bonafide", icon: "📋" },
  ];

  const forms = [
    "Scholarship Form",
    "Different type of forms 1",
    "Different type of forms 2",
    "Different type of forms 3",
    "Different type of forms 4",
    "Different type of forms 5",
    "Different type of forms, etc.",
  ];

  const documents = [
    "Other documents 1",
    "Other documents 2",
    "Other documents 3",
    "Other documents 4",
    "Other documents 5",
    "Other documents 6",
    "Other documents, etc.",
  ];

  return (
    <div className="student-section">
      {/* Header */}
    <Header />

      {/* Latest */}
      <div className="latest">
        <h2>Latest:</h2>
        <div className="latest-grid">
          {latest.map((item, i) => (
            <div className="latest-card" key={i}>
              <div className="icon">{item.icon}</div>
              <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Forms and Documents */}
      <div className="section-grid">
        <div className="section-box">
          <h3>Forms:</h3>
          <ul>
            {forms.map((form, i) => (
              <li key={i}>{form}</li>
            ))}
          </ul>
        </div>
        <div className="section-box">
          <h3>Documents:</h3>
          <ul>
            {documents.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDoc;
