

import React from 'react';

function StatusCards() {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return 'bi-check-circle-fill text-success';
      case 'Pending':
        return 'bi-hourglass-split text-warning';
      case 'Failed':
        return 'bi-x-circle-fill text-danger';
      default:
        return 'bi-question-circle-fill text-secondary';
    }
  };

  const data = [
    { label: 'Current Semester', value: '6th' },
    { label: 'Registration Status', status: 'Completed' },
    { label: 'Payment Status', status: 'Pending' },
    { label: 'Current CGPA', value: '7.52' }
  ];

  return (
    <div className="row g-3 mb-3">
      {data.map((item, index) => (
        <div className="col-6 col-md-3 text-center" key={index}>
          <div className="border rounded p-3 bg-light">
            {item.status ? (
              <i className={`bi ${getStatusIcon(item.status)} fs-4`}></i>
            ) : (
              <h5>{item.value}</h5>
            )}
            <small className="d-block mt-1">{item.label}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatusCards;
